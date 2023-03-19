

// let searchBtn = document.getElementById("search-btn");

// $(searchBtn).click (() => {
//     $("#categories-container").addClass("d-none");
//     $("#food-container").addClass("d-none");
//     $("#s-holder").removeClass("d-none");
//     $("#search-container").removeClass("d-none");
// })

// let searchName = document.getElementById("search-name");

// $(searchName).keyup(() =>{
//     let searchByName = searchName.value;
//     console.log(searchByName);


//     async function foodApi() {
//         let foodApi = await fetch(
//             `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchByName}`
//         );
//         let finalApi = await foodApi.json();
    
//         console.log(finalApi);

//         const mealsContainer = document.getElementById("search-container");
//         let meal = ``;
//         for (let i = 0; i < finalApi.meals.length; i++) {
//             meal += `

//             <div class="col-md-3 mb-3">
//             <div class="position-relative overflow-hidden rounded-2" >
//                 <div class="card bg-transparent position-relative open-meal" data-id="${finalApi.meals[i].idMeal}">
//                     <img src="${finalApi.meals[i].strMealThumb}"
//                         class="card-img-top" alt="...">
//                     <div
//                         class=" meal-layer card-body position-absolute w-100 h-100 d-flex justify-content-center align-items-center bg-white opacity-0">
//                         <p class="card-text">${finalApi.meals[i].strMeal}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//             `;
//         }
//         mealsContainer.innerHTML = meal;
        
        
        
// }


// foodApi()

// })



let searchBtn = document.getElementById("search-btn");

$(searchBtn).click (() => {
    $("#categories-container").addClass("d-none");
    $("#food-container").addClass("d-none");
    $("#s-holder").removeClass("d-none");
    $("#search-container").removeClass("d-none");
})

let searchName = document.getElementById("search-name");

$(searchName).keyup(() =>{
    let searchByName = searchName.value;
    console.log(searchByName);


    async function foodApi() {
        let foodApi = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchByName}`
        );
        let finalApi = await foodApi.json();
    
        console.log(finalApi);

        const mealsContainer = document.getElementById("search-container");
        let meal = ``;
        for (let i = 0; i < finalApi.meals.length; i++) {
            meal += `

            <div class="col-md-3 mb-3">
            <div class="position-relative overflow-hidden rounded-2" >
                <div class="card bg-transparent position-relative open-meal" data-id="${finalApi.meals[i].idMeal}">
                    <img src="${finalApi.meals[i].strMealThumb}"
                        class="card-img-top" alt="...">
                    <div
                        class=" meal-layer card-body position-absolute w-100 h-100 d-flex justify-content-center align-items-center bg-white opacity-0">
                        <p class="card-text">${finalApi.meals[i].strMeal}</p>
                    </div>
                </div>
            </div>
        </div>
            `;
        }
        mealsContainer.innerHTML = meal;
        
        

        
        







        

        
}


foodApi()

})















