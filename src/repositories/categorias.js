import { BASE_URL } from '../config';

const CATEGORIES_URL = `${BASE_URL}/categorias`;

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

export default {
  getAll,
  getAllWithVideos,
};
