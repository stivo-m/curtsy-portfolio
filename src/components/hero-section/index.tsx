import { cn } from '@/lib/utils';
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button, buttonVariants } from '../ui/button';
import { Card, CardContent } from '../ui/card';

const HeroSection = () => {
	return (
		<div className='w-full'>
			<section className='flex flex-col md:flex-row md:items-center md:justify-center gap-5 mt-20'>
				<section className='flex flex-col md:flex-1 gap-8'>
					<div className='flex flex-col'>
						<h5 className='font-light text-sm md:text-2xl'>Hi,</h5>
						<h5 className='font-light text-sm md:text-2xl'>
							I&apos;m <span className='font-bold'>Steve</span>
						</h5>
					</div>

					<div>
						<p className='text-3xl md:text-4xl lg:text-6xl font-light'>
							I create beautiful <span className='font-bold'>website</span> and
							<span className='font-bold'> mobile</span> experiences
						</p>
					</div>

					<p className='text-sm text-muted-foreground md:hidden'>
						I am a seasoned software engineer with expertise in developing
						user-centric applications and innovative solutions in the fintech
						and service industries.
					</p>

					<div className='w-full flex flex-row items-center justify-between md:justify-normal gap-4'>
						<Button className='w-full md:w-fit'>Let&apos;s talk</Button>
						<Link
							href={'/projects'}
							className={cn(
								buttonVariants({ variant: 'outline' }),
								'w-full md:w-fit',
							)}
						>
							My Projects
						</Link>
					</div>
				</section>

				<Image
					src={'/steven-maina.png'}
					alt={'Steven Maina'}
					width={639}
					height={594}
					className='hidden md:flex md:flex-1'
				/>
			</section>

			<Card className='hidden md:flex'>
				<CardContent className='p-10 flex flex-row gap-8'>
					<p className='text-base text-muted-foreground flex-1'>
						I am a seasoned software engineer with expertise in developing
						user-centric applications and innovative solutions in the fintech
						and service industries.
					</p>

					<div className='w-32 flex flex-row gap-4'>
						<Link
							href={'https://x.com/stivo-m'}
							target='_blank'
							className={buttonVariants({
								size: 'icon',
								variant: 'ghost',
							})}
						>
							<TwitterLogoIcon className='w-8 h-8' />
						</Link>
						<Link
							href={'https://github.com/stivo-m'}
							target='_blank'
							className={buttonVariants({
								size: 'icon',
								variant: 'ghost',
							})}
						>
							<GitHubLogoIcon className='w-8 h-8' />
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default HeroSection;
