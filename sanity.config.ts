import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { myStructure } from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'snyt',
  projectId: 'gqdlozy4',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    visionTool(),
    structureTool({
      structure: myStructure,
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
