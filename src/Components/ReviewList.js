

import Review from "./Review"

export default function ReviewList (props) {

return ( 
    <div className="row">
        {props.reviews.map((review) => <Review key={review.id} review={review} delete={props.delete}/>)}
    </div>
) 


}