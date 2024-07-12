# 🛡️ Perfect Antivirus - Antivirus Comparator

## 🎯 Purpose of the Application  

   Perfect Antivirus is a web application designed to help users select the best antivirus software. <br> It allows users
to compare features and prices of various antivirus programs, enabling them <br> to choose the most suitable solution to
protect their computer and data.

## 1️⃣ Installation

Follow these steps to install and run the application locally:

1. **Clone the repository:**  
   <br>
   `git clone https://github.com/Azzuro8/antivirus-comparator.git`  
   `cd antivirus_comparator`  
   <br>
2. ** Install dependencies:** Use npm to install all required dependencies:  
   <br>
   `npm install`  
   <br>
3. **Run the application:** The application uses `json-server` to simulate a backend server.<br>Start the application
   and the JSON server:  
<br>
   `npm start`

## 🌟 Features Overview

🏠 Home Page

- **Antivirus List:** Users can browse the list of available antivirus programs.
- **Select Antiviruses for Comparison:** Clicking on an antivirus adds it to the list of selected antiviruses for
  comparison.

📊  Results Page

- **Antivirus Comparison:** Users can compare selected antivirus programs based on various features and prices.
- **Highlight Differences:** This feature allows users to easily identify differences between the selected antivirus
  programs.

✉️ Contact Page

- **Contact Form:** Users can send inquiries via the contact form.
- **Contact Information:** A section with contact details enabling users to get in touch with the support team.

## 💻 Technologies

-   **React.js with Hooks:** Utilized for building interactive and dynamic user interfaces.
-   **React Context API:** For managing and sharing global state across the application.
-   **CSS animations:** Including effects like the shake effect to enhance user experience.
-   **localStorage:** For storing user-selected antivirus preferences locally in the browser.
-   **Bootstrap:** For responsive design and pre-built UI components.
-   **SweetAlert2:** For elegant popup alerts and notifications.
-   **ESLint and Prettier:** For maintaining code quality and consistency.
-   **json-server:** For creating a mock REST API to serve antivirus and contact data.


## ❓ (Frequently Asked Questions)

### 🌐 Which browsers are supported?

The application is tested on the latest versions of Chrome, Firefox, and Safari.  
We recommend using one of these
browsers for the best experience.

### ➕ How to add a new antivirus to the list?

To add a new antivirus, update the `db.json` file located in the root directory of the project.  
Add a new object to the list of antiviruses and then restart the JSON server.

### 🐛 How can I report a bug or suggest a new feature?

Please submit any bug reports and feature suggestions via the Issues section on the GitHub repository.  
Provide as much
detail as possible in your submission to help us quickly identify and fix the problem.

### 💰Can I use the application commercially?

Perfect Antivirus is an open-source project and can be used for non-commercial purposes.  
For commercial use, please contact us to obtain the appropriate licenses.

### 🗃️ Does the application store user data?

The application only stores necessary user data in the local storage of the browser (localStorage) 
to enhance functionality.  
This data is not transmitted to any external servers.

If you have more questions, please contact us via the contact form available on the application website.

----------

Thank you for using Perfect Antivirus! We hope this application helps you find the best antivirus software tailored to
your needs.


