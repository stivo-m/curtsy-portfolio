import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { HomeIcon } from '@radix-ui/react-icons';

export type ProblemItem = {
	icon: typeof HomeIcon;
	title: string;
	description: string;
};

type Props = {
	item: ProblemItem;
};

const ProblemCard = ({ item: { title, description, icon: Icon } }: Props) => {
	return (
		<Card>
			<CardHeader className='px-6'>
				<Icon className='w-8 h-8' />
				<h4 className='font-bold text-lg'>{title}</h4>
			</CardHeader>
			<CardDescription className='px-6'>
				<span className='text-sm text-muted-foreground'>{description}</span>
			</CardDescription>
			<CardFooter />
		</Card>
	);
};

export default ProblemCard;
