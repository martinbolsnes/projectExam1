const postsUrl = '';

async function getPosts() {
  try {
    const repsonse = await fetch(
      'https://api.martinbols.tech/wp-json/wp/v2/posts'
    );
    const jsonFromServer = await repsonse.json();
    console.log(jsonFromServer);
    const postsResults = jsonFromServer;

    /* document.querySelector('.loading').classList.add('hide'); */

    for (let i = 0; i < postsResults.length; i++) {
      document.querySelector('main').innerHTML += `
      <h2 class="blog__heading">${postsResults[i].title.rendered}</h2>  
      <div>${postsResults[i].content.rendered}</div>`;

      if (i === 0) {
        break;
      }
    }
  } catch {
    /* document.querySelector('.alert').innerHTML = showAlertTouser(
      'An error occured (Cannot load content)',
      'error'
    ); */
  } finally {
    /*  setTimeout(function () {
      document.querySelector('.alert').innerHTML = '';
    }, 3000); */
  }
}

getPosts(postsUrl);
