import { Project } from '@prisma/client';
import { v4 } from 'uuid';

export const projects: Project[] = [
	{
		id: v4(),
		company: 'Being, United States',
		startDate: new Date('2024-02-01'),
		endDate: new Date('2024-07-30'),
		createdAt: new Date(),
		deletedAt: new Date(),
		updatedAt: new Date(),
		links: [],
		longDescription: '',
		promoted: true,
		languages: ['Flutter', 'Go', 'PostgreSQL', 'NextJS'],
		shortDescription:
			'Being is a daily affirmation generator that uses a recommendation engine to personalize affirmations based on user profiles and calendar events. It integrates with Stripe for payments and supports Google and Apple for OAuth authentication.',
	},

	{
		id: v4(),
		company: 'Mobi Tyres, Nairobi, Kenya',
		startDate: new Date('2024-02-01'),
		endDate: new Date('2024-07-30'),
		createdAt: new Date(),
		deletedAt: new Date(),
		updatedAt: new Date(),
		links: [],
		longDescription: '',
		promoted: true,
		languages: ['Flutter', 'Laravel', 'PostgreSQL', 'NextJS'],
		shortDescription:
			'Mobi Tyres is a streamlined booking and inventory management system for tyre services. It enhances customer retention with efficient scheduling and real-time inventory updates.',
	},

	{
		id: v4(),
		company: 'Valor, Nairobi, Kenya',
		startDate: new Date('2024-07-01'),
		endDate: null,
		createdAt: new Date(),
		deletedAt: new Date(),
		updatedAt: new Date(),
		links: [],
		longDescription: '',
		promoted: true,
		languages: ['Flutter', 'Laravel', 'PostgreSQL', 'NextJS'],
		shortDescription:
			'Valor is a peer-to-peer lending network where investors create fund pools and set their own interest rates and repayment terms. It features auto-collection of loans and an in-house scoring and verification system for borrowers.',
	},
];
