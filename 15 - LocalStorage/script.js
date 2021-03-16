const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const btnCheckAll = document.querySelector('#check-all')
const btnUncheckAll = document.querySelector('#clear')


function addItem(e) {
    // console.log('Hello')
    e.preventDefault()
    const text = (this.querySelector('[name=item')).value
    const item = {
        text,
        done: false
    }
    // console.log(item)
    items.push(item)
    populateList(items, itemsList)
    localStorage.setItem('items', JSON.stringify(items))
    this.reset()
}

function populateList(plates = [], plateList) {
    plateList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}>
            <label for="item${i}">${plate.text}</label>
        </li>
        `
    }).join('')
}

function toggleDone(e) {
    if (!e.target.matches('input')) return // skip this unless it's an input
    // console.log(e.target)
    const index = e.target.dataset.index
    items[index].done = !items[index].done
    localStorage.setItem('items', JSON.stringify(items))
    populateList(items, itemsList)
}

function uncheckAll() {
    items.forEach(el => {
        el.done = false
        localStorage.setItem('items', JSON.stringify(items))
        populateList(items, itemsList)
    })
}

function checkAll() {
    items.forEach(el => {
        el.done = true
        localStorage.setItem('items', JSON.stringify(items))
        populateList(items, itemsList)
    })
}

addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleDone)
populateList(items, itemsList)
btnCheckAll.addEventListener('click', checkAll)
btnUncheckAll.addEventListener('click', uncheckAll)