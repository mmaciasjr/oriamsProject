import React from 'react'
import Header from '../examples/Header'
import HeaderStatic from "../examples/HeaderStatic"
import Layout from '../components/layout'
const examples = () => {
  return (
  <Layout>
    <p>This is the examples page</p>
    <Header />
    <HeaderStatic />
  </Layout>
  )
}

export default examples