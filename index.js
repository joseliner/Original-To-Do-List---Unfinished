// let x = document.getElementById("input-field").value;
// let text = document.createTextNode(x);


// document.querySelector('#addbtn').addEventListener("click", function() {

//     if (text) {
//         var newItem = document.createElement(".check");
//         newItem.appendChild(text);
//         document.getElementById("listitems").appendChild(newItem);
//     }

// });


// const list = document.querySelector("#listitems");

// list.insertAdjacentHTML("beforeend", `<label class="check">5 mile hike
// <input type="checkbox" checked="checked">
// <span class="checkmark"></span>
// </label>`)

let addbtn = document.getElementById('addbtn');
let listitems = document.getElementById('listitems');
let inputField = document.getElementById(inputfield);

addbtn.addEventListener('click', function() {
    let paragraph = document.createElement('p')
    paragraph.classList.add('.check input');
    paragraph.innerText = inputField.value
    listitems.appendChild(paragraph);
})

// idk what im doing rn ughhhh