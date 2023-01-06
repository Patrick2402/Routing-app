import { Link, useLoaderData, useParams } from "react-router-dom"

export default function CareerDetails() {
    const { id } = useParams();
    const career = useLoaderData();
  return (
    <div className="career-details">
        <h2>Career Details for { career.title }</h2>
        <p>starting salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className="details">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, nostrum saepe. Magni molestiae quasi ipsa nostrum velit dolor suscipit vitae repellat assumenda officia ducimus consectetur consequatur, itaque impedit saepe culpa.</p>

        </div>
        <Link to='/careers'>Go back</Link>
    </div>
  )
}


// loader function 

export const careerDetailsLoader = async ({ params }) => {

    const { id } = params;

    const res = await fetch('http://localhost:4001/careers/' + id);

    if(!res.ok){
      throw Error('Could not find that career');
    }
    return res.json();
}