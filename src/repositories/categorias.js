import { BASE_URL } from '../config';

const CATEGORIES_URL = `${BASE_URL}/categorias`;

function create(body) {
  return fetch(CATEGORIES_URL, {
    body: JSON.stringify(body),
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
  }).then(async (res) => {
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    throw new Error('Not possible to create category');
  });
}

function getAll() {
  return fetch(CATEGORIES_URL).then(async (res) => {
    if (res.ok) {
      const data = await res.json();
      return data;
    }

    throw new Error('Request error');
  });
}

function getAllWithVideos() {
  return fetch(`${CATEGORIES_URL}?_embed=videos`).then(async (res) => {
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    throw new Error('Request error');
  });
}

function remove(id) {
  return fetch(`${CATEGORIES_URL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json' },
  }).then(async (res) => {
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    throw new Error('Not possible to create category');
  });
}

export default {
  create,
  getAll,
  getAllWithVideos,
  remove,
};
