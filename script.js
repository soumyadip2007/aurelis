const networkData = {

    secure: {
        title: "Strong Security Posture",
        message:
            "This simulated network represents a protected configuration. Keep the router and connected devices updated.",
        type: "good"
    },

    medium: {
        title: "Needs Improvement",
        message:
            "This simulated network could be improved. Review its security settings and use a strong password.",
        type: "warn"
    },

    open: {
        title: "Use Caution",
        message:
            "This simulated network is open. Prefer a trusted and protected network for sensitive activity.",
        type: "risk"
    }

};


const button = document.getElementById("checkButton");

const network = document.getElementById("network");

const result = document.getElementById("result");


button.addEventListener("click", function () {

    const selectedNetwork = network.value;

    const data = networkData[selectedNetwork];


    result.innerHTML = `

        <div class="result-dot ${data.type}"></div>

        <div>

            <strong>
                ${data.title}
            </strong>

            <small>
                ${data.message}
            </small>

        </div>

    `;

});
// PASSWORD STRENGTH DEMO
function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const result = document.getElementById("passwordResult");

    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (password.length === 0) {
        result.innerHTML = "Please enter a sample password.";
    } 
    else if (strength <= 1) {
        result.innerHTML = "🔴 Weak Password";
    } 
    else if (strength <= 3) {
        result.innerHTML = "🟡 Medium Password";
    } 
    else {
        result.innerHTML = "🟢 Strong Password";
    }
}
// WIRELESS SECURITY QUIZ

let quizScore = 0;
let answeredQuestions = 0;
 
function quizAnswer(questionNumber, isCorrect) {

    if (isCorrect) {
        quizScore++;
    }

    answeredQuestions++;

    // Clicked button ko green/red karo
    const clickedButton = event.target;

    if (isCorrect) {
        clickedButton.classList.add("correct-answer");
        clickedButton.innerHTML = "✓ " + clickedButton.innerHTML;
    } else {
        clickedButton.classList.add("wrong-answer");
    }

    const result = document.getElementById("quizResult");

    if (answeredQuestions < 5) {
        result.innerHTML = "✅ Answer recorded! Continue to the next question.";
    } else {
        result.innerHTML =
            "🎉 Quiz Completed! Your Score: " +
            quizScore +
            " / 5";
    }
}