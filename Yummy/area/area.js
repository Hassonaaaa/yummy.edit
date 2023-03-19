
let areaBtn = document.getElementById('area-btn')

$(areaBtn).click(()=>{
console.log('hhhhh');

$("#food-container").addClass("d-none");
$("#s-holder").addClass("d-none");
$("#categories-container").removeClass("d-none");

// api and loop
async function categoriesApi() {
    let cateApi = await fetch(
        `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );
    let catFinalApi = await cateApi.json();
    console.log(catFinalApi);



    // categories page start
    function homeFood() {
        const mealsContainerCategories = document.getElementById("categories-container");
        let meal = ``;
        for (let i = 0; i < catFinalApi.meals.length; i++) {
            meal += `

            <div class="col-md-3 mb-3">
            <div class="position-relative overflow-hidden rounded-2" >
                <div class="card bg-transparent position-relative open-meal" data-id="${catFinalApi.meals[i].strArea}">
                <i class="fa-solid fa-house-laptop fa-4x w-25 text-center text-light"></i>
                    <div
                        class=" meal-layer card-body position-absolute w-100 h-100 d-flex justify-content-center align-items-center bg-white opacity-0">
                        <p class="card-text">${catFinalApi.meals[i].strArea}</p>
                    </div>
                </div>
            </div>
        </div>
            `;
        }
        mealsContainerCategories.innerHTML = meal;



        // show

        $(".card").click(async function (e) {
            let dataId = $(e.currentTarget).attr("data-id");

            console.log(dataId);
            let mealApi = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?a=${dataId}`
            );
            let mealDesc = await mealApi.json();

            console.log(mealDesc);

            $("#categories-container").addClass("d-none");
            $("#categories-cat-container").removeClass("d-none");
            let foodApi = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?a=${dataId}`
            );
            let finalApi = await foodApi.json();
            const mealsContainerCategories = document.getElementById("categories-cat-container");
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
            mealsContainerCategories.innerHTML = meal;




            $(".card").click(async function (e) {
                let dataId = $(e.currentTarget).attr("data-id");

                $("#categories-cat-container").addClass("d-none")
                $("#modal").removeClass("d-none")

                console.log(dataId);
                let mealApi = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dataId}`
                );
                let mealDesc = await mealApi.json();

                console.log(mealDesc);
                document.querySelector("#mealDesc").innerText = mealDesc.meals[0].strInstructions;
                document.querySelector("#area").innerText = "Area: " + mealDesc.meals[0].strArea;
                document.querySelector("#category").innerText = "Category " + mealDesc.meals[0].strCategory;
                document.querySelector("#meal-thumb").innerHTML = `
          <img class="w-100 rounded-3" src="${mealDesc.meals[0].strMealThumb}" alt="tumb" />
            
            `;

            });


        });





    }
    homeFood();
    // categories  page end










}
categoriesApi()


})


    









