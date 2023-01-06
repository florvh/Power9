import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {content, featured} from '../components/index.module.css'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 

export const query = graphql`
query{
  wpPage {
    homePage {
      description
      featuredProducts
      fieldGroupName
      title
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
  allWpCard {
    edges {
      node {
        card {
          cardName
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
}
`

const IndexPage = ({data: {wpPage: {homePage: page}}}) => {
  const image = getImage(page.picture.localFile)
  return(
  <Layout pageTitle={page.title}>
    <div className={content}>
      <p>{page.description}</p>
      <GatsbyImage image={image}/>
    </div>
  </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage

/*
,{data: {allWpCard: {edges}}}
<div className={featured}>
      {edges.map((item) => {
        const image = getImage(item.node.card.image.localFile)
        return <div key={item.node.id}><Link to={item.node.slug}><GatsbyImage image={image}/></Link><p>{item.node.card.cardName}</p></div>
      })}
    </div>
*/