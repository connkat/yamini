import { type SchemaTypeDefinition } from 'sanity'

import welcome from './welcome'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [welcome],
}
