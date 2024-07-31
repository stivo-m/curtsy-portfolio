import React from 'react';

type Props = {
	title: string;
	description: string;
};

const SectionHeader = ({ title, description }: Props) => {
	return (
		<section className='flex flex-col gap-1 my-4'>
			<h3 className='font-bold text-xl md:text-2xl'>{title}</h3>
			<p className='text-sm md:text-base text-muted-foreground'>
				{description}
			</p>
		</section>
	);
};

export default SectionHeader;
