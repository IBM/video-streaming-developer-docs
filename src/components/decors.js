import React from 'react';
import '../styles/decorator-animation.scss';

const OvalDecor = () => (
  <div className="oval-decor">
    <div className="oval-decor__inner">
      <div className="oval-item decor-target" />
      <div className="oval-item decor-target" />
      <div className="oval-item decor-target" />
      <div className="oval-item decor-target" />
      <div className="oval-item decor-target" />
      <div className="oval-item decor-target" />
      <div className="oval-item decor-target" />
      <div className="oval-item decor-target" />
      <div className="oval-item decor-target" />
    </div>
  </div>
);

const RectangleDecor = () => (
  <div className="rectangle-decor">
    <div className="rectangle-decor__inner">
      <div className="rectangle-item decor-target" />
      <div className="rectangle-item decor-target" />
      <div className="rectangle-item decor-target" />
      <div className="rectangle-item decor-target" />
      <div className="rectangle-item decor-target" />
      <div className="rectangle-item decor-target" />
      <div className="rectangle-item decor-target" />
      <div className="rectangle-item decor-target" />
    </div>
  </div>
);

export { OvalDecor, RectangleDecor };
