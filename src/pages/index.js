import React from "react"
import { Layout } from "../components/layout"
import { ExampleComponent, StyledExample } from "isl-components"

export default () => (
  <Layout>
    <h1 style={{ fontFamily: "Permanent Marker" }}>Alex's Site</h1>
    <p style={{ fontFamily: "Roboto" }}>This should be fun...</p>
    <ExampleComponent />
    <StyledExample>Hi</StyledExample>
  </Layout>
)
