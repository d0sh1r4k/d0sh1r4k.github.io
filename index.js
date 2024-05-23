qNumber = document.querySelector('.qNumber');
userAnswer = [];
for (let i = 1; i <= 10; i++) {
    button = document.createElement('button');
    button.classList.add(`q${i}`);
    button.textContent = i;
    qNumber.appendChild(button);
}
totalButton = document.createElement('button');
totalButton.textContent = 'Итого';
totalButton.classList.add('total-button');
qNumber.appendChild(totalButton);

//reloadButton = document.createElement('button');
//reloadButton.textContent = 'Заново';
///reloadButton.classList.add('reloadButton');
//qNumber.appendChild(reloadButton);


imageList=["images/1.jpg",
            "images/2.jpg",
            "images/3.jpg",
            "images/4.jpg",
            "images/5.jpg",
            "images/6.jpg",
            "images/7.jpg",
            "images/8.jpg",
            "images/9.jpg",
            "images/10.jpg"
];
answersLists = [
        ["Devil May Cry 5", "Resident Evil 2 Remake", "Prey"],
        ["Prey", "Far Cry 5", "Devil May Cry 5"],
        ["Shadow Of The Tomb Raider", "Resident Evil 5", "Tomb Raider 2013"],
        ["Far Cry New Dawn", "Far Cry Primal", "Far Cry 5"],
        ["We Happy Few", "The Evil Within 2", "Resident Evil 8"],
        ["Prey", "Metro Exdous", "Mortal Combat X"],
        ["Far Cry 5", "Metro 2034", "Metro Exodus"],
        ["Friday 13", "Penumbra", "Outlast 2"],
        ["Far Cry 5", "Far Cry 4", "Far Cry Primal"],
        ["Rage 2", "Mad Max", "Control"]
    ];
document.addEventListener("DOMContentLoaded", function() {
    answers = document.querySelector('.answers');

    

    
    for (let i = 0; i < 3; i++) {
        button = document.createElement('button');
        button.classList.add(`a${i+1}`);
        button.textContent = answersLists[0][i];
        answers.appendChild(button);
    }
    imageContainer = document.querySelector('.image');
    imageContainer.innerHTML = '';
    image = document.createElement('img');
    image.src = imageList[0];
    imageContainer.appendChild(image);
    
    qs = document.querySelector(`.qs`);
    qs.innerHTML=`1. Из какой игры этот скриншот?`




    

    for (let i = 0; i < 10; i++) {
        node = document.querySelector(`.q${i+1}`);
        node.addEventListener("click", function(event) {
            clickedButton = event.target;

            buttonNumber = parseInt(clickedButton.textContent);
            //buttonText = clickedButton.textContent;
            imageContainer = document.querySelector('.image');
            imageContainer.innerHTML = '';
            image = document.createElement('img');
            image.src = imageList[buttonNumber - 1];
            imageContainer.appendChild(image);
            
            qs.innerHTML=`${buttonNumber}. Из какой игры этот скриншот?`
           
            answersList = answersLists[buttonNumber - 1];
            for (let j = 0; j < 3; j++) {
                answerButton = document.querySelector(`.a${j+1}`);
                answerButton.textContent = answersList[j];
                // Добавляем атрибут для кнопки ответа, чтобы указать, к какому вопросу она относится
                answerButton.setAttribute('data-question', i);
            }
        });
    }
    
    
    answerButtons = document.querySelectorAll('.answers button');
    answerButtons.forEach((button) => {
        button.addEventListener("click", function(event) {
            
            clickedAnswerButton = event.target;
            answerButtonText = clickedAnswerButton.textContent;
            questionNumber = parseInt(clickedAnswerButton.getAttribute('data-question'));
            if (typeof userAnswer[questionNumber] === 'undefined') {
                userAnswer[questionNumber] = answerButtonText;
            } 
            else {
                userAnswer[questionNumber] = answerButtonText;
            }
            console.log("userAnswer:", userAnswer);
        });
    });
    



});
let totalScore = 0;
totalButton.addEventListener('click', function() {
    //imageContainer = document.querySelector('.image');
    //imageContainer.innerHTML = '';
    //answerButtons = document.querySelectorAll('.answers button');
    //answerButtons.forEach(button => button.style.display = 'none');

    //qs = document.querySelector(`.qs`);
    //qs.innerHTML='';
    
    if (userAnswer[0] === 'Resident Evil 2 Remake') {
        totalScore += 10;
    }
    if (userAnswer[1] === 'Devil May Cry 5') {
        totalScore += 10;
    }
    if (userAnswer[2] === 'Shadow Of The Tomb Raider') {
        totalScore += 10;
    }
    if (userAnswer[3] === 'Far Cry Primal') {
        totalScore += 10;
    }
    if (userAnswer[4] === 'The Evil Within 2') {
        totalScore += 10;
    }
    if (userAnswer[5] === 'Prey') {
        totalScore += 10;
    }
    if (userAnswer[6] === 'Metro Exodus') {
        totalScore += 10;
    }
    if (userAnswer[7] === 'Outlast 2') {
        totalScore += 10;
    }
    if (userAnswer[8] === 'Far Cry 5') {
        totalScore += 10;
    }
    if (userAnswer[9] === 'Rage 2') {
        totalScore += 10;
    }
    alert(`Ваш итоговый балл: ${totalScore}`);
    userAnswer = [];
    totalScore=0;
});
reloadButton.addEventListener('click', function() {
    totalScore = 0;
    userAnswer = [];
    answerButtons = document.querySelectorAll('.answers button');
    answerButtons.forEach(button => button.style.display = 'none');
    for (let i = 0; i < 3; i++) {
        button = document.createElement('button');
        button.classList.add(`a${i+1}`);
        button.textContent = answersLists[0][i];
        answers.appendChild(button);
    }
    imageContainer = document.querySelector('.image');
    imageContainer.innerHTML = '';
    image = document.createElement('img');
    image.src = imageList[0];
    imageContainer.appendChild(image);
    
    qs = document.querySelector(`.qs`);
    qs.innerHTML=`1. Из какой игры этот скриншот?`
    
});
