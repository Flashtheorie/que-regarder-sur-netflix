module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'image-one':
          "url('https://images.unsplash.com/photo-1629651480694-edb8451b31aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80')",
        'image-two':
          "url('https://images.unsplash.com/photo-1629651726230-6430554a8890?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80')",
      }),
    },
  },
  plugins: [],
}
