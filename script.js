//your JS code here. If required.
et all input elements
const inputs = document.querySelectorAll('.code');

// Function to handle keydown events for input navigation
inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (e.target.value.length === 1 && index < inputs.length - 1) {
            // Move to next input field
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && index > 0 && e.target.value === '') {
            // Move to previous input field when backspace is pressed
            inputs[index - 1].focus();
        }
    });
});

// Automatically focus on the first input field on load
inputs[0].focus();