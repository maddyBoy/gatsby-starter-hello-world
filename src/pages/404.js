import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
	<Layout>
	  <div style={{ color: `purple` }}>
	    

	    <Header headerText="Hello Gatsby!" />
	    <p>What a world.</p>
	    <img srcset="https://source.unsplash.com/random/400x200" alt="" className="lazyload" />

	    <p>You are lost </p>

	  </div>
    </Layout>

)
