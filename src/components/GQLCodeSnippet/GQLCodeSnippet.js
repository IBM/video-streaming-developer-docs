import React from 'react';
import { Link } from 'gatsby';
import { row, container, highlight } from 'gatsby-theme-carbon/src/components/Code/Code.module.scss';
import { gqlCodeSnippet, dark, link, keyword, attribute, operator, comment, line } from './GQLCodeSnippet.module.scss';

const GQLCodeSnippet = ({ children }) => (
  <div className={`bx--row ${row} ${gqlCodeSnippet}`}>
    <div className={container}>
      <pre className={`${highlight} ${dark}`}>{children}</pre>
    </div>
  </div>
);

export default GQLCodeSnippet;

export function GQLOpen() {
  return <span>{'{'}</span>;
}

export function GQLClose() {
  return <span>{'}'}</span>;
}

export function GQLLine({ children }) {
  return <div className={line}>{children}</div>;
}

export function GQLTab() {
  return <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>;
}

export function GQLName({ children }) {
  return <span>{children}</span>;
}

export function GQLKeyword({ children }) {
  return <span className={keyword}>{children}</span>;
}

export function GQLAttribute({ children }) {
  return <span className={attribute}>{children}</span>;
}

export function GQLComment({ children }) {
  return <span className={comment}>{children}</span>;
}

export function GQLOperator({ children }) {
  return <span className={operator}>{children}</span>;
}

export function GQLLink({ children, href }) {
  return (
    <Link to={href} className={link}>
      {children}
    </Link>
  );
}
