
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const chatMessages = document.getElementById("chatMessages");

function getResponse(question) {
    const q = question.toLowerCase().trim();

    if (/\b(hi|hello|hey|hii)\b/.test(q)) {
        return "Hello! 👋 How can I help you today?";
    } else if (q.includes("admission") || q.includes("apply")) {
        return "For admission details, eligibility and application dates, please contact the college admission office.";
    } else if (q.includes("course") || q.includes("department")) {
        return "Please visit your college's official website to see its available courses and departments.";
    } else if (q.includes("fee")) {
        return "Course fees depend on the program. Please contact the accounts office for the latest details.";
    } else if (q.includes("exam") || q.includes("timetable")) {
        return "Please check your student portal or college notice board for the examination timetable.";
    } else if (q.includes("result") || q.includes("marks")) {
        return "You can check your result through the official student portal when it is announced.";
    } else if (q.includes("library") || q.includes("book")) {
        return "The college library provides books and learning resources. Contact library staff for opening hours.";
    } else if (q.includes("timing") || q.includes("hours")) {
        return "Please check your class timetable or contact the college office for official timings.";
    } else if (q.includes("contact") || q.includes("phone") || q.includes("email")) {
        return "Please visit the official college website for verified contact details.";
    } else if (q.includes("thank")) {
        return "You're welcome! 😊 Happy to help.";
    } else if (/\b(bye|goodbye)\b/.test(q)) {
        return "Goodbye! 👋 Have a great day.";
    } else {
        return "Sorry, I don't know that answer yet. Try asking about admissions, courses, fees, exams, results or the library.";
    }
}

function addMessage(text, className) {
    const message = document.createElement("div");
    message.className = "message " + className;

    // Use textContent to display text safely.
    message.textContent = text;

    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage(question) {
    const text = question.trim();

    if (!text) return;

    addMessage(text, "user-message");
    addMessage(getResponse(text), "bot-message");
}

chatForm.addEventListener("submit", function(event) {
    event.preventDefault();
    sendMessage(userInput.value);
    userInput.value = "";
    userInput.focus();
});

function quickAsk(question) {
    sendMessage(question);
}
