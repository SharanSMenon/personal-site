import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout'
import Seo from '../components/seo';
import Hero from '../components/hero';
import { get } from 'lodash';
import "../templates/blog-post.css";
import AnimateIn from '../components/animate-in';

class AboutPage extends React.Component {
    render() {

        const person = this.props.data.allContentfulPerson.nodes[0];
        const html = person.about.childMarkdownRemark.html;

        return (
            <Layout location={this.props.location}>
                <Seo title="About Me" />
                <Hero title={"About Me"}
                />

                <div className="p-10 w-full" id="projects">
                    <div className="article">
                        <AnimateIn threshold={0}>
                            <div className="body">
                                <div dangerouslySetInnerHTML={{ __html: html }}></div>
                            </div>
                        </AnimateIn >
                    </div>
                </div>
            </Layout>
        )
    }
}

export default AboutPage;


export const pageQuery = graphql`
                    query AboutIndexQuery {
                        allContentfulPerson {
                        nodes {
                        name
      title
                    shortBio {
                        raw
                    }
                    heroImage: image {
                        gatsbyImage(
                            layout: CONSTRAINED
                    placeholder: BLURRED
                    width: 1180
                    )
      }
                    about {
                        childMarkdownRemark {
                        html
                    }
      }
    }
  }
}
                    `