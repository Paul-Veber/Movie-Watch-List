import { Movie, WatchlistProp } from "../../types/types"
import { MovieElement } from "../movie/movie"
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
    const newWatchlist = watchlist.filter((movie) => movie.key !== key)
    setWatchlist(newWatchlist)
    console.log('bla')
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
        <form action="" onSubmit={addMovieTolist}>
          <label htmlFor="name" className="form__label">
            Nom
            <input
              type="text"
              name="name"
              id="name"
              className="form__input"
              onChange={(e) => setMovie({ ...movie, name: e.target.value })}
            />
          </label>
          <label htmlFor="type" className="form__label">
            Genre
            <input
              type="text"
              name="type"
              id="type"
              className="form__input"
              onChange={(e) => setMovie({ ...movie, type: e.target.value })}
            />
          </label>
          <label htmlFor="real" className="form__label">
            Realisateur
            <input
              type="text"
              name="real"
              id="real"
              className="form__input"
              onChange={(e) =>
                setMovie({ ...movie, realisator: e.target.value })
              }
            />
          </label>

          <div className="form__duration">
            <label htmlFor="hourDuration" className="form__label">
              Durée
              <input
                type="number"
                name="hourDuration"
                id="hourDuration"
                className="form__input"
                onChange={(e) =>
                  setMovie({ ...movie, durationHour: Number(e.target.value) })
                }
              />
              <p>h</p>
              <input
                type="number"
                name="minuteDuration"
                id="minuteDuration"
                className="form__label"
                onChange={(e) =>
                  setMovie({ ...movie, durationMinute: Number(e.target.value) })
                }
              />
            </label>
          </div>
          <label htmlFor="release" className="form__label">
            Date de sortie
            <input
              type="text"
              name="release"
              id="release"
              className="form__input"
              onChange={(e) => setMovie({ ...movie, release: e.target.value })}
            />
          </label>
          <button type="submit">Ajoutez</button>
        </form>
      </div>
      <div className="movieList">
        {watchlist.map((movieAdded: any) => {
          return (
            <div key={movieAdded.key}>
              <MovieElement
                {...movieAdded}
                id={movieAdded.key}
                removeMovie={removeMovie}
                viewedMovie={viewedMovie}
              />
            </div>
          )
        })}
      </div>
      <div className="viewedList"></div>
    </div>
  )
}
