// IIFE  - Immediately Invoked function expression

(function() {

    console.log("%c App Started ", "font-size :40px;color:red;");

    let mainHeading = document.getElementById("mainHeading");
    mainHeading.textContent = "Hello World";
    mainHeading.style.color = "red";

    let mainDiv = document.getElementById("mainDiv");
    mainDiv.style.color = "blue";

    let paragraph = document.createElement("p");
    paragraph.textContent = "This is inserted using Javascript";
    paragraph.style.fontSize = "50px";
    paragraph.setAttribute("id", "mainParagraph");

    mainDiv.append(paragraph);

    let ol = document.createElement("ol");
    ol.style.listStyleType = "upper-roman";
    
    let li = document.createElement("li");
    li.textContent = "Apple";

    let li2 = document.createElement("li");
    li2.textContent = "Orange";

    let li3 = document.createElement("li");
    li3.textContent = "Banana";

    ol.append(li);
    ol.append(li2);
    ol.append(li3);

    mainDiv.append(ol);


})();