## Context Value Update with `useContext` in React

### 1. Managing Context in the `App` Component
- Use `useState` in the `App` component to manage the context value.
- Pass both the current value and the state updater function to the `MyContext.Provider`.

### 2. Accessing and Displaying Context in `ChildComponent`
- Use `useContext` in `ChildComponent` to access and display the current context value.

### 3. Updating Context in `ChangeContext`
- In the `ChangeContext` component, use `useContext` to access the context's setter function.
- Use a local state to handle user input, and update the context value by invoking the setter function when a button is clicked.

### Result
- `ChildComponent` dynamically reflects the updated context value whenever `ChangeContext` updates it.
- This allows shared context to be modified from within child components without prop drilling.
