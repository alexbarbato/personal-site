import React from "react"
import { Layout } from "../components/organisms/layout"
import Image from "../components/atoms/image"

export default () => (
  <Layout activePage="Credits" column>
    <h1 style={{ fontFamily: "Permanent Marker" }}>
      There are a few that deserve credit
    </h1>
    <section>
      <h2>Kirsten</h2>
      <Image imgsrc="kirsten.png" />
      <p />
    </section>
  </Layout>
)
