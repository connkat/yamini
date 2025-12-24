import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'welcome',
	title: 'Welcome',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'text',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'subtitle',
			title: 'Subtitle',
			type: 'text',
		}),
		defineField({
			name: 'summary',
			title: 'Summary',
			type: 'text',
			rows: 4,
		}),
		defineField({
			name: 'resumeLink',
			title: 'Resume Link',
			type: 'url',
			validation: (Rule) =>
				Rule.uri({
					scheme: ['http', 'https'],
				}),
		}),
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'subtitle',
		},
	},
})
