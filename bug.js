```javascript
// tailwind.config.js
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```jsx
// App.js
import './App.css';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-9xl font-extrabold text-center">Hello Tailwind!</h1>
    </div>
  );
}

export default App;
```