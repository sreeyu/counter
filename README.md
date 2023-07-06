# counter
The Counter App is a simple React application that displays a counter. It consists of two counters: a forward counter that increments by 1 every second, and a backward counter that decrements by 1 every second. The counters are implemented using custom hooks.

## Features
- Forward Counter: Displays a counter that increments by 1 every second.
- Backward Counter: Displays a counter that decrements by 1 every second.

## Custom Hook: useCounter
The useCounter hook is responsible for managing the counter state and updating it every second. It takes an optional count parameter, which determines whether the counter should increment (true) or decrement (false).

## Technologies Used
- React: A JavaScript library for building user interfaces.
- JSX: A syntax extension for JavaScript that allows writing HTML-like code in React components.
- CSS: Cascading Style Sheets for styling the application.

## Getting Started
To run the Counter App locally, follow these steps:

1. Clone the repository.
2. Navigate to the project directory: cd counter-app
3. Install dependencies: npm install
4. Start the development server: npm start
5. Open the app in your browser: http://localhost:3000

## Usage
1. When the Counter App is launched, you will see two counters: a forward counter and a backward counter.

2. The forward counter increments by 1 every second, displaying the current value inside a card-like container.

3. The backward counter decrements by 1 every second, also displaying the current value inside a card.

4. The counters continue updating indefinitely until the app is closed or unmounted.

# Notes from the project

## Custom Hooks in React
Custom hooks in React are functions that allow you to encapsulate and reuse stateful logic between components. They enable you to extract common functionality from components into a reusable hook, making your code more modular and easier to maintain. 

To create a custom hook, you simply write a function that uses React hooks (such as `useState` or `useEffect`, etc.) and returns the desired state or behaviour. By convention, custom hooks name should start with the word "use" to indicate that they follow the same rules as built-in hooks.

Custom hooks allow you to encapsulate complex logic and share it across multiple components, promoting code reuse and separation of concerns, they offer a powerful way to abstract and share common funtionality in a reusable manner. 

## License
This project is licensed under the [MIT License](https://opensource.org/license/mit/).