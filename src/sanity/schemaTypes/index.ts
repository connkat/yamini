import { type SchemaTypeDefinition } from 'sanity';

import aboutMe from './aboutMe';
import skillGroup from './skillGroup';
import welcome from './welcome';
import work from './work';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [welcome, aboutMe, work, skillGroup],
};
