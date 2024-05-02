import { graph, connector, config } from '@grafbase/sdk'

const g = graph.Standalone()

const stripe = connector.OpenAPI('Stripe', {
  schema:
    'https://raw.githubusercontent.com/sap-accelerator-sqli/sap-commerce/main/api-docs.json?token=GHSAT0AAAAAACRYYYJSILJEYM7HNIG6AHRUZRTXW5A',
  headers: headers => {
    headers.set('Authorization', { forward: 'Authorization' })
  },
})

g.datasource(stripe)

export default config({
  graph: g,
})
