import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import img from '../images/pizza image 2.jpeg'
import Image from 'gatsby-image'

const getImages = graphql`
{
  fixed: file(relativePath: {eq: "images/pizza image 2.jpeg"}) {
    childImageSharp {
      fixed(height: 300, width: 200) {
        src
      }
    }
  }
  fluid: file(relativePath: {eq: "pizza image.jpeg"}) {
    childImageSharp {
      fluid {
        src
      }
    }
  }
}
`

const Images = () => {
  const data = useStaticQuery(getImages)
console.log(data)
  return (
    <section className="images">
      <article className="single-image">
      <h3>Vanilla image</h3>
        <img src ={img} alt="pizza in oven" width="100%" />
      </article>
      <article className="single-image">
        <h3>Fixed image/blur</h3>
      </article>
        <article className="single-image">
          <h3>Fluid image/svg</h3>
        </article>
    </section>
  )
}

export default Images