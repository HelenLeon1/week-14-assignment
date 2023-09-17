import ReviewList from "./ReviewList"
import ReviewForm from "./ReviewForm"
import {useState} from "react"

let newid = 3

export default function Movie (props) {
    const [reviews, setReviews] = useState(props.movie.reviews)

    function addReview(newReviewCreated) {
       
        const newReview = {id: newid++, ...newReviewCreated}

        const copyOfReviews = [...reviews]
        copyOfReviews.push(newReview)
        setReviews(copyOfReviews)

    }

    function deleteReview(id) {
        setReviews(reviews.filter(review => review.id !== id))
    }
                     

    return (
        <div className="col-sm mb-5">
            <div className="card text-center">
                <img src={props.movie.image} className="card-img-top" alt="fast and furious" />
                    <div className="card-body">
                        <h5 className="card-title">{props.movie.movieName}</h5>
                        <p className="card-text"> {props.movie.summary}
                        </p>
                    <div className="container">
                        <h5>Reviews</h5>
                        <ReviewList reviews={reviews} delete={deleteReview} />
                     </div>
                     <div className="container">
                        <h5>Add Your Review</h5>
                        <ReviewForm onSubmit={addReview}/>
                    </div>
                </div> 
            </div>
        </div>
    )
         
}   


