import {defineField, defineType} from 'sanity';

export default defineType({
  name: 'aboutMe',
  title: 'About Me',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'mainContent',
      title: 'Main Content',
      type: 'text',
      rows: 6,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'secondaryContent',
      title: 'Secondary Content',
      type: 'text',
      rows: 6,
    }),
  ],
  preview: {
    select: {
      title: 'mainContent',
      media: 'image',
    },
  },
});
