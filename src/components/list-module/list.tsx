import { Movie, WatchlistProp } from "../../types/types"
import { MovieElement } from "../movie/movie"
import { ViewedElement } from "../viewed/viewed"
import { FormAddMovie } from "../formAddMovie/formAddMovie"
import React, {
  FunctionComponent,
  useState,
  useCallback,
  FormEvent,
} from "react"

export const List: FunctionComponent = () => {
  const [watchlist, setWatchlist] = useState<Movie[]>([])
  const [viewedList, setViewedList] = useState<Movie[]>([])
  const [movie, setMovie] = useState<Movie>({
    key: Date.now(),
    name: "",
    realisator: "",
    durationHour: 0,
    durationMinute: 0,
    type: "",
    release: "",
  })
  const addMovieTolist = useCallback(
    (e: FormEvent<HTMLFormElement>): void => {
      setMovie({ ...movie, key: Date.now() })
      e.preventDefault()
      setWatchlist([...watchlist, movie])
    },
    [watchlist, movie]
  )

  const removeMovie = (key: number): void => {
    const newWatchlist = watchlist.filter((movie: Movie) => movie.key !== key)
    setWatchlist(newWatchlist)
    console.log("bla")
  }
  const viewedMovie = (key: number): void => {
    const movieToMove = (movie: Movie) => movie.key === key
    setViewedList([...viewedList, watchlist[watchlist.findIndex(movieToMove)]])
    removeMovie(key)
  }
  return (
    <div className="list">
      <div className="List__buttonsContainer">
        <button>Watch List</button>
        <button>Films regardés</button>
      </div>
      <div className="form">
        <button className="form__activateButton">Ajoutez un film</button>
        <FormAddMovie
          propsAddMovieTolist={addMovieTolist}
          movie={movie}
          setMovie={setMovie}
        />
      </div>
      <div className="movieList">
        <h2>Films à regarder</h2>
        {watchlist.map((movieAdded: any) => {
          return (
            <MovieElement
              {...movieAdded}
              id={movieAdded.key}
              removeMovie={removeMovie}
              viewedMovie={viewedMovie}
            />
          )
        })}
      </div>
      <div className="viewedList">
        <h3>Films regardés</h3>
        {viewedList.map((movieAdded: any) => {
          return <ViewedElement {...movieAdded} id={movieAdded.key} />
        })}
      </div>
    </div>
  )
}
