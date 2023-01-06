import * as React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import { 
  container, 
  nav, 
  navLinks, 
  navLinkItem, 
  navLinkText, 
  siteTitle 
} from './layout.module.css'
import logo from '../images/mtg-logo.png'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <header className={siteTitle}>
          <img src={logo}></img>
          <title>{pageTitle} | {data.site.siteMetadata.title}</title>
          <h1>{data.site.siteMetadata.title}</h1>
          <nav className={nav}>
            <ul className={navLinks}>
              <ol className={navLinkItem}>
                <Link className={navLinkText} to="/">
                  Home
                </Link>
              </ol>
              <ol>
                <Link className={navLinkText} to="/cards">
                  Cards
                </Link>
              </ol>
            </ul>
          </nav>
        </header>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <footer>
        <p>Website gemaakt in opdracht van de AP hogeschool</p>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout