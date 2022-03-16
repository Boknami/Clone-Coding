const h1 = document.querySelector(".title h1")

function Run(){
    const h1sColor = h1.style.color;

    if (h1sColor === "blue"){
        h1sColor = "orange";
    }
    else{
        h1sColor = "black";
    }
}

h1.addEventListener("click", Run);