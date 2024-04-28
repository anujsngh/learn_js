"use strict";

const array = [
    {status:"success",content:"Believe you can and you're halfway there : Theodore Roosevelt"},
    {status:"failed",content:""},
    {status:"failed",content:""},
    {status:"success",content:"It does not matter how slowly you go as long as you do not stop : Confucius"},
    {status:"success",content:"The only way to do great work is to love what you do : Steve Jobs"},
    {status:"success",content:"Happiness is not something ready-made. It comes from your own actions : Dalai Lama"},
    {status:"success",content:"The future belongs to those who believe in the beauty of their dreams : Eleanor Roosevelt"},
    {status:"failed",content:""},
    {status:"success",content:"The best way to predict the future is to create it : Peter Drucker"},
    {status:"failed",content:""},
    {status:"success",content:"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle : Christian D. Larson"},
    {status:"success",content:"The only limit to our realization of tomorrow will be our doubts of today : Franklin D. Roosevelt"},
    {status:"failed",content:""},
    {status:"success",content:"Spread love everywhere you go. Let no one ever come to you without leaving happier : Mother Teresa"},
    {status:"failed",content:""},
    {status:"success",content:"It is during our darkest moments that we must focus to see the light : Aristotle"},
    {status:"failed",content:""},
    {status:"success",content:"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart : Helen Keller"},
    {status:"success",content:"Your time is limited, don't waste it living someone else's life : Steve Jobs"},
    {status:"failed",content:""},
    {status:"success",content:"The way to get started is to quit talking and begin doing : Walt Disney"},
    {status:"success",content:"The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty : Winston Churchill"},
    {status:"failed",content:""},
    {status:"success",content:"Don't let yesterday take up too much of today : Will Rogers"},
    {status:"failed",content:""},
    {status:"success",content:"You learn more from failure than from success. Don't let it stop you. Failure builds character : Unknown"},
    {status:"success",content:"It is never too late to be what you might have been : George Eliot"},
    {status:"failed",content:""}
];



let delay = 1000; // delay = 1000ms == 1s
const initialDelay = delay; // Store the initial delay value

let timerId = setTimeout(function request() {
    const randomIndex = Math.floor(Math.random() * array.length);
    const response = array[randomIndex];

    if (response.status == "failed") { // "failed" due to server overload
        // increase the interval to the next run
        delay *= 2;
        console.log(`failed, retrying again in ${delay / 1000} seconds.`)
    } else {
        console.log(JSON.stringify(response, null, 2));
        delay = initialDelay; // Reset the delay to the initial value
    }

    // Check if the delay has reached the maximum allowed value
    if (delay < Number.MAX_SAFE_INTEGER) {
        // Number.MAX_SAFE_INTEGER : The value of the largest integer n such that n and n + 1 are both exactly representable as a Number value. The value of Number.MAX_SAFE_INTEGER is 9007199254740991 2^53 − 1.
        timerId = setTimeout(request, delay);
        /* timerId always holds the identifier of the most recently scheduled timeout, allowing the previous timeout to be effectively canceled or replaced by the new one. This approach ensures that only one instance of the request function is scheduled to run at any given time, and the delay between each execution is adjusted based on the success or failure of the previous request. */
    } else {
        console.log("Maximum delay reached. Stopping the requests.");
    }
}, delay);

// To stop the loop use Ctrl+C (on Windows and Linux) or Cmd+C (on macOS)