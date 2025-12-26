import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'skillGroup',
  title: 'Skill Group',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Order #',
      type: 'number',
      options: {
        list: [
          { title: '1', value: 1 },
          { title: '2', value: 2 },
          { title: '3', value: 3 },
          { title: '4', value: 4 },
          { title: '5', value: 5 },
          { title: '6', value: 6 },
          { title: '7', value: 7 },
          { title: '8', value: 8 },
          { title: '9', value: 9 },
          { title: '10', value: 10 },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Skill Group Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Skill Name',
              type: 'string',
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
      validation: Rule => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      order: 'order',
    },
    prepare({ title, order }) {
      return {
        title: title || 'Untitled',
        subtitle: `Order: ${order}`,
      };
    },
  },
});
