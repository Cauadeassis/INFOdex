let classmate = localStorage.getItem("classmate")
classmate = JSON.parse(classmate);
document.title = (classmate.name.split(" ")[0])
if (classmate.nickname) {
    const classmateNickname = document.createElement("p");
    classmateNickname.classList.add("classmateInformation");
    classmateNickname.textContent = `Apelido: ${classmate.nickname}`;
    const nicknameContainer = document.getElementById("nicknameContainer")
    nicknameContainer.appendChild(classmateNickname)
}
const classmateDescription = document.createElement("p");
classmateDescription.classList.add("classmateDescription")
classmateDescription.textContent = classmate.description;
const classmatePhoto = document.createElement("img");
classmatePhoto.classList.add("classmatePhoto");
classmatePhoto.src = classmate.photo;
classmatePhoto.alt = `Foto de ${classmate.name}`;
const photoContainer = document.getElementById("photoContainer");
photoContainer.appendChild(classmatePhoto);
const classmateName = document.createElement("p");
classmateName.classList.add("classmateInformation");
classmateName.textContent = `Nome: ${classmate.name}`;
const nameContainer = document.getElementById("nameContainer")
nameContainer.appendChild(classmateName)
const bodyDiv = document.getElementById("bodyDiv")
bodyDiv.appendChild(classmateDescription)