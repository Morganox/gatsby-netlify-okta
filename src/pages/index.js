import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <>
      Hello World!
      <p>
        <Link to="/blog">View Blog</Link>
        <Link to="/account">My Account</Link>
      </p>
    </>
  )
}
