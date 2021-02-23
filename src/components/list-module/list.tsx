import { Watchlist, Movie } from "../../types/types";

import React, { FunctionComponent, useState, useEffect } from "react";

export const list: FunctionComponent = () => {
  const [watchlist, setWatchlist] = useState<Watchlist>([]);
  const [movie, setMovie] = useState<Movie>({
    name: "",
    realisator: "",
    durationHour: 0,
    durationMinute: 0,
    type: "",
    release: "",
  });
  return (
    <div className="list">
      <div className="List__buttonsContainer">
        <button>Watch List</button>
        <button>Films regardés</button>
      </div>
      <div className="form">
        <button className="form__activateButton">Ajoutez un film</button>
        <form action="">
          <label htmlFor="name" className="form__label">
            {" "}
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
            {" "}
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
            {" "}
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
              {" "}
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
            {" "}
            Date de sortie
            <input
              type="text"
              name="release"
              id="release"
              className="form__input"
              onChange={(e) => setMovie({ ...movie, release: e.target.value })}
            />
          </label>
          <button type="submit" onSubmit={() => setWatchlist([...watchlist, movie])}>Ajoutez</button>
        </form>
      </div>
      <div className="movieList"></div>
    </div>
  );
};
