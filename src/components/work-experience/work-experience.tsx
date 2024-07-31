import React from 'react';
import { WorkExperience } from '@prisma/client';
import { Card, CardContent } from '../ui/card';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { buttonVariants } from '../ui/button';
import Link from 'next/link';

type Props = {
	experience: WorkExperience;
};

const WorkingExperience = ({ experience }: Props) => {
	const endDate = experience.endDate?.toDateString() || 'Present';

	return (
		<Card>
			<CardContent className='p-6 flex flex-row items-center justify-center gap-2'>
				<div className='flex flex-1 flex-col'>
					<h5 className='font-bold text-lg md:text-xl lg:text-xls'>
						{experience.role}
					</h5>
					<span className='text-xs md:text-sm font-semibold text-muted-foreground'>
						{experience.company}
					</span>
					<span className='text-xs text-muted-foreground'>
						{experience.startDate.toDateString()} - {endDate}
					</span>
				</div>
				<Link
					className={buttonVariants({ variant: 'ghost', size: 'icon' })}
					href={`/experience/${experience.id}`}
				>
					<ChevronRightIcon />
				</Link>
			</CardContent>
		</Card>
	);
};

export default WorkingExperience;
