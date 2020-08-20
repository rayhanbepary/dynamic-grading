const totalMark = document.getElementById('totalMark');
const totalCalBtn = document.getElementById('totalCalBtn');
const finalGrade = document.getElementById('finalGrade');

const calBtn1 = document.getElementById('calBtn1');
const bangla = document.getElementById('bangla');
const grad1  = document.getElementById('grad1');

const calBtn2 = document.getElementById('calBtn2');
const english = document.getElementById('english');
const grad2  = document.getElementById('grad2');

const calBtn3 = document.getElementById('calBtn3');
const ict = document.getElementById('ict');
const grad3  = document.getElementById('grad3');

calBtn1.addEventListener('click', () => {
    let banglaNum = parseInt(bangla.value);
    gradingConditions(banglaNum,grad1,bangla);

    const id = 1;
    arrayFunc(banglaNum,id)
})

calBtn2.addEventListener('click', () => {
    let englishNum = parseInt(english.value);
    gradingConditions(englishNum,grad2,english)

    const id = 2;
    arrayFunc(englishNum,id)
});

calBtn3.addEventListener('click', () => {
    let ictNum = parseInt(ict.value);
    gradingConditions(ictNum,grad3,ict)

    const id = 3;
    arrayFunc(ictNum,id)
});

gradingConditions = (Numbers,gradPrint,emptyValue) => {

    if(Numbers >= 33 && Numbers <= 39){
        gradPrint.innerHTML = "D";
    }else if(Numbers >= 40 && Numbers <= 49 ){
        gradPrint.innerHTML = "C";
    }else if(Numbers >= 50 && Numbers <= 59 ){
        gradPrint.innerHTML = "B";
    }else if(Numbers >= 60 && Numbers <= 69 ){
        gradPrint.innerHTML = "A-";
    }else if(Numbers >= 70 && Numbers <= 79 ){
        gradPrint.innerHTML = "A";
    }else if(Numbers >= 80 && Numbers <= 100 ){
        gradPrint.innerHTML = "A+";
    }else if(Numbers >= 0 && Numbers <= 32 ){
        gradPrint.innerHTML = "F";
    }else if (emptyValue.value ===  "" ){
        alert("please enter your number");
    }

}

totalCalBtn.addEventListener('click', () => {
    let totalMarks = parseInt(totalMark.innerText);
    if(grad1.innerText === "F" || grad2.innerText === "F" || grad3.innerText === "F"){
        finalGrade.innerText = "F";
    }else if( totalMarks/3 >= 80 && totalMarks/3 <= 100 ){
        finalGrade.innerText = "A+"
    }else if( totalMarks/3 >= 70 && totalMarks/3 <= 79 ){
        finalGrade.innerText = "A"
    }else if( totalMarks/3 >= 60 && totalMarks/3 <= 69 ){
        finalGrade.innerText = "A-"
    }else if( totalMarks/3 >= 50 && totalMarks/3 <= 59 ){
        finalGrade.innerText = "B"
    }else if( totalMarks/3 >= 40 && totalMarks/3 <= 49 ){
        finalGrade.innerText = "C"
    }else if( totalMarks/3 >= 33 && totalMarks/3 <= 39 ){
        finalGrade.innerText = "D"
    }else if( totalMarks/3 >= 0 && totalMarks/3 <= 32 ){
        finalGrade.innerText = "F"
    }
})

let totalMarkArray = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 }
];

function arrayFunc(num,id){
    totalMarkArray.find(res => {
        if(res.id === id){
            res.value = num
        }
    })
    let result = totalMarkArray[0].value + totalMarkArray[1].value + totalMarkArray[2].value;
    totalMark.innerHTML = result;
}


