import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useSpring, animated } from 'react-spring'
import AuthorBlock from './author-block'

const ProjectHero = ({ image, title, url, author, date, scUrl }) => {
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
                <animated.h1 style={props}
                    className="
                    hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-cyan-500 to-blue-500
                        relative md:text-6xl text-5xl mb-2 font-extrabold break-word hyphens-auto
                    ">
                    <a href={url} rel="noreferrer" target="_blank">{title}</a>
                </animated.h1>
                {url && (
                    <animated.div className="relative mt-10" style={props2}>
                        <AuthorBlock url={true} name={author.name} image={author.image} date={scUrl} />
                    </animated.div>
                )}
            </div>
            {image && (
                <animated.div style={props3} className="lg:w-7/12">
                    <GatsbyImage className="h-auto rounded-md" alt={title} image={image} />
                </animated.div>
            )}
        </div>
    )
}

export default ProjectHero
