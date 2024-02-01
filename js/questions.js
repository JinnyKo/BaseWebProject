//필요한 파일만 가져오기 
import {questions} from './data.js'


// 질문 요소를 찾아서 넣어 줄 것임 
//.progress .value 에서 값을 찾아서 할당 
const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choiceEl = document.querySelector('.choice1')
const choiceE2 = document.querySelector('.choice2')

//const 는 한번 할당 하면 다시 할당 불가, let은 다시 할당 가능
let currentNumber = 0 //현재 질문 number 
let mbti ='' //최종 mbti

function renderQuestion() {
    const question = questions[currentNumber]
    //innerHTML: JavaScript를 사용하여 HTML 문서 내의 특정 요소의 내용을 동적으로 변경할 때 
    numberEl.innerHTML = question.numberP
    questionEl.innerHTML = question.question
    //속성 text => 문자 data
    choiceEl.innerHTML = question.choices[0].text
    choiceE2.innerHTML = question.choices[1].text
    //progress bar 가로 너비 지정, 비율 
    progressValueEl.style.width = (currentNumber + 1 ) * 10 + '%'

}
function nextQuestion(choiceNumber) {
    // 현재 질문에 대한 변수 받기
    const question = questions[currentNumber]
    mbti = mbti + question.choices[choiceNumber].value
    currentNumber = currentNumber + 1 
    renderQuestion()
}

// click event 추가 
choiceE1.addEventListener('click', function() {
    nextQuestion(0)
})
choiceE2.addEventListener('click', function() {
    nextQuestion(1)
})
renderQuestion()