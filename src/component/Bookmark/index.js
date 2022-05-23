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

    applyCSSVar('--bookmark-panel-size', config.bookmark.panel.size);

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

    this.node.bookmark.appendChild(this.node.panel);

    this.node.bookmark.appendChild(this.node.group);

    element.appendChild(this.node.bookmark);

  }

}
