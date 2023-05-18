import React from 'react'
import { MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-900'>

        <div className='max-w-screen-lg mx-auto flex flex-col
        items-center justify-start h-full px-2 md:flex-row'>
            <div className='flex flex-col justify-center h-full w-3/4'>
                <h2 className='text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-green-300 from-cyan-300'>
                    Hi, I'm Shun.
                </h2>
                <h2 className='text-4xl sm:text-5xl font-bold text-white'>
                    I am a student, engineer, and an aspiring developer.
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I have 10 years of experience building and designing software.
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2
                    flex items-center rounded-md bg-gradient-to-r
                     from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={20} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home