const api = 'https://api.github.com/users/'

async function getUser(term) {
  const response = await fetch(`${api}${term}`)

  const data = await response.json();

  showData(data);
}

function showData(data) {
  console.log(data);

  details.innerHTML = `
  <h2 class = "heading__name">Name : <span>${data.name}</span>
      </h2>
      <h2 class="repos">Repositories   <span> ${data.public_repos} </span> </h2> 
      <h2 class="following"> Following :<span>${data.following}</span></h2>
          <h2 class="followers"> Followers :<span>${data.followers}</span></h2>
`

  image.innerHTML = `
<img src="${data.avatar_url}" alt="image" class = "main__image">
<figcaption> username: ${data.login}</figcaption>
`
}

const form = document.querySelector('.form');
const search = document.querySelector('.search');
const details = document.querySelector('.details');
const image = document.querySelector('.image');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const value = search.value.trim();
  console.log(value);
  if (!value) {
    alert("Enter a value");
  }
  else { getUser(value); }
  form.reset();
});


