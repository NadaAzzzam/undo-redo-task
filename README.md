
# TECHNICAL TASK:

You are tasked with adding Undo/Redo functionality to a form in an Angular application. The form allows users to input and edit various fields, and the Undo/Redo feature should allow users to revert changes or redo previously undone changes.

## Requirements:

### Form Setup:
- Create a form with multiple input fields, such as text inputs, checkboxes, dropdowns, etc.
- Ensure that the form is bound to Angular’s reactive forms module for easy state management.

### Undo/Redo Buttons:
- Add buttons or links for Undo and Redo actions to the form interface.
- The Undo button should revert the most recent change made to the form fields.
- The Redo button should reapply the most recently undone change.

### State Management:
- Implement a mechanism to track the state of the form fields and changes made by the user.
- Maintain a history of changes to enable Undo/Redo functionality.
- Use appropriate data structures to store the history of changes (e.g., stack, array).

### Undo/Redo Actions:
- Implement functions to handle Undo and Redo actions triggered by the user.
- The Undo function should revert the most recent change by restoring the previous state of the form fields.
- The Redo function should reapply the most recently undone change, restoring the form to its state before the Undo action.

### User Experience:
- Provide visual feedback to users when Undo/Redo actions are available or performed.
- Disable the Undo button when there are no changes to undo.
- Disable the Redo button when there are no changes to redo.

---

## Expected Deliverables:
- Implementation of Undo/Redo functionality on the form using Angular.
- Integration of Undo/Redo buttons into the form interface.
- State management system to track changes and history of actions.
- Functions to handle Undo and Redo actions.
- Visual feedback to indicate the availability and execution of Undo/Redo actions.
- Documentation explaining the implementation details and how to test the Undo/Redo functionality.
  
-----------

# Angular Form with Undo/Redo Functionality

A modern Angular application showcasing form management with undo/redo capabilities using NgRx store, featuring visual feedback and Material Design components.

## 🚀 DEMO
[screen-capture (10).webm](https://github.com/user-attachments/assets/829ea30a-a3ea-42c5-8845-45d7f6286e66)

## 🚀 Features

- Form state management with NgRx
- Undo/Redo functionality
- Visual feedback with highlight animations
- Material Design components
- Form validation
- Responsive design
- Redux DevTools integration

## 🛠️ Technologies Used

- Angular 17+
- NgRx Store
- Angular Material
- RxJS
- TypeScript

## 📋 Prerequisites

- Node.js (version 18.x or higher)
- npm (version 9.x or higher)
- Angular CLI (version 17.x)

## 🔧 Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   ├── directives/
│   │   └── highlight/
│   ├── services/
│   └── store/
│       ├── actions/
│       ├── reducers/
│       ├── selectors/
│       └── utils/
├── styles/
└── environments/
```

## 💡 Usage

The form includes fields for:
- Name (required)
- Email (required, with validation)
- Notifications toggle
- Role selection (required)

### Undo/Redo Features:
- Click the Undo button to revert to the previous state
- Click the Redo button to restore a previously undone state
- Visual highlight feedback when changes occur

### Store Implementation
```
🏗️ feat: Add NgRx store implementation

- Configure store with undo/redo functionality
- Set up actions, reducers, and selectors
- Implement form state management
```

### Highlight Feature
```
✨ feat: Add highlight animation directive

- Create highlight directive
- Implement animation styles
- Add trigger mechanism for undo/redo actions
```

### DevTools Integration
```
🔧 feat: Configure Redux DevTools

- Add DevTools configuration
- Set up store debugging capabilities
- Implement runtime checks
```

