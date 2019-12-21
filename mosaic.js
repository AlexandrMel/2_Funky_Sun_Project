// Variable declaration
var main_Button = document.querySelector(".push_me");
var triangle = document.querySelectorAll(".triangle");
var square = document.querySelectorAll(".square");
var half1_square = document.querySelectorAll(".half1_square");
var half2_square = document.querySelectorAll(".half2_square");
var circle = document.querySelectorAll(".circle");
var trapez = document.querySelectorAll(".trapez");
var retangle = document.querySelectorAll(".retangle");
var body = document.querySelector("body")
var forms = ["triangle", "square", "trapez", "half2_square", "circle", "half2_square", "triangle"];
// The main function when clicking the Push Me button

function circleCreate(num, num2){
for(i=1; i<=num; i++){
let newContainer = document.createElement("div")
newContainer.classList.add(`container${i}`)
body.appendChild(newContainer);
for(j=1; j<= num2; j++){
    newContainer.appendChild(`<div class="big_square${j}">
    <div class="triangle"></div>
</div>`)
}
}
}
main_Button.addEventListener("click", function () {
    var new_color = getRandomColor();
    var new_color1 = getRandomColor();
    var new_obj = getRandomClass();
    // Modifying the shapes of the first smallest circle
    for (i = 0; i <= 23; i++) {
        triangle[i].removeAttribute("style")
        triangle[i].className = "";
        triangle[i].classList.toggle(new_obj);
        // Modifying the color of the first smallest circle
        if (new_obj == "triangle") {
            triangle[i].style.borderRightColor = new_color;
            if (i % 2 === 0) {
                triangle[i].style.borderRightColor = new_color1;

            }
        };
        if (new_obj == "square") {
            triangle[i].style.background = new_color;
            if (i % 2 === 0) {
                triangle[i].style.background = new_color1;

            }
        };
        if (new_obj == "half1_square") {
            triangle[i].style.borderTopColor = new_color;
            if (i % 2 === 0) {
                triangle[i].style.borderTopColor = new_color1;

            }
        };
        if (new_obj == "half2_square") {
            triangle[i].style.borderBottomColor = new_color;
            if (i % 2 === 0) {
                triangle[i].style.borderBottomColor = new_color1;

            }
        };
        if (new_obj == "circle") {
            triangle[i].style.background = new_color;
            if (i % 2 === 0) {
                triangle[i].style.background = new_color1;

            }
        };
        if (new_obj == "trapez") {
            triangle[i].style.borderLeftColor = new_color;
            if (i % 2 === 0) {
                triangle[i].style.borderLeftColor = new_color1;

            }
        };
        if (new_obj == "retangle") {
            triangle[i].style.background = new_color;
            if (i % 2 === 0) {
                triangle[i].style.background = new_color1;

            }
        };
    }
    var new_color = getRandomColor();
    var new_color1 = getRandomColor();
    var new_obj = getRandomClass();
    // Modifying the shapes of the second circle
    for (i = 0; i <= 23; i++) {
        square[i].removeAttribute("style")
        square[i].className = ""
        square[i].classList.toggle(new_obj);
        // Modifying the color of the second circle
        if (new_obj == "triangle") {
            square[i].style.borderRightColor = new_color;
            if (i % 2 === 0) {
                square[i].style.borderRightColor = new_color1;

            }
        };
        if (new_obj == "square") {
            square[i].style.background = new_color;
            if (i % 2 === 0) {
                square[i].style.background = new_color1;

            }
        };
        if (new_obj == "half1_square") {
            square[i].style.borderTopColor = new_color;
            if (i % 2 === 0) {
                square[i].style.borderTopColor = new_color1;

            }
        };
        if (new_obj == "half2_square") {
            square[i].style.borderBottomColor = new_color;
            if (i % 2 === 0) {
                square[i].style.borderBottomColor = new_color1;

            }
        };
        if (new_obj == "circle") {
            square[i].style.background = new_color;
            if (i % 2 === 0) {
                square[i].style.background = new_color1;

            }
        };
        if (new_obj == "trapez") {
            square[i].style.borderLeftColor = new_color;
            if (i % 2 === 0) {
                square[i].style.borderLeftColor = new_color1;

            }
        };
        if (new_obj == "retangle") {
            square[i].style.background = new_color;
            if (i % 2 === 0) {
                triangle[i].style.background = new_color1;

            }
        };
    }
    var new_color = getRandomColor();
    var new_obj = getRandomClass();
    // Modifying the shapes of the third circle
    for (i = 0; i <= 23; i++) {
        half1_square[i].removeAttribute("style")
        half1_square[i].className = "";
        half1_square[i].classList.toggle(new_obj);
        // Modifying the color of the third circle
        if (new_obj == "triangle") {
            half1_square[i].style.borderRightColor = new_color;
            if (i % 2 === 0) {
                half1_square[i].style.borderRightColor = new_color1;
            }
        };
        if (new_obj == "square") {
            half1_square[i].style.background = new_color;
            if (i % 2 === 0) {
                half1_square[i].style.background = new_color1;

            }
        };
        if (new_obj == "half1_square") {
            half1_square[i].style.borderTopColor = new_color;
            if (i % 2 === 0) {
                half1_square[i].style.borderTopColor = new_color1;

            }
        };
        if (new_obj == "half2_square") {
            half1_square[i].style.borderBottomColor = new_color;
            if (i % 2 === 0) {
                half1_square[i].style.borderBottomColor = new_color1;

            }
        };
        if (new_obj == "circle") {
            half1_square[i].style.background = new_color;
            if (i % 2 === 0) {
                half1_square[i].style.background = new_color1;

            }
        };
        if (new_obj == "trapez") {
            half1_square[i].style.borderLeftColor = new_color;
            if (i % 2 === 0) {
                half1_square[i].style.borderLeftColor = new_color1;

            }
        };
        if (new_obj == "retangle") {
            half1_square[i].style.background = new_color;
            if (i % 2 === 0) {
                half1_square[i].style.background = new_color1;

            }
        };
    }
    var new_color = getRandomColor();
    var new_color1 = getRandomColor();
    var new_obj = getRandomClass();
    // Modifying the shapes of the forth circle
    for (i = 0; i <= 23; i++) {
        half2_square[i].removeAttribute("style")
        half2_square[i].className = "";
        half2_square[i].classList.toggle(new_obj);
        // Modifying the color of the forth circle
        if (new_obj == "triangle") {
            half2_square[i].style.borderRightColor = new_color;
            if (i % 2 === 0) {
                half2_square[i].style.borderRightColor = new_color1;
            }
        };
        if (new_obj == "square") {
            half2_square[i].style.background = new_color;
            if (i % 2 === 0) {
                half2_square[i].style.background = new_color1;

            }
        };
        if (new_obj == "half1_square") {
            half2_square[i].style.borderTopColor = new_color;
            if (i % 2 === 0) {
                half2_square[i].style.borderTopColor = new_color1;
            }
        };
        if (new_obj == "half2_square") {
            half2_square[i].style.borderBottomColor = new_color;
            if (i % 2 === 0) {
                half2_square[i].style.borderBottomColor = new_color1;

            }
        };
        if (new_obj == "circle") {
            half2_square[i].style.background = new_color;
            if (i % 2 === 0) {
                half2_square[i].style.background = new_color1;

            }
        };
        if (new_obj == "trapez") {
            half2_square[i].style.borderLeftColor = new_color;
            if (i % 2 === 0) {
                half2_square[i].style.borderLeftColor = new_color1;

            }
        };
        if (new_obj == "retangle") {
            half2_square[i].style.background = new_color;
            if (i % 2 === 0) {
                half2_square[i].style.background = new_color1;

            }
        };
    }

    var new_color = getRandomColor();
    var new_color1 = getRandomColor();
    var new_obj = getRandomClass();
    // Modifying the shapes of the fifth circle
    for (i = 0; i <= 23; i++) {
        circle[i].removeAttribute("style")
        circle[i].className = "";
        circle[i].classList.toggle(new_obj);
        // Modifying the color of the fifth circle
        if (new_obj == "triangle") {
            circle[i].style.borderRightColor = new_color;
            if (i % 2 === 0) {
                circle[i].style.borderRightColor = new_color1;

            }
        };
        if (new_obj == "square") {
            circle[i].style.background = new_color;
            if (i % 2 === 0) {
                circle[i].style.background = new_color1;

            }
        };
        if (new_obj == "half1_square") {
            circle[i].style.borderTopColor = new_color;
            if (i % 2 === 0) {
                circle[i].style.borderTopColor = new_color1;

            }
        };
        if (new_obj == "half2_square") {
            circle[i].style.borderBottomColor = new_color;
            if (i % 2 === 0) {
                circle[i].style.borderBottomColor = new_color1;

            }
        };
        if (new_obj == "circle") {
            circle[i].style.background = new_color;
            if (i % 2 === 0) {
                circle[i].style.background = new_color1;

            }
        };
        if (new_obj == "trapez") {
            circle[i].style.borderLeftColor = new_color;
            if (i % 2 === 0) {
                circle[i].style.borderLeftColor = new_color1;

            }
        };
        if (new_obj == "retangle") {
            circle[i].style.background = new_color;
            if (i % 2 === 0) {
                circle[i].style.background = new_color1;

            }
        };
    }

    var new_color = getRandomColor();
    var new_color1 = getRandomColor();
    var new_obj = getRandomClass();
    // Modifying the shapes of the sixth circle
    for (i = 0; i <= 23; i++) {
        trapez[i].removeAttribute("style")
        trapez[i].className = "";
        trapez[i].classList.toggle(new_obj);
        // Modifying the color of the sixth circle
        if (new_obj == "triangle") {
            trapez[i].style.borderRightColor = new_color;
            if(i % 2 === 0){
                trapez[i].style.borderRightColor = new_color1;

            }
        };
        if (new_obj == "square") {
            trapez[i].style.background = new_color;
            if(i % 2 === 0){
                trapez[i].style.background = new_color1;

            }
        };
        if (new_obj == "half1_square") {
            trapez[i].style.borderTopColor = new_color;
            if(i % 2 === 0){
                trapez[i].style.borderTopColor = new_color1;

            }
        };
        if (new_obj == "half2_square") {
            trapez[i].style.borderBottomColor = new_color;
            if(i % 2 === 0){
                trapez[i].style.borderBottomColor = new_color1;

            }
        };
        if (new_obj == "circle") {
            trapez[i].style.background = new_color;
            if(i % 2 === 0){
                trapez[i].style.background = new_color1;

            }
        };
        if (new_obj == "trapez") {
            trapez[i].style.borderLeftColor = new_color;
            if(i % 2 === 0){
                trapez[i].style.borderLeftColor = new_color1;

            }
        };
        if (new_obj == "retangle") {
            trapez[i].style.background = new_color;
            if(i % 2 === 0){
                trapez[i].style.background = new_color1;

            }
        };

    }
    var new_color = getRandomColor();
    var new_color1 = getRandomColor();
    var new_obj = getRandomClass();
    // Modifying the shapes of the seventh circle
    for (i = 0; i <= 23; i++) {
        retangle[i].removeAttribute("style")
        retangle[i].className = "";
        retangle[i].classList.toggle(new_obj);
        // Modifying the color of the seventh circle
        if (new_obj == "triangle") {
            retangle[i].style.borderRightColor = new_color;
            if(i % 2 === 0){
                retangle[i].style.borderRightColor = new_color1;

            }
        };
        if (new_obj == "square") {
            retangle[i].style.background = new_color;
            if(i % 2 === 0){
                retangle[i].style.background = new_color1;

            }
        };
        if (new_obj == "half1_square") {
            retangle[i].style.borderTopColor = new_color;
            if(i % 2 === 0){
                retangle[i].style.borderTopColor = new_color1;

            }
        };
        if (new_obj == "half2_square") {
            retangle[i].style.borderBottomColor = new_color;
            if(i % 2 === 0){
                retangle[i].style.borderBottomColor = new_color1;

            }
        };
        if (new_obj == "circle") {
            retangle[i].style.background = new_color;
            if(i % 2 === 0){
                retangle[i].style.background = new_color1;

            }
        };
        if (new_obj == "trapez") {
            retangle[i].style.borderLeftColor = new_color;
            if(i % 2 === 0){
                retangle[i].style.borderLeftColor = new_color1;

            }
        };
        if (new_obj == "retangle") {
            retangle[i].style.background = new_color;
            if(i % 2 === 0){
                retangle[i].style.background = new_color1;

            }
        };
    }
});

// Function to generate random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// Function to generate random shape
function getRandomClass() {

    for (var i = 0; i < 7; i++) {
        form = forms[Math.floor(Math.random() * 6)];
    }
    return form;
}