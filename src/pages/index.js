import React from "react"
import Layout from '../components/layout'
import {ExampleButton} from "../components/button"
export default () => (
  <Layout>
    <h1 style={{ color: "red", textTransform:
        "uppercase"}}>Welcome to my page
    </h1>
    <h1>hello world</h1>
    <h1>hello everyday people</h1>
    <ExampleButton>Click Here</ExampleButton>
  </Layout>
)