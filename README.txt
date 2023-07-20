TP24 Receivables Dashboard - Test

Intro:
This is a web application allowing the user to add new receivables and view a summary of their open and closed invoices.

For this application I used a combination of technologies:
- Frontend: HTML, CSS, JavaScript, Bootstrap
- Backend: Node.js, Express.js, Cors, TypeScript
- For brevity and speed, I opted not to use a database. Instead the app relies on an array in memory. If I were to take this application further, I would opt to use a postgres database.

Getting Started:
To run the application, follow the steps below:

Prerequisites:
1. Make sure you have Node.js installed on your system. If not, download it from the official website: https://nodejs.org

Installation and Setup:
1. Clone the repository to your local machine.
2. Navigate to the project's root directory.

Running the Application:
1. Open a terminal or command prompt.
2. Install the required dependencies by running the following command: 
   npm install

3. Start the backend server by running:
   npm start
   This will start the server on port 3000.

4. Navigate to the frontend folder, and open the index.html file in a browser.

Conclusion:
This test took around 3 hours to complete. Further steps I would take in a real world scenario:
- Build the frontend using either React or Angular, allowing for better seperation of components, pages and      functionality. 
- Build out a suite of frontend and backend tests covering expected component functionality, and backend server behaviour.
- Use postgres on the backend to store data.
- Build out frontend behaviour to allow the user to view individual receivables, edit them etc.

