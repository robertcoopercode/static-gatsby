import React from "react"

import Layout from "../components/layout"

const Home = ({location}) => (
  <Layout pathname={location.pathname}>
      <h1>Home Page</h1>
  </Layout>
)

export default Home
