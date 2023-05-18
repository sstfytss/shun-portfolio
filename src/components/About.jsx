import React from 'react'
import ProfileImage from '../assets/heroImage.png'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline
                border-b-4 border-gray-500'>
                    About
                </p>
            </div>

            <div className='flex items-center justify-center h-full space-x-4 md:flex-row'>
                <div className='min-h-full w-1/2'>
                    <h1 className='text-xl sm:text-5xl pb-1 font-bold text-white'>Shun Sakai</h1>
                    <h2 className='text-base sm:text-4xl pb-4 font-bold text-white'>酒井 駿</h2>
                    <h2 className='text-xl sm:text-2xl pb-8 text-white'>Duke University</h2>
                    <p className='text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aliquam ea excepturi, repellendus odit quaerat quibusdam hic sed pariatur deserunt qui quidem ut dicta, fuga nulla vitae repellat explicabo omnis eveniet soluta asperiores. Qui quos magni nulla molestias! Maiores, vitae nulla ex tempore atque explicabo porro veniam. Quos, totam illo.
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