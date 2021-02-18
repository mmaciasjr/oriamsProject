import React from 'react'
import { userStaticQuery, graphql } from 'gatsby'
const getData = graphql`
site {
    siteMetadata {
      author
      data
      description
      person {
        age
        name
      }
      title
    }
  }
}
`
const Header = () => {
  return (
    <div>
      <h1>Welcome to my Header page</h1>
    </div>
  )
}
export default Header