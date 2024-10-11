// fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(json => console.log(json));
// GET REQUEST

const listElements = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#posts-container");

async function SendHTTPRequest(method, url, data){
      return await fetch(url,{
            method: method,
            body: JSON.stringify(data),
            headers: {
                  "Content-Type": "application/json",
            },
      }).then((response) =>{
            return response.json();
      })
}

async function FetchPosts(){
      const responseData = await SendHTTPRequest("GET","https://jsonplaceholder.typicode.com/posts");
      console.log(responseData);
      const listOfPost = responseData;
       listOfPost.forEach(post => {
          const postContainer = document.createElement("article");
          postContainer.id = post.id;
          postContainer.classList.add("post-item");

          const title = document.createElement("h2");
          title.textContent = post.title;

          const body = document.createElement("p");
          body.textContent = post.body;

          const button = document.createElement("button");
          button.textContent = "Delete Content";

          postContainer.append(title);
          postContainer.append(body);
          postContainer.append(button);

          listElements.append(postContainer);
      });
      
}
fetchButton.addEventListener("click", FetchPosts);

//POST REQUEST
async function CreatePost(title, content){
   const userId = Math.random();
   const post ={
      title: title,
      body: content,
      userId: userId,
   }
   await SendHTTPRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}
form.addEventListener("submit", (event) =>{
      event.preventDefault();
      const title = event.currentTarget.querySelector("#title").value;
      const content = event.currentTarget.querySelector("#content").value;
      CreatePost(title, content);
})
