/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'text': {
          50: '#eae9fc',
          100: '#d6d2f9',
          200: '#ada5f3',
          300: '#8478ed',
          400: '#5b4be7',
          500: '#321fe0',
          600: '#2818b4',
          700: '#1e1287',
          800: '#140c5a',
          900: '#0a062d',
          950: '#050316',
        },
        'background': {
          50: '#fde7ee',
          100: '#fccfdd',
          200: '#f8a0ba',
          300: '#f57098',
          400: '#f24076',
          500: '#ee1153',
          600: '#bf0d43',
          700: '#8f0a32',
          800: '#5f0721',
          900: '#300311',
          950: '#180208',
        },
        'primary': {
          50: '#fbeaee',
          100: '#f7d4dd',
          200: '#efa9bb',
          300: '#e77e98',
          400: '#de5476',
          500: '#d62954',
          600: '#ab2143',
          700: '#811832',
          800: '#561022',
          900: '#2b0811',
          950: '#150408',
        },
        'secondary': {
          50: '#fee7f2',
          100: '#fccfe6',
          200: '#fa9ecc',
          300: '#f76eb3',
          400: '#f53d99',
          500: '#f20d80',
          600: '#c20a66',
          700: '#91084d',
          800: '#610533',
          900: '#30031a',
          950: '#18010d',
        },
        'accent': {
          50: '#ffe5ef',
          100: '#ffccdf',
          200: '#ff99be',
          300: '#ff669e',
          400: '#ff337e',
          500: '#ff005d',
          600: '#cc004b',
          700: '#990038',
          800: '#660025',
          900: '#330013',
          950: '#1a0009',
        },
       },       
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        
        "primary": "#d8315a",
                
        "secondary": "#3b031f",
                
        "accent": "#ffb9d3",
                
        "neutral": "#d8315a",
                
        "base-100": "#1d020a",
                
        "info": "#ffb9d3",
                
        "success": "#86efac",
                
        "warning": "#fef08a",
                
        "error": "#f87171",
        },
      },
    ],
  },
   
}

