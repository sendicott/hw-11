// 1. Create a quiz game that shows one random question at a time
// 2. Pull that question from the Jeopardy API
// 3. Allow the user to answer the question
// 4. Make a change to the DOM depending on whether user answered correctly or not
// 5. Generate another random question from the API after attempt
// 6. Only one question should be visible at a time
// 7. Users should be able to answer the question via a tex box with a 'guess' button
// 8. Optional: Show category info as well

function addQuestion () {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://jservice.io/api/random');
    request.addEventListener('load', function () {
        let delivery = JSON.parse(request.responseText);
        console.log(delivery);
    });

    request.send();
}

window.addEventListener('load', function () {
    console.log("You done been loaded!");
    addQuestion;
})