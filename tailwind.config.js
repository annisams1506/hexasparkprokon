/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'poly': ['Poly', 'serif'],
        'arial': ['Arial', 'sans-serif'], 
      },
      colors: {
        golden: {
          DEFAULT: '#D9AF29',
          50: '#FDF8E7',
          55:'#E0AA3E',
          100: '#FAEFC9',
          200: '#F4DD8F',
          300: '#EDCB54',
          400: '#E6B836',
          500: '#D9AF29', // Primary shade
          600: '#B08E1F',
          700: '#876B17',
          800: '#5E490E',
          900: '#352705',
        },
        sand: {
          DEFAULT: '#DABB8D',
          50: '#FBF5E9',
          100: '#F7EBD2',
          200: '#EDD7A6',
          300: '#E3C279',
          400: '#DABB8D', // Primary shade
          500: '#C2A470',
          600: '#A78A59',
          700: '#8A7044',
          800: '#6D5633',
          900: '#4F3D22',
        },
        charcoal: {
          DEFAULT: '#616161', // Dark gray
          50: '#F2F2F2',
          100: '#E0E0E0',
          200: '#B3B3B3',
          300: '#858585',
          400: '#616161',
          500: '#4B4B4B',
          600: '#3B3B3B',
          700: '#2C2C2C',
          800: '#1D1D1D',
          900: '#0E0E0E',
        },
        silver: {
          DEFAULT: '#D0D0D0', // Light gray
          50: '#FAFAFA',
          55: '#F4F4F4',
          100: '#F0F0F0',
          200: '#E0E0E0',
          300: '#D0D0D0',
          400: '#B0B0B0',
          500: '#909090',
          600: '#707070',
          700: '#505050',
          800: '#303030',
          900: '#101010',
        },
        grayish: {
          DEFAULT: '#939393', // Medium gray
          50: '#F7F7F7',
          100: '#ECECEC',
          200: '#D9D9D9',
          300: '#C6C6C6',
          400: '#939393',
          500: '#757575',
          600: '#5A5A5A',
          700: '#414141',
          800: '#2B2B2B',
          900: '#1A1A1A',
        },
        bronze: {
          DEFAULT: '#9E6C11', // Bronze color
          50: '#F9F2E5',
          100: '#F0E3C7',
          200: '#E2C899',
          300: '#D4AC6A',
          400: '#C7904C',
          500: '#9E6C11', // Primary shade
          600: '#7C560C',
          700: '#5A4009',
          800: '#392B06',
          900: '#1A1403',
        },
        goldLight: {
          DEFAULT: '#EAD36F', // Light gold
          50: '#FFFDF1',
          100: '#FDF7DA',
          200: '#FAEDAB',
          300: '#F7E37B',
          400: '#F4D84C',
          500: '#EAD36F', // Primary shade
          600: '#C5B254',
          700: '#9E8F3C',
          800: '#776B2A',
          900: '#4F481A',
        },
        
      },
    },
  },
  plugins: [],
}

