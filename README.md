Twisted Series Book Store — Front-End Web Application
A responsive front-end web application inspired by The Twisted Series by Ana Huang.
This project simulates an online book store experience, including a catalogue view, payment form with validation, and a success confirmation flow.
The project was developed to strengthen skills in front-end development, client-side validation, and API communication.

Key Features:
Displays all four books from the Twisted series
Card-based layout with images, titles, and descriptions
Clear call-to-action buttons for purchasing
Fully validated payment form
MasterCard number validation using regex
Expiry date and CVV checks
User-friendly error messages
Sends payment data via a POST request using the Fetch API
Handles API success and failure responses
Redirects users on successful payment
Success page with confirmation message
Displays masked card details using sessionStorage
Optimised for desktop and mobile devices
CSS Grid layout with responsive breakpoints

Technologies Used:

HTML5 — semantic markup and page structure
CSS3 — responsive layout, styling, and animations
JavaScript (ES6) — DOM manipulation, validation logic, and async requests
Fetch API — communication with an external payment API
Session Storage — temporary client-side data handling

Project structure:
/
├── .vscode/
│   └── launch.json        # VS Code launch configuration
├── css/
│   └── style.css          # Main stylesheet
├── image/
│   ├── twisted_love.jpg
│   ├── twisted_games.jpg
│   ├── twisted_hate.jpg
│   └── twisted_lies.jpg
├── js/
│   └── script.js          # Form validation & API logic
├── index.html             # Home page (book catalogue)
├── pay.html               # Payment form
├── success.html           # Payment confirmation page
└── README.md              # Project documentation


DISCLAIMER!!
This project is for educational purposes only.
No real payments are processed and no sensitive data is stored permanently.
All book references are used for learning and demonstration only.
I did this for a uni assignment in spring 2025

Author: Marlene Kossonou
Software Engineering Student
