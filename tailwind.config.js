module.exports = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx,pug}",
    ],
    theme: {
        minHeight: {
            '0': '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'content': "80vh",
            'full': '100%',
        },
        extend: {},
    },
    plugins: [],
}