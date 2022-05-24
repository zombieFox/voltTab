import { config } from '../../config';
import { BookmarkLink } from '../BookmarkLink';
import { BookmarkOpenAll } from '../BookmarkOpenAll';

import './index.css';

export const BookmarkGroup = function(bookmarkGroupData, allBookmarkGroup) {

  this.node = {
    groupItem: document.createElement('div'),
    tab: document.createElement('div'),
    label: document.createElement('div'),
    name: document.createElement('p'),
    description: document.createElement('p'),
    list: document.createElement('div'),
    openAll: null,
    allList: []
  }

  this.style = () => {

    this.node.groupItem.style.setProperty('--bookmark-group-color-primary-hsl-h', bookmarkGroupData.color.primary.hsl[0]);
    this.node.groupItem.style.setProperty('--bookmark-group-color-primary-hsl-s', bookmarkGroupData.color.primary.hsl[1]);
    this.node.groupItem.style.setProperty('--bookmark-group-color-primary-hsl-l', bookmarkGroupData.color.primary.hsl[2]);

    this.node.groupItem.style.setProperty('--bookmark-group-color-secondary-hsl-h', bookmarkGroupData.color.secondary.hsl[0]);
    this.node.groupItem.style.setProperty('--bookmark-group-color-secondary-hsl-s', bookmarkGroupData.color.secondary.hsl[1]);
    this.node.groupItem.style.setProperty('--bookmark-group-color-secondary-hsl-l', bookmarkGroupData.color.secondary.hsl[2]);

  }

  this.toggleActiveState = () => {

    config.bookmark.group.forEach(bookmarkGroup => {

      bookmarkGroup.active = false;

    });

    bookmarkGroupData.active = true;

  }

  this.renderActive = () => {

    bookmarkGroupData.active ? this.active() : this.inactive();

  }

  this.active = () => this.node.groupItem.classList.add('bookmark-group-active')

  this.inactive = () => this.node.groupItem.classList.remove('bookmark-group-active')

  this.render = () => {

    this.node.groupItem.classList.add('bookmark-group-item');

    switch (config.bookmark.direction) {

      case 'left':
        this.node.groupItem.classList.add('bookmark-group-item-left');
        break;

      case 'right':
        this.node.groupItem.classList.add('bookmark-group-item-right');
        break;

    }

    if (config.bookmark.alwaysVisible) {

      this.node.groupItem.classList.add('bookmark-group-active');

    } else {

      this.node.groupItem.addEventListener('mouseenter', () => {

        this.toggleActiveState();

        allBookmarkGroup.forEach(group => {

          group.renderActive();

        });

      });

      this.renderActive();

    };

    this.node.tab.classList.add('bookmark-group-tab');

    this.node.list.classList.add('bookmark-group-list');

    this.node.tab.href = "#";

    this.style();

    this.node.label.classList.add('bookmark-group-label');

    this.node.name.classList.add('bookmark-group-name');

    this.node.description.classList.add('bookmark-group-description');

    this.node.name.textContent = bookmarkGroupData.name;

    this.node.description.textContent = bookmarkGroupData.description;

    bookmarkGroupData.list.forEach((listItem, index) => {

      const bookmarkLink = new BookmarkLink(listItem, (bookmarkGroupData.list.length - index));

      bookmarkLink.render();

      this.node.allList.push(bookmarkLink.link());

      this.node.list.appendChild(bookmarkLink.link());

    });

    this.node.openAll = new BookmarkOpenAll(bookmarkGroupData);

    this.node.openAll.render();

    this.node.label.appendChild(this.node.name);

    this.node.label.appendChild(this.node.description);

    this.node.tab.appendChild(this.node.label);

    this.node.tab.appendChild(this.node.openAll.openAll());

    this.node.groupItem.appendChild(this.node.tab);

    this.node.groupItem.appendChild(this.node.list);

  }

  this.group = () => this.node.groupItem;

}