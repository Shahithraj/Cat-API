
let input = document.createElement("input")
input.setAttribute("placeholder","url")
document.body.append(input)

let button = document.createElement("button")
button.innerHTML = "Submit"
button.setAttribute('class','submit')
document.body.append(button);

let erase = document.createElement("button")
erase.innerHTML = "Delete";
erase.setAttribute('class','erase')
document.body.append(erase)

let div = document.createElement("div")
document.body.append(div)

// 1.
async function catApi(){
    
    let cat = await fetch("https://cataas.com/api/cats")
    let getApi = await cat.json();
    console.log(getApi);
    return getApi;
   
}
catApi();



async function displayUsers(){

    let users = await catApi();
   for(i=0;i<users.length;i++){
    //   let element = users[i].id;   
    div.innerHTML += ` <img src="${'https://cataas.com/cat/'+ users[i].id}"> ` ;
   }  

 }
 displayUsers();


//2.

  async function catApi2(){
        let getuser = await fetch("https://cataas.com/api/cats?tags=cute")
        let getApi2 = await getuser.json();
        // console.log(getApi2);
        return getApi2;
    }
    catApi2();
    
 
async function searchcat(){
    try{
    let search = await catApi2();
    div.innerHTML ="";
    // console.log(search.map((a)=> a.tags))
let result = search.filter((x)=>{
     for(let key in x.tags){
         if(x.tags[key]===input.value){

            let identity = x.id;

            console.log(identity)  
         
        div.innerHTML += `<img src="${'https://cataas.com/cat/'+identity}"> `;
     }
     }
})
    }catch(err){
        div.innerHTML ="error";
    }
}
searchcat()

button.addEventListener("click",()=>{
    
    searchcat();  
})

erase.addEventListener("click",()=>{   
input.value ="";
div.innerHTML = "";
displayUsers();

})


// async function searchcat(){
//     let val = await fetch(input.value)
//     let catsimg = await val.json();
//     for(let i=0;i<catsimg.length;i++){
//         div.innerHTML += ` <img src="${'https://cataas.com/cat/' + catsimg[i].id}"> `;
//     }
// }

