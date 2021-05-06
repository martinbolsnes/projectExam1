const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

async function getPosts(postId) {
  try {
    const response = await fetch(
      'http://api.martinbols.tech/wp-json/wp/v2/posts?_embed' + postId
    );
    const jsonResults = await response.json();
    const postsArray = jsonResults;
    console.log(postsArray);
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
