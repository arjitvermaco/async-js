// //Async Js
// console.log("Hello");
// console.log("How");

// //something that takes time
// // delay

// setTimeout(()=>{
//     console.log("Its a nice day!!")
// },5000)

// console.log("are");
// console.log("you??");

const myPromise = new Promise((resolve, reject) => {
  const condition = true;
  setTimeout(() => {
    if (condition) {
      resolve(20);
    } else {
      reject("Promise Failed!!");
    }
  }, 3000);
});

// myPromise.then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.error(error)
// })

// myPromise.then((result)=>{
//     return result*2
// }).then(result => {console.log(result)
// return result*5
// }).then(result =>{
//     console.log("Final Result", result)
// })

// console.log("Hey! There!")

// fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list").then((res)=>{
//     console.log(res)
//     return res.json()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.error(err)
// })

// async function asyncFunction() {
//   let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Async Await Resolved"), 1000);
//   });
//   try {
//     const result = await myPromise;
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// asyncFunction();

// async function fetchCategories() {
//   const response = await fetch(
//     "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
//   );

//   const data = await response.json();
//   console.log(data);
// }

// fetchCategories()

// var requestOptions = {
//     method: 'GET',
//   };

//   fetch("https://api.geoapify.com/v1/geocode/reverse?lat=51.21709661403662&lon=6.7782883744862374&apiKey=d434c857564040e998d7c8ecec15e349", requestOptions)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Getlocation is not supported in your browser"));
    } else {
      navigator.geolocation.getCurrentPosition((postion) => {
        resolve(postion);
      }, reject);
    }
  });
}

getUserLocation()
  .then((postion) => {
    const { latitude, longitude } = postion.coords;
    return fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=d434c857564040e998d7c8ecec15e349`
    );
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
