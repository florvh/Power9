import * as React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 
import Layout from "../components/layout"
import Seo from "../components/seo"
import { container,card } from "../components/AllwpCard.module.css"

export const query = graphql`
query{
  allWpCard {
    edges {
      node {
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
  }
}
`

const CardsOverview = ({data: {allWpCard: {edges} }}) => {
  
  return(
  <Layout pageTitle="Cards">
    <div className={container}>
      {edges.map((item) => {
          const image = getImage(item.node.card.image.localFile)
          return <div key={item.node.id}><Link to={item.node.slug}><GatsbyImage className={card} image={image}/></Link><p>{item.node.card.cardName}</p></div>
        })}
    </div>
  </Layout>
  )
}

export const Head = () => <Seo title="Cards Overview" />

export default CardsOverview
