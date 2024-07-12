import React from 'react';
import { Media } from './ExampleMedia';
import imgIBM from '../../../images/example-channel-ibm.jpg';
import imgNASA from '../../../images/example-channel-nasa.jpg';

const medias = [
  {
    title: 'IBM @ CES',
    type: 'recorded',
    id: 81056340,
    description: 'IBM CEO Ginni Rometty 2016 CES Keynote.',
    imgUrl: imgIBM,
  },
  {
    title: 'NASA Public',
    type: 'channel',
    id: 25964588,
    description:
      'NASA TV airs a variety of regularly scheduled, pre-recorded educational and public relations programming 24 hours a day on its various channels.',
    imgUrl: imgNASA,
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
