module.exports = {
  '**/*.{js,jsx,ts,tsx}': [
    () => 'yarn tsc',
    (filenames) =>
      filenames.length > 10
        ? 'eslint --ext .js,.ts,.tsx --fix .'
        : `eslint --ext .js,.ts,.tsx --fix ${filenames.join(' ')}`,
    'prettier --write',
  ],
};
