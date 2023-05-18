import React from 'react'
import ProfileImage from '../assets/heroImage.png'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-white text-black'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full'>
            <div className='pb-8 pt-16'>
                <p className='text-4xl font-bold inline
                border-b-4 border-gray-500'>
                    ABOUT
                </p>
            </div>

            <div className='flex items-center justify-center h-full space-x-8 md:flex-row'>
                <div className='min-h-full w-1/2'>
                    <h1 className='text-3xl sm:text-4xl pb-1 font-bold text-black'>Shun Sakai</h1>
                    <h2 className='text-3xl sm:text-4xl pb-4 text-black'>酒井 駿</h2>
                    <h2 className='text-xl sm:text-2xl pb-8 text-black'>Duke University</h2>
                    <p className='text-base pb-16'>
                        I am a rising junior at Duke University double majoring in Electrical and Computer Engineering and Computer Science with a certificate in Innovation and Entrepreneurship. My passions lie at the intersection of hardware and software technologies, and I aspire to develop innovative products for the betterment of the global community. 
                    </p>
                </div>

                <div className='min-h-full w-1/2'>
                    <img src={ProfileImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About