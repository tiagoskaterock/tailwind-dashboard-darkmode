/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {

      fontFamily: {
        "inter": "'Inter'"
      },

      colors:{
        'lime-green': 'hsl(163, 72%, 41%)',
        'bright Red': 'hsl(356, 69%, 56%)',

        'facebook': 'hsl(208, 92%, 53%)',
        'twitter': 'hsl(203, 89%, 53%)',
        'instagram-first': 'hsl(37, 97%, 70%)',
        'instagram-second': 'hsl(329, 70%, 58%)',
        'youTube': 'hsl(348, 97%, 39%)',

        'gradient-switch-first': 'hsl(210, 78%, 56%)',
        'gradient-switch-second': 'hsl(146, 68%, 55%)',

        'very-dark-blue': 'hsl(230, 17%, 14%)',
        'very-dark-blue-top': 'hsl(232, 19%, 15%)',
        'dark-desaturated-blue': 'hsl(228, 28%, 20%)',
        'desaturated-blue': 'hsl(228, 34%, 66%)',
        'white': 'hsl(0, 0%, 100%)',

        'white': 'hsl(0, 0%, 100%)',
        'very-pale-blue': 'hsl(225, 100%, 98%)',
        'light-grayish-blue': 'hsl(227, 47%, 96%)',
        'dark-grayish-blue': 'hsl(228, 12%, 44%)',
        'very-dark-blue': 'hsl(230, 17%, 14%)',
      },

      backgroundImage: {
        "open-menu": "url('../../img/menu.svg')",
        "close-menu": "url('../../img/close.svg')"
      }

    },
  },
  plugins: [],
}
