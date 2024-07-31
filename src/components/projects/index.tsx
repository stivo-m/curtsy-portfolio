import { projects } from '@/lib/data/projects';
import SectionHeader from '../section-header';
import ProjectCard from './project-card';

const ProjectListing = () => {
	return (
		<section className='my-16'>
			<SectionHeader
				title='Technical Projects'
				description='I have led diverse projects like Being, a personalized affirmation generator, Valor, a peer-to-peer lending network with custom investor terms and in-house scoring, and Mobi Tyres, a streamlined tyre booking and inventory system. These projects showcase my ability to innovate and deliver user-focused solutions across fintech and service industries.'
			/>
			<div className='flex flex-col lg:grid lg:grid-cols-3 gap-3 lg:gap-4 mt-6'>
				{projects.map((project) => {
					return <ProjectCard key={project.id} project={project} />;
				})}
			</div>
		</section>
	);
};

export default ProjectListing;
