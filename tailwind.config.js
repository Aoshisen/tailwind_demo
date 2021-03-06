module.exports = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx,pug}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ],
}