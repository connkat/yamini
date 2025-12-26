import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'clients',
	title: 'Clients',
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
					{ title: '11', value: 11 },
					{ title: '12', value: 12 },
					{ title: '13', value: 13 },
					{ title: '14', value: 14 },
					{ title: '15', value: 15 },
				],
			},
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'name',
			title: 'Client Name',
			type: 'string',
			validation: Rule => Rule.required(),
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
		defineField({
			name: 'url',
			title: 'URL',
			type: 'url',
			validation: Rule => Rule.uri({
				scheme: ['http', 'https'],
			}),
		}),
	],
	preview: {
		select: {
			title: 'name',
			order: 'order',
			media: 'image',
		},
		prepare({ title, order, media }) {
			return {
				title: title || 'Untitled',
				subtitle: `Order: ${order}`,
				media,
			};
		},
	},
});
