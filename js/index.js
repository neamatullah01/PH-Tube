const loadAllCategory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();
    console.log(data.data);

    const AllData = data.data;

    const tabContainer = document.getElementById("tab-container");

    AllData.forEach((category) => {
        console.log(category.category);
        const div = document.createElement("div");
        div.innerHTML = `<h5 class="tab btn">${category.category}</h5>`;
        tabContainer.appendChild(div);
      })

}

loadAllCategory();