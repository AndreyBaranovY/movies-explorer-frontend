import BadRequestError from '../errors/BadRequestError';
import UnauthorizedError from '../errors/UnauthorizedError';
import { BASE_URL } from './constants';

export const register = (email, password, name) => fetch(`${BASE_URL}/signup`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify({ name, email, password }),
  credentials: 'include',
})

  .then((res) => {
    if (!res.ok) {
      return res.json()
        .then((err) => {
          if (err.error) {
            throw new BadRequestError(err.error);
          } else {
            throw new BadRequestError(err.message);
          }
        });
    }
    return res.json();
  });

export const authorize = (email, password) => fetch(`${BASE_URL}/signin`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Credentials': true,
  },
  credentials: 'include',
  body: JSON.stringify({ email, password }),
})
  .then((res) => {
    if (res.status === 400) {
      throw new BadRequestError('Не передано одно из полей');
    }
    else if (res.status === 401) {
      throw new UnauthorizedError('Пользователь с таким email не найден');
    }
    return res.json();
  })
  .then((data) => {
    if (data.token) {
      localStorage.setItem('jwt', data.token);
      return data.token;
    }
  });

export const getUserInfo = (token) => fetch(`${BASE_URL}/users/me`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
  credentials: 'include',
})
  .then((res) => {
    if (!res.ok) {
      return res.json()
        .then((err) => {
          throw new UnauthorizedError(err.message);
        });
    }
    return res.json()
  })
  .then((data) => data);


 export const updateUserInfo = (email, name) => {fetch(`${BASE_URL}/users/me`, {   
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
      credentials: 'include',
      body: JSON.stringify({
        name: escape(name),
        email: escape(email),
      }),
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => data);
  };

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    },
    credentials: 'include',
  })
    .then((res) => {
      return res.json();
    });
}

export const saveMovie = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
    credentials: 'include',
    body: JSON.stringify({
      country: movie.country ? movie.country : 'unknown',
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: movie.image ?
        `https://api.nomoreparties.co${movie.image.url}` :
        '',
      thumbnail: movie.image ?
        `https://api.nomoreparties.co${movie.image.url}` :
        '',
      trailer: movie.trailerLink ? movie.trailerLink : 'https://youtube.com',
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN ? movie.nameEN : 'noname'
    })
  })
    .then((res) => {
      return res.json();
    });
}

export const deleteMovie = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
    credentials: 'include',
  });
};
