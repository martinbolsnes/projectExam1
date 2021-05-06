/* const postsUrl = '';

async function getPosts() {
  try {
    const repsonse = await fetch(
      'https://api.martinbols.tech/wp-json/wp/v2/posts?_embed'
    );
    const jsonFromServer = await repsonse.json();
    console.log(jsonFromServer);
    const postsResults = jsonFromServer;

    document.querySelector('.loading').classList.add('hide');

    for (let i = 0; i < postsResults.length; i++) {

      if (i === 5) {
        break;
      }
    }
  } catch {
    document.querySelector('.alert').innerHTML = showAlertTouser(
      'An error occured (Cannot load content)',
      'error'
    );
  } finally {
    setTimeout(function () {
      document.querySelector('.alert').innerHTML = '';
    }, 3000);
  }
}

getPosts(postsUrl); */

document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
  }).mount();
});
