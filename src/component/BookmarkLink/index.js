import { config } from '../../config';

import './index.css';

export const BookmarkLink = function(linkData, listCount, index) {

  this.node = {
    link: document.createElement('a'),
    visual: document.createElement('div'),
    letter: document.createElement('div'),
    icon: document.createElement('span'),
    image: document.createElement('img')
  }

  this.render = () => {

    this.node.link.classList.add('bookmark-link');

    switch (config.bookmark.direction) {

      case 'left':
        this.node.link.style.setProperty('--bookmark-link-delay', ((listCount - index) / 20));
        break;

      case 'right':
        this.node.link.style.setProperty('--bookmark-link-delay', ((listCount - (listCount - index)) / 20));
        break;

    }

    this.node.link.href = linkData.url;

    if (config.bookmark.newTab) {

      this.node.link.setAttribute('target', '_blank');

    };

    this.node.visual.classList.add('bookmark-visual');

    this.node.letter.classList.add('bookmark-letter');

    this.node.icon.classList.add('bookmark-icon');

    this.node.image.classList.add('bookmark-image');

    if ('letter' in linkData) {

      this.node.letter.textContent = linkData.letter;

      this.node.visual.appendChild(this.node.letter);

    };

    if ('icon' in linkData) {

      const iconClassList = linkData.icon.split(' ');

      iconClassList.forEach(className => {

        this.node.icon.classList.add(className);

      });

      this.node.visual.appendChild(this.node.icon);

    };

    if ('image' in linkData) {

      this.node.image.src = linkData.image;

      this.node.visual.appendChild(this.node.image);

    };

    this.node.link.appendChild(this.node.visual);

  }

  this.link = () => this.node.link;

}
