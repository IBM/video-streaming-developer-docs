import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { Row, Column } from 'gatsby-theme-carbon/src/components/Grid';
import { Loading, Button } from 'carbon-components-react';
import { MediaSwitcher } from './Modules/MediaSwitcher';
import { BasicControls, CustomControls, AdvancedControls, FullScreenControls, MultiControls } from './Controls';
import * as styles from './index.module.scss';

const AVAILABLE_CONTROLS = Object.freeze({
  BASIC: 'basic',
  ADVANCED: 'advanced',
  FULLSCREEN: 'fullscreen',
  CUSTOM: 'custom',
  MULTI: 'multi',
});

const BasicEmbed = ({ src, controls = [], dynamic = false, withMediaSwitcher = false } = {}) => {
  const frame = useRef(null);
  const container = useRef(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [viewer, setViewer] = useState(null);
  const [inserted, setInserted] = useState(!dynamic);
  const [fullscreen, setFullscreen] = useState(false);
  const [qualities, setQualities] = useState([]);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [activeLabels, setActiveLabels] = useState([]);
  const [embedDuration, setEmbedDuration] = useState(undefined);
  const [embedProgress, setEmbedProgress] = useState(undefined);
  const [embedContent, setEmbedContent] = useState(undefined);
  const [embedViewers, setEmbedViewers] = useState(undefined);
  const [embedQuality, setEmbedQuality] = useState(undefined);

  const onPlay = () => {
    viewer.callMethod('play');
  };

  const onPause = () => {
    viewer.callMethod('pause');
  };

  const onContentAvailable = () => {
    setReady(true);
  };

  const onLive = () => {
    setActiveLabels((prevLabels) => prevLabels.filter((label) => label !== 'OFFLINE').concat('LIVE'));
  };

  const onOffline = () => {
    setActiveLabels((prevLabels) => prevLabels.filter((label) => label !== 'LIVE').concat('OFFLINE'));
  };

  const onPlaying = (name, status) => {
    setActiveLabels((prevLabels) =>
      status ? prevLabels.concat('PLAYING') : prevLabels.filter((label) => label !== 'PLAYING'),
    );

    setPlaying(status);
  };

  const onFinished = () => {
    setActiveLabels((prevLabels) => prevLabels.filter((label) => label !== 'PLAYING').concat('ENDED'));
  };

  const onQuality = (eventName, newQualities) => {
    setQualities(newQualities);
  };

  const onContent = (eventName, content) => {
    setEmbedContent(content);
  };

  const onDuration = (eventName, newDuration) => {
    setDuration(newDuration);
  };

  const onGetDuration = () => {
    viewer.getProperty('duration', (newDuration) => {
      setEmbedDuration(newDuration);
    });
  };

  const onGetProgress = () => {
    viewer.getProperty('progress', (newProgress) => {
      setEmbedProgress(newProgress);
    });
  };

  const onGetViewers = () => {
    viewer.getProperty('viewers', (viewers) => {
      setEmbedViewers(viewers);
    });
  };

  const onSetVolume = (volume) => {
    viewer.callMethod('volume', volume);
  };

  const onSetSeek = (seek) => {
    viewer.callMethod('seek', seek);
  };

  const onSetQuality = (id) => {
    setEmbedQuality(id);
    viewer.callMethod('quality', id);
  };

  const onMediaChange = (type, id) => {
    setReady(false);
    setPlaying(false);
    setQualities([]);
    setActiveLabels([]);
    setDuration(0);
    setProgress(0);
    setEmbedDuration(undefined);
    setEmbedProgress(undefined);
    setEmbedContent(undefined);
    setEmbedViewers(undefined);
    setEmbedQuality(undefined);
    setFullscreen(undefined);

    viewer.callMethod('load', type, id);
  };

  const onFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setFullscreen(false);
    } else if (container.current) {
      container.current.requestFullscreen();
      setFullscreen(true);
    }
  };

  const isLive = () => {
    return activeLabels.indexOf('LIVE') !== -1;
  };

  const hasControl = (conrol) => {
    return controls.indexOf(conrol) !== -1;
  };

  useEffect(() => {
    if (!frame.current) {
      return;
    }

    (async function () {
      const { default: EmbedAPI } = await import('ustream-embedapi/dist/ustream-embedapi.min.js');
      setViewer(new EmbedAPI(frame.current));
    })();
  }, [frame, inserted]);

  useEffect(() => {
    if (!viewer) {
      return;
    }

    viewer.addListener('live', onLive);
    viewer.addListener('offline', onOffline);
    viewer.addListener('playing', onPlaying);
    viewer.addListener('finished', onFinished);
    viewer.addListener('quality', onQuality);
    viewer.addListener('content', onContent);
    viewer.addListener('duration', onDuration);
    viewer.addListener('contentAvailable', onContentAvailable);

    return () => {
      if (!viewer) {
        return;
      }

      viewer.removeListener('live', onLive);
      viewer.removeListener('offline', onOffline);
      viewer.removeListener('playing', onPlaying);
      viewer.removeListener('finished', onFinished);
      viewer.removeListener('quality', onQuality);
      viewer.removeListener('content', onContent);
      viewer.removeListener('duration', onDuration);
      viewer.removeListener('contentAvailable', onContentAvailable);
    };
  }, [viewer]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!viewer || !playing || !hasControl(AVAILABLE_CONTROLS.CUSTOM)) {
        return;
      }

      viewer.getProperty('progress', (prog) => setProgress(prog));
    }, 200);
    return () => clearInterval(interval);
  }, [viewer, playing]);

  if (!inserted) {
    return <Button onClick={() => setInserted(true)}>Insert embed</Button>;
  }

  const loadingClasses = cx(styles.loader, {
    [styles.active]: !ready,
  });

  return (
    <>
      <Row>
        <Column colLg={8}>
          <div id="Container" ref={container}>
            <div className={styles.responsive}>
              <iframe title="Embed" ref={frame} src={src} className={styles.iframe} allowFullScreen frameBorder="0" />
              <div className={loadingClasses}>
                <Loading active={!ready} />
              </div>
            </div>
            {controls && controls.length > 0 && (
              <div className={styles.toolbox}>
                {hasControl(AVAILABLE_CONTROLS.BASIC) && (
                  <BasicControls onPlay={onPlay} onPause={onPause} activeLabels={activeLabels} ready={ready} />
                )}
                {hasControl(AVAILABLE_CONTROLS.MULTI) && <MultiControls onMediaChange={onMediaChange} ready={ready} />}
                {hasControl(AVAILABLE_CONTROLS.CUSTOM) && (
                  <CustomControls
                    onPlay={onPlay}
                    onPause={onPause}
                    onSeek={onSetSeek}
                    onVolume={onSetVolume}
                    duration={duration}
                    progress={progress}
                    ready={ready}
                  />
                )}
                {hasControl(AVAILABLE_CONTROLS.FULLSCREEN) && (
                  <FullScreenControls onFullScreen={onFullScreen} fullscreen={fullscreen} ready={ready} />
                )}
                {hasControl(AVAILABLE_CONTROLS.ADVANCED) && (
                  <AdvancedControls
                    onGetDuration={onGetDuration}
                    onGetProgress={onGetProgress}
                    onGetViewers={onGetViewers}
                    onMediaChange={onMediaChange}
                    onSetSeek={onSetSeek}
                    onSetVolume={onSetVolume}
                    onSetQuality={onSetQuality}
                    embedQuality={embedQuality}
                    embedViewers={embedViewers}
                    embedContent={embedContent}
                    embedDuration={embedDuration}
                    embedProgress={embedProgress}
                    qualities={qualities}
                    isLive={isLive}
                    ready={ready}
                  />
                )}
              </div>
            )}
          </div>
        </Column>
      </Row>
      {withMediaSwitcher && (
        <Row>
          <Column colLg={8}>
            <MediaSwitcher onMediaChange={onMediaChange} />
          </Column>
        </Row>
      )}
    </>
  );
};

export default BasicEmbed;
