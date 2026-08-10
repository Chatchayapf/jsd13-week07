// Form Events
// Open index.html and work through these in order.

// TODO 1: Select #signup-form, #name-input, #char-count, and #feedback.
const signupForm = document.querySelector("#signup-form")
const nameInput = document.querySelector("#name-input")
const charCount = document.querySelector('#char-count')
const feedback = document.querySelector('#feedback')

// TODO 2: Add an "input" listener on #name-input. Every time the user types,
// set char-count's textContent to the current length of the input's value
// (name-input.value.length).
nameInput.addEventListener("input", (event) => {
    // console.log(event)
    // console.log(nameInput.value.length)
    charCount.textContent = nameInput.value.length
})

// TODO 3: Add a "submit" listener on #signup-form. Inside it:
//   - call event.preventDefault() so the page doesn't reload
//   - read and trim the name input's value
//   - if it's empty, set feedback's textContent to "Name required"
//   - otherwise, set feedback's textContent to `Welcome, ${name}!`
signupForm.addEventListener("submit", (event) => {
    // console.log(event)
    event.preventDefault()
    // console.log(nameInput.value.trim())
    const name = nameInput.value.trim()

    // ถ้า name เป็น empty ให้ feedback เป็น "Name required"
    if (name === "") {
        feedback.textContent = "Name required"

    // ให้ set feedback เป็น `Welcome, ${name}!`
    } else {
        feedback.textContent = `Welcome, ${name}!`
    }
})