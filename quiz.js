// Define the function to check the selected answer
function checkAnswer() {
    const correctAnswer = "4";
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById("feedback");

    if (selectedOption) {
        const userAnswer = selectedOption.value;

        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";
        }
    } else {
        alert("Please select an answer before submitting.");
    }
}

// Attach event listener to the Submit Answer button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
