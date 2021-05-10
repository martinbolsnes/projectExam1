const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

async function getPosts(postId) {
  try {
    const repsonse = await fetch(
      'https://api.martinbols.tech/wp-json/wp/v2/posts/' + postId + '?_embed'
    );
    const jsonFromServer = await repsonse.json();
    console.log(postsResults);
    const postsResults = jsonFromServer;

    /* document.querySelector('.loading').classList.add('hide'); */
  } catch {
    /* document.querySelector('.alert').innerHTML = showAlertTouser(
      'An error occured (Cannot load content)',
      'error'
    ); */
  } finally {
    /* setTimeout(function () {
      document.querySelector('.alert').innerHTML = '';
    }, 3000); */
  }
}

getPosts(id);

document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    autoplay: true,
  }).mount();
});
