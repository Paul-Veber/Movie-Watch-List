import { Watchlist } from "../../types/types"

import React, { FunctionComponent, useState, useEffect } from "react";
  const [watchlist, setWatchlist] = useState<Watchlist[]>([])
export const list: FunctionComponent = () => {
  return (
    <div className="list">
      <div className="List__buttonsContainer">
        <button>Watch List</button>
        <button>Films regardés</button>
      </div>
      <div className="form">
        <button className="form__activateButton">Ajoutez un film</button>
        <form action="">
          <label htmlFor="name" className="form__label"> Nom
            <input type="text" name="name" id="name" className="form__input" />
          </label>
          <label htmlFor="type" className="form__label"> Genre
            <input type="text" name="type" id="type" className="form__input" />
          </label>
          <label htmlFor="real" className="form__label"> Realisateur
            <input type="text" name="real" id="real" className="form__input" />
          </label>
          <label htmlFor="duration" className="form__label"> Durée
            <input type="text" name="duration" id="duration" className="form__input" />
          </label>
          <label htmlFor="release" className="form__label"> Date de sortie
            <input type="text" name="release" id="release" className="form__input" />
          </label>
        </form>
      </div>
      <div className="movieList">
          
      </div>
    </div>
  );
};
