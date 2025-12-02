/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: '#8b5cf6',
          'purple-light': '#a855f7',
          'purple-dark': '#7c3aed',
        },
        error: '#ff6b6b',
      },
      animation: {
        'slide-in-up': 'slideInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-in-down': 'slideInDown 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInFromLeft 0.8s ease-out',
        'slide-in-right': 'slideInFromRight 0.8s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'shake': 'shake 0.5s ease-in-out',
        'spin-slow': 'spin 1s linear infinite',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s infinite',
        'sparkle': 'sparkle 1s ease-in-out infinite',
        'background-shift': 'backgroundShift 20s ease-in-out infinite',
        'change-color': 'changeColor8 3s ease-in-out infinite',
        'light-effect': 'lightEffect8 2s ease-in-out infinite',
        'green-light': 'greenLight8 2s ease-in-out infinite',
        'left-arrow': 'leftArrow8 1s ease-in-out infinite',
        'right-arrow': 'rightArrow8 1s ease-in-out infinite',
      },
      keyframes: {
        slideInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(50px) scale(0.95)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        bounce: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-10px)',
          },
          '60%': {
            transform: 'translateY(-5px)',
          },
        },
        shake: {
          '0%, 100%': {
            transform: 'translateX(0)',
          },
          '10%, 30%, 50%, 70%, 90%': {
            transform: 'translateX(-5px)',
          },
          '20%, 40%, 60%, 80%': {
            transform: 'translateX(5px)',
          },
        },
        changeColor8: {
          'from': {
            backgroundColor: '#2781c3',
          },
          'to': {
            backgroundColor: '#27c39f',
          },
        },
        lightEffect8: {
          'from': {
            boxShadow: '1px 1px 5px #27c39f',
          },
          'to': {
            boxShadow: '0 0 2px #27c39f',
          },
        },
        greenLight8: {
          'to': {
            boxShadow: 'inset 0px 0px 32px #27c39f',
          },
        },
        leftArrow8: {
          'from': {
            transform: 'translate(0px)',
          },
          'to': {
            transform: 'translateX(10px)',
          },
        },
        rightArrow8: {
          'from': {
            transform: 'translate(0px)',
          },
          'to': {
            transform: 'translateX(-10px)',
          },
        },
        slideInDown: {
          'from': {
            opacity: '0',
            transform: 'translateY(-10px) scale(0.95)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        fadeIn: {
          'from': {
            opacity: '0',
          },
          'to': {
            opacity: '1',
          },
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInFromLeft: {
          'from': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInFromRight: {
          'from': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        shimmer: {
          '0%': {
            left: '-100%',
          },
          '100%': {
            left: '100%',
          },
        },
        sparkle: {
          '0%, 100%': {
            opacity: '0.3',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.1)',
          },
        },
        backgroundShift: {
          '0%, 100%': {
            transform: 'translateX(0) translateY(0)',
          },
          '25%': {
            transform: 'translateX(-10px) translateY(-5px)',
          },
          '50%': {
            transform: 'translateX(10px) translateY(5px)',
          },
          '75%': {
            transform: 'translateX(-5px) translateY(10px)',
          },
        },
        'shimmer-effect': {
          'from': {
            opacity: '0',
            left: '0%',
          },
          '50%': {
            opacity: '1',
          },
          'to': {
            opacity: '0',
            left: '100%',
          },
        },
      },
      backgroundImage: {
        'search-gradient': 'linear-gradient(90deg, #ff6464 0%, #ffbf59 50%, #47c9ff 100%)',
      },
    },
  },
  plugins: [],
}

