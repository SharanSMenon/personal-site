import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Container from './container'
import { useTrail, animated } from 'react-spring'

const ProjectPreview = ({ projects }) => {
    const trail = useTrail(projects.length, {
        from: { opacity: 0, translateX: -30 },
        to: { opacity: 1, translateX: 0 }
    });

    if (!projects) return null
    if (!Array.isArray(projects)) return null

    return (
        <Container>
            <div className="list-none p-10 grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 relative">
                {trail.map((props, i) => {
                    const project = projects[i]
                    return (
                        <animated.div key={project.slug}
                            style={props}>
                            <div className='flex flex-col justify-between h-full group relative duration-500 shadow-sm rounded-xl transition-all hover:shadow-xl bg-white overflow-hidden'>
                                <GatsbyImage className='rounded-t-xl relative h-72 group-hover:scale-110 transition-all duration-500' image={project.coverImage.gatsbyImage} />
                                <div className='absolute bottom-0 p-3 rounded-b-xl flex-grow text-white bg-opacity-30
                                bg-gradient-to-r from-black group-hover:opacity-0 transition-all duration-500'>
                                    <Link to={`/project/${project.slug}`}>
                                        <h2 className="text-2xl font-bold">{project.name}</h2>
                                    </Link>
                                </div>
                                <Link to={`/project/${project.slug}`}>
                                    <div className='absolute top-0 left-0 w-full h-full rounded-xl opacity-0
                                    duration-500 transform scale-110
                                                group-hover:scale-100 group-hover:opacity-90 flex flex-col justify-end
                                                transition-all bg-gradient-to-r from-cyan-500 to-blue-500'>
                                        <div className='p-3 text-white text-center mb-5'>
                                            <h2 className='text-2xl font-bold opacity-100'>{project.name}</h2>
                                            {project.shortDescription?.raw && renderRichText(project.shortDescription)}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </animated.div> // li
                    )
                })}
            </div> { /**ul */}
        </Container>
    )
}

export default ProjectPreview
