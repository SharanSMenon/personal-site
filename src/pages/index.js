import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import "../styles/global.css";
import AnimateIn from '../components/animate-in';
import ProjectPreview from '../components/projects-preview';
import SmoothScroll from '../components/smooth-scroll';

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const projects = get(this, 'props.data.allContentfulProject.nodes')
    const [author] = get(this, 'props.data.allContentfulPerson.nodes')

    return (
      <Layout location={this.props.location}>
        <div className="mb-10" >
          <Hero
            image={author.heroImage.gatsbyImage}
            title={author.name}
            introduction={true}
            content={author.shortBio}
            smoothScroll={true}
          />
        </div>
        <div id="projects" className="relative mb-20">
          <AnimateIn strong={true}>
            <Hero
              title={"Projects"}
            />
            <ProjectPreview projects={projects.slice(0, 3)} />
            <SmoothScroll location={"posts"} />
          </AnimateIn>
        </div>
        <div id="posts" className="relative w-full mb-20">
          <AnimateIn strong={true}>
            <Hero
              title={"Posts"}
            />
            <ArticlePreview posts={posts.slice(0, 3)} />
            <SmoothScroll location={"top"} flip={true}/>
          </AnimateIn>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        author {
          name
          image {
            gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 50, height: 50)
          }
        }
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          raw
        }
        title
        heroImage: image {
          gatsbyImage(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1180
          )
        }
      }
    }
    allContentfulProject {
      nodes {
        name
        slug
        author {
          name
          image {
            gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 50, height: 50)
          }
        }
        coverImage {
          gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 424, height: 212)
        }
        shortDescription {
          raw
        }
      }
    }
  }
`
