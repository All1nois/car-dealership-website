const filterItems = document.querySelectorAll(".cars-filter li");
const carItems = document.querySelectorAll(".car");
const carContent = document.getElementById("cars-content");

filterItems.forEach(item => {
    item.onclick = () => {
        filterItems.forEach(el => el.classList.remove("active"));
        item.classList.add("active");

        const filterText = item.textContent.toLowerCase();
        carItems.forEach(car => {
            if(filterText === "все марки" || car.querySelector("h4").textContent.toLowerCase().includes(filterText)){
                car.style.display = "flex";
            }else{
                car.style.display = "none";
            }
        });

        carContent.scrollIntoView({behavior:"instant"});
    }
})