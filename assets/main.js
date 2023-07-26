const inputtdl = document.querySelector('.textarea')
const buttontdl = document.querySelector('.buttoninput')
const listtdl = document.querySelector('.todolist')

function clickButton(e) {
    e.preventDefault()
    addTodo()
}

// adding todoList
function addTodo() {
    const itemall = document.createElement('div')
    itemall.classList.add('itemall')

    const ht = document.querySelector('holder')

    // itemall.appendChild(ht)

    const item = document.createElement('input')
    item.classList.add('item')
    item.innerText = inputtdl.value
    ht.appendChild(item)

    if (inputtdl.value === '') return

    const editbutton= document.createElement("button")
    editbutton.innerHTML = 'EDIT<i class="fa-solid fa-edit"></i>'
    editbutton.classList.add("edit-button")
    ht.appendChild(editbutton)
    
    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = 'DELETE<i class="fa-solid fa-trash"></i>'
    trashbutton.classList.add("trash-button")
    ht.appendChild(trashbutton)

    listtdl.appendChild(itemall)
    inputtdl.value = ''

    item.value = inputtdl.value

    editbutton.addEventListener('click', () => {
        item.style.backgroundColor = 'red'
        item.innerText = "Something New is about to happen"
    })
}


// edit and delete todoList 
function okdel(e) {
    const item = e.target
    const edtbtn = document.querySelector('edit-button');

    // edtbtn.addEventListener('click', () => {
    //     // pass
    // })

    // edit
    
    
    // delete
    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
    }
}

buttontdl.addEventListener('click', clickButton)
listtdl.addEventListener('click', okdel)