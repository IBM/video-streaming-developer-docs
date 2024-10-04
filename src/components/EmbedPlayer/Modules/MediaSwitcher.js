import React from 'react';
import { Media } from './ExampleMedia';
import imgIBM from '../../../images/example-channel-ibm.jpg';
import imgDemo from '../../../images/example-channel-demo.jpg';

const medias = [
  {
    title: 'IBM @ CES',
    type: 'recorded',
    id: 81056340,
    description: 'IBM CEO Ginni Rometty 2016 CES Keynote.',
    imgUrl: imgIBM,
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
