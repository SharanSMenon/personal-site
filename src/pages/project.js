import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ProjectPreview from '../components/projects-preview'

class ProjectIndex extends React.Component {
  render() {

    const projects = get(this, 'props.data.allContentfulProject.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Projects" />
        <Hero title="Projects" introduction={false}/>
        <ProjectPreview projects={projects}/>
      </Layout>
    )
  }
}

export default ProjectIndex

export const pageQuery = graphql`
query ProjectIndexQuery {
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
