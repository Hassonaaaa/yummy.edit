async function foodApi() {
    let foodApi = await fetch(
        `https://themealdb.com/api/json/v1/1/search.php?s=`
    );
    let finalApi = await foodApi.json();

    // home page start
    function homeFood() {
        const mealsContainerHome = document.getElementById("food-container");
        let meal = ``;
        for (let i = 0; i < finalApi.meals.length; i++) {
            meal += `

            <div class="col-md-3 mb-3">
            <div class="position-relative overflow-hidden rounded-2" >
                <div class="card position-relative open-meal" data-id="${finalApi.meals[i].idMeal}">
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
        mealsContainerHome.innerHTML = meal;



        

        // show details

        // show details end
        // get id start

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

        // get id end

        // open meal
        function mealData() {
            const modal = document.querySelector("#modal");
            const openModal = document.querySelectorAll(".open-meal");

            $(openModal).click(() => {
                console.log("hii");
                $("#food-container").addClass("d-none");
                $("#modal").removeClass("d-none");
            });
        }
        mealData();
        // open meal end
    }
    homeFood();
    // home page end
}

foodApi();
