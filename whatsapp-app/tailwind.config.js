const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.js',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                segoiUI: ['Segoe UI', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                'bg-chat': "url('/img/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
            }
        },
        screens: {
            'mobile': {'max': '639px'},
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        }
    },

    plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar-hide')],
};
