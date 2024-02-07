import bookData from './bookData.json' assert { type: 'json' };
let bookName = document.querySelectorAll('.favorites__container_name')
let author = document.querySelectorAll('.favorites__container_by')
let description = document.querySelectorAll('.favorites__container_text')
let picSrc = document.querySelectorAll('.favorites__container_picture')
let summer = document.getElementById('summer')
let winter = document.getElementById('winter')
let autumn = document.getElementById('autumn')
let spring = document.getElementById('spring')

winter.addEventListener('click', function () {
    bookName.forEach((unit,item)=>{
        bookName[item].textContent = bookData[0].winter[item].name
        author[item].textContent = bookData[0].winter[item].author
        description[item].textContent = bookData[0].winter[item].description
        console.log(document.querySelectorAll('.favorites__container_picture')[item].src)
        picSrc[item].src =`./img/book1${item+1}.jpg`
    })
})
spring.addEventListener('click', function () {
    bookName.forEach((unit,item)=>{
        bookName[item].textContent = bookData[1].spring[item].name
        author[item].textContent = bookData[1].spring[item].author
        description[item].textContent = bookData[1].spring[item].description
        picSrc[item].src = `./img/book2${item+1}.jpg`
    })
})
summer.addEventListener('click', function () {
    bookName.forEach((unit,item)=>{
        bookName[item].textContent = bookData[2].summer[item].name
        author[item].textContent = bookData[2].summer[item].author
        description[item].textContent = bookData[2].summer[item].description
        picSrc[item].src = `./img/book3${item+1}.jpg`
    })
})
autumn.addEventListener('click', function () {
    bookName.forEach((unit,item)=>{
        bookName[item].textContent = bookData[3].autumn[item].name
        author[item].textContent = bookData[3].autumn[item].author
        description[item].textContent = bookData[3].autumn[item].description
        picSrc[item].src = `./img/book4${item+1}.jpg`
    })
})
