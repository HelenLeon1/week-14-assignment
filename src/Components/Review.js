
import Stars from "./Stars"

export default function Review (props) {
    return (
        <div>
        <h6>{props.review.username}</h6>
        <Stars rating={props.review.rating}/>
        <p>{props.review.review}</p>
        <button className="btn btn-danger" onClick={() => props.delete(props.review.id)}>Delete Review</button>
        </div> 
    )
         
}   
 