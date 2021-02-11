import React from "react"
import styles from '../components/blog.module.css'
import Layout from "../components/layout"


const blog = () => {
  return (
  <Layout>
    <div className={styles.page}>
    <h1>this is our first blog page</h1>
    <p className={styles.text}> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
      Voluptatum ducimus voluptates voluptas?</p>
  </div>
  </Layout>
  )
}

export default blog