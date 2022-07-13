BtnAdd.addEventListener("click", AddNew);

function AddNew(){
  const newDiv = document.createElement("div");
  newDiv.classList.add('div-shadow');
  DivContainer.appendChild(newDiv);

}
