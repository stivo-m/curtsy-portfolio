import { ProblemItem } from '@/components/problem/problem-card';
import { v4 } from 'uuid';
import { FileIcon, DashboardIcon, LoopIcon } from '@radix-ui/react-icons';

export const problems: ProblemItem[] = [
	{
		icon: DashboardIcon,
		title: 'Engage a domain expert',
		description:
			'Domain experts have proper knowledge of the field of expertise. Doing some research with their assistance is necessary to understand the complexity of the specific problem I am trying to solve',
	},

	{
		icon: FileIcon,
		title: 'Make a plan',
		description:
			'Planning is important in providing a sustainable solution. I use tools such as trello and jira to help me plan out the work items and create a time-box for prompt delivery of my work',
	},
	{
		icon: LoopIcon,
		title: 'Execute',
		description:
			'With a solid plan, execution to provide the MVP over the shortest time possible is paramount. I ensure to provide rapid changes for continuous integration my customer’s feedback',
	},
];
