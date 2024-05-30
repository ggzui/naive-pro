import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: ['**/coverage', '**/assets', '**/public', '**/dist'],
  },
  {
    rules: {
      'no-console': 'warn',

      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],

          pathGroups: [
            {
              pattern: 'vue',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@vue/**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@naive-pro/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['type'],
        },
      ],

      "vue/component-name-in-template-casing": ["error", "kebab-case"],
    },
  },
)
