import {movies} from "../moviesData"
import Movie from "./Movie"

export default function MoviesList () {

    return ( 
        <div className="row">
            {movies.map((movie) => <Movie key={movie.id} movie={movie}/>)}
        </div>
    ) 
}
   