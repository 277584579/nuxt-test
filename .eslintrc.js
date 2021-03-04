// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     node: true,
//   },
//   parserOptions: {
//     parser: 'babel-eslint',
//   },
//   extends: [
//     '@nuxtjs',
//     'prettier',
//     'prettier/vue',
//     'plugin:prettier/recommended',
//     'plugin:nuxt/recommended',
//   ],
//   plugins: ['prettier'],
//   // add your custom rules here
//   rules: {},
// }
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}