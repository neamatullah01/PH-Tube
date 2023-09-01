const loadAllCategory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();
    console.log(data.data);

    const AllData = data.data;

    const tabContainer = document.getElementById("tab-container");

    AllData.forEach((category) => {
        console.log(category.category);
        const div = document.createElement("div");
        div.innerHTML = `<h5 onclick="loadAllCategoryId(${category.category_id})" class="tab btn">${category.category}</h5>`;
        tabContainer.appendChild(div);
    })

}

const loadAllCategoryId = async (allId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${allId}`);
    const data = await response.json();

    console.log(data);

    const cardContainer = document.getElementById('card-container');
        
    const div = document.createElement("div");
    
    data.forEach((id) => {
    div.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl">
    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">
        Shoes!
        <div class="badge badge-secondary">NEW</div>
      </h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">Fashion</div> 
        <div class="badge badge-outline">Products</div>
      </div>
    </div>
  </div>
    `;
    cardContainer.appendChild(div);
    });
}

loadAllCategory();