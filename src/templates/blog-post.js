import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
// import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Tags from '../components/tags'
import * as styles from './blog-post.module.css'
import BlogHero from '../components/blog-hero'
import AnimateIn from '../components/animate-in'
require(`katex/dist/katex.min.css`)


class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')
    const plainTextDescription = documentToPlainTextString(
      JSON.parse(post.description.raw)
    )
    const markdown = post.markdown.childMarkdownRemark
    console.log(markdown)
    const timeToRead = markdown.timeToRead

    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const { gatsbyImage, description } = node.data.target
          return (
            <GatsbyImage
              image={getImage(gatsbyImage)}
              alt={description}
            />
          )
        },
      },
    };

    return (
      <Layout location={this.props.location}>
        <Seo
          title={post.title}
          description={plainTextDescription}
          image={`http:${post.heroImage.resize.src}`}
        />
        <BlogHero
          image={post.heroImage?.gatsbyImage}
          title={post.title}
          content={post.description}
          author={post.author}
          date={`${post.publishDate} - ${timeToRead} minute read`}
        />
        <div className="p-10 w-full">
          <div className={styles.article}>
            <AnimateIn threshold={0}>
              <div className={styles.body}>
                <div dangerouslySetInnerHTML={{__html:markdown.html}}></div>
              </div>
            </AnimateIn >
            <AnimateIn>
              <Tags tags={post.tags} />
            </AnimateIn>
            <AnimateIn>
              <div className='mt-10'>
                {(previous || next) && (
                  <nav>
                    <ul className={styles.articleNavigation}>
                      {next && (
                        <li>
                          <Link to={`/blog/${next.slug}`} rel="next">
                            ← {next.title}
                          </Link>
                        </li>
                      )}
                      {previous && (
                        <li>
                          <Link to={`/blog/${previous.slug}`} rel="prev">
                            {previous.title} →
                          </Link>
                        </li>
                      )}
                    </ul>
                  </nav>
                )}
              </div>
            </AnimateIn>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      author {
        name
        image {
          gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 50, height: 50)
        }
      }
      publishDate(formatString: "MMMM Do, YYYY")
      rawDate: publishDate
      heroImage {
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      markdown {
				childMarkdownRemark {
					html
          timeToRead
        }
      }
      tags
      description {
        raw
      }
    }
    previous: contentfulBlogPost(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulBlogPost(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`

