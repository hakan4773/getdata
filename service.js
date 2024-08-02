import axios from "axios";

async function getData(user_id) {
  const { data: users } = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);
  console.log(users);
  const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts/${user_id}`);
  console.log(posts);
}

getData(1);