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
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <nav className={nav}>
          <header className={siteTitle}>
            <h1>{data.site.siteMetadata.title}</h1>
          </header>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout