// Write your demo code here, section by section.
// The HTML file has matching ids/classes for each topic:
//
// 1. Selecting Elements   -> #main-title, .submit-btn, .task
// 2. Modifying Content    -> .label, #msg, #card
// 3. classList            -> #themeBtn, .card
// 4. Create & Remove      -> #addTaskBtn, #resetTasksBtn, #tasks
// 5. Events               -> #click-me, #list, #signupForm, #email, .error
const btn = document.querySelector("#click-me");
let count = 0;
count++;
btn.addEventListener("click",() => {
    btn.textContent = "Clicked";
    
});
// 6. Pokémon Card Fetcher -> #fetchBtn, #resetBtn, #gallery
