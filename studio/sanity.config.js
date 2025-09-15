// studio/sanity.config.js

import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
// 1. Import your schemas
import article from './schemaTypes/article' // ADD THIS
import author from './schemaTypes/author'
import category from './schemaTypes/category'
// import post from './schemaTypes/post' // REMOVE THIS
import blockContent from './schemaTypes/blockContent'

export default defineConfig({
  name: 'default',
  title: 'Interactive Science Platform Studio',

  projectId: 'uwl1dhz5', // Replace with your actual project ID
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    // 2. Add your schemas to this array
    types: [article, author, category, blockContent], // UPDATE THIS LINE
  },
})
