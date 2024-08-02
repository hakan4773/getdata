//const users=["mehmet","ahmet","Murat"]

const users=
[{
name:"Ahmet",
age:20
},
{name :"mehmet",
age: 30
},
{name :"Murat",
age: 35
}
]


/* users.push("ALİ")

console.log(users
) */


//map
// users.map((item)=>console.log(item.name))

//filter
/* const findIt=users.find((item)=>item.name==="mehmet") 
{
    console.log(findIt)
}

 */

//filter

/* const filterIt =users.filter(({age})=>age>=25)
{

    console.log(filterIt)
}
 */

/* const someIt=users.some((item)=>item.age===30) 
console.log(someIt)

const every=users.some((item)=>item.age>44) 
console.log(every) */

const meyvelre=["elma","armut","muz"]
const isincluded=meyvelre.includes("muz");
console.log(isincluded)