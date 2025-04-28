import React from 'react';
import { Media } from './ExampleMedia';
import imgDemo from '../../../images/example-channel-demo.jpg';

const medias = [
  {
    title: 'IBM @ CES',
    type: 'recorded',
    id: 133979911,
    description: 'IBM Video Streaming',
    imgUrl: 'https://ustvstaticcdn2-a.akamaihd.net/i/channel/picture/2/2/3/0/22305497/22305497,192x192,r:4.jpg',
  },
  {
    title: 'Demo channel',
    type: 'channel',
    id: 23935269,
    description: 'Demo channel',
    imgUrl: imgDemo,
  },
];

// eslint-disable-next-line import/prefer-default-export
export const MediaSwitcher = ({ onMediaChange }) =>
  medias.map((media) => (
    <Media
      title={media.title}
      type={media.type}
      description={media.description}
      imgUrl={media.imgUrl}
      id={media.id}
      onClick={onMediaChange}
    />
  ));
