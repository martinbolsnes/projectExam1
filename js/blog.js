const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

async function getOnePost(postId) {
  try {
    const response = await fetch(
      'https://api.martinbols.tech/wp-json/wp/v2/posts?_embed' + postId
    );
    const jsonResults = await response.json();
    const postsArray = jsonResults;
    console.log(postsArray);

    document.querySelector(
      '.blog__container'
    ).innerHTML = `${postsArray.content.rendered}`;
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

getOnePost(id);
