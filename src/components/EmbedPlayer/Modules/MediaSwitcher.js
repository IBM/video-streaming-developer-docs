import React from 'react';
import { Media } from './ExampleMedia';
import imgIBM from '../../../images/example-channel-ibm.jpg';
import imgNASA from '../../../images/example-channel-nasa.jpg';
import imgTwit from '../../../images/example-channel-twit.png';
import imgCreativeLive from '../../../images/example-channel-creativelive.png';

const medias = [
  {
    title: 'creativeLIVE',
    type: 'channel',
    id: 4307895,
    description:
      'creativeLIVE provides the best free, live creative education on the web. We offer high-quality workshops in photography, business, video, web and graphic design, and more.',
    imgUrl: imgCreativeLive,
  },
  {
    title: 'IBM @ CES',
    type: 'recorded',
    id: 81056340,
    description: 'IBM CEO Ginni Rometty 2016 CES Keynote.',
    imgUrl: imgIBM,
  },
  {
    title: 'TWiT Live',
    type: 'channel',
    id: 1524,
    description:
      'Live from the TWiT Brick House, non-stop technology news and conversation with Leo Laporte and friends.',
    imgUrl: imgTwit,
  },
  {
    title: 'NASA Public',
    type: 'channel',
    id: 6540154,
    description:
      'NASA TV airs a variety of regularly scheduled, pre-recorded educational and public relations programming 24 hours a day on its various channels.',
    imgUrl: imgNASA,
  },
];

export const MediaSwitcher = ({ onMediaChange }) => {
  return medias.map((media) => (
    <Media
      title={media.title}
      type={media.type}
      description={media.description}
      imgUrl={media.imgUrl}
      id={media.id}
      onClick={onMediaChange}
    />
  ));
};
