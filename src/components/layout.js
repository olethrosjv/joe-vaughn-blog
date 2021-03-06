import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import { RoughNotation } from "react-rough-notation";


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 1,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(30),
        padding: `${rhythm(1.5)} ${rhythm(3/4)}`,
      }}
    >
      <header>{header}</header>
     
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Created by 
        {` `}
        <RoughNotation type="circle" color="blue" show={true}>
        <a href="https://codepen.io/Olethros" style={{ textDecoration: 'none', padding: rhythm(3/4) }} >Joe Vaughn</a>
        </RoughNotation>
        
      
        
      </footer>
    </div>
  )
}
//Add your portfolio Website to <a> tag above
export default Layout
