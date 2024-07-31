import React from 'react';
import Link from 'next/link';
import { Project } from '@prisma/client';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';

type Props = {
	project: Project;
};

const ProjectCard = ({ project }: Props) => {
	const endDate = project.endDate?.toDateString() || 'Present';
	return (
		<Card>
			<CardHeader className='px-6'>
				<h4 className='font-bold text-lg'>{project.company}</h4>
				<p className='text-xs text-muted-foreground'>
					{project.startDate.toDateString()} - {endDate}
				</p>
			</CardHeader>
			<CardDescription className='px-6'>
				<span className='text-sm text-muted-foreground'>
					{project.shortDescription}
				</span>
			</CardDescription>
			<CardFooter className='p-6 flex flex-col gap-6 md:flex-row md:justify-between'>
				<div className='flex flex-1 flex-row divide-x gap-1'>
					{project.languages.map((lang, idx) => {
						return (
							<span
								className='text-xs font-bold text-muted-foreground pl-2'
								key={idx}
							>
								{lang}
							</span>
						);
					})}
				</div>

				<Link
					href={`/projects/${project.id}`}
					className={cn(
						buttonVariants({
							size: 'sm',
							variant: 'link',
						}),
						'text-green-600 hover:text-green-500',
					)}
				>
					Learn more ...
				</Link>
			</CardFooter>
		</Card>
	);
};

export default ProjectCard;
