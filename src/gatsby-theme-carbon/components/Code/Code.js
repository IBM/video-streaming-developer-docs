/*
 * Copy of gatsby-theme-carbon/src/components/Code/Code.js with a single change (isInlineCode, below).
 * The rules disabled here only flag code taken as-is from the theme; keeping it unchanged makes it
 * easy to diff against the theme when upgrading.
 */
/* eslint-disable import/no-extraneous-dependencies, no-param-reassign, react/function-component-definition, react/no-array-index-key */

import React, { useEffect, useState } from 'react';
import { Highlight } from 'prism-react-renderer';
import { ChevronDown, ChevronUp } from '@carbon/react/icons';

import cx from 'classnames';

import { Row } from 'gatsby-theme-carbon/src/components/Grid';
import getTheme from 'gatsby-theme-carbon/src/components/Code/getTheme';

import * as styles from 'gatsby-theme-carbon/src/components/Code/Code.module.scss';

import PathRow from 'gatsby-theme-carbon/src/components/Code/PathRow';
import Sidebar from 'gatsby-theme-carbon/src/components/Code/Sidebar';

import useMetadata from 'gatsby-theme-carbon/src/util/hooks/useMetadata';

export const parseCodeMetaData = (metaData) => {
  // metaData string is of format: path=/directory/file.mdx src=https://gatsby.carbondesignsystem.com showAll wrap
  const result = { path: '', src: '', showAll: false, wrap: null };
  if (!metaData) {
    return result;
  }
  const metaDataObject = metaData.split(' ').reduce((obj, item) => {
    if (!item) {
      return obj;
    }
    const [key, value] = item.split('=');

    // Checking for boolean values coming as string or not coming like in showAll prop
    if (value === 'true' || !value) {
      obj[key] = true;
    } else if (value === 'false') {
      obj[key] = false;
    } else {
      // else setting what is passed after =
      obj[key] = value;
    }
    return obj;
  }, {});

  if (metaDataObject.path) {
    result.path = metaDataObject.path;
  }

  if (metaDataObject.src) {
    result.src = metaDataObject.src;
  }

  if (metaDataObject.showAll) {
    result.showAll = true;
  }

  if (metaDataObject.wrap === true || metaDataObject.wrap === 'true') {
    result.wrap = true;
  } else if (metaDataObject.wrap === false || metaDataObject.wrap === 'false') {
    result.wrap = false;
  }

  return result;
};

const Code = ({ children, className: classNameProp = '', metaData }) => {
  // Initialize from metaData so SSR/first paint already reflects
  // path/src/showAll/wrap (useEffect below keeps them in sync on change).
  const [path, setPath] = useState(() => parseCodeMetaData(metaData).path);
  const [src, setSrc] = useState(() => parseCodeMetaData(metaData).src);
  const [showAll, setShowAll] = useState(() => parseCodeMetaData(metaData).showAll);
  const [wrap, setWrap] = useState(() => parseCodeMetaData(metaData).wrap);
  const [hasMoreThanNineLines, setHasMoreThanNineLines] = useState(false);
  const [shouldShowMore, setShouldShowMore] = useState(false);
  // Inline code has no className (no language) and, unlike a fenced block, its text does not end with
  // a newline. Fenced blocks without a language (e.g. "GET https://...") have no className either.
  // Derive this during render (instead of in an effect) so the server HTML matches the first client
  // render and React can hydrate it.
  const isInlineCode = !classNameProp && !(typeof children === 'string' && children.endsWith('\n'));

  useEffect(() => {
    const parsed = parseCodeMetaData(metaData);
    setPath(parsed.path);
    setSrc(parsed.src);
    setShowAll(parsed.showAll);
    setWrap(parsed.wrap);
  }, [metaData]);

  const { interiorTheme, isCodeWrapEnabled } = useMetadata();
  const shouldWrap = wrap !== null ? wrap : Boolean(isCodeWrapEnabled);
  const language = classNameProp.replace(/language-/, '').replace('mdx', 'jsx');

  const removeTrailingEmptyLine = (lines) => {
    const [lastLine] = lines[lines.length - 1];

    // empty is a boolean property coming inside the lastLine object
    if (lastLine.empty) {
      lines.splice(-1);
      return lines;
    }
    return [...lines];
  };

  const getLines = (lines) => {
    const withoutTrailingEmptyLines = removeTrailingEmptyLine(lines);
    if (withoutTrailingEmptyLines && withoutTrailingEmptyLines.length > 9) {
      setHasMoreThanNineLines(true);
    }
    if (shouldShowMore || showAll) {
      return withoutTrailingEmptyLines;
    }
    return withoutTrailingEmptyLines.slice(0, 9);
  };

  // TODO - remove this once we have a better way of handling inline code. This seems like a hack
  // This might be the result of upgrade of prism-react-renderer.
  if (isInlineCode) {
    return <code>{children}</code>;
  }
  const showToggleButton = hasMoreThanNineLines && !showAll;
  return (
    <Row className={cx(styles.row)}>
      <PathRow src={src} path={path}>
        {children}
      </PathRow>
      <Highlight code={children} language={language} theme={getTheme(interiorTheme)}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div
            className={cx(styles.container, {
              [styles.hasButton]: showToggleButton,
              [styles.wrapContainer]: shouldWrap,
            })}
          >
            <pre
              className={cx(styles.highlight, {
                [styles.sideBarMinHeight]: !path && src,
                [styles.wrap]: shouldWrap,
                [className]: className,
              })}
              style={style}
            >
              {getLines(tokens).map((line, i) => {
                const lineProps = getLineProps({ line, key: i });
                return (
                  <div
                    {...lineProps}
                    key={i}
                    className={cx(lineProps.className, {
                      [styles.wrappedLine]: shouldWrap,
                    })}
                  >
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} key={key} />
                    ))}
                  </div>
                );
              })}
            </pre>
            <Sidebar path={path} src={src}>
              {children}
            </Sidebar>
          </div>
        )}
      </Highlight>
      {showToggleButton && (
        <button
          className={cx(styles.showMoreButton, {
            [styles.dark]: interiorTheme === 'dark',
          })}
          onClick={() => setShouldShowMore(!shouldShowMore)}
          aria-expanded={shouldShowMore}
          aria-label={shouldShowMore ? 'Show less code' : 'Show more code'}
          type="button"
        >
          {shouldShowMore ? (
            <>
              <span>Show less</span>
              <ChevronUp />
            </>
          ) : (
            <>
              <span>Show more</span>
              <ChevronDown />
            </>
          )}
        </button>
      )}
    </Row>
  );
};

export default Code;
