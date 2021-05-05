const postsUrl = '';

async function getPosts() {
  try {
    const repsonse = await fetch(
      'https://api.martinbols.tech/wp-json/wp/v2/posts?_embed'
    );
    const jsonFromServer = await repsonse.json();
    console.log(jsonFromServer);
    const postsResults = jsonFromServer;

    /* document.querySelector('.loading').classList.add('hide'); */

    for (let i = 0; i < postsResults.length; i++) {
      document.querySelector('.latestPosts__cards').innerHTML += `
      <div class="card" style="background-image: url('${postsResults[i]._embedded['wp:featuredmedia']['0'].media_details.sizes['1536x1536'].source_url}');">
        <div class="titleBackground">
          <a class="blogLink" href="blog.js?id=${postsResults[i].id}">
          <h3 class="cardTitle">${postsResults[i].title.rendered}</h3>
          </a>
        </div>
      </div>`;

      if (i === 2) {
        break;
      }
    }
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

getPosts(postsUrl);
