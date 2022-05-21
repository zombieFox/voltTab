import { Base } from '../component/Base';
import { Body } from '../component/Body';
import { Background } from '../component/Background';
import { Bookmark } from '../component/Bookmark';
import { Theme } from '../component/Theme';
import { Fontawesome } from '../component/Fontawesome';

import './index.css';

export const App = function() {

  this.node = {
    app: document.createElement('div')
  }

  this.base = new Base();

  this.body = new Body();

  this.theme = new Theme();

  this.fontawesome = new Fontawesome();

  this.background = new Background();

  this.bookmark = new Bookmark();

  this.render = () => {

    this.node.app.classList.add('app');

    this.theme.render();

    this.background.render(this.node.app);

    this.bookmark.render(this.node.app);

    document.querySelector('body').appendChild(this.node.app);

  }

};
