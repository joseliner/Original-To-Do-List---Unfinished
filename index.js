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

let addTodo = document.getElementById('addbtn');
let listitems = document.getElementById('listitems');
let inputField = document.getElementById('input-field');


if (inputField) {
    const typeTodo = inputField.addEventListener('keydown', (event) => {
        const newTodo = event.target.value

        addTodo.addEventListener('click', function(event) {
            event.preventDefault()
                // passed down new todo from above... now set up logic to store/send this to the html browser 
            console.log(newTodo)
                // let paragraph = document.createElement('p')
                // paragraph.classList.add('.check input');
                // paragraph.innerText = inputField.value
                // listitems.appendChild(paragraph);
        })


    })
}

// append to the check box make it add to the list when hit add or look up jquery append or json