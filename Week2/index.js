// API being used :
// https://docs.github.com/en/rest/reference/users#get-a-user

const API_URL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(username) {
  try {
    const { data } = await axios.get(API_URL + username);
    createUserCard(data);
    console.log(data);
  } catch (err) {
    console.error(err);
    createErrorCard("No user found");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // its default action should not be taken as it normally would be
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});

function createUserCard(user) {
  const cardHTML = `
        <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="Github user" class="avatar">
            </div>
            <div class="user-info">
                <h2>${user.login}</h2>
                <p>${user.bio ? user.bio : "User has no bio"}</p>
                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>
            </div>
        </div>
    `;
  main.innerHTML = cardHTML;
}

function createErrorCard(message) {
  console.log(message);
  const cardHTML = `
        <div class="card">
            <h1>${message}</h1>
        </div>
    `;
  main.innerHTML = cardHTML;
}

// GET -
//     1. simple GET:  axios.get(url, {header})
//     2. GET with some params:    axios.get(url , {params: {}})


/*
  POST request using the fetch API 
  fetch(url,{
      method:'POST',
      body : form
  })
  .then((res)=>{
      if(res.ok){
          //catching non 200 error code
          // fetch only throws an error if it detects a network related issue or something prevents it from making that request

          return res.json()
      }
      throw new Error(res.responseText); //handling a non 200 status code error
  })
  // res.json returns a promise
  .then(data => console.log(data))  
  .catch(err => console.log(err))


  POST request using AXIOS
  axios.post(url,{headers},form)
    .then(data => console.log(data))
    .catch(err => console.error(err))

*/

// DELETE -
//     1. using /:id   axios.delete(url)
//     2. using /:id   axios.delete(url, {header, data})

// PUT - same as POST
