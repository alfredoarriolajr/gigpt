import Image from 'next/image';
import React from 'react';
import { Chat } from '../components/Chat';

export default function Portfolio() {
    return (
        <div className='flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16'>
            <div className='flex my-16 flex-col-reverse sm:flex-row items-start mx-4'>
                <div className='flex flex-col pr-8'>
                    <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white text-sky-400'>
                        Alfredo Arriola Jr
                    </h1>
                    <h2 className='text-gray-700 dark:text-gray-200 mb-4 mt-4'>
                        Founder at{' '}
                        <a
                            href='https://notaries.ai'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='font-semibold underline text-sky-400'>
                            Notaries.AI, LLC
                        </a>{' '}
                    </h2>
                    <h2 className='text-gray-700 dark:text-gray-200 mb-4'>
                        Software Engineer at{' '}
                        <a
                            href='https://www.goingup.xyz/about'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='font-semibold underline text-sky-400'>
                            Up Protocol Inc
                        </a>
                    </h2>
                    <h2 className='text-gray-700 dark:text-gray-200 mb-2'>
                        A Notary Public in the state of{' '}
                        <a
                            href='https://www.sos.ca.gov/notary'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='font-semibold underline text-sky-400'>
                            California
                        </a>
                    </h2>
                </div>
                <div className='w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto'>
                    <Image
                        alt='Alfredo Arriola Jr'
                        height={176}
                        width={176}
                        src='/avatar.jpg'
                        sizes='30vw'
                        priority
                        className='rounded-full filter'
                    />
                </div>
            </div>
            <p className='mx-4 text-gray-600 dark:text-gray-400 mb-4'>
                I am a Software Engineer with a strong background in developing
                software solutions to solve problems and meet customer needs. I
                have extensive experience in developing software applications
                using a range of languages and technologies. My knowledge of
                software development methodologies, such as Agile, allows me to
                work on complex projects in a fast-paced environment. I have a
                passion for creating innovative solutions and am constantly
                striving for excellence. I am able to work both independently
                and as part of a team and have excellent communication skills.
            </p>
            <div className='w-full mb-10'>
                <Chat />
            </div>
            <div>
                <h3 className='font-bold text-2xl mx-4 md:text-4xl tracking-tight mb-6 text-black dark:text-white'>
                    Featured Projects
                </h3>
                <div className='flex flex-row mb-4 space-x-2 mx-4'>
                    <div className='flex flex-row items-center'>
                        <a
                            href='https://notaries.ai'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='p-4 border border-sky-400 rounded-md font-bold text-xl md:text-2xl tracking-tight mb-1 text-black dark:text-white'>
                            Notaries.AI
                        </a>
                    </div>
                    <div className='flex flex-row items-center'>
                        <a
                            href='https://cryptonized.net'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='p-4 border border-sky-400 rounded-md font-bold text-xl md:text-2xl tracking-tight mb-1 text-black dark:text-white'>
                            Cryptonized.net
                        </a>
                    </div>
                    <div className='flex flex-row items-center'>
                        <a
                            href='https://gigpt.com'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='p-4 border border-sky-400 rounded-md font-bold text-xl md:text-2xl tracking-tight mb-1 text-black dark:text-white'>
                            GIGPT.com
                        </a>
                    </div>
                </div>
            </div>
            <div className='fixed inset-x-0 bottom-0 text-white'>
                <p className='mb-4 text-base leading-6 text-center'>
                    © 2023{' '}
                    <a
                        href='https://www.linkedin.com/in/alfredoarriolajr/'
                        className='underline text-sky-400'>
                        Alfredo Arriola Jr.
                    </a>
                </p>
            </div>
        </div>
    );
}
