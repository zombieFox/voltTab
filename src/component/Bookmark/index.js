import { config } from '../../config';
import { BookmarkGroup } from '../BookmarkGroup';
import { applyCSSVar } from '../utility/applyCSSVar';

import './index.css';

export const Bookmark = function() {

  this.node = {
    bookmark: document.createElement('div'),
    group: document.createElement('div'),
    panel: document.createElement('div'),
    allGroup: []
  }

  this.style = () => {

    applyCSSVar('--bookmark-panel', config.bookmark.panel);

    applyCSSVar('--bookmark-scale', config.bookmark.scale);

    applyCSSVar('--bookmark-icon-scale-visible', config.bookmark.iconScaleVisible);

    applyCSSVar('--bookmark-icon-scale-hidden', config.bookmark.iconScaleHidden);

    applyCSSVar('--bookmark-icon-scale-hover', config.bookmark.iconScaleHover);

    applyCSSVar('--bookmark-icon-scale-active', config.bookmark.iconScaleActive);

    applyCSSVar('--bookmark-icon-spacing', config.bookmark.iconSpacing);

    applyCSSVar('--bookmark-group-spacing', config.bookmark.groupSpacing);

    applyCSSVar('--bookmark-tab-spacing', config.bookmark.tabSpacing);

  }

  this.populateGroup = () => {

    config.bookmark.group.forEach(groupItem => {

      const bookmarkGroup = new BookmarkGroup(groupItem, this.node.allGroup);

      bookmarkGroup.render();

      this.node.allGroup.push(bookmarkGroup);

      this.node.group.appendChild(bookmarkGroup.group());

    });

  }

  this.render = (element) => {

    this.style();

    this.populateGroup();

    this.node.bookmark.classList.add('bookmark');

    this.node.group.classList.add('bookmark-group');

    if (!config.bookmark.alwaysVisible) {

      this.node.group.addEventListener('mouseleave', () => {

        config.bookmark.group.forEach(bookmarkGroup => {

          bookmarkGroup.active = false;

        });

        this.node.allGroup.forEach(group => {

          group.renderActive();

        });

      });

    }

    this.node.panel.classList.add('bookmark-panel');

    switch (config.bookmark.direction) {

      case 'left':
        this.node.panel.classList.add('bookmark-panel-left');
        break;

      case 'right':
        this.node.panel.classList.add('bookmark-panel-right');
        break;

    }

    this.node.bookmark.appendChild(this.node.panel);

    this.node.bookmark.appendChild(this.node.group);

    element.appendChild(this.node.bookmark);

  }

}
