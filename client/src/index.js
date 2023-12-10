import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TitleList from "./components/TitleList";
import CreateEstate from "./components/CreateEstate";
import AddEstate from "./components/AddEstate";
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <TitleList />,
      },
      {
        path: "/create",
        element: <CreateEstate />,
      },
      {
        path: "/add/:id",
        element: <AddEstate />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
