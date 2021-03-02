import {
  FunctionComponent,
} from "react"

export const FormAddMovie: FunctionComponent = (props: any) => {
  return (
    <form action="" key={0} onSubmit={props.propsAddMovieTolist}>
      <label htmlFor="name" className="form__label">
        Nom
        <input
          type="text"
          name="name"
          id="name"
          className="form__input"
          onChange={(e) =>
            props.setMovie({ ...props.movie, name: e.target.value })
          }
        />
      </label>
      <label htmlFor="type" className="form__label">
        Genre
        <input
          type="text"
          name="type"
          id="type"
          className="form__input"
          onChange={(e) =>
            props.setMovie({ ...props.movie, type: e.target.value })
          }
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
            props.setMovie({ ...props.movie, realisator: e.target.value })
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
