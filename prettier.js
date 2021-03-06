module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    // ESLint
    'function-paren-newline': 0,
    // Babel plugin
    'babel/object-curly-spacing': 0,
    'babel/semi': 0,
    // Prettier plugin
    'prettier/prettier': [2, {printWidth: 120, singleQuote: true, trailingComma: 'es5', bracketSpacing: false}],
  },
};
