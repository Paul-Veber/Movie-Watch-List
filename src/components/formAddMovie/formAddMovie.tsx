import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  FunctionComponent,
  SetStateAction,
} from "react"
import { Movie } from "../../types/types"

interface InputProps {
  title: string
  tag: keyof Movie
  onChange: <V extends ValueOf<Movie>>(key: keyof Movie, parseFunc: (v: string) => V) => (event: ChangeEvent<HTMLInputElement>) => void
}

const TextInput: React.FunctionComponent<InputProps> = ({
  title,
  tag,
  onChange
}) => (
  <label htmlFor={tag} className="form__label">
    {title}
    <input
      type="text"
      name={tag}
      className="form__input"
      onChange={onChange<string>(tag, String)}
    />
  </label>
)

const NumberInput: React.FunctionComponent<InputProps> = ({
  title,
  tag,
  onChange
}) => (
  <label htmlFor={tag} className="form__label">
    {title}
    <input
      type="number"
      name={tag}
      className="form__input"
      onChange={onChange<number>(tag, Number)}
    />
  </label>
)

export interface FormAddMovieProps {
  propsAddMovieTolist: (event: FormEvent<HTMLFormElement>) => void
  setMovie: Dispatch<SetStateAction<Movie>>
  movie: Movie
}

type ValueOf<T> = T[keyof T]

const patchMovie = (
  setMovie: FormAddMovieProps['setMovie'],
  movie: Movie
) => <ExpectedValue extends ValueOf<Movie>>(
  key: keyof Movie,
  parseFunc: (v: string) => ExpectedValue
) => (event: ChangeEvent<HTMLInputElement>): void => {
  setMovie({ ...movie, [key]: parseFunc(event.target.value) })
}

export const FormAddMovie: FunctionComponent<FormAddMovieProps> = ({
  propsAddMovieTolist,
  setMovie,
  movie
}) => {
  const updateMovie = patchMovie(setMovie, movie)
  return (
    <form action="" key={0} onSubmit={propsAddMovieTolist}>
      <TextInput
        title="Nom"
        tag="name"
        onChange={updateMovie}
      />
      <TextInput
        title="Genre"
        tag="type"
        onChange={updateMovie}
      />
      <TextInput
        title="Réalisateur"
        tag="realisator"
        onChange={updateMovie}
      />

      <div className="form__duration">
        <label htmlFor="hourDuration" className="form__label">
          Durée
          <input
            type="number"
            name="hourDuration"
            id="hourDuration"
            className="form__input"
            onChange={(e) =>
              props.setMovie({
                ...props.movie,
                durationHour: Number(e.target.value),
              })
            }
          />
          <p>h</p>
          <input
            type="number"
            name="minuteDuration"
            id="minuteDuration"
            className="form__label"
            onChange={(e) =>
              props.setMovie({
                ...props.movie,
                durationMinute: Number(e.target.value),
              })
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
          onChange={(e) =>
            props.setMovie({ ...props.movie, release: e.target.value })
          }
        />
      </label>
      <button type="submit">Ajoutez</button>
    </form>
  )
}
