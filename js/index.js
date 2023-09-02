// for tab btn

const loadAllCategory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();
    // console.log(data.data);

    const AllData = data.data;

    const tabContainer = document.getElementById("tab-container");

    AllData.forEach((category) => {
        // console.log(category.category);
        const div = document.createElement("div");
        div.innerHTML = `<h5 onclick="loadAllCategoryId(${
            category.category_id
          })" class="tab btn">${category.category}</h5>`;
        tabContainer.appendChild(div);
    // console.log(category.category_id);

    });

}


// for card


const loadAllCategoryId = async (allId) => {
    // console.log(allId);

    const response = await fetch(
        `
        https://openapi.programming-hero.com/api/videos/category/${allId}
        `
        );

    const data = await response.json();
    const errorContainer = document.getElementById('error-container');
    if(data.data.length === 0){
         errorContainer.classList.remove('hidden');
    }
    else{
        errorContainer.classList.add('hidden');
    }

    const cardContainer = document.getElementById('card-container');
    const verifiedIcon = document.getElementById('verified-icon').innerHTML;

    cardContainer.innerHTML="";
    data.data.forEach((id) => {
        // console.log(id)
       
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="card w-full bg-base-100 shadow-xl">
                <figure><img class="w-full h-48"
                    src=${id.thumbnail}
                  /></figure>
                <div class="card-body">
                    <div class="flex gap-2">
                        <div class="w-8 h-8">
                            <img class="w-full h-full rounded-full" src=${id.authors[0].profile_picture} />
                        </div>
                        <div>
                            <h1 class="text-base font-bold">${id.title}</h1>
                            <div class="flex">
                                <p class="text-sm font-normal">${id.authors[0].profile_name}</p>
                                <div>
                                    ${id?.authors[0]?.verified? verifiedIcon : ''}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
    `;
    cardContainer.appendChild(div);
    });
}

loadAllCategory();
loadAllCategoryId(1000);


// testing
const loadAllCategoryId2 = async () => {
    // console.log(allId);

    const response = await fetch(
        "https://openapi.programming-hero.com/api/videos/category/1000"
        );

    const data = await response.json();
    console.log(data.data);
}
loadAllCategoryId2();