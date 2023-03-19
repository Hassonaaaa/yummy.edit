

let searchBtnFl = document.getElementById("search-btn");

$(searchBtnFl).click (() => {
    $("#categories-container").addClass("d-none");
    $("#food-container").addClass("d-none");
    $("#s-holder").removeClass("d-none");
    $("#search-container").removeClass("d-none");
})

let searchNameFl = document.getElementById("search-fl");

$(searchNameFl).keyup(() =>{
    let searchByName = searchNameFl.value;
    console.log(searchByName);


    async function foodApi() {
        let foodApi = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchByName}`
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


        $(".card").click(async function (e) {
            let dataId = $(e.currentTarget).attr("data-id");

            console.log(dataId);
            let mealApi = await fetch(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dataId}`
            );
            let mealDesc = await mealApi.json();

            console.log(mealDesc.meals[0]);
            document.querySelector("#mealDesc").innerText = mealDesc.meals[0].strInstructions;
            document.querySelector("#area").innerText = "Area: " + mealDesc.meals[0].strArea;
            document.querySelector("#category").innerText = "Category " + mealDesc.meals[0].strCategory;
            document.querySelector("#meal-thumb").innerHTML = `
          <img class="w-100 rounded-3" src="${mealDesc.meals[0].strMealThumb}" alt="tumb" />
            
            `;

            
        });
        function mealData() {
            const modal = document.querySelector("#modal");
            const openModal = document.querySelectorAll(".open-meal");

            $(openModal).click(() => {
                console.log("hii");
                
                $("#modal").removeClass("d-none");
                $("#search-container").addClass("d-none");
                $("#s-holder").addClass("d-none");
            });
        }
        mealData();
        
        
        
}


foodApi()

})








