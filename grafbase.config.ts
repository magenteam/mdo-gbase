import { graph, connector, config } from '@grafbase/sdk'

const g = graph.Standalone()

const stripe = connector.OpenAPI('Stripe', {
  schema:"https://sap-composable-storefront.iscm.sqli.com/occ/v2/api-docs",
    url:"https://sap-composable-storefront.iscm.sqli.com/occ/v2/",
  headers: (headers) => {
    headers.set('Authorization', { forward: 'Authorization' })
  },
})

g.datasource(stripe)

export default config({
  graph: g,
})
