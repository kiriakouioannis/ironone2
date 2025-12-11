import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/sanity/schemaTypes' // schema se schemaTypes kar do
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {structure} from './src/sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'IRONONE',
  basePath: '/studio',

  projectId,
  dataset,

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes, // schema ki jagah schemaTypes use karo
  },
})