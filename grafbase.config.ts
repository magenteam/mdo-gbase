import { graph, connector, config } from '@grafbase/sdk'

const g = graph.Standalone()




const stripe = connector.OpenAPI('Stripe', {
  schema:
    'https://spartacus-demo.eastus.cloudapp.azure.com:8443/occ/v2/api-docs',
  headers: headers => {
    headers.set('Authorization', { forward: 'Authorization' })
  },
})

g.datasource(stripe)

export default config({
  graph: g,
  cache: {
    rules: [
      {
        types: ['Query'],
        maxAge: 60
      }
    ]
  },
  auth: {
    rules: (rules) => {
      rules.public()
    }
  }
})
