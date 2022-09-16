import React from "react"
import { NavLink } from "react-router-dom"
import '../App.css';
const Navbar = () => {
  const links = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/About",
    text: "About",
  },
]
    return (
      <nav>
        <ul className="navBar">
          {links.map(link => {
            return <li key={link.id}><NavLink to={link.path} activeClassName="active-link" exact>{link.text}</NavLink></li>
          })}
        </ul>
      </nav>
    )
}
export default Navbar
