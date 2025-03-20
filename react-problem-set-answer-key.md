# React Development Answer Key

## Section 1: Fundamentals of React

1. **Explain what React is and list three key features that distinguish it from other JavaScript frameworks.**
   
   React is an open-source JavaScript library for building user interfaces, particularly single-page applications. Three key features that distinguish React include:
   - Component-based architecture: React applications are built using reusable, self-contained components that manage their own state.
   - Virtual DOM: React maintains a lightweight representation of the real DOM in memory, which allows it to update only the parts of the actual DOM that have changed, improving performance.
   - Unidirectional data flow: React follows a one-way data binding model where data flows from parent to child components, making applications more predictable and easier to debug.

2. **Write the code to create a simple functional React component named `Welcome` that renders a heading with the text "Hello, World!".**
   
   ```jsx
   import React from 'react';
   
   function Welcome() {
     return (
       <h1>Hello, World!</h1>
     );
   }
   
   export default Welcome;
   ```

3. **What is JSX in React? Provide an example of JSX syntax and explain how it differs from HTML.**
   
   JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML but allows you to write HTML elements in JavaScript and place them in the DOM without using createElement() or appendChild() methods. JSX gets transpiled to regular JavaScript by tools like Babel.
   
   Example of JSX:
   ```jsx
   const element = (
     <div className="container">
       <h1>Hello, {name}!</h1>
       <p>Welcome to React.</p>
     </div>
   );
   ```
   
   Differences from HTML:
   - JSX uses `className` instead of `class` for CSS classes (since `class` is a reserved keyword in JavaScript)
   - JSX allows embedding JavaScript expressions inside curly braces `{}`
   - JSX properties and attributes use camelCase naming convention (e.g., `onClick` instead of `onclick`)
   - JSX requires that all tags be closed (even self-closing tags must have a slash: `<img />`)

4. **Explain the difference between props and state in React components. When would you use each?**
   
   Props (short for properties):
   - Are passed to a component from its parent
   - Are read-only and cannot be modified by the component that receives them
   - Can be used to pass data and event handlers down to child components
   - Help create reusable components
   
   State:
   - Is managed within a component
   - Can be changed by the component itself using setState or useState
   - Represents data that changes over time due to user interactions
   - When state changes, React re-renders the component
   
   Use props when:
   - You need to pass data from a parent to a child component
   - You want to configure a component when it's created
   - You want to make a component reusable with different data
   
   Use state when:
   - You need to track information that changes over time within a component
   - You need to respond to user input, server responses, or other events
   - The data is local or private to that component and doesn't need to be shared

5. **What is the virtual DOM in React and why is it important for performance?**
   
   The Virtual DOM is a lightweight JavaScript representation of the actual DOM in memory. When state changes occur in a React application, the following process happens:
   
   1. React creates a new virtual DOM tree reflecting the updated state
   2. It compares this new virtual DOM with the previous version (a process called "diffing")
   3. React calculates the minimal set of changes needed to update the real DOM
   4. Only these specific changes are applied to the actual DOM (a process called "reconciliation")
   
   This approach is important for performance because:
   - Direct DOM manipulation is slow and inefficient
   - The virtual DOM allows React to minimize costly DOM operations
   - It batches multiple changes together for better performance
   - It updates only what has changed rather than re-rendering the entire page
   - It abstracts browser-specific implementation details, making cross-browser optimizations easier

## Section 2: Application of React

6. **Create a functional component called `Counter` that displays a number and two buttons: one to increment the counter and one to decrement it. Use React hooks to manage the state.**
   
   ```jsx
   import React, { useState } from 'react';
   
   function Counter() {
     const [count, setCount] = useState(0);
     
     const increment = () => {
       setCount(count + 1);
     };
     
     const decrement = () => {
       setCount(count - 1);
     };
     
     return (
       <div>
         <h2>Counter: {count}</h2>
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
       </div>
     );
   }
   
   export default Counter;
   ```

7. **Write a React component that fetches data from an API when it mounts and displays the results in a list. Handle the loading and error states appropriately.**
   
   ```jsx
   import React, { useState, useEffect } from 'react';
   
   function DataFetcher() {
     const [data, setData] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
     
     useEffect(() => {
       const fetchData = async () => {
         try {
           setLoading(true);
           const response = await fetch('https://api.example.com/data');
           
           if (!response.ok) {
             throw new Error(`HTTP error! Status: ${response.status}`);
           }
           
           const jsonData = await response.json();
           setData(jsonData);
           setError(null);
         } catch (err) {
           setError(`Error fetching data: ${err.message}`);
           setData([]);
         } finally {
           setLoading(false);
         }
       };
       
       fetchData();
     }, []);
     
     if (loading) {
       return <div>Loading data...</div>;
     }
     
     if (error) {
       return <div>Error: {error}</div>;
     }
     
     return (
       <div>
         <h2>Data List</h2>
         {data.length === 0 ? (
           <p>No data available</p>
         ) : (
           <ul>
             {data.map((item) => (
               <li key={item.id}>{item.name}</li>
             ))}
           </ul>
         )}
       </div>
     );
   }
   
   export default DataFetcher;
   ```

8. **Implement a form in React that collects a user's name, email, and message, and then logs the form data to the console when submitted. Include form validation for the email field.**
   
   ```jsx
   import React, { useState } from 'react';
   
   function ContactForm() {
     const [formData, setFormData] = useState({
       name: '',
       email: '',
       message: ''
     });
     const [errors, setErrors] = useState({});
     
     const validateEmail = (email) => {
       const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       return regex.test(email);
     };
     
     const handleChange = (e) => {
       const { name, value } = e.target;
       setFormData({
         ...formData,
         [name]: value
       });
       
       // Clear error when user starts typing
       if (errors[name]) {
         setErrors({
           ...errors,
           [name]: null
         });
       }
     };
     
     const handleSubmit = (e) => {
       e.preventDefault();
       
       // Validate form
       const newErrors = {};
       
       if (!formData.name.trim()) {
         newErrors.name = 'Name is required';
       }
       
       if (!formData.email.trim()) {
         newErrors.email = 'Email is required';
       } else if (!validateEmail(formData.email)) {
         newErrors.email = 'Please enter a valid email address';
       }
       
       if (!formData.message.trim()) {
         newErrors.message = 'Message is required';
       }
       
       if (Object.keys(newErrors).length > 0) {
         setErrors(newErrors);
         return;
       }
       
       // Form is valid, log the data
       console.log('Form submitted with data:', formData);
       
       // Reset form after submission
       setFormData({
         name: '',
         email: '',
         message: ''
       });
     };
     
     return (
       <form onSubmit={handleSubmit}>
         <div>
           <label htmlFor="name">Name:</label>
           <input
             type="text"
             id="name"
             name="name"
             value={formData.name}
             onChange={handleChange}
           />
           {errors.name && <div className="error">{errors.name}</div>}
         </div>
         
         <div>
           <label htmlFor="email">Email:</label>
           <input
             type="email"
             id="email"
             name="email"
             value={formData.email}
             onChange={handleChange}
           />
           {errors.email && <div className="error">{errors.email}</div>}
         </div>
         
         <div>
           <label htmlFor="message">Message:</label>
           <textarea
             id="message"
             name="message"
             value={formData.message}
             onChange={handleChange}
           />
           {errors.message && <div className="error">{errors.message}</div>}
         </div>
         
         <button type="submit">Submit</button>
       </form>
     );
   }
   
   export default ContactForm;
   ```

9. **Create a React component that uses the Context API to provide and consume a theme (light/dark) for styling components.**
   
   ```jsx
   // ThemeContext.js
   import React, { createContext, useState, useContext } from 'react';
   
   const ThemeContext = createContext();
   
   export function ThemeProvider({ children }) {
     const [theme, setTheme] = useState('light');
     
     const toggleTheme = () => {
       setTheme(theme === 'light' ? 'dark' : 'light');
     };
     
     return (
       <ThemeContext.Provider value={{ theme, toggleTheme }}>
         {children}
       </ThemeContext.Provider>
     );
   }
   
   export function useTheme() {
     return useContext(ThemeContext);
   }
   ```
   
   ```jsx
   // App.js
   import React from 'react';
   import { ThemeProvider } from './ThemeContext';
   import ThemedComponent from './ThemedComponent';
   
   function App() {
     return (
       <ThemeProvider>
         <div className="app">
           <h1>Theme Context Example</h1>
           <ThemedComponent />
         </div>
       </ThemeProvider>
     );
   }
   
   export default App;
   ```
   
   ```jsx
   // ThemedComponent.js
   import React from 'react';
   import { useTheme } from './ThemeContext';
   
   function ThemedComponent() {
     const { theme, toggleTheme } = useTheme();
     
     const styles = {
       container: {
         padding: '20px',
         backgroundColor: theme === 'light' ? '#f5f5f5' : '#333',
         color: theme === 'light' ? '#333' : '#f5f5f5',
         borderRadius: '8px',
         transition: 'all 0.3s ease'
       },
       button: {
         padding: '8px 16px',
         cursor: 'pointer',
         backgroundColor: theme === 'light' ? '#333' : '#f5f5f5',
         color: theme === 'light' ? '#f5f5f5' : '#333',
         border: 'none',
         borderRadius: '4px'
       }
     };
     
     return (
       <div style={styles.container}>
         <h2>Current Theme: {theme}</h2>
         <p>This component is styled based on the current theme.</p>
         <button style={styles.button} onClick={toggleTheme}>
           Toggle Theme
         </button>
       </div>
     );
   }
   
   export default ThemedComponent;
   ```

10. **Implement a reusable Button component that accepts different styling props (size, color, variant) and an onClick handler. Demonstrate how to use it in a parent component.**
    
    ```jsx
    // Button.js
    import React from 'react';
    
    function Button({ 
      size = 'medium', 
      color = 'primary', 
      variant = 'contained',
      onClick,
      disabled = false,
      children
    }) {
      const sizeStyles = {
        small: { padding: '4px 8px', fontSize: '12px' },
        medium: { padding: '8px 16px', fontSize: '14px' },
        large: { padding: '12px 24px', fontSize: '16px' }
      };
      
      const colorStyles = {
        primary: { 
          background: variant === 'contained' ? '#2196f3' : 'transparent',
          color: variant === 'contained' ? 'white' : '#2196f3',
          border: variant === 'outlined' ? '1px solid #2196f3' : 'none',
          hoverBackground: '#1976d2'
        },
        secondary: {
          background: variant === 'contained' ? '#f50057' : 'transparent',
          color: variant === 'contained' ? 'white' : '#f50057',
          border: variant === 'outlined' ? '1px solid #f50057' : 'none',
          hoverBackground: '#c51162'
        },
        success: {
          background: variant === 'contained' ? '#4caf50' : 'transparent',
          color: variant === 'contained' ? 'white' : '#4caf50',
          border: variant === 'outlined' ? '1px solid #4caf50' : 'none',
          hoverBackground: '#388e3c'
        }
      };
      
      const style = {
        ...sizeStyles[size],
        backgroundColor: colorStyles[color].background,
        color: colorStyles[color].color,
        border: colorStyles[color].border,
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.7 : 1,
        transition: 'background-color 0.3s ease',
        fontFamily: 'sans-serif',
        fontWeight: 500,
        outline: 'none',
      };
      
      return (
        <button
          style={style}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      );
    }
    
    export default Button;
    ```
    
    ```jsx
    // ParentComponent.js
    import React, { useState } from 'react';
    import Button from './Button';
    
    function ParentComponent() {
      const [count, setCount] = useState(0);
      
      const handleIncrement = () => {
        setCount(count + 1);
      };
      
      const handleReset = () => {
        setCount(0);
      };
      
      return (
        <div style={{ padding: '20px', display: 'flex', gap: '10px', flexDirection: 'column' }}>
          <h2>Button Component Demo</h2>
          <p>Count: {count}</p>
          
          <div style={{ display: 'flex', gap: '10px' }}>
            <Button 
              size="small" 
              color="primary" 
              variant="contained"
              onClick={handleIncrement}
            >
              Small Primary Button
            </Button>
            
            <Button 
              size="medium" 
              color="secondary" 
              variant="outlined"
              onClick={handleIncrement}
            >
              Medium Secondary Button
            </Button>
            
            <Button 
              size="large" 
              color="success" 
              variant="contained"
              onClick={handleReset}
            >
              Large Success Button
            </Button>
          </div>
          
          <div>
            <Button 
              size="medium" 
              color="primary" 
              variant="contained"
              disabled={count === 0}
              onClick={handleReset}
            >
              Reset (Disabled when count is 0)
            </Button>
          </div>
        </div>
      );
    }
    
    export default ParentComponent;
    ```

## Section 3: Advanced Applications of React

11. **Create a custom hook called `useLocalStorage` that synchronizes a state value with localStorage. Demonstrate how to use this hook in a component.**
    
    ```jsx
    // useLocalStorage.js
    import { useState, useEffect } from 'react';
    
    function useLocalStorage(key, initialValue) {
      // Get stored value from localStorage or use initialValue
      const getStoredValue = () => {
        try {
          const item = window.localStorage.getItem(key);
          return item ? JSON.parse(item) : initialValue;
        } catch (error) {
          console.error(`Error reading localStorage key "${key}":`, error);
          return initialValue;
        }
      };
      
      // State to store the value
      const [value, setValue] = useState(getStoredValue);
      
      // Update localStorage when the state changes
      useEffect(() => {
        try {
          window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
          console.error(`Error storing to localStorage key "${key}":`, error);
        }
      }, [key, value]);
      
      return [value, setValue];
    }
    
    export default useLocalStorage;
    ```
    
    ```jsx
    // LocalStorageDemo.js
    import React from 'react';
    import useLocalStorage from './useLocalStorage';
    
    function LocalStorageDemo() {
      const [name, setName] = useLocalStorage('name', '');
      const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
      
      const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };
      
      const handleNameChange = (e) => {
        setName(e.target.value);
      };
      
      const styles = {
        container: {
          padding: '20px',
          backgroundColor: darkMode ? '#333' : '#fff',
          color: darkMode ? '#fff' : '#333',
          transition: 'all 0.3s ease',
          borderRadius: '8px',
          minHeight: '200px'
        },
        input: {
          padding: '8px',
          marginRight: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc'
        },
        button: {
          padding: '8px 16px',
          backgroundColor: darkMode ? '#555' : '#eee',
          color: darkMode ? '#fff' : '#333',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }
      };
      
      return (
        <div style={styles.container}>
          <h2>localStorage Hook Demo</h2>
          
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              style={styles.input}
              placeholder="Enter your name"
            />
          </div>
          
          <div>
            <button onClick={toggleDarkMode} style={styles.button}>
              Toggle {darkMode ? 'Light' : 'Dark'} Mode
            </button>
          </div>
          
          <div style={{ marginTop: '20px' }}>
            <p>
              Your name ({name}) and theme preference will persist even if you refresh the page.
            </p>
          </div>
        </div>
      );
    }
    
    export default LocalStorageDemo;
    ```

12. **Implement a React component that renders a paginated list of items. The component should fetch data for the current page and provide navigation controls.**
    
    ```jsx
    import React, { useState, useEffect } from 'react';
    
    function PaginatedList() {
      const [items, setItems] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      const [currentPage, setCurrentPage] = useState(1);
      const [totalPages, setTotalPages] = useState(0);
      const [itemsPerPage] = useState(10);
      
      useEffect(() => {
        const fetchItems = async () => {
          setLoading(true);
          try {
            // Replace with your actual API endpoint
            const response = await fetch(
              `https://api.example.com/items?page=${currentPage}&limit=${itemsPerPage}`
            );
            
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const data = await response.json();
            
            setItems(data.items);
            setTotalPages(Math.ceil(data.total / itemsPerPage));
            setError(null);
          } catch (err) {
            setError(`Error fetching items: ${err.message}`);
            setItems([]);
          } finally {
            setLoading(false);
          }
        };
        
        fetchItems();
      }, [currentPage, itemsPerPage]);
      
      const handlePageChange = (newPage) => {
        // Ensure page is within valid range
        if (newPage >= 1 && newPage <= totalPages) {
          setCurrentPage(newPage);
        }
      };
      
      const renderPaginationControls = () => {
        return (
          <div className="pagination-controls">
            <button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
            >
              First
            </button>
            
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            
            <span className="page-info">
              Page {currentPage} of {totalPages}
            </span>
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
            
            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
            >
              Last
            </button>
          </div>
        );
      };
      
      if (loading && items.length === 0) {
        return <div>Loading items...</div>;
      }
      
      if (error) {
        return <div className="error-message">{error}</div>;
      }
      
      return (
        <div className="paginated-list">
          <h2>Items List</h2>
          
          {items.length === 0 ? (
            <p>No items found</p>
          ) : (
            <>
              <ul className="items-list">
                {items.map((item) => (
                  <li key={item.id} className="item">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
              
              {renderPaginationControls()}
            </>
          )}
        </div>
      );
    }
    
    export default PaginatedList;
    ```

13. **Create a higher-order component (HOC) that adds authentication checking to a component. The HOC should redirect unauthenticated users to a login page and allow authenticated users to access the wrapped component.**
    
    ```jsx
    // withAuth.js
    import React, { useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';
    
    // Assume we have an auth service that checks if user is authenticated
    import { isAuthenticated } from './authService';
    
    function withAuth(WrappedComponent) {
      return function WithAuthComponent(props) {
        const navigate = useNavigate();
        
        useEffect(() => {
          // Check if user is authenticated
          if (!isAuthenticated()) {
            // Redirect to login page
            navigate('/login', { 
              state: { 
                from: window.location.pathname,
                message: 'Please log in to access this page'
              } 
            });
          }
        }, [navigate]);
        
        // If not authenticated, don't render the component
        if (!isAuthenticated()) {
          return <div>Checking authentication...</div>;
        }
        
        // If authenticated, render the wrapped component
        return <WrappedComponent {...props} />;
      };
    }
    
    export default withAuth;
    ```
    
    ```jsx
    // authService.js (simplified example)
    // In a real application, this would be more complex and secure
    
    // Check if user is authenticated
    export const isAuthenticated = () => {
      const token = localStorage.getItem('authToken');
      return !!token; // Return true if token exists
    };
    
    // Login function
    export const login = (credentials) => {
      return new Promise((resolve, reject) => {
        // In a real app, this would be an API call
        setTimeout(() => {
          if (credentials.username && credentials.password) {
            // Store token in localStorage
            localStorage.setItem('authToken', 'example-token-12345');
            resolve({ success: true });
          } else {
            reject(new Error('Invalid credentials'));
          }
        }, 1000);
      });
    };
    
    // Logout function
    export const logout = () => {
      localStorage.removeItem('authToken');
    };
    ```
    
    ```jsx
    // ProfilePage.js
    import React from 'react';
    import withAuth from './withAuth';
    
    function ProfilePage() {
      return (
        <div className="profile-page">
          <h1>User Profile</h1>
          <p>This is a protected page that only authenticated users can access.</p>
          {/* Profile content here */}
        </div>
      );
    }
    
    // Wrap the component with the HOC
    export default withAuth(ProfilePage);
    ```
    
    ```jsx
    // LoginPage.js
    import React, { useState } from 'react';
    import { useNavigate, useLocation } from 'react-router-dom';
    import { login } from './authService';
    
    function LoginPage() {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
      
      const navigate = useNavigate();
      const location = useLocation();
      
      // Get the redirect path from location state, or default to homepage
      const from = location.state?.from || '/';
      const message = location.state?.message || '';
      
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        
        try {
          await login({ username, password });
          // Redirect to the page the user was trying to access
          navigate(from, { replace: true });
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      
      return (
        <div className="login-page">
          <h1>Login</h1>
          
          {message && (
            <div className="notification">{message}</div>
          )}
          
          <form onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}
            
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group