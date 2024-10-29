const myForm = document.getElementById("myForm");
    
window.addEventListener('load', () => {
    console.log("doc loaded");
    
    openForm()
})


function openForm() {
    // myForm.style.display = "block";
    myForm.style.display = "block";
    
    // Reset to the FAQs section
    showQuestions();
}

function toggleAnswer(answerId) {
    const answers = {
        answer1: "I have over 5 years of experience in web development, specializing in creating responsive and user-friendly websites.",
        answer2: "Sure! Here are some examples of my previous work: [Project 1], [Project 2], [Project 3].",
        answer3: "I specialize in technologies like HTML, CSS, JavaScript, React, and Node.js.",
        answer4: "I handle project deadlines by prioritizing tasks, setting realistic goals, and maintaining open communication with clients.",
        answer5: "My process for starting a new project involves understanding client requirements, planning, prototyping, and then iterating based on feedback."
    };

    document.getElementById("questionContainer").style.display = "none";
    document.getElementById("answerContainer").style.display = "block";
    document.getElementById("answerText").innerHTML = answers[answerId];
}

function showQuestions() {
    document.getElementById("answerContainer").style.display = "none";
    document.getElementById("questionContainer").style.display = "block";
}

function closeForm() {
    parent.location.reload();
    // document.getElementById("myForm").style.display = "none";
    myForm.src = "https://lottie.host/embed/8882ecb9-f344-45a4-a230-778158781d67/eBXBcfkQjH.json";
}
