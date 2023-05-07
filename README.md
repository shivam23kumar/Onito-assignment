# User Registration Form

This project is a User Registration Form built using React.js and integrates form validation using the Yup library. The form allows users to register by providing their personal information and performs various validations before submission. The submitted data is then displayed in a table using DataTables.

## Features

- Input fields for Name, Age, Sex, Mobile, Emergency Contact, ID Type, and Govt Issued ID.
- Form validation using the Yup library to enforce data integrity and ensure accurate information is submitted.
- Validations include:
  - Name, Age, and Sex are required fields.
  - Mobile and Emergency Contact Number should be valid Indian mobile numbers.
  - Govt Issued ID validation:
    - If "ID Type" is Aadhar, Govt Id should be a valid 12-digit numeric string.
    - If "ID Type" is PAN, Govt Id should be a valid 10-digit alphanumeric string.
- User feedback through error messages for invalid inputs.
- Submission of the form data to a server endpoint using Axios for further processing.
- Display of submitted data in a table using DataTables for enhanced functionality and user experience.

## Prerequisites

- Node.js installed on your machine.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/shivam23kumar/Onito-assignment.git
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server for the frontend:

   ```bash
   npm start
   ```
5. Start the development server for backend:

    ```bash
   npm run server
   ```

5. Open your web browser and visit `http://localhost:3000/` to see the User Registration Form in action. The submitted data will be displayed in a table in this route http://localhost:3000/table that uses DataTables.

## Technologies Used

- React.js - JavaScript library for building user interfaces.
- Yup - JavaScript schema builder for form validation.
- Axios - Promise-based HTTP client for making API requests.
- DataTables - JavaScript library for enhancing HTML tables with advanced functionality.
- HTML - Markup language for creating the structure of the form and table.
- CSS - Styling language for enhancing the appearance of the form and table.

## Directory Structure

The project structure is organized as follows:

```
user-registration-form/
  ├── server/
  │   ├── index.js
  ├── src/
  │   ├── components/
  │   │   ├── UserForm.js
  │   │   ├── UserList.js
  │   │   └── ...
  │   ├── App.js
  │   ├── index.js
  │   └── ...
  ├── public/
  │   ├── index.html
  │   └── ...
  ├── package.json
  └── ...
```

- `server/index.js` - Contains the backend code that performs GET and POST operations.
- `src/components/` - Contains the components for the User Registration Form and User List.
- `src/components/UserForm.js` - Component that renders the User Registration Form.
- `src/components/UserList.js` - Component that renders the table and displays the submitted user data using DataTables.
- `src/App.js` - The main component that renders the User Registration Form and User List components.
- `src/index.js` - Entry point of the application.
- `public/` - Contains the static files, including the HTML file that hosts the React app.

## Acknowledgements

- The React.js documentation and the Yup library documentation for reference.
- The DataTables library for enhancing the functionality and appearance of the table.
