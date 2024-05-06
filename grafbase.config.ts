import { graph, connector, config } from '@grafbase/sdk'

const g = graph.Standalone()

const stripe = connector.OpenAPI('Stripe', {
  schema:
    'https://raw.githubusercontent.com/sap-accelerator-sqli/store-front/main/api-docs.json?token=GHSAT0AAAAAACRYYYJSBJGBO4VHR3OM4WXSZRYV7BA',
  headers: (headers) => {
    headers.set('Authorization', { forward: 'Authorization' })
  },
})

g.datasource(stripe)

export default config({
  graph: g,
})
