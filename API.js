// let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     })
//     .then((data) => {
//     console.log(data.fact);
//     })
//     .catch((err) => {
//     console.log("ERROR - ", err);
// });

// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);
//         } catch (err) {
//         console.log("Error - ", err);
//         }

//     console.log("Bye");
// }

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    // console.log(fact);
    let h3 = document.querySelector("#result");
    h3.innerText = fact;
})

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
        } catch (err) {
        console.log("Error - ", err);
        return "No Fact Found";
        }
    }