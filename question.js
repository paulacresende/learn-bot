
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
 
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Pergunta " + currentQuestionNumber + " de " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Você acertou</h1>";
    gameOverHTML += "<h2 id='score'>" + quiz.score +  " perguntas e GANHOU " + quiz.score * 10 + " créditos!</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("1-Qual é a menor quantidade de dinheiro que posso investir?", ["a) R$30,00", "b) R$100,00","c) R$800,00", "d) Não há valor mínimo"], "d) Não há valor mínimo"),
    new Question("2-Qual a melhor idade para começar a investir?", ["a)50 anos", "b)18 anos", "c)Não há idade para começar", "d)Após aposentadoria"], "c)Não há idade para começar"),
    new Question("3-O que é um Robô Investidor?", ["a)Uma pessoa que investe todo dia","b)Um software que executa estratégia de investimento", "c)Um tipo de investimento", "d)Nenhuma das anteriores"], "b)Um software que executa estratégia de investimento"),
    new Question("4-Quais das opções não é investimento Renda Variável?", ["a)Ações ", "b)Tesouro Direto", "c)Câmbio", "d)Derivativos"], "b)Tesouro Direto"),
   // new Question("Webdevtrick.com is about..", ["Web Design", "Graphic Design", "SEO & Development", "All"], "All")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();