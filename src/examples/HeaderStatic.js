import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    //graph QL query 
    query={graphql`
      {
        site {
          info: siteMetadata {
            person {
              age
              name
            }
            author
            data
            description
            title
          }
        }
      }
    `}
    render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
)

export default ComponentName
