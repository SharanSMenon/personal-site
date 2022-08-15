import React from 'react'
import { Link } from 'gatsby'
import { useSpring, animated } from 'react-spring'
import * as styles from './navigation.module.css'
import { FaAngleDown } from '@react-icons/all-files/fa/FaAngleDown'

const Navigation = () => {
  const props = useSpring({
    to: { translateY: 0, opacity: 1 },
    from: { translateY: -5, opacity: 0 },
    delay: 200,
  })

  const pages = ["Home", "Blog", "Projects"]
  const urls = ["", "blog", "project"]

  return (
    <nav id="top" role="navigation" className="flex flex-row w-full justify-between py-5 px-10 items-center bg-blue-50 md:mb-20 lg:mb-10 xs:mb-10" aria-label="Main">
      <Link to="/">
        <animated.span
          className="font-bold text-2xl xs:text-3xl hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-cyan-500 to-blue-500"
          style={props}
        >Sharan Sajiv Menon</animated.span>
      </Link>
      <ul className='md:hidden block list-none group relative cursor-pointer'>
        <animated.li className="items-center inline-flex" style={props}>
          Pages <FaAngleDown />
        </animated.li>
        <div className='absolute z-10 invisible flex flex-col bg-white rounded-lg
        group-hover:scale-100 group-hover:opacity-100 group-hover:visible
        p-5 shadow-lg gap-1 -left-20 opacity-0 scale-90 top-8 w-40
        transition-all duration-300'>
          {pages.map((name, i) => (
            <Link to={`/${urls[i]}`} activeClassName="active">
              <li className={styles.navigationItemDD}>
                {name}
              </li>
            </Link>
          ))}
        </div>
      </ul>
      <ul className="md:flex list-none gap-5 none hidden">
        {pages.map((name, i) => (
          <Link to={`/${urls[i]}`} activeClassName="active">
            <animated.li className={styles.navigationItem} style={props}>
              {name}
            </animated.li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
