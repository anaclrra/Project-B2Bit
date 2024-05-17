export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                '2xl': '0 0 64px 0 rgb(0 0 0 / 0.4)',
                'md':  '0 2px 10px 0 #0000001A'
            },
            spacing: {
                '96': '22rem',
              }
        },

    },
    plugins: [],
};