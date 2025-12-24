import { type SchemaTypeDefinition } from 'sanity'

import aboutMe from './aboutMe'
import welcome from './welcome'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [welcome, aboutMe],
}
