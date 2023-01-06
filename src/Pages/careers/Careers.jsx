import React from 'react'
import { useLoaderData,Link } from 'react-router-dom';

export default function Careers() {

  const careers = useLoaderData();
  // specialny hook do pobierania danych. 

  return (
    <div className="careers">
      {careers.map(career => (
        <Link to={career.id.toString()} key={career.id}>
          <h2>{career.title}</h2>
          <p>Based in {career.location}</p>
          <code>Salary: {career.salary}$</code>
        </Link>
      ))}
    </div>
  )
}


// loader

export const carrersLoader = async () => {
  const res = await fetch('http://localhost:4001/careers'); 
  if(!res.ok){
    throw Error('Could not fetch the careers');
  }
  return res.json();
}
// tutaj trzba npm i json-server 
// json-server -p PORT -w PATH DO .json

// export mowi ze mozemy eksportowac dana funkcje lub komponent 