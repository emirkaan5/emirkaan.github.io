let currentIndex = 0; // Start with the first div
const divs = document.querySelectorAll('.fade-div');
const colorArray = ['#36516E', '#153146', '#323009', '#5C5044'];
let isThrottled = false; // To control scroll event rate

// Show the first div initially
divs[currentIndex].classList.add('active');

// Handle scroll event
window.addEventListener('wheel', (event) => {
    if (isThrottled) return; // If throttled, don't proceed

    const direction = event.deltaY > 0 ? 'down' : 'up'; // Determine scroll direction

    // Throttle scroll events for 800 milliseconds
    isThrottled = true;
    setTimeout(() => {
        isThrottled = false;
    }, 1600);

    // Check if the user is scrolling down
    if (direction === 'down' && currentIndex < divs.length - 1) {
        // Hide the current div and show the next
        divs[currentIndex].classList.remove('active');
        currentIndex++;
        divs[currentIndex].classList.add('active');
        document.body.style.backgroundColor = colorArray[currentIndex];
    }

    // Check if the user is scrolling up
    if (direction === 'up' && currentIndex > 0) {
        // Hide the current div and show the previous one
        divs[currentIndex].classList.remove('active');
        currentIndex--;
        divs[currentIndex].classList.add('active');
        document.body.style.backgroundColor = colorArray[currentIndex];
    }
});
