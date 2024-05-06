import { graph, connector, config } from '@grafbase/sdk'

const g = graph.Standalone()

const stripe = connector.OpenAPI('Stripe', {
  schema:
    'https://raw.githubusercontent.com/sap-accelerator-sqli/store-front/main/api-docs.json',
  headers: headers => {
    headers.set('Authorization', `Bearer ${g.env('STRIPE_API_KEY')}`)
  },
})

g.datasource(stripe)

export default config({
  graph: g,
})
