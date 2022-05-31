import { config } from '../../config';
import { applyCSSVar } from '../utility/applyCSSVar';
import { trimString } from '../utility/trimString';

import WebFont from 'webfontloader';

import './index.css';

export const Theme = function() {

  this.style = () => {

    applyCSSVar('--theme-scale', config.theme.scale);

    applyCSSVar('--theme-text-hsl-h', config.theme.text.hsl[0]);
    applyCSSVar('--theme-text-hsl-s', config.theme.text.hsl[1]);
    applyCSSVar('--theme-text-hsl-l', config.theme.text.hsl[2]);

    applyCSSVar('--theme-accent-hsl-h', config.theme.accent.hsl[0]);
    applyCSSVar('--theme-accent-hsl-s', config.theme.accent.hsl[1]);
    applyCSSVar('--theme-accent-hsl-l', config.theme.accent.hsl[2]);

    applyCSSVar('--theme-transition-speed-xfast', (config.theme.transition.speed.xfast / 100));
    applyCSSVar('--theme-transition-speed-fast', (config.theme.transition.speed.fast / 100));
    applyCSSVar('--theme-transition-speed-medium', (config.theme.transition.speed.medium / 100));
    applyCSSVar('--theme-transition-speed-slow', (config.theme.transition.speed.slow / 100));
    applyCSSVar('--theme-transition-speed-xslow', (config.theme.transition.speed.xslow / 100));

    applyCSSVar('--theme-easing-bounce', `${config.theme.easing.bounce[0]}, ${config.theme.easing.bounce[1]}, ${config.theme.easing.bounce[2]}, ${config.theme.easing.bounce[3]}`);

    applyCSSVar('--theme-font', `"${config.theme.font}"`);

    applyCSSVar('--theme-bookmark-background-color-hsla-h', config.theme.bookmark.background.color.hsla[0]);
    applyCSSVar('--theme-bookmark-background-color-hsla-s', config.theme.bookmark.background.color.hsla[1]);
    applyCSSVar('--theme-bookmark-background-color-hsla-l', config.theme.bookmark.background.color.hsla[2]);
    applyCSSVar('--theme-bookmark-background-color-hsla-a', config.theme.bookmark.background.color.hsla[3]);

    applyCSSVar('--theme-bookmark-group-background-blur', config.theme.bookmark.background.blur);

  }

  this.render = () => {

    this.style();

    WebFont.load({
      // fontloading: (familyName, fvd) => { console.log('fontloading:', familyName); },
      google: { families: [trimString(config.theme.font) + ':100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i'] }
    });

  }

}