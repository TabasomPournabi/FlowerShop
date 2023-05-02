module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        //set anythings
        colors :{
            'primary-color':'var( --primary-color)',
            'background-color':'var(--background-color)',
            'text-dark':'var(--text-dark)',
            'text-light':'var(--text-light)',
            'text-hover':'var(--text-hover)'

            
        },
        fontFamily:{
          vazir:["vazir"],
        },
        backgroundImage:{
          'header-img':'url("assets/Lavender.jpg")'
        },
        boxShadow:{
          'bsh':' inset #009688 0 0 0 5px, inset #059c8e 0 0 0 1px,inset #0cab9c 0 0 0 10px,inset #1fbdae 0 0 0 11px,inset #8ce9ff 0 0 0 16px,inset #48e4d6 0 0 0 17px,inset #e5f9f7 0 0 0 21px,inset #bfecf7 0 0 0 22px'
        }
        
      },
    },
    plugins: [
      require('tailwind-scrollbar-hide')
    ],
  }