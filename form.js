const step = Array.from(document.querySelectorAll("form .step"));
const nextbtn = document.querySelectorAll("form .next-btn");
const prevbtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");
nextbtn.forEach((button) => {
    button.addEventListener("click", () =>{
        changeStep("next");

    });
});

prevbtn.forEach((button) =>{
    button.addEventListener("click", () =>{
        changeStep("prev");

    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = [];
    form.querySelectorAll("input").forEach((input) => {
        const {name, value} = input;
        inputs.push({name, value});
    });
    console.log(inputs);
    form.reset();
});

function changeStep(btn) {
    let index = 0;
    const active = document.querySelector(".active");
    index = step.indexOf(active);
    step[index].classList.remove("active");
    if (btn == "next"){
        index++;
    } else if (btn == "prev"){
        index--;
    }
    step[index].classList.add("active");
}

