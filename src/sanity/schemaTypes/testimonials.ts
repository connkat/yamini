import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
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
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Testimonial Text',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'text',
      order: 'order',
    },
    prepare({ title, subtitle, order }) {
      return {
        title: title || 'Untitled',
        subtitle: `Order: ${order} - ${subtitle?.substring(0, 60)}...`,
      };
    },
  },
});
