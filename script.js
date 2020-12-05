const quizData = [
    {
        question: 'What year is it?',
        a: '1992',
        b: '1963',
        c: '2002',
        d: '2020',
        correct: 'd'
    },
    {
        question: 'What does JS stand for?',
        a: 'java',
        b: 'jump shoot',
        c: 'javascript',
        d: 'jumanju shoes',
        correct: 'c'
    },
    {
        question: 'What did nikola tesla invent',
        a: 'tesla coil',
        b: 'electricity',
        c: 'golf balls',
        d: 'the internet',
        correct: 'a'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Cascading Style Sheet',
        b: 'HyperText Markup Language',
        c: 'javascript',
        d: 'Javascript object notation',
        correct: 'b'
    },
    {
        question: 'what year was javascript launched?',
        a: '2020',
        b: '2019',
        c: '1996',
        d: '1995',
        correct: 'd'
    }

]

const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById("submitBtn");

let currentQuestion = 0;
let score = 0;

const loadQuiz = () => {
    const currentQuizData = quizData[currentQuestion]
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

const getSelected = () => {
    const answers = document.querySelectorAll('input[name="answer"]');
    for(const answer of answers) {
        if(answer.checked){
            return answer.id
        }
    }
}


submitBtn.addEventListener('click', () => {
    if(currentQuestion < quizData.length - 1){
        const answer = getSelected()

        if(answer){
            if(answer === quizData[currentQuestion].correct){
                score++
            }
        }
        document.getElementById(answer).checked = false
        currentQuestion++
    } else {
        alert(`Test completed - You got ${score} questions correct.`)
        score = 0
        currentQuestion = 0
    }
    loadQuiz()
})

loadQuiz()