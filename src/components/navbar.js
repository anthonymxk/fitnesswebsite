import React from "react"

class Navbar extends React.Component {
    render() {
        return (
          <nav class="navBar">
            <ul>
              <li><a href='#aboutme'>Contact</a></li>
              <li><a href='#projects'>Projects</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
          </nav>
        )
    }
}

export default Navbar