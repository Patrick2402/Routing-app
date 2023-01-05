import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
<div>
    <h2>Page not found!</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit nostrum dolore repellat nemo voluptatum? Odio facilis maiores aliquam, ipsum, similique voluptatibus natus numquam doloribus assumenda dolor placeat a quasi repudiandae!e</p>

    <p>Go to the <Link to='/'>Homepage</Link>.</p>
</div>
  )
}
