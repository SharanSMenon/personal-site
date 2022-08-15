import React from 'react'
import {  graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Seo from '../components/seo'
import Layout from '../components/layout'
import * as styles from './blog-post.module.css'
import AnimateIn from '../components/animate-in'
import ProjectHero from '../components/project-hero'


class ProjectPageTemplate extends React.Component {
  render() {
    const project = get(this.props, 'data.contentfulProject')
    const plainTextDescription = documentToPlainTextString(
      JSON.parse(project.shortDescription.raw)
    )

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
          title={project.name}
          description={plainTextDescription}
          image={`http:${project.coverImage.resize.src}`}
        />
        <ProjectHero
          image={project.coverImage?.gatsbyImage}
          title={project.name}
          content={project.shortDescription}
          author={project.author}
          url={project.url}
          scUrl = {project.sourceCodeUrl}
        />
        <div className="p-10 w-full">
          <div className={styles.article}>
            <AnimateIn >
              <div className={styles.body}>
                {project.article?.raw && renderRichText(project.article, options)}
              </div>
            </AnimateIn >
          </div>
        </div>
      </Layout>
    )
  }
}

export default ProjectPageTemplate

export const pageQuery = graphql`
  query ProjectBySlug(
    $slug: String!
  ) {
    contentfulProject(slug: { eq: $slug }) {
      slug
      name
      url
      sourceCodeUrl
      author {
        name
        image {
          gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 50, height: 50)
        }
      }
      coverImage {
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      article {
        raw
      }
      shortDescription {
        raw
      }
    }
  }
`
