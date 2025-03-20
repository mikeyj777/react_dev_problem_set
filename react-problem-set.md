# React Development Problem Set

## Section 1: Fundamentals of React

1. Explain what React is and list three key features that distinguish it from other JavaScript frameworks.

2. Write the code to create a simple functional React component named `Welcome` that renders a heading with the text "Hello, World!".

3. What is JSX in React? Provide an example of JSX syntax and explain how it differs from HTML.

4. Explain the difference between props and state in React components. When would you use each?

5. What is the virtual DOM in React and why is it important for performance?

## Section 2: Application of React

6. Create a functional component called `Counter` that displays a number and two buttons: one to increment the counter and one to decrement it. Use React hooks to manage the state.

7. Write a React component that fetches data from an API when it mounts and displays the results in a list. Handle the loading and error states appropriately.

8. Implement a form in React that collects a user's name, email, and message, and then logs the form data to the console when submitted. Include form validation for the email field.

9. Create a React component that uses the Context API to provide and consume a theme (light/dark) for styling components.

10. Implement a reusable Button component that accepts different styling props (size, color, variant) and an onClick handler. Demonstrate how to use it in a parent component.

## Section 3: Advanced Applications of React

11. Create a custom hook called `useLocalStorage` that synchronizes a state value with localStorage. Demonstrate how to use this hook in a component.

12. Implement a React component that renders a paginated list of items. The component should fetch data for the current page and provide navigation controls.

13. Create a higher-order component (HOC) that adds authentication checking to a component. The HOC should redirect unauthenticated users to a login page and allow authenticated users to access the wrapped component.

14. Implement a React component that uses the React.memo, useCallback, and useMemo hooks to optimize rendering performance. Explain where and why each optimization technique is applied.

15. Create a component that implements drag-and-drop functionality without using external libraries. The component should allow users to reorder a list of items.

## Section 4: React Architecture, Performance, and Advanced Patterns

16. Design a state management solution for a complex React application with multiple interconnected features. Compare your solution with Redux, Context API, and other state management approaches, highlighting the pros and cons of each.

17. Create a React application architecture that implements code-splitting, lazy loading, and Suspense for improved loading performance. Explain your implementation choices and their impact on user experience.

18. Implement a React component that demonstrates the Compound Component pattern, allowing for flexible composition while maintaining shared state. Provide an example use case where this pattern would be beneficial.

19. Design a testing strategy for a React application, including unit tests, integration tests, and end-to-end tests. Write example test cases for a feature that includes API calls, user interactions, and state changes.

20. Analyze and solve performance issues in a React application that renders a large dataset with frequent updates. Implement techniques like virtualization, memoization, and state optimization to improve rendering efficiency.