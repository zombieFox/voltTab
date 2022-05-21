import { config } from '../../config';

import './index.css';

export const BookmarkOpenAll = function(bookmarkGroupData) {

  this.node = {
    button: document.createElement('button'),
    icon: document.createElement('span')
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

    }

  }

  this.render = () => {

    this.node.button.classList.add('bookmark-open-all');

    this.node.button.addEventListener('click', () => {

      this.open();

    });

    this.node.icon.classList.add('fa-bolt');

    this.node.icon.classList.add('fa-solid');

    this.node.button.appendChild(this.node.icon);

  }

  this.button = () => this.node.button;

}