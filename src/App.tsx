import { Outlet } from 'react-router-dom';  // This will render the child routes
import './App.css';

function App() {
  return (
    <div>
      <h1>Welcome to the App</h1>
      {/* The Outlet will render the component from the router's children */}
      <Outlet />
    </div>
  );
}

export default App;
