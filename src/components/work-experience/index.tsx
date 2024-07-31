import { experiences } from '@/lib/data/experiences';
import SectionHeader from '../section-header';
import WorkingExperience from './work-experience';

const ExperienceListing = () => {
	return (
		<section className='my-16'>
			<SectionHeader
				title='Working Experience'
				description='I have extensive experience leading the development of user-centric applications in fintech and other industries, leveraging technologies like GoLang, Flutter and React to enhance engagement, operational efficiency, and project delivery.'
			/>
			<div className='flex flex-col lg:grid lg:grid-cols-3 gap-3 lg:gap-4 mt-6'>
				{experiences.map((experience) => {
					return (
						<WorkingExperience key={experience.id} experience={experience} />
					);
				})}
			</div>
		</section>
	);
};

export default ExperienceListing;
