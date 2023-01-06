import * as React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 
import Layout from "../../components/layout"
import { container,details,card } from "../../components/wpCard.module.css"

export const query = graphql`
query ($id: String){
  wpCard(id: {eq: $id}) {
    card {
      cardColor
      cardName
      cardText
      description
      fieldGroupName
      illustrator
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      title
      releaseDate
      manaCost
      legality
    }
  }
}
`

const CardPage = ({data: {wpCard: {card: cards}}}) => {
  const image = getImage(cards.image.localFile)
  return (
    <Layout pageTitle={cards.title}>
      <div className={container}>
        <div className={details}>
          <p>Name: {cards.cardName}</p>
          <p>Card color: {cards.cardColor}</p>
          <p>CardText: {cards.cardText}</p>
          <p>Illustrator: {cards.illustrator}</p>
          <p>Released: {cards.releaseDate}</p>
          <p>Mana cost: {cards.manaCost}</p>
          <p>Legality: {cards.legality}</p>
          <p>description: {cards.description}</p>
        </div>
        <GatsbyImage className={card} image={image}/>
      </div>
    </Layout>
  )
}

export default CardPage