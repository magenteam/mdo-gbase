import { graph, connector, config } from '@grafbase/sdk'

const g = graph.Standalone()

const stripe = connector.OpenAPI('Stripe', {
  schema:
    'https://raw.githubusercontent.com/magenteam/Eshopper/master/local.json',
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
