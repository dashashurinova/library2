let pictures = document.querySelectorAll('.about__photos_photo');
let picturesHidden = document.querySelectorAll('.inv_img');
let pags = document.querySelectorAll('.about__photos_button');
let i1=1, i2=2,i3=3, dot=0

let timerId = setTimeout(function tick() {
    if (dot===5){dot=0}
    pags[dot].classList.add('active_pag')
    if (dot-1<0){pags[4].classList.remove('active_pag')}
    else{pags[dot-1].classList.remove('active_pag')}
    dot++

    document.getElementById('pic1').src =`/img/image${i1}.jpg`
    document.getElementById('pic2').src =`/img/image${i2}.jpg`
    document.getElementById('pic3').src =`/img/image${i3}.jpg`
    i1++
    i2++
    i3++
    if (i1>5){i1=1}
    if (i2>5){i2=1}
    if (i3>5){i3=1}
    
    timerId = setTimeout(tick, 3000);
})





