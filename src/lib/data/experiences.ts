import { WorkExperience } from '@prisma/client';
import { v4 } from 'uuid';

export const experiences: WorkExperience[] = [
	{
		id: v4(),
		company: 'Volane International, Dubai, UAE',
		role: 'Software Engineer',
		startDate: new Date('2022-06-01'),
		endDate: null,
		createdAt: new Date(),
		deletedAt: new Date(),
		updatedAt: new Date(),
		languages: ['Flutter', 'Go', 'PostgreSQL', 'NextJS'],
		description: '',
		primary: false,
	},

	{
		id: v4(),
		company: 'Savannah Informatics, Nairobi, Kenya',
		role: 'Software Engineer',
		startDate: new Date('2021-06-01'),
		endDate: new Date('2022-06-01'),
		createdAt: new Date(),
		deletedAt: new Date(),
		updatedAt: new Date(),
		languages: ['Flutter', 'Go', 'PostgreSQL', 'NextJS'],
		description: '',
		primary: false,
	},

	{
		id: v4(),
		company: 'iFunza, United States',
		role: 'Software Engineer',
		startDate: new Date('2022-02-01'),
		endDate: new Date('2022-07-01'),
		createdAt: new Date(),
		deletedAt: new Date(),
		updatedAt: new Date(),
		languages: ['Flutter', 'Go', 'PostgreSQL', 'NextJS'],
		description: '',
		primary: false,
	},
];
