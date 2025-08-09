import { infoClassmates } from "./classmates.js";
const main = document.querySelector("main")
function createClassmatePhoto(classmate, classmateDiv) {
    const classmatePhoto = document.createElement("img");
    classmatePhoto.classList.add("classmatePhoto");
    classmatePhoto.src = classmate.photo;
    classmatePhoto.alt = `Foto de ${classmate.name}`;
    classmateDiv.appendChild(classmatePhoto);
}
function createClassmateName(classmate, classmateDiv) {
    const classmateName = document.createElement("p");
    classmateName.classList.add("classmateName");
    classmateName.textContent = classmate.name.split(" ")[0];
    classmateDiv.appendChild(classmateName);
}
const fragment = document.createDocumentFragment();
infoClassmates.forEach(classmate => {
    const classmateDiv = document.createElement("div");
    classmateDiv.classList.add("classmateDiv");
    createClassmatePhoto(classmate, classmateDiv);
    createClassmateName(classmate, classmateDiv);
    fragment.appendChild(classmateDiv);
    classmateDiv.addEventListener("click", () => {
        localStorage.setItem("classmate", JSON.stringify(classmate));
        window.location.href = "secondary.html";
    })
});
main.appendChild(fragment)
