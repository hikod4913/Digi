
$(document).ready(function () {
    $('.logLink').click(function () {
        $('.log-in').toggleClass('open');
    })
});


// function minus() {
//     let minusNum = parseInt(inputNum.value);
//     // console.log(minusNum);
//     minusNum--;
//     order1.value = minusNum--;
//     // console.log(order1.value);
// }

var minus1 = document.querySelector('.minus-btn-1');
var minus2 = document.querySelector('.minus-btn-2');
var minus3 = document.querySelector('.minus-btn-3');

var plus1 = document.querySelector('.plus-btn-1');
var plus2 = document.querySelector('.plus-btn-2');
var plus3 = document.querySelector('.plus-btn-3');

var order1 = document.querySelector('#order1');
var order2 = document.querySelector('#order2');
var order3 = document.querySelector('#order3');

var quantity = document.querySelector('#quantity');
var subtotal = document.querySelector('#subtotal');
var costs = document.querySelector('#shipping-costs');
var total = document.querySelector('#total');

var item1 = 10; // 商品1 價格
var item2 = 15; // 商品2 價格
var item3 = 12; // 商品3 價格
var ship = 5; // 運費

var calcSubtotal = order1.value * item1 + order2.value * item2 + order3.value * item3;

// loading頁面後，先顯示的價格
subtotal.innerHTML = calcSubtotal;
costs.innerHTML = ship;
total.innerHTML = calcSubtotal + parseInt(ship);


// 按下按鈕之後的所有計算
minus1.addEventListener('click', function () {
    let minNum1 = parseInt(order1.value); // 取 input 的值，轉成數字型態
    // 判斷數字大小，數量不會有負值，商品最少量為1
    if (minNum1-- >= 2) {
        order1.value = minNum1--;
    }
    else {
        order1.value = 1;
    }
    // 判斷完畢之後，依序將計算完的值放入HTML
    quantity.innerHTML = parseInt(order1.value) + parseInt(order2.value) + parseInt(order3.value);
    let calcSubtotal = order1.value * item1 + order2.value * item2 + order3.value * item3;
    subtotal.innerHTML = calcSubtotal;
    total.innerHTML = calcSubtotal + parseInt(ship);
})

minus2.addEventListener('click', function () {
    let minNum2 = parseInt(order2.value);
    if (minNum2-- >= 2) {
        order2.value = minNum2--;
    }
    else {
        order2.value = 1;
    }
    quantity.innerHTML = parseInt(order1.value) + parseInt(order2.value) + parseInt(order3.value);
    let calcSubtotal = order1.value * item1 + order2.value * item2 + order3.value * item3;
    subtotal.innerHTML = calcSubtotal;
    total.innerHTML = calcSubtotal + parseInt(ship);
})


minus3.addEventListener('click', function () {
    let minNum3 = parseInt(order3.value);
    if (minNum3-- >= 2) {
        order3.value = minNum3--;
    }
    else {
        order3.value = 1;
    }
    quantity.innerHTML = parseInt(order1.value) + parseInt(order2.value) + parseInt(order3.value);
    let calcSubtotal = order1.value * item1 + order2.value * item2 + order3.value * item3;
    subtotal.innerHTML = calcSubtotal;
    total.innerHTML = calcSubtotal + parseInt(ship);
})


plus1.addEventListener('click', function () {
    let plusNum1 = parseInt(order1.value);
    plusNum1++;
    order1.value = plusNum1;
    quantity.innerHTML = parseInt(order1.value) + parseInt(order2.value) + parseInt(order3.value);
    let calcSubtotal = order1.value * item1 + order2.value * item2 + order3.value * item3;
    subtotal.innerHTML = calcSubtotal;
    total.innerHTML = calcSubtotal + parseInt(ship);
})


plus2.addEventListener('click', function () {
    let plusNum2 = parseInt(order2.value);
    plusNum2++;
    order2.value = plusNum2;
    quantity.innerHTML = parseInt(order1.value) + parseInt(order2.value) + parseInt(order3.value);
    let calcSubtotal = order1.value * item1 + order2.value * item2 + order3.value * item3;
    subtotal.innerHTML = calcSubtotal;
    total.innerHTML = calcSubtotal + parseInt(ship);
})


plus3.addEventListener('click', function () {
    let plusNum3 = parseInt(order3.value);
    plusNum3++;
    order3.value = plusNum3;
    quantity.innerHTML = parseInt(order1.value) + parseInt(order2.value) + parseInt(order3.value);
    let calcSubtotal = order1.value * item1 + order2.value * item2 + order3.value * item3;
    subtotal.innerHTML = calcSubtotal;
    total.innerHTML = calcSubtotal + parseInt(ship);
})
