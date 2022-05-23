import { config } from '../../config';

import './index.css';

export const BookmarkOpenAll = function(bookmarkGroupData) {

  this.node = {
    openAll: document.createElement('div'),
    button: document.createElement('button'),
    icon: document.createElement('span'),
    line: document.createElement('div'),
    lineTop: document.createElement('span'),
    lineBottom: document.createElement('span')
  }

  this.open = () => {

    if ('tabs' in chrome) {

      if (config.bookmark.newTab) {

        bookmarkGroupData.list.forEach(item => {
          chrome.tabs.create({ url: item.url, active: false });
        });

      } else {

        const first = bookmarkGroupData.list.shift();

        bookmarkGroupData.list.forEach(item => {
          chrome.tabs.create({ url: item.url, active: false });
        });

        window.location.href = first.url;

      }

    } else {

      bookmarkGroupData.list.forEach((link, index) => {
        window.open(link.url, '_blank');
      });

    }

  }

  this.render = () => {

    this.node.openAll.classList.add('bookmark-open-all');

    this.node.button.classList.add('bookmark-open-all-button');

    this.node.button.addEventListener('click', () => {

      this.open();

    });

    this.node.icon.classList.add('fa-bolt');

    this.node.icon.classList.add('fa-solid');

    this.node.line.classList.add('bookmark-open-all-line');

    this.node.lineTop.classList.add('bookmark-open-all-line-top');

    this.node.lineBottom.classList.add('bookmark-open-all-line-bottom');

    this.node.line.appendChild(this.node.lineTop);

    this.node.line.appendChild(this.node.lineBottom);

    this.node.button.appendChild(this.node.icon);

    this.node.openAll.appendChild(this.node.line);

    this.node.openAll.appendChild(this.node.button);

  }

  this.openAll = () => this.node.openAll;

}
