const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const postsContainer = document.getElementById('posts-container');

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
      postsContainer.appendChild(postElement);
    });
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });
