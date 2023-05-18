import React from 'react'

import python from "../assets/python.png";
import swift from "../assets/swift.png";
import java from "../assets/java.png";
import cplusplus from "../assets/c++.png";
import postgres from "../assets/postgres.png";
import firebase from "../assets/firebase.png";
import plotly from "../assets/plotly.png";
import git from "../assets/git.png";

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: java,
            title: 'Java',
            style: 'shadow-blue-500'
        },
        {
            id: 2,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-500'
        },
        {
            id: 3,
            src: swift,
            title: 'Swift',
            style: 'shadow-orange-500'
        },

        {
            id: 4,
            src: cplusplus,
            title: 'C++',
            style: 'shadow-blue-800'
        },
        {
            id: 5,
            src: firebase,
            title: 'Firebase',
            style: 'shadow-orange-400'
        },
        {
            id: 6,
            src: postgres,
            title: 'PostgreSQL',
            style: 'shadow-sky-400'
        },
        {
            id: 7,
            src: git,
            title: 'Git',
            style: 'shadow-orange-600'
        },
        {
            id: 8,
            src: plotly,
            title: 'Plotly/Dash',
            style: 'shadow-gray-800'
        },
    ]

  return (
    <div name='experience' className='bg-white
    w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                    LANGUAGES/LIBRARIES/TECH.
                </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    techs.map(({id, src, title, style}) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>

                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience