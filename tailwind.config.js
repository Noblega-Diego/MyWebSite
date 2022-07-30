/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'white-primary': '#BCC3DA',
      },
      backgroundImage: {
        'panel-vertical-black-01': "url('/assets/images/panelvertical-black-01.svg')",
        'panel-vertical-write-01': "url('/assets/images/panelvertical-write-01.svg')",
        'panel-vertical-black-02': "url('/assets/images/panelvertical-black-02.svg')",
        'panel-vertical-write-02': "url('/assets/images/panelvertical-write-02.svg')",
        'panel-vertical-black-03': "url('/assets/images/panelvertical-black-03.svg')",
        'panel-vertical-write-03': "url('/assets/images/panelvertical-write-03.svg')",
        'back-certificates': "url('/assets/images/huella-background.svg')",
        'send': "url('/assets/images/isend.svg')",
      },
      backgroundColor:{
        'gradient-dark':'radial-gradient(60.65% 90.02% at 100% 0%, rgba(24, 26, 30, 0.15) 0%, rgba(24, 26, 30, 0.514) 45.31%, #191C25 100%)'
      }
    },
  },
  plugins: [],
  content: [
    "./src/**/*.{html,ts}",
  ],
}
