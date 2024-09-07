console.log(`Connect`);

//--------------------------- ТЕМА ---------------------------//
//--------------------------- ТЕМА ---------------------------//

let themeNode1 = document.querySelector(`#theme1`);
let themeNode2 = document.querySelector(`#theme2`);
let pageNode = document.querySelector(`#page`);
let headerNode = document.querySelector(`#header`);
let btnTheme1Node = document.querySelector(`#btnTheme1`);
let btnTheme2Node = document.querySelector(`#btnTheme2`);

themeNode1.addEventListener(`click`, function() {
    if(pageNode.classList.contains(`ligth`)) {
        btnTheme1Node.src = `assets/moon.png`;
        btnTheme2Node.src = `assets/moon.png`;
    }
    else {
        btnTheme1Node.src = `assets/ligth.png`;
        btnTheme2Node.src = `assets/ligth.png`;
    }

    pageNode.classList.toggle(`dark`);
    pageNode.classList.toggle(`ligth`);
    headerNode.classList.toggle(`dark`);
    headerNode.classList.toggle(`ligth`);
});
themeNode2.addEventListener(`click`, function() {
    if(pageNode.classList.contains(`ligth`)) {
        btnTheme1Node.src = `assets/moon.png`;
        btnTheme2Node.src = `assets/moon.png`;
    }
    else {
        btnTheme1Node.src = `assets/ligth.png`;
        btnTheme2Node.src = `assets/ligth.png`;
    }

    pageNode.classList.toggle(`dark`);
    pageNode.classList.toggle(`ligth`);
    headerNode.classList.toggle(`dark`);
    headerNode.classList.toggle(`ligth`);
});

//--------------------------- ПОПУЛЯРНОЕ ---------------------------//
//--------------------------- ПОПУЛЯРНОЕ ---------------------------//

let popularContainerNode = document.querySelector(`#popularContainer`);
let card1 = popularContainerNode.querySelector(`#card1`);
let btn1 = card1.querySelector(`#btn1`);
let p1 = card1.querySelector(`#sostav1`);
let card2 = popularContainerNode.querySelector(`#card2`);
let btn2 = card2.querySelector(`#btn2`);
let p2 = card2.querySelector(`#sostav2`);
let card3 = popularContainerNode.querySelector(`#card3`);
let btn3 = card3.querySelector(`#btn3`);
let p3 = card3.querySelector(`#sostav3`);
let card4 = popularContainerNode.querySelector(`#card4`);
let btn4 = card4.querySelector(`#btn4`);
let p4 = card4.querySelector(`#sostav4`);
let card5 = popularContainerNode.querySelector(`#card5`);
let btn5 = card5.querySelector(`#btn5`);
let p5 = card5.querySelector(`#sostav5`);
let card6 = popularContainerNode.querySelector(`#card6`);
let btn6 = card6.querySelector(`#btn6`);
let p6 = card6.querySelector(`#sostav6`);
console.log(`CHECK1`);

btn1.addEventListener(`click`, function() {
    if(btn1.classList.contains(`inactive`)) {
        p1.innerHTML = `Состав: Молоко, творого, сметана, сахар, соль, клубника`;
        btn1.classList.remove(`inactive`);
        btn1.classList.add(`active`);
    } else {
        p1.innerHTML = `Ванильное облако <br> 1600.00р`;
        btn1.classList.remove(`active`);
        btn1.classList.add(`inactive`);
    }
});
btn2.addEventListener(`click`, function() {
    if(btn2.classList.contains(`inactive`)) {
        p2.innerHTML = `Состав: Молоко, творого, сметана, сахар, соль, клубника`;
        btn2.classList.remove(`inactive`);
        btn2.classList.add(`active`);
    } else {
        p2.innerHTML = `Малиновый взрыв <br> 1600.00р`;
        btn2.classList.remove(`active`);
        btn2.classList.add(`inactive`);
    }
});
btn3.addEventListener(`click`, function() {
    if(btn3.classList.contains(`inactive`)) {
        p3.innerHTML = `Состав: Молоко, творого, сметана, сахар, соль, клубника`;
        btn3.classList.remove(`inactive`);
        btn3.classList.add(`active`);
    } else {
        p3.innerHTML = `Фруктовое созвездие <br> 1600.00р`;
        btn3.classList.remove(`active`);
        btn3.classList.add(`inactive`);
    }
});
btn4.addEventListener(`click`, function() {
    if(btn4.classList.contains(`inactive`)) {
        p4.innerHTML = `Состав: Молоко, творого, сметана, сахар, соль, клубника`;
        btn4.classList.remove(`inactive`);
        btn4.classList.add(`active`);
    } else {
        p4.innerHTML = `Карамельный рассвет <br> 1600.00р`;
        btn4.classList.remove(`active`);
        btn4.classList.add(`inactive`);
    }
});
btn5.addEventListener(`click`, function() {
    if(btn5.classList.contains(`inactive`)) {
        p5.innerHTML = `Состав: Молоко, творого, сметана, сахар, соль, клубника`;
        btn5.classList.remove(`inactive`);
        btn5.classList.add(`active`);
    } else {
        p5.innerHTML = `Цитрусовая фантазия <br> 1600.00р`;
        btn5.classList.remove(`active`);
        btn5.classList.add(`inactive`);
    }
});
btn6.addEventListener(`click`, function() {
    if(btn6.classList.contains(`inactive`)) {
        p6.innerHTML = `Состав: Молоко, творого, сметана, сахар, соль, клубника`;
        btn6.classList.remove(`inactive`);
        btn6.classList.add(`active`);
    } else {
        p6.innerHTML = `Шоколадный вихрь <br> 1600.00р`;
        btn6.classList.remove(`active`);
        btn6.classList.add(`inactive`);
    }
});

//--------------------------- НА ПРАЗДНИК ---------------------------//
//--------------------------- НА ПРАЗДНИК ---------------------------//

let holidayContainerNode = document.querySelector(`#holidayContainer`);
let card7 = holidayContainerNode.querySelector(`#card7`);
let btn7 = card7.querySelector(`#btn7`);
let p7 = card7.querySelector(`#sostav7`);
let card8 = holidayContainerNode.querySelector(`#card8`);
let btn8 = card8.querySelector(`#btn8`);
let p8 = card8.querySelector(`#sostav8`);
let card9 = holidayContainerNode.querySelector(`#card9`);
let btn9 = card9.querySelector(`#btn9`);
let p9 = card9.querySelector(`#sostav9`);
let card10 = holidayContainerNode.querySelector(`#card10`);
let btn10 = card10.querySelector(`#btn10`);
let p10 = card10.querySelector(`#sostav10`);
let card11 = holidayContainerNode.querySelector(`#card11`);
let btn11 = card11.querySelector(`#btn11`);
let p11 = card11.querySelector(`#sostav11`);
let card12 = holidayContainerNode.querySelector(`#card12`);
let btn12 = card12.querySelector(`#btn12`);
let p12 = card12.querySelector(`#sostav12`);
console.log(`CHECK2`);

btn7.addEventListener(`click`, function() {
    if(btn7.classList.contains(`inactive`)) {
        p7.innerHTML = `Состав: Молоко, творого, сметана, сахар, соль, клубника`;
        btn7.classList.remove(`inactive`);
        btn7.classList.add(`active`);
    } else {
        p7.innerHTML = `Ореховый гармон <br> 1600.00р`;
        btn7.classList.remove(`active`);
        btn7.classList.add(`inactive`);
    }
});
btn8.addEventListener(`click`, function() {
    if(btn8.classList.contains(`inactive`)) {
        p8.innerHTML = `Состав: Молоко, творого, сметана, сахар, соль, клубника`;
        btn8.classList.remove(`inactive`);
        btn8.classList.add(`active`);
    } else {
        p8.innerHTML = `Мятная свежесть <br> 1600.00р`;
        btn8.classList.remove(`active`);
        btn8.classList.add(`inactive`);
    }
});
btn9.addEventListener(`click`, function() {
    if(btn9.classList.contains(`inactive`)) {
        p9.innerHTML = `Состав: Молоко, творого, сметана, сахар, соль, клубника`;
        btn9.classList.remove(`inactive`);
        btn9.classList.add(`active`);
    } else {
        p9.innerHTML = `Шоколадная радуга <br> 1600.00р`;
        btn9.classList.remove(`active`);
        btn9.classList.add(`inactive`);
    }
});
btn10.addEventListener(`click`, function() {
    if(btn10.classList.contains(`inactive`)) {
        p10.innerHTML = `Состав: Молоко, творого, сметана, сахар, соль, клубника`;
        btn10.classList.remove(`inactive`);
        btn10.classList.add(`active`);
    } else {
        p10.innerHTML = `Ягодное наслаждение <br> 1600.00р`;
        btn10.classList.remove(`active`);
        btn10.classList.add(`inactive`);
    }
});
btn11.addEventListener(`click`, function() {
    if(btn11.classList.contains(`inactive`)) {
        p11.innerHTML = `Состав: Молоко, творого, сметана, сахар, соль, клубника`;
        btn11.classList.remove(`inactive`);
        btn11.classList.add(`active`);
    } else {
        p11.innerHTML = `Лимонная искра <br> 1600.00р`;
        btn11.classList.remove(`active`);
        btn11.classList.add(`inactive`);
    }
});
btn12.addEventListener(`click`, function() {
    if(btn12.classList.contains(`inactive`)) {
        p12.innerHTML = `Состав: Молоко, творого, сметана, сахар, соль, клубника`;
        btn12.classList.remove(`inactive`);
        btn12.classList.add(`active`);
    } else {
        p12.innerHTML = `Кокосовое море <br> 1600.00р`;
        btn12.classList.remove(`active`);
        btn12.classList.add(`inactive`);
    }
});

//--------------------------- НОВИНКИ ---------------------------//
//--------------------------- НОВИНКИ ---------------------------//

let newContainerNode = document.querySelector(`#newContainer`);
let card13 = newContainerNode.querySelector(`#card13`);
let btn13 = card13.querySelector(`#btn13`);
let p13 = card13.querySelector(`#sostav13`);
let card14 = newContainerNode.querySelector(`#card14`);
let btn14 = card14.querySelector(`#btn14`);
let p14 = card14.querySelector(`#sostav14`);
let card15 = newContainerNode.querySelector(`#card15`);
let btn15 = card15.querySelector(`#btn15`);
let p15 = card15.querySelector(`#sostav15`);
let card16 = newContainerNode.querySelector(`#card16`);
let btn16 = card16.querySelector(`#btn16`);
let p16 = card16.querySelector(`#sostav16`);
let card17 = newContainerNode.querySelector(`#card17`);
let btn17 = card17.querySelector(`#btn17`);
let p17 = card17.querySelector(`#sostav17`);
let card18 = newContainerNode.querySelector(`#card18`);
let btn18 = card18.querySelector(`#btn18`);
let p18 = card18.querySelector(`#sostav18`);
console.log(`CHECK3`);

btn13.addEventListener(`click`, function() {
    if(btn13.classList.contains(`inactive`)) {
        p13.innerHTML = `Состав: Молоко, творого, сметана, сахар, соль, клубника`;
        btn13.classList.remove(`inactive`);
        btn13.classList.add(`active`);
    } else {
        p13.innerHTML = `Клубничный коктейль <br> 1600.00р`;
        btn13.classList.remove(`active`);
        btn13.classList.add(`inactive`);
    }
});
btn14.addEventListener(`click`, function() {
    if(btn14.classList.contains(`inactive`)) {
        p14.innerHTML = `Состав: Молоко, творого, сметана, сахар, соль, клубника`;
        btn14.classList.remove(`inactive`);
        btn14.classList.add(`active`);
    } else {
        p14.innerHTML = `Мармеладное солнце <br> 1600.00р`;
        btn14.classList.remove(`active`);
        btn14.classList.add(`inactive`);
    }
});
btn15.addEventListener(`click`, function() {
    if(btn15.classList.contains(`inactive`)) {
        p15.innerHTML = `Состав: Молоко, творого, сметана, сахар, соль, клубника`;
        btn15.classList.remove(`inactive`);
        btn15.classList.add(`active`);
    } else {
        p15.innerHTML = `Карамельная нежность <br> 1600.00р`;
        btn15.classList.remove(`active`);
        btn15.classList.add(`inactive`);
    }
});
btn16.addEventListener(`click`, function() {
    if(btn16.classList.contains(`inactive`)) {
        p16.innerHTML = `Состав: Молоко, творого, сметана, сахар, соль, клубника`;
        btn16.classList.remove(`inactive`);
        btn16.classList.add(`active`);
    } else {
        p16.innerHTML = `Кремовый оазис <br> 1600.00р`;
        btn16.classList.remove(`active`);
        btn16.classList.add(`inactive`);
    }
});
btn17.addEventListener(`click`, function() {
    if(btn17.classList.contains(`inactive`)) {
        p17.innerHTML = `Состав: Молоко, творого, сметана, сахар, соль, клубника`;
        btn17.classList.remove(`inactive`);
        btn17.classList.add(`active`);
    } else {
        p17.innerHTML = `Фисташковая фантазия <br> 1600.00р`;
        btn17.classList.remove(`active`);
        btn17.classList.add(`inactive`);
    }
});
btn18.addEventListener(`click`, function() {
    if(btn18.classList.contains(`inactive`)) {
        p18.innerHTML = `Состав: Молоко, творого, сметана, сахар, соль, клубника`;
        btn18.classList.remove(`inactive`);
        btn18.classList.add(`active`);
    } else {
        p18.innerHTML = `Манго мечта <br> 1600.00р`;
        btn18.classList.remove(`active`);
        btn18.classList.add(`inactive`);
    }
});