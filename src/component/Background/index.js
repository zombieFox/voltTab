import { config } from '../../config';
import { isValidString } from '../utility/isValidString';
import { applyCSSVar } from '../utility/applyCSSVar';

import './index.css';

export const Background = function() {

  this.node = {
    background: document.createElement('div'),
    color: document.createElement('div'),
    image: document.createElement('div'),
    gradient: document.createElement('div')
  }

  this.style = () => {

    applyCSSVar('--background-color-hsl-h', config.background.color.hsl[0]);
    applyCSSVar('--background-color-hsl-s', config.background.color.hsl[1]);
    applyCSSVar('--background-color-hsl-l', config.background.color.hsl[2]);

    if (isValidString(config.background.image.url)) {

      applyCSSVar('--background-image-url', `url(${config.background.image.url})`);

      applyCSSVar('--background-image-opacity', config.background.image.opacity);

      applyCSSVar('--background-image-grayscale', config.background.image.grayscale);

      applyCSSVar('--background-image-blur', config.background.image.blur);

    }

    if (config.background.gradient.color.length > 0) {

      applyCSSVar('--background-gradient-degree', `${config.background.gradient.degree}deg`);

      let gradientColor = '';

      config.background.gradient.color.forEach((gradientColorItem, index) => {

        gradientColor = gradientColor + `hsla(${gradientColorItem.hsla[0]}, ${gradientColorItem.hsla[1]}%, ${gradientColorItem.hsla[2]}%, ${gradientColorItem.hsla[3]}) ${gradientColorItem.position}%`;

        if (index < config.background.gradient.color.length - 1) {

          gradientColor = gradientColor + ', ';

        };

      });

      applyCSSVar('--background-gradient-color', gradientColor);

    }

  }

  this.render = (element) => {

    this.style();

    this.node.background.classList.add('background');

    this.node.color.classList.add('background-color');

    this.node.image.classList.add('background-image');

    this.node.gradient.classList.add('background-gradient');

    this.node.background.appendChild(this.node.color);

    this.node.background.appendChild(this.node.image);

    this.node.background.appendChild(this.node.gradient);

    element.appendChild(this.node.background);

  }

}
