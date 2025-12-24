import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      updatedAt: '_updatedAt',
    },
    prepare({ updatedAt }) {
      return {
        title: `Last updated: ${new Date(updatedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })}`,
      };
    },
  },
});
