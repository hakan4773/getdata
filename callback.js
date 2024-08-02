// setTimeout(()=>{
// console.log("merhaba");


// },2000)

// setInterval(()=>{
//     console.log("merhaba");

// },1000)



// const sayHi=(cb)=>{
// cb();
// }
// sayHi((cb)=>{
//     console.log("merhaba");
// })


import fetch from 'node-fetch';
import axios from 'axios';

/* fetch("https://jsonplaceholder.typicode.com/users/1").then((data)=>data.json())
.then((users)=>{
    
    console.log("users",users)
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((data)=>data.json()).
    then((posts)=>console.log("posts 1 yüklendi",posts))

    fetch("https://jsonplaceholder.typicode.com/posts/2")
    .then((data)=>data.json()).
    then((data)=>console.log("posts 2 yüklendi",data))
    
    
}); */

/* async function getData(){
const data=(await ( await fetch("https://jsonplaceholder.typicode.com/users/1")).json())
console.log("users1",data)

const posts=(await ( await fetch("https://jsonplaceholder.typicode.com/posts/1")).json())
console.log("posts1",posts)

const posts2=(await ( await fetch("https://jsonplaceholder.typicode.com/posts/2")).json())
console.log("posts2",posts2)
}
getData(); */


/* 
(async ()=>{
    const {data:users}=(await  axios("https://jsonplaceholder.typicode.com/users/1"))
    console.log("users1",users)
    
    const {data:post1}=(await  axios("https://jsonplaceholder.typicode.com/posts/1"))
    console.log("posts1",post1)
    
    const {data:post2}=(await axios("https://jsonplaceholder.typicode.com/posts/2"))
    console.log("posts2",post2)

})(); */


const getUsers = () => {
return new Promise(async (resolve,reject)=>{
    const {data}=await  axios("https://jsonplaceholder.typicode.com/users/1")
    resolve(data);
    //reject("bir hata oluştu")
});
};
const getPosts=(post_id)=>{
    return new Promise(async (resolve,reject)=>{
        const {data}=await  axios("https://jsonplaceholder.typicode.com/posts/"+post_id);
        resolve(data);
    });
    };
    


/* (async()=>{

    await getUsers()
    .then((data)=>console.log(data))
    .catch((e)=> console.log(e))
    
    await getPosts(1)
    .then((data)=>console.log(data))
    .catch((e)=> console.log(e))
})()
 */


//diğer yöntem 
/* (async()=>{
try {
    const users=await getUsers();
    const posts= await getPosts(1);
    
    console.log(users);
    console.log(posts);
} catch (error) {
    console.log(error);

}
   
})() */

Promise.all([getUsers(),getPosts(1)]).then(console.log).catch(console.log)