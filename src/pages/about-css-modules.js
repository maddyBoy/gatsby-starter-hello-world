import React from "react"

import styles from "../components/about-css-modules.module.css"
import Container from "../components/container"
import Layout from "../components/layout"

console.log(styles)

// user inline component 
const User = props => (
  <div className={styles.user}>
    <img srcSet={props.avatar} className={styles.avatar} alt="" className="lazyload" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
);

export default () => (
  <Layout>
  <Container>
    <h1>About CSS Modules</h1>
    <p>CSS Modules are cool</p>
     <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Container>
  </Layout>

)