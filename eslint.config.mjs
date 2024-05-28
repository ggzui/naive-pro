import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: ['**/coverage', '**/assets', '**/public', '**/dist'],
  },
  {
    rules: {},
  },
)
