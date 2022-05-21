export const config = {
  bookmark: {
    newTab: true,
    panel: { size: 35 },
    group: {
      set: [{
        active: false,
        name: 'Productivity',
        description: 'Daily apps',
        color: { primary: { hsl: [0, 0, 100] }, secondary: { hsl: [200, 60, 70] } },
        list: [
          { icon: 'fa-solid fa-envelope', url: 'https://mail.google.com/' },
          { icon: 'fa-brands fa-slack', url: 'https://slack.com/signin/' },
          { icon: 'fa-brands fa-github', url: 'https://github.com/' },
          { icon: 'fa-brands fa-codepen', url: 'https://codepen.io/' },
          { icon: 'fa-solid fa-diamond', url: 'https://whimsical.com/login/' },
          { icon: 'fa-brands fa-figma', url: 'https://figma.com/' },
          { icon: 'fa-brands fa-dropbox', url: 'https://dropbox.com/' },
          { icon: 'fa-brands fa-google-drive', url: 'https://drive.google.com/' },
          { icon: 'fa-solid fa-calendar-day', url: 'https://calendar.google.com/calendar/' },
        ]
      }, {
        active: false,
        name: 'Cool stuff',
        description: 'Downtime and media',
        color: { primary: { hsl: [0, 0, 100] }, secondary: { hsl: [250, 60, 70] } },
        list: [
          { icon: 'fa-brands fa-reddit-alien', url: 'https://reddit.com/' },
          { icon: 'fa-brands fa-deviantart', url: 'https://www.deviantart.com/' },
          { icon: 'fa-brands fa-discord', url: 'https://discord.com/' },
          { icon: 'fa-solid fa-paperclip', url: 'https://www.decisionproblem.com/paperclips/' },
          { icon: 'fa-solid fa-dice-d20', url: 'https://zombiefox.github.io/diceRoller/' },
          { icon: 'fa-brands fa-dribbble', url: 'https://dribbble.com/' },
        ]
      }, {
        active: false,
        name: 'Entertainment',
        description: 'Films and videos',
        color: { primary: { hsl: [0, 0, 100] }, secondary: { hsl: [0, 60, 70] } },
        list: [
          { icon: 'fa-brands fa-vimeo', url: 'https://vimeo.com/' },
          { icon: 'fa-brands fa-youtube', url: 'https://youtube.com/' },
          { icon: 'fa-solid fa-clapperboard', url: 'https://netflix.com/' },
          { icon: 'fa-brands fa-twitch', url: 'https://www.twitch.tv/' },
        ]
      }, {
        active: false,
        name: 'Ref',
        description: 'Docs, code + specs',
        color: { primary: { hsl: [0, 0, 100] }, secondary: { hsl: [40, 60, 70] } },
        list: [
          { icon: 'fa-solid fa-code', url: 'https://devdocs.io/' },
          { icon: 'fa-brands fa-css3-alt', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/' },
          { icon: 'fa-brands fa-stack-overflow', url: 'https://stackoverflow.com/' },
          { icon: 'fa-brands fa-bootstrap', url: 'https://getbootstrap.com/docs/5.2/getting-started/introduction/' },
          { icon: 'fa-brands fa-npm', url: 'https://www.npmjs.com/' },
        ]
      }]
    }
  },
  theme: {
    scale: 38,
    accent: { hsl: [204, 100, 72] },
    text: { hsl: [0, 0, 0] },
    font: 'Ubuntu',
    transition: { speed: { xfast: 10, fast: 20, medium: 30, slow: 40, xslow: 50 } },
    easing: { bounce: [0.8, 0.5, 0.2, 2] },
    bookmark: { background: { blur: 14, color: { hsla: [200, 180, 25, 0.2] } } }
  },
  background: {
    color: { hsl: [220, 30, 50] },
    image: { url: 'https://i.redd.it/niecy4jmlmh81.png', opacity: 1, grayscale: 0.1, blur: 0 },
    gradient: { degree: 90, color: [{ hsla: [220, 80, 18, 0.6], position: 30 }, { hsla: [240, 85, 25, 0.4], position: 40 }, { hsla: [280, 40, 25, 0.1], position: 100 }] }
  }
};
