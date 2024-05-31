// sanity/sanity.client.ts

import { createClient, type ClientConfig } from '@sanity/client'

const config: ClientConfig = {
  projectId: 'gqdlozy4',
  dataset: 'production',
  apiVersion: '2021-08-31',
  useCdn: false,
}

const client = createClient(config)

export default client
