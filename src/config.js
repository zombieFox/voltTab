export const config = {
  bookmark: {
    newTab: true, // open the bookmarks in a new tab: true|false
    panel: {
      size: 35 // width of the left panel
    },
    group: [ // each object in this array is a bookmark group
      // add as many objects { ... } as needed to bookmark group array
      {
        name: 'Productivity', // group name
        description: 'Daily apps', // group description
        color: {
          primary: { hsl: [0, 0, 100] }, // colour for group name and icons
          secondary: { hsl: [200, 60, 70] } // colour for group description and "open all" button
        },
        list: [
          // list of bookmarks in this group
          // add as many links as needed to he list array
          // the first key can be any of the following types: "icon"|"letter"|"image"

          // icon eg:
          // use a Font Awesome class name found on https://fontawesome.com/icons
          // { icon: 'fa-solid fa-envelope', url: 'https://website.com/' },

          // letter eg:
          // { letter: 'ABC', url: 'https://website.com/' },

          // image eg:
          // { image: 'https://example.com/image.jpg', url: 'https://website.com/' },

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
      },
      {
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
      },
      {
        name: 'Entertainment',
        description: 'Films and videos',
        color: { primary: { hsl: [0, 0, 100] }, secondary: { hsl: [0, 60, 70] } },
        list: [
          { icon: 'fa-brands fa-vimeo', url: 'https://vimeo.com/' },
          { icon: 'fa-brands fa-youtube', url: 'https://youtube.com/' },
          { icon: 'fa-solid fa-clapperboard', url: 'https://netflix.com/' },
          { icon: 'fa-brands fa-twitch', url: 'https://www.twitch.tv/' },
        ]
      },
      {
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
      }
    ]
  },
  theme: {
    scale: 38, // global scale
    accent: { hsl: [204, 100, 72] }, // accent colour, not used for much yet, colour using hsl: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
    text: { hsl: [0, 0, 0] }, // text colour, not used for much yet, colour using hsl: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
    font: 'Ubuntu', // use the full name of any font found on Google Fonts: https://fonts.google.com/
    transition: { speed: { xfast: 10, fast: 20, medium: 30, slow: 40, xslow: 50 } }, // the speed of the different transitions
    easing: { bounce: [0.8, 0.5, 0.2, 2] }, // the bounce transition easing bezier curve
    bookmark: {
      background: {
        blur: 14, // bookmark left panel blur amount
        color: { hsla: [200, 180, 25, 0.2] } // bookmark left panel colour using hsla: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsla
      }
    }
  },
  background: {
    // the background is made of three layers
    // colour at the bottom
    // an image above the colour layer
    // a gradient above the image layer
    color: {
      hsl: [220, 30, 50] //background colour using hsl: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
    },
    image: {
      url: 'https://i.redd.it/niecy4jmlmh81.png', // background image url
      opacity: 1, // opacity of background image, range from 0.0 to 1.0
      grayscale: 0.1, // grayscale of background image, range from 0.0 to 1.0
      blur: 0 // blur of background image
    },
    gradient: {
      degree: 90, // gradient angle
      color: [
        // the colour array lists the different colour stops of the gradient
        // each colour is hsla: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsla
        // the position is the location of the colour stop, range from 1 to 100
        // add as many colour objects { ... } as needed
        { hsla: [220, 80, 18, 0.6], position: 30 },
        { hsla: [240, 85, 25, 0.4], position: 40 },
        { hsla: [280, 40, 25, 0.1], position: 100 }
      ]
    }
  }
};