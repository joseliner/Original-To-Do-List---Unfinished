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


// if (inputField) {
//     const typeTodo = inputField.addEventListener('change', (inputEvent) => {
//                 let newTodo = inputEvent.target.value
//                 inputEvent.stopPropagation()
//                 inputEvent.preventDefault()


//         addTodo.addEventListener('click', function(btnEvent) {
//             btnEvent.stopPropagation()
//             btnEvent.preventDefault()

//             console.log('todo', newTodo)
//             console.log('clicked', btnEvent.target.value)



//             $('ul').append(`<label class="check">test
//                                     <input type="checkbox" checked="checked">
//                                     <span class="checkmark"></span>
//                                 </label>`);

//             typeTodo.removeEventListener('reset')
//                 // passed down new todo from above... now set up logic to store/send this to the html browser 
//                 // let paragraph = document.createElement('p')
//                 // paragraph.classList.add('.check input');
//                 // paragraph.innerText = inputField.value
//                 // listitems.appendChild(paragraph);
//         })


//     })
// }


let givenToDos = [
    'Food shop',
    'Dog grooming',
    'Laundry',
    'Bank run',
];

$(document).ready(function() {
    for (let i = 0; i < givenToDos.length; i++) {
        $('#to-do-list').append('<div class="to-do-item" ><button class="completed">DONE</button> <strong>' + givenToDos[i] + '</strong></div>');
    }

    $('#submit').on('click', function(e) {
        e.preventDefault();
        const $input = $('#input-box');
        const $newTodo = $input.val();
        givenToDos.push($newTodo);

        $('#to-do-list').append('<div class="to-do-item" ><button class="completed">DONE</button> <strong>' + $newTodo + '</strong></div>');
        $input.val('');
    });

});