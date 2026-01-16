import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let moviesList = [
            {
                id: 1,
                title: "High Lander",
                release_date: "1986-03-07",
                run_time: 116,
                mpaa_rating: "R",
                description: "some long description"
            },
            {
                id: 2,
                title: "Raiders of the Lost Ark",
                release_date: "1981-06-12",
                run_time: 115,
                mpaa_rating: "PG-13",
                description: "some long description"
            }
        ];
        setMovies(moviesList)
    }, [])

    return (
        <div>
                <h2>Movies</h2>
                <hr />
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Movie</th>
                            <th>Release Date</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(m =>(
                            <tr key={m.id}>
                                <td>
                                    <Link to={`/movies/${m.id}`}>
                                        {m.title}
                                    </Link>
                                </td>
                                <td>{m.release_date}</td>
                                <td>{m.mpaa_rating}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )
}

export default Movies;