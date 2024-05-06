import { graph, connector, config } from '@grafbase/sdk'

const g = graph.Standalone()

const stripe = connector.OpenAPI('Stripe', {
  schema:
    'https://raw.githubusercontent.com/sap-accelerator-sqli/store-front/main/api-docs.json?token=GHSAT0AAAAAACRYYYJTB4M6XHBZFXVSH7KOZRYWSMA',
  headers: (headers) => {
    headers.set('Authorization', { forward: 'Authorization' })
  },
})

g.datasource(stripe)

export default config({
  graph: g,
})
