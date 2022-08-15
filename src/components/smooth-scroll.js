import { FaAngleUp } from '@react-icons/all-files/fa/FaAngleUp'
import { FaAngleDown } from '@react-icons/all-files/fa/FaAngleDown'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

const SmoothScroll = ({ location, flip, animate }) => (
    <div className='w-full flex justify-center'>
        <ScrollLink
            to={location}
            smooth={true}>
            <div className={`border-gray-400 flex border-2 w-10 h-10 
              rounded-full justify-center items-center
              hover:bg-gradient-to-r from-cyan-500 to-blue-500
              hover:text-white hover:border-none transition-all cursor-pointer ${animate && "animate-bounce"}`}>
                {flip && <FaAngleUp className='transition-all' />}
                {!flip && <FaAngleDown className='transition-all' />}
            </div>
        </ScrollLink>
    </div>
)

export default SmoothScroll