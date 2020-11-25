document.addEventListener("DOMContentLoaded", function (event) {
    let header_btn = document.querySelector('#header_btn')
    let header_left = document.querySelector('#header_left')

    header_btn.addEventListener('click', (e) => {
        if (header_left.classList.contains('disabled') == true) {
            header_left.classList.remove("disabled");
            console.log('disabled remove')
        } else {
            header_left.classList.add("disabled");
            console.log('disabled add')
        }
    })

    // task number 3

    let box_one_check = document.querySelector('#box_one_check')
    let text_one = document.querySelector('#text_one')
    let box_two_check = document.querySelector('#box_two_check')
    let text_two = document.querySelector('#text_two')

    box_one_check.addEventListener('change', (e) => {
        if (!e.target.checked) {
            text_one.style.display = 'none'
        } else {
            text_one.style.display = 'flex'
        }
    })

    box_two_check.addEventListener('change', (e) => {
        if (!e.target.checked) {
            text_two.style.display = 'none'
        } else {
            text_two.style.display = 'flex'
        }
    })


});


// task number 1

let arr = [1, 2, 3, 4, 5];

function stepFunc(arr) {
    return function (step) {
        for (i = 1; i <= step; i++) arr.push(arr.shift());
        console.log(arr);
    }
}

let step = stepFunc(arr)
step(3)

// task number 2

let line1 = "aababba"
let line2 = "abbaabcd"

const finder = (line1, line2) => {
    arr = [];
    line1.split('').reduce((last, item) => {
        if (line2.indexOf(`${last}${item}`) !== -1) {
            arr.push(`${last}${item}`);
            return `${last}${item}`;
        }
        else return item;
    }, '');
    return arr.sort((a, b) => b.length - a.length)[0]
}

console.log(finder(line1, line2))


