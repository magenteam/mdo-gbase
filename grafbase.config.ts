import { graph, connector, config } from '@grafbase/sdk'

const g = graph.Standalone()

const stripe = connector.OpenAPI('Stripe', {
  schema:
    'https://spartacus-demo.eastus.cloudapp.azure.com:8443/occ/v2/api-docs',
  headers: headers => {
    headers.set('Authorization', { forward: 'Authorization' })
  },
  transforms: schema => {
    schema.queryNaming('OPERATION_ID')
  },
})

g.datasource(stripe)

export default config({
  graph: g,
})
