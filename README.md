# Angular Form with Undo/Redo Functionality

A modern Angular application showcasing form management with undo/redo capabilities using NgRx store, featuring visual feedback and Material Design components.

## 🚀 UI
[screen-capture (9).webm](https://github.com/user-attachments/assets/cb3370f0-ede1-4f10-b580-29180e7565b3)

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

