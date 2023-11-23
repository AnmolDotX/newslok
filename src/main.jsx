import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {AboutUs, Bookmarks, ContactUs, ErrorPage, Home, NewsList} from './pages'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    errorElement : <ErrorPage/>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : '/news-list/:category',
        element : <NewsList/>
      },
      {
        path : '/contact-us',
        element : <ContactUs/>
      },
      {
        path : '/news-list/bookmarks',
        element : <Bookmarks/>
      },
      {
        path : '/about-us',
        element : <AboutUs/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
