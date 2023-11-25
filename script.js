const leftbox = document.querySelector('.leftbox')
const rightbox = document.querySelector('.rightbox')
const container = document.querySelector('.container')
const lists = document.querySelectorAll('.list')

lists.forEach(list => {
    list.addEventListener('dragstart', function(e) {
        let selected = e.target

        rightbox.addEventListener('dragover', function(e) {
            e.preventDefault()
        })
        rightbox.addEventListener('drop', function(e) {
            rightbox.appendChild(selected)
            selected.style.backgroundColor = 'orange'
            selected = null
        })
        
        leftbox.addEventListener('dragover', function(e) {
            e.preventDefault()
        })
        leftbox.addEventListener('drop', function(e) {
            leftbox.appendChild(selected)
            selected.style.backgroundColor = 'blue'
            selected = null
        })
    })
})