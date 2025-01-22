const filterItems = document.querySelectorAll(".cars-filter li");
const carItems = document.querySelectorAll(".car");
const carContent = document.getElementById("cars-content");
const carField = document.getElementById("car");
const nameField = document.getElementById("name");
const phoneField = document.getElementById("phone");


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

function validateField(field){
    if(field.value.trim() === ""){
        field.style.borderColor = "red";
        return false;
    }else{
        field.style.borderColor = "white";
        return true;
    }
}

document.getElementById("order-action").addEventListener("click", function(){
    const fields = [carField, nameField, phoneField];
    const allValid = fields.every(validateField);

    if (allValid){
        alert("Спасибо за заявку! Мы скоро свяжемся с вами!");
        fields.forEach(field => field.value = "");
        fields.forEach(field => field.style.borderColor = "White");
    }
});