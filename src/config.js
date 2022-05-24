export const config = {
  bookmark: {

    // open the bookmarks in a new tab: true or false
    newTab: true, // boolean: true|false

    // the bookmark panel and group name position and direction the bookmarks flow
    direction: 'left', // string: left|right

    // bookmark icons show when a bookmark group gains focus or on cursor hover
    // if set to true bookmarks are always shown
    alwaysVisible: false, // boolean: true|false

    // bookmark left side panel size
    // this area contains bookmark group name, description and open all button
    panel: 35, // range: min:0|max:100

    // spacing between bookmark icons
    iconSpacing: 10, // range: min:0|max:*

    // spacing between bookmark group rows
    groupSpacing: 30, // range: min:0|max:*

    // spacing between bookmark group name, description and open all button
    tabSpacing: 30, // range: min:0|max:*

    // bookmark grouping
    // each object in this array definesa group
    // add as many objects as needed
    // each group contains any number of bookmarks
    group: [{

      // bookmark group name
      name: 'Productivity',

      // bookmark group description
      description: 'Daily apps',

      // bookmark colours
      // colour defined with HSL: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
      color: {
        primary: { hsl: [0, 0, 100] }, // colour for group name and icons
        secondary: { hsl: [200, 60, 70] } // colour for group description and the open all button
      },

      list: [
        // list of bookmarks in this group
        // add as many objects as needed
        // the first key defines the visual element of the bookmark
        // string: icon|letter|image

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

    }, {
      name: 'Cool stuff',
      description: 'Downtime and media',
      color: { primary: { hsl: [0, 0, 100] }, secondary: { hsl: [250, 60, 70] } },
      list: [
        { icon: 'fa-brands fa-reddit-alien', url: 'https://reddit.com/' },
        { icon: 'fa-brands fa-artstation', url: 'https://www.artstation.com/' },
        { icon: 'fa-brands fa-discord', url: 'https://discord.com/' },
        { icon: 'fa-solid fa-paperclip', url: 'https://www.decisionproblem.com/paperclips/' },
        { icon: 'fa-solid fa-dice-d20', url: 'https://zombiefox.github.io/diceRoller/' },
        { icon: 'fa-brands fa-dribbble', url: 'https://dribbble.com/' },
      ]
    }, {
      name: 'Entertainment',
      description: 'Films, videos, streams',
      color: { primary: { hsl: [0, 0, 100] }, secondary: { hsl: [0, 60, 70] } },
      list: [
        { icon: 'fa-brands fa-vimeo', url: 'https://vimeo.com/' },
        { icon: 'fa-brands fa-youtube', url: 'https://youtube.com/' },
        { icon: 'fa-solid fa-clapperboard', url: 'https://netflix.com/' },
        { icon: 'fa-brands fa-twitch', url: 'https://www.twitch.tv/' },
      ]
    }, {
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

  },

  theme: {

    // global scale
    scale: 38, // range: min:0|max:100

    // accent colours
    // not used for much yet, this should be developed as the project grows
    // colour defined with HSL: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
    accent: { hsl: [204, 100, 72] },

    // text colours
    // not used for much yet, this should be developed as the project grows
    // colour defined with HSL: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
    text: { hsl: [0, 0, 0] },

    // text font
    // works with Google Fonts: https://fonts.google.com/
    // enter the full name of a font as it is displayed on Google Fonts
    font: 'Ubuntu',

    // the speed of the different transitions
    transition: { speed: { xfast: 10, fast: 20, medium: 30, slow: 40, xslow: 50 } }, // range: min:0|max:*

    // the bounce transition easing bezier curve
    easing: { bounce: [0.8, 0.5, 0.2, 2] }, // range: min:0|max:*

    bookmark: {
      background: {

        // bookmark left side panel background blur amount
        blur: 14, // range: min:0|max:*

        // bookmark left side panel background colour
        // colour defined with HSLA: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsla
        color: { hsla: [200, 180, 25, 0.2] }
      }
    }

  },

  background: {

    // the background is made of three layers
    // colour at the bottom
    // an image above the colour layer
    // a gradient above the image layer

    // background layer 1 (bottom)
    // colour defined with HSL: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
    color: {
      hsl: [220, 30, 50]
    },

    // background layer 2 (middle)
    image: {

      url: 'https://i.redd.it/niecy4jmlmh81.png', // background image url

      // opacity of background image
      opacity: 1, // range: min:0|max:1

      // grayscale of background image
      grayscale: 0.1, // range: min:0|max:1

      // blur of background image
      blur: 0 // range: min:0|max:*

    },

    // background layer 3 (top)
    gradient: {

      // gradient angle
      degree: 90, // range: min:0|max:360

      color: [
        // gradient colours
        // each object is a single colour and position in the gradient layer
        // the position value defines the location of the colour stop
        // each stop should not be a lower value than the previous stop
        // eg: {..., position: 40}, {..., position: 60}, {..., position: 90},
        // add as many objects as needed
        {
          // colour defined with HSLA: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsla
          hsla: [220, 80, 18, 0.6],
          position: 30 // range: min:0|max:100
        },
        { hsla: [240, 85, 25, 0.4], position: 40 },
        { hsla: [280, 40, 25, 0.1], position: 100 }
      ]

    }

  }
};