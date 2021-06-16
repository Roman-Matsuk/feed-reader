const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

export function getPosts (userid) {
  return fetch(BASE_URL + `?userId=${userid}`).then(res => res.json());
};

export function deletePost (userId) {
  return fetch(BASE_URL + `/${userId}`, {
    method: 'DELETE'
  }).then(res => console.log(res));
};

export function addPost (userId, title, body) {
  return fetch(BASE_URL, {
    method: 'POST',
    body: {
      userId,
      title,
      body
    }
  }).then(res => console.log(res));
};