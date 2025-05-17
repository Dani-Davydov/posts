import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import {Posts} from "./pages/posts/posts.jsx";
import {DetailPost} from "./pages/posts/detail/posts.jsx";
import {Root} from "./components/Root/Root.jsx";
import {EditPost} from "./pages/posts/edit/posts.jsx";
import {AddPosts} from "./pages/posts/add/posts.jsx";
import {Auth} from "./pages/auth/auth.jsx";
import {Registration} from "./pages/registration/registration.jsx";
import { store } from "./redux/store.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                index: true,
                element: <App/>
            },
            {
                path: "posts",
                element: <Posts/>,
            },
            {
                path: "posts/:id",
                element: <DetailPost/>
            },
            {
                path: "posts/:id/edit",
                element: <EditPost/>
            },
            {
                path: "posts/add",
                element: <AddPosts/>
            },
            {
                path: "auth",
                element: <Auth/>
            },
            {
                path: "registration",
                element: <Registration/>
            }
        ]
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  </StrictMode>,
)
