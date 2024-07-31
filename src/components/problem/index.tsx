import { problems } from '@/lib/data/problem';
import SectionHeader from '../section-header';
import ProblemCard from './problem-card';

const ProblemListing = () => {
	return (
		<section className='my-16'>
			<SectionHeader
				title='How I solve problems'
				description='Technical difficulties have varying solutions depending on the context within which they occur. My approach to solving such problems is simple and straight forward '
			/>
			<div className='flex flex-col lg:grid lg:grid-cols-3 gap-3 lg:gap-4 mt-6'>
				{problems.map((problem, idx) => {
					return <ProblemCard key={idx} item={problem} />;
				})}
			</div>
		</section>
	);
};

export default ProblemListing;
