import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import {PostsPage} from "./pages/posts/PostsPage.jsx";
import {DetailPostPage} from "./pages/posts/detail/DetailsPage.jsx";
import {Root} from "./components/Root/Root.jsx";
import {EditPostPage} from "./pages/posts/edit/EditPostPage.jsx";
import {AddPostsPage} from "./pages/posts/add/AddPostsPage.jsx";
import {AuthPage} from "./pages/auth/AuthPage.jsx";
import {RegistrationPage} from "./pages/registration/registrationPage.jsx";
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
                element: <PostsPage/>,
            },
            {
                path: "posts/:id",
                element: <DetailPostPage/>
            },
            {
                path: "posts/:id/edit",
                element: <EditPostPage/>
            },
            {
                path: "add",
                element: <AddPostsPage/>
            },
            {
                path: "auth",
                element: <AuthPage/>
            },
            {
                path: "registration",
                element: <RegistrationPage/>
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
