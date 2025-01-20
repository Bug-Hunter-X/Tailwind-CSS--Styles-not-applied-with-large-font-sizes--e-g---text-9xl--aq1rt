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

To resolve this issue, confirm that no other CSS rules or custom styles are overriding the `text-9xl` class, and verify that your Tailwind setup is correctly configured to include all necessary files.  In this particular case, no external CSS was interfering, highlighting the need to investigate potential internal style conflicts or other possible issues.