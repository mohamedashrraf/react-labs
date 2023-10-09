import './App.css';
// import { Component } from 'react';

import LayOut from './components/LayOut/LayOut';
import Home from './components/Home/Home.jsx';
import About from './components/About/About';
import Artist from './components/Artist/Artist';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([{
  path: "", element: <LayOut />,
  children: [                            //يدخل علي لاي اوت ويتنقل بين الصفحات جواه
    {index:true, element: <Home />},     //inde:true لما يكون الباص فاضي نخلي الصفحة دي هي الرئيسية
    {path: "about", element: <About /> }, //لو في راوت جوا بعمل children
    {path: "artist", element: <Artist />},
    { path: "contact", element: <Contact /> },
    { path: "*", element: <NotFound /> }

  ]
}])


function App() {
  return (
    <RouterProvider router={routes}>
      
      </RouterProvider>
  );
}

export default App;
