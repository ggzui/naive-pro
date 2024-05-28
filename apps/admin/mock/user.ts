import type { MockConfig, MockMethod } from 'vite-plugin-mock'

export default (_config: MockConfig): MockMethod[] => {
  return [
    {
      url: '/api/test',
      timeout: 1000,
      method: 'get',
      response: {
        code: 200,
        data: {
          name: 'vben',
        },
      },
    },
  ]
}
