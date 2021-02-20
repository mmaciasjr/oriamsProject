import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
const getData = graphql`
query InitialQuery {
site {
info: siteMetadata{
      person {
        age
        name
      }
      author 
      description
      data
      title
    }
  }
}
`
const Header = () => {
  const data = useStaticQuery(getData)
  console.log(data)

  return (
    <div>
      <h1>title : {data.site.info.title}</h1>
      <h2>name: {data.site.info.person.name}</h2>
    </div>
  )
}
export default Header