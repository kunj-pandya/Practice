let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let fact = await getFacts();
    // console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
});


let url = "https:/catfact.ninja/fact";


// fetch(url)
// .then((res) => {
//     console.log(res);
//     return res.json();
// })
// .then((data) =>{
//     console.log(data.fact);
// })
// .catch((err) => {
//     console.log("Error -", err);
// });



// async & await : 

// async function getFacts() {
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);
//     }catch(e){
//         console.log("error - ",e)
//     }
 
// }



//  Axios 

async function getFacts() {
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log("error - ",e);
        return "No fact found";
    }
 
}