class FishingQuizGame {
    constructor() {
        this.currentScreen = 'welcome';
        this.currentCategory = null;
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.timeLeft = 30;
        this.timer = null;
        this.questionsAnswered = 0;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        this.wrongAnswersDetails = []; // Track wrong answers with details
        this.imageCache = new Map();
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.showScreen('welcome');
        this.preloadImages();
    }
    
    preloadImages() {
        // Preload commonly used fish images
        const commonImages = [
            'fish_pictures/ponty.jpg',
            'fish_pictures/csuka.jpg',
            'fish_pictures/harcsa.jpg',
            'fish_pictures/sügér.jpg',
            'fish_pictures/márna.jpg',
            'fish_pictures/fogassüllő.jpg',
            'fish_pictures/balin.jpg',
            'fish_pictures/compó.jpg',
            'fish_pictures/amúr.jpg',
            'fish_pictures/kárász.jpg'
        ];
        
        commonImages.forEach(src => {
            const img = new Image();
            img.src = src;
            img.onload = () => this.imageCache.set(src, img);
        });
    }
    
    bindEvents() {
        // Welcome screen
        document.getElementById('start-btn').addEventListener('click', () => {
            this.showScreen('category');
        });
        
        // Category screen
        document.getElementById('back-to-welcome').addEventListener('click', () => {
            this.showScreen('welcome');
        });
        
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.startQuiz(category);
            });
        });
        
        // Quiz screen
        document.getElementById('quit-quiz').addEventListener('click', () => {
            this.quitQuiz();
        });
        
        // Results screen
        document.getElementById('play-again').addEventListener('click', () => {
            this.restartQuiz();
        });
        
        document.getElementById('choose-category').addEventListener('click', () => {
            this.showScreen('category');
        });
        
        document.getElementById('show-wrong-answers').addEventListener('click', () => {
            this.toggleWrongAnswers();
        });
    }
    
    showScreen(screenName) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show target screen
        document.getElementById(`${screenName}-screen`).classList.add('active');
        this.currentScreen = screenName;
    }
    
    startQuiz(category) {
        this.currentCategory = category;
        this.currentQuestions = this.shuffleArray([...questionsDatabase[category]]).slice(0, 10);
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.questionsAnswered = 0;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        this.wrongAnswersDetails = [];
        
        // Update category title
        const categoryTitles = {
            'fish-names': 'Halnevek',
            'closed-seasons': 'Tilalmi idők',
            'minimum-weights': 'Méretkorlátok',
            'daily-limits': 'Napi korlátok'
        };
        
        document.getElementById('category-title').textContent = categoryTitles[category];
        
        this.showScreen('quiz');
        this.displayQuestion();
    }
    
    displayQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        
        // Update question counter
        document.getElementById('question-counter').textContent = 
            `${this.currentQuestionIndex + 1}/10`;
        
        // Update progress bar
        const progress = ((this.currentQuestionIndex) / 10) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        
        // Display question
        document.getElementById('question-text').textContent = question.question;
        
        // Display image
        const imageContainer = document.getElementById('question-image');
        imageContainer.innerHTML = '';
        
        if (question.image.startsWith('fish_pictures/')) {
            // Load actual fish image
            imageContainer.classList.add('loading');
            
            // Check if image is already cached
            if (this.imageCache.has(question.image)) {
                const cachedImg = this.imageCache.get(question.image).cloneNode(true);
                imageContainer.classList.remove('loading');
                imageContainer.appendChild(cachedImg);
            } else {
                // Load new image
                const img = document.createElement('img');
                img.src = question.image;
                img.alt = 'Hal kép';
                img.onload = () => {
                    // Only update if this is still the current question
                    if (this.currentQuestions[this.currentQuestionIndex] === question) {
                        imageContainer.classList.remove('loading');
                        this.imageCache.set(question.image, img.cloneNode(true));
                    }
                };
                img.onerror = () => {
                    // Only update if this is still the current question
                    if (this.currentQuestions[this.currentQuestionIndex] === question) {
                        imageContainer.classList.remove('loading');
                        imageContainer.innerHTML = '<span style="font-size: 4rem; color: #ef4444;">📷</span><p style="color: #6b7280; margin-top: 10px;">Kép nem található</p>';
                    }
                };
                imageContainer.appendChild(img);
            }
        } else {
            // Display emoji or other content
            imageContainer.innerHTML = `<span style="font-size: 4rem;">${question.image}</span>`;
        }
        
        // Display answer options with improved event handling
        const answersContainer = document.getElementById('answers');
        answersContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const answerElement = document.createElement('div');
            answerElement.className = 'answer-option';
            answerElement.textContent = option;
            
            // Proper click handler without debugging
            answerElement.onclick = () => {
                // Check if already answered to prevent multiple clicks
                if (answerElement.dataset.clicked === 'true') {
                    return;
                }
                
                // Mark all current question's options as clicked
                const currentOptions = answersContainer.querySelectorAll('.answer-option');
                currentOptions.forEach(opt => opt.dataset.clicked = 'true');
                
                this.selectAnswer(index);
            };
            
            answersContainer.appendChild(answerElement);
        });
        
        // Reset and start timer
        this.resetTimer();
        this.startTimer();
    }
    
    selectAnswer(selectedIndex) {
        // Stop timer immediately
        this.stopTimer();
        
        const question = this.currentQuestions[this.currentQuestionIndex];
        const isCorrect = selectedIndex === question.correct;
        
        // Update statistics
        this.questionsAnswered++;
        if (isCorrect) {
            this.score++;
            this.correctAnswers++;
        } else {
            this.wrongAnswers++;
            // Track wrong answer details
            this.wrongAnswersDetails.push({
                question: question.question,
                image: question.image,
                correctAnswer: question.options[question.correct],
                userAnswer: question.options[selectedIndex],
                explanation: question.explanation || 'Nincs magyarázat.'
            });
        }
        
        // Visual feedback
        const answerOptions = document.querySelectorAll('.answer-option');
        answerOptions.forEach((option, index) => {
            option.style.pointerEvents = 'none';
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === selectedIndex && !isCorrect) {
                option.classList.add('incorrect');
            }
        });
        
        // Show explanation (optional)
        setTimeout(() => {
            this.nextQuestion();
        }, 2000);
    }
    
    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex >= this.currentQuestions.length) {
            this.showResults();
        } else {
            this.displayQuestion();
        }
    }
    
    showResults() {
        this.stopTimer();
        
        const percentage = Math.round((this.score / this.questionsAnswered) * 100);
        
        // Update results display
        document.getElementById('final-score').textContent = `${this.score}/${this.questionsAnswered}`;
        document.getElementById('score-percentage').textContent = `${percentage}%`;
        document.getElementById('answered-count').textContent = this.questionsAnswered;
        document.getElementById('correct-count').textContent = this.correctAnswers;
        document.getElementById('wrong-count').textContent = this.wrongAnswers;
        
        // Update results icon and title based on performance
        const resultsIcon = document.getElementById('results-icon');
        const resultsTitle = document.getElementById('results-title');
        
        if (percentage >= 80) {
            resultsIcon.textContent = '🏆';
            resultsTitle.textContent = 'Kiváló!';
        } else if (percentage >= 60) {
            resultsIcon.textContent = '🎉';
            resultsTitle.textContent = 'Jó munka!';
        } else {
            resultsIcon.textContent = '📚';
            resultsTitle.textContent = 'Gyakorolj még!';
        }
        
        // Show wrong answers button if there are any wrong answers
        const showWrongAnswersBtn = document.getElementById('show-wrong-answers');
        const wrongAnswersSection = document.getElementById('wrong-answers-section');
        
        if (this.wrongAnswersDetails.length > 0) {
            showWrongAnswersBtn.style.display = 'inline-block';
            this.displayWrongAnswers();
        } else {
            showWrongAnswersBtn.style.display = 'none';
            wrongAnswersSection.style.display = 'none';
        }
        
        this.showScreen('results');
    }
    
    displayWrongAnswers() {
        const wrongAnswersList = document.getElementById('wrong-answers-list');
        wrongAnswersList.innerHTML = '';
        
        this.wrongAnswersDetails.forEach((wrongAnswer, index) => {
            const wrongAnswerItem = document.createElement('div');
            wrongAnswerItem.className = 'wrong-answer-item';
            
            wrongAnswerItem.innerHTML = `
                <div class="wrong-answer-header">
                    <span class="wrong-answer-number">${index + 1}.</span>
                    <span class="wrong-answer-question">${wrongAnswer.question}</span>
                </div>
                ${wrongAnswer.image ? `<div class="wrong-answer-image">
                    <img src="${wrongAnswer.image}" alt="Hal képe" />
                </div>` : ''}
                <div class="wrong-answer-details">
                    <div class="answer-comparison">
                        <div class="user-answer">
                            <span class="answer-label">Te válaszod:</span>
                            <span class="answer-value incorrect">${wrongAnswer.userAnswer}</span>
                        </div>
                        <div class="correct-answer">
                            <span class="answer-label">Helyes válasz:</span>
                            <span class="answer-value correct">${wrongAnswer.correctAnswer}</span>
                        </div>
                    </div>
                    <div class="answer-explanation">
                        <span class="explanation-label">Magyarázat:</span>
                        <span class="explanation-text">${wrongAnswer.explanation}</span>
                    </div>
                </div>
            `;
            
            wrongAnswersList.appendChild(wrongAnswerItem);
        });
    }
    
    toggleWrongAnswers() {
        const wrongAnswersSection = document.getElementById('wrong-answers-section');
        const showWrongAnswersBtn = document.getElementById('show-wrong-answers');
        
        if (wrongAnswersSection.style.display === 'none') {
            wrongAnswersSection.style.display = 'block';
            showWrongAnswersBtn.textContent = 'Hibás válaszok elrejtése';
        } else {
            wrongAnswersSection.style.display = 'none';
            showWrongAnswersBtn.textContent = 'Hibás válaszok megtekintése';
        }
    }
    
    restartQuiz() {
        this.startQuiz(this.currentCategory);
    }
    
    quitQuiz() {
        this.stopTimer();
        this.showScreen('category');
    }
    
    startTimer() {
        this.timeLeft = 30;
        this.updateTimerDisplay();
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();
            
            if (this.timeLeft <= 0) {
                this.timeUp();
            }
        }, 1000);
    }
    
    updateTimerDisplay() {
        const timerElement = document.getElementById('timer');
        timerElement.textContent = this.timeLeft;
        
        // Update timer styling based on time left
        timerElement.className = 'timer';
        if (this.timeLeft <= 10) {
            timerElement.classList.add('warning');
        }
        if (this.timeLeft <= 5) {
            timerElement.classList.remove('warning');
            timerElement.classList.add('danger');
        }
    }
    
    timeUp() {
        this.stopTimer();
        
        // Prevent any further clicks
        const allOptions = document.querySelectorAll('.answer-option');
        allOptions.forEach(opt => {
            opt.dataset.clicked = 'true';
            opt.style.pointerEvents = 'none';
        });
        
        // Mark as wrong answer
        this.questionsAnswered++;
        this.wrongAnswers++;
        
        // Track wrong answer details for timeout
        const question = this.currentQuestions[this.currentQuestionIndex];
        this.wrongAnswersDetails.push({
            question: question.question,
            image: question.image,
            correctAnswer: question.options[question.correct],
            userAnswer: 'Időtúllépés',
            explanation: question.explanation || 'Nincs magyarázat.'
        });
        
        // Move to next question immediately (no delay needed since we're not showing the answer)
        setTimeout(() => {
            this.nextQuestion();
        }, 500);
    }
    
    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
    
    resetTimer() {
        this.stopTimer();
        this.timeLeft = 30;
        this.updateTimerDisplay();
    }
    
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
}

// Initialize the game when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FishingQuizGame();
});
