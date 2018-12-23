module.exports = {
  exclude: [
    '**/test/**/*',
    '**/node_modules/**/*',
    '*.d.ts',
    '**/demo/**/*'
  ],
  mode: 'modules',
  ignoreCompilerErrors: true,
  excludeNotExported: true,
  excludePrivate: true
};
