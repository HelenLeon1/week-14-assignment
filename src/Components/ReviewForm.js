
import {useState} from "react"


export default function ReviewForm(props) {
    const [usernameValue, setUsername] = useState("")
    const [starValue, setStarValue] = useState("")
    const [reviewValue, setReview] = useState("")


    const handleChange = (event) => {
        setStarValue(event.target.value)
    }

    
    const onClickCreateReview = (event) => {
        event.preventDefault()

        const newReviewCreated = {
            username: usernameValue,
            rating: starValue,
            review: reviewValue,
        }

        props.onSubmit(newReviewCreated)
    }

    
    return (
        <form>
            <label className="form-label d-flex justify-content-between mt-2">Rating</label>
            <select className="form-select" value={starValue} onChange={handleChange}>
                <option value="">--Please choose an option--</option>
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
            <label className="form-label d-flex justify-content-between mt-2">Username</label>
            <input className="form-control" type="text" value={usernameValue} onChange={(event) => setUsername(event.target.value)}/>
            <label className="form-label d-flex justify-content-between mt-2">Review</label><br/>
            <input className="form-control" type="text" value={reviewValue} onChange={(event) => setReview(event.target.value)}/>
            <button className="btn btn-primary" onClick={onClickCreateReview}>Enter Review</button>
        </form>
    )

}
