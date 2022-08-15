import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Container from './container'
import Tags from './tags'
import { useTrail, animated } from 'react-spring'

const ArticlePreview = ({ posts }) => {
  const trail = useTrail(posts.length, {
    from: { opacity: 0, translateX: -30 },
    to: { opacity: 1, translateX: 0 }
  });

  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <div className="list-none p-10 grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 relative">
        {trail.map((props, i) => {
          const post = posts[i]
          return (
            <animated.div key={post.slug}
              style={props}
            >
              <div className='
              flex flex-col justify-between h-full duration-500
              shadow-sm rounded-xl transition-all hover:shadow-xl hover:-translate-y-1 bg-white
              '>
                <Link to={`/blog/${post.slug}`}>
                  <GatsbyImage className='rounded-t-lg relative h-48' image={post.heroImage.gatsbyImage} />
                </Link>
                <div className='p-3 rounded-xl flex-grow bg-white relative -translate-y-5'>
                  <div className="flex flex-col gap-3 my-2">
                    <Tags tags={post.tags} />
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-bold">{post.title}</h2>
                  </Link>
                  <div className=''>
                    {post.description?.raw && renderRichText(post.description)}
                  </div>
                </div>
                <br></br>
                <div className='p-3 flex flex-row gap-3 -translate-y-6 -mb-6'>
                  <GatsbyImage image={post.author.image.gatsbyImage}
                    class="object-contain h-full w-12 rounded-full"></GatsbyImage>
                  <div class="flex flex-col gap-0">
                    <h2 class="font-bold">{post.author.name}</h2>
                    <p class="text-slate-700 text-sm">{post.publishDate}</p>
                  </div>
                </div>
              </div>
            </animated.div> // li
          )
        })}
      </div> { /**ul */}
    </Container>
  )
}

export default ArticlePreview
