import React, { Component } from "react"
import Layout from "../components/layout"
import styles from '../components/products.module.css'


export default class products extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.page}>
       <h1>this is our products</h1>
        <p className={styles.text}> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
          Voluptatum ducimus voluptates voluptas?</p>
        </div>
      </Layout>
    )
  }
}
