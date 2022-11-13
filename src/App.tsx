import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [searchResult, setSearchReasult] = useState('');

  const search = searchResult.toLowerCase();

  const visibleMovies = moviesFromServer
    .filter(
      ({ title, description }) => title.toLowerCase().includes(search)
    || description.toLowerCase().includes(search),
    );

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Find a movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Search..."
                value={searchResult}
                onChange={(event) => setSearchReasult(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
