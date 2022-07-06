import axios from "axios";


async function getData(user_id) { 
    const { data: users } = await  axios("https://jsonplaceholder.typicode.com/users/" + user_id);
    const { data: post } = await  axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);
    
    console.log("user", users);
    console.log("post", post);
};


export default getData;