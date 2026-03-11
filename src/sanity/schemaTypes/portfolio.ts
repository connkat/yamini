import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'folderImage',
      title: 'Folder Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'deliverablesTitle',
      title: 'Deliverables Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'deliverables',
      title: 'Deliverables',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'text',
    }),
    defineField({
      name: 'youtubeEmbeds',
      title: 'YouTube Embeds',
      description: 'Paste the full YouTube embed code (the <iframe> HTML from YouTube Share > Embed)',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({
      name: 'screenshotImages',
      title: 'Screenshot Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'folderImage',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Untitled',
        media,
      };
    },
  },
});
