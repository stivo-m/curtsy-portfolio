'use client';

import HeroSection from '@/components/hero-section/index';
import ProblemListing from '@/components/problem/index';
import ProjectListing from '@/components/projects/index';
import ExperienceListing from '@/components/work-experience/index';

export default function Home() {
	return (
		<main className='max-w-7xl container'>
			<HeroSection />
			<div className='my-10'></div>
			{/* experience */}
			<ExperienceListing />

			{/* projects */}
			<ProjectListing />

			{/* problem solving */}
			<ProblemListing />
		</main>
	);
}
