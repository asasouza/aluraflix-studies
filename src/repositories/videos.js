import { BASE_URL } from '../config';

const VIDEOS_URL = `${BASE_URL}/videos`;

function create(body) {
  return fetch(VIDEOS_URL, {
    body: JSON.stringify(body),
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
  }).then(async (res) => {
    if (res.ok) {
      const data = await res.json();
      return data;
    }

    throw new Error('Request error');
  });
}

// function getAll() {
//   return fetch(VIDEOS_URL).then(async (res) => {
//     if (res.ok) {
//       const data = await res.json();
//       return data;
//     }

//     throw new Error('Request error');
//   });
// }

// function getAllWithVideos() {
//   return fetch(`${VIDEOS_URL}?_embed=videos`).then(async (res) => {
//     if (res.ok) {
//       const data = await res.json();
//       return data;
//     }
//     throw new Error('Request error');
//   });
// }

export default {
  create,
  //   getAll,
  //   getAllWithVideos,
};
