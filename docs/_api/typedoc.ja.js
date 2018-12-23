module.exports = {
  out: './api/',
  readme: '_api/api-readme.md',
  tsconfig: '_api/en/tsconfig.json',
  theme: '_api/localize-theme',
  exclude: [
    '**/test/**/*',
    '**/node_modules/**/*',
    '*.d.ts',
    '**/demo/**/*'
  ],
  mode: 'modules',
  gaId: 'UA-131004707-1',
  ignoreCompilerErrors: true,
  excludeNotExported: true,
  excludePrivate: true
};
