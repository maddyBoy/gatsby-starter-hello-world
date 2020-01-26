import React from "react"
import containerStyles from "./container.module.css"

// console.log(containerStyles); // .module.css is important
export default ({ children }) => (
  <div className={containerStyles.container} data-id="1">{children}</div>
)