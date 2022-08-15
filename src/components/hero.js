import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { useSpring, animated } from 'react-spring'
import SmoothScroll from './smooth-scroll'

const Hero = ({ image, introduction, title, content, smoothScroll }) => {
  const props = useSpring({
    to: { translateY: 0, opacity: 1 },
    from: { translateY: 20, opacity: 0 },
    delay: 0,
  })
  const props2 = useSpring({
    to: { translateY: 0, opacity: 1 },
    from: { translateY: 20, opacity: 0 },
    delay: 200,
  })
  const props3 = useSpring({
    to: { translateY: 0, opacity: 1 },
    from: { translateY: 20, opacity: 0 },
    delay: 400,
  })
  return (
    <div className="relative flex lg:flex-row flex-col lg:items-center justify-between p-10 gap-10">
      <div className="lg:w-5/12 relative">
        {/* <div className='absolute bg-blue-200 w-full h-full top-0 left-0'></div> */}
        <animated.h1 style={props}
          className="relative text-6xl mb-2">{introduction && "Hello, I am"} <span class="font-extrabold">{title}</span></animated.h1>
        {content && (
          <animated.div className="relative" style={props2}>{renderRichText(content)}</animated.div>
        )}
        {smoothScroll && (
          <div>
            <br></br>
            <SmoothScroll animate={true} location={"projects"} />
          </div>
        )
        }

      </div>
      {image && (
        <animated.div style={props3} className="lg:w-7/12">
          <GatsbyImage className="h-auto lg:rounded-full rounded-lg" alt={title} image={image} />
        </animated.div>
      )}
    </div>
  )
}

export default Hero
