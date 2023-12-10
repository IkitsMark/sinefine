import {Outlet, Link} from "react-router-dom"
import './App.css';

const App =() => (
    <div className="Navbar">
    <nav>
      <ul>
        <li className="grow">
          <Link to="/">Title List</Link>
        </li>
        <li>
          <Link to="/create">
            <button type="button">Create Estate</button>
          </Link>
        </li>
      </ul>
    </nav>
    <Outlet/>
    </div>
  );

export default App;
