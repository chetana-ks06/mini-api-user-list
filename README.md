# Mini API User List

A beginner-friendly JavaScript project that fetches user data from a public API and displays the users dynamically on a web page.

## Features

- Fetches user data from an external API
- Uses JavaScript `fetch()` to make an API request
- Uses `async/await` to handle asynchronous operations
- Checks the API response using `response.ok`
- Parses API data using `response.json()`
- Dynamically creates HTML list elements using DOM manipulation
- Displays user names on button click
- Prevents duplicate users when the button is clicked multiple times
- Handles API request errors using `try...catch`

## Technologies Used

- HTML5
- JavaScript
- DOM Manipulation
- Fetch API
- Async/Await
- REST API
- JSON

## API Used

This project uses the JSONPlaceholder public API:

`https://jsonplaceholder.typicode.com/users`

The API provides sample user data in JSON format.

## How It Works

1. The user clicks the **Load Users** button.
2. JavaScript sends a request to the API using `fetch()`.
3. `await` waits for the API response.
4. `response.ok` checks whether the request was successful.
5. `response.json()` converts the response into usable JavaScript data.
6. `forEach()` loops through the users.
7. JavaScript dynamically creates `<li>` elements.
8. Each user's name is added to the list.
9. The list is displayed on the web page.

## Project Structure

```text
Mini API User List/
├── Mini API User List.html
├── Mini API User List.js
└── README.md
```

## How to Run

1. Clone or download this repository.
2. Open the project folder.
3. Open `Mini API User List.html` in a web browser.
4. Click **Load Users**.
5. The user names will be displayed on the page.

## What I Learned

Through this project, I practiced:

- Working with APIs
- Using `fetch()`
- Understanding Promises
- Using `async/await`
- Handling JSON data
- Checking HTTP responses
- DOM manipulation
- Creating HTML elements dynamically
- Handling errors with `try...catch`
- Using Git and GitHub for version control

## Future Improvements

- Add loading indicators
- Display additional user information such as email and address
- Add CSS styling and responsive design
- Add search and filtering functionality
- Add better error messages in the UI

## Author

**Chetana KS**

Aspiring Java Full Stack Developer