This project is a Mock Auto Loan App

### How to Run App Locally
In the project directory, you can run:
```
npm install
npm start
```

### How to Test App with Coverage
In the project directory, you can run:
```
npm run test:coverage
```

### Test Coverage
| Statements | Branches | Functions | Lines |
| -----------|----------|-----------|-------|
| ![Statements](https://img.shields.io/badge/Coverage-59.54%25-red.svg "Make me better!") | ![Branches](https://img.shields.io/badge/Coverage-52.87%25-red.svg "Make me better!") | ![Functions](https://img.shields.io/badge/Coverage-53.52%25-red.svg "Make me better!") | ![Lines](https://img.shields.io/badge/Coverage-58.33%25-red.svg "Make me better!") |

### About this App
built using the following:
 * React
 * Typescript
 * Redux
 * Material UI
 * Formik
 * Yup
 * Jest
 * Enzyme

The goal for this application was to make it structured and simple. The goal is always to build small components that are reusable. However, there is still room to break this application down into smaller pieces. In those few places, types and logic were grouped in the same file or component in the effort to save some time.

#### Validation
Form Validation was a central part of this application and Formik with Yup schema were used to make this happen. Both tools are technologies that I was familiar with as well as have found effective in my past experiences. 

#### Styling
Material UI Library was the framework I went with because of its simple nature to get the requirement of "plain but deliberate" accomplished.

#### Routing
I choose not to use routing in this application because of the Disqualification Page requirement. I could have done routing with the happy path, but decided to follow a consistent pattern for this small application. If this project had a few more pieces/components, then I would definitely leverage React Router. 

#### Backtracked
When I first started this project, I was planning to leverage Firebase as an Asynchronous backend call to make queries to for a car model and makes as well as possibly a semi realistic Authentication after signing up the user. I decided to backtracked on that idea rather quickly as it felt unnecessary to add those non project requirements at this stage. 