import { useState } from "react"
import { Navigate } from "react-router-dom";

export default function About() {
    const [user,setUser] = useState('patryk');

if(!user){
    return <Navigate to={'/'} replace={true} />
}
  return (
        <div className='about'>
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam obcaecati vitae, dolorum, quas ratione doloremque magni blanditiis asperiores ea praesentium nesciunt tempora quibusdam itaque? Illo accusamus dicta porro quis dolorem.</p>
            <button onClick={() => setUser(null)}>Logout</button>
        </div>
  )
}
