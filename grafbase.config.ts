import { graph, connector, config } from '@grafbase/sdk'

const g = graph.Standalone()

const stripe = connector.OpenAPI('Stripe', {
  schema:
    'https://github.com/sap-accelerator-sqli/store-front/blob/main/api-docs.json',
  headers: headers => {
    headers.set('Authorization', `Bearer ${g.env('STRIPE_API_KEY')}`)
  },
})

g.datasource(stripe)

export default config({
  graph: g,
})
