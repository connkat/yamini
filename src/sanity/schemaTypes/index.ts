import { type SchemaTypeDefinition } from 'sanity';

import aboutMe from './aboutMe';
import clients from './clients';
import education from './education';
import skillGroup from './skillGroup';
import testimonials from './testimonials';
import welcome from './welcome';
import work from './work';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [welcome, aboutMe, work, skillGroup, clients, education, testimonials],
};
