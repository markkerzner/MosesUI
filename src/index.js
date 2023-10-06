import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import './ui_components/index.css';
import Landing from './components/Landing';
import Chat from './components/Chat';
import reportWebVitals from './reportWebVitals';
import {Container} from "react-bootstrap";

/* ------------------------------------------------------------------------*/
/* Render */
/* ------------------------------------------------------------------------*/

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing/>,
    },
    {
        path: "/chat",
        element: <Chat/>,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Container className="my-auto">
            <RouterProvider router={router}/>
        </Container>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
