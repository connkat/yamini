import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'education',
	title: 'Education',
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
				],
			},
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'school',
			title: 'School',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'date',
			title: 'Date',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'major',
			title: 'Major',
			type: 'string',
			description: 'Optional major',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: Rule => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'school',
			order: 'order',
			media: 'image',
		},
		prepare({ title, subtitle, order, media }) {
			return {
				title: title || 'Untitled',
				subtitle: `${subtitle} - Order: ${order}`,
				media,
			};
		},
	},
});
