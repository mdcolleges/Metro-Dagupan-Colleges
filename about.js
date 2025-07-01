const textContent = [
    {
        title: "Our Vision",
        text: "To produce highly skilled and employable graduates responsive to the needs of the community strive to provide quality education that empowers students to excel in academics and life."
    },
    {
        title: "Our Mission",
        text: "By 2046, Metro-Dagupan Colleges will be an institution of learning with technologically advanced facilities highly competent Faculty and responsive curriculum program offerings to address the needs of the industry"
    },
    {
        title: "Our Values",
        text: "To fulfill our mission, achieve our goals, and implement our strategic plan, we are guided by the continuing values represented by the Pursuit of Academic Excellence:"
    }
];

function changeText(index) {
    document.getElementById("aboutTitle").innerText = textContent[index].title;
    document.getElementById("aboutText").innerText = textContent[index].text;

    // Remove active class from all buttons
    document.querySelectorAll(".switch-btn").forEach(btn => btn.classList.remove("active"));
    
    // Add active class to clicked button
    document.querySelectorAll(".switch-btn")[index].classList.add("active");
}