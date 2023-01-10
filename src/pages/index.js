import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {content, featured, card} from '../components/index.module.css'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 

export const query = graphql`
query{
  wpPage (slug: {eq: "home"}) {
    homePage {
      description
      featuredProducts {
        ... on WpCard {
          id
          slug
          card {
            cardName
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
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
}

`

const IndexPage = ({data}) => {
  const featuredCards = data.wpPage.homePage.featuredProducts
  const homeData = data.wpPage.homePage
  const image = getImage(homeData.picture.localFile)
  console.log(featuredCards)
  return(
  <Layout pageTitle={homeData.title}>
    <div className={content}>
      <p>{homeData.description}</p>
      <GatsbyImage image={image}/>
    </div>
    <h1>Featured</h1>
    <div className={featured}>
      {featuredCards.map((item) => {
        const image2 = getImage(item.card.image.localFile)
        return <div key={item.id}><Link to={`/cards/${item.slug}`}><GatsbyImage className={card} image={image2}/></Link><p>{item.card.cardName}</p></div>
      })}
    </div>
  </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage

/*
: {wpPage: {homePage: page}}
,{data: {allWpCard: {edges}}}

*/