const postsUrl = '';

async function getPosts() {
  try {
    const repsonse = await fetch(
      'https://api.martinbols.tech/wp-json/wp/v2/posts?_embed&per_page=30'
    );
    const jsonFromServer = await repsonse.json();
    const postsResults = jsonFromServer;
    console.log(postsResults);

    document.querySelector('.loading').classList.add('hide');

    for (let i = 0; i < postsResults.length; i++) {
      document.querySelector('.blogList__section').innerHTML += `
      <div class="card__containerBlog">
      <a href="blog.html?id=${postsResults[i].id}">
        <img class="cardBlog" src="${postsResults[i]._embedded['wp:featuredmedia']['0'].media_details.sizes['1536x1536'].source_url}"/>
      </a>
        <h3 class="cardTitleBlog">${postsResults[i].title.rendered}</h3>
        </div>`;
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
