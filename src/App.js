import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import logo from './logo.svg';
import './App.css';
import Navbar from './comp/Navbar';
import { Outlet, Route, Routes } from 'react-router-dom';
import About from './comp/About';
import PageError from './comp/PageError';
// import Products from './comp/Products';
import Shirts from './comp/Shirts';
import Jeans from './comp/Jeans';
import Polo from './comp/Polo';
import Users from './comp/Users';
import Detailspage from './comp/Detailspage';
import React, { Suspense, lazy } from 'react';
import Form from './comp/Form';
import FormikForm from './comp/FormikForm';
import Context from './comp/Context';
import Axios from './comp/Axios';
import Particle from './comp/Particle';
import Stars from './comp/Particle';
import Create from './CrudComp/Create';
import CrudApp from './CrudComp/CrudApp';
import Update from "./CrudComp/Update";
// import Read from './CrudComp/Read';
const Read = lazy(() => { return import('./CrudComp/Read') })
const Home = lazy(() => import('./comp/Home'));
const Products = lazy(() => import('./comp/Products'))
const Aboutt = lazy(() => import('./comp/About'))

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route path='/' element={
          <React.Suspense fallback={<div class="spinner-border text-success p-4 mt-4" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>}>
            <Home />
          </React.Suspense>
        }
        />

        <Route path='/about' element={
          <React.Suspense fallback={<div class="spinner-border text-success p-4 mt-4" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>}>
            <Aboutt />
          </React.Suspense>
        } />

        <Route path='/products' element={
          <Suspense fallback={<div class="spinner-border p-5 mt-5 text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>}>
            <Products />
          </Suspense>
        }>

          <Route path='shirts' element={<Shirts />}>
            <Route path='polo' element={<Polo />} />
          </Route>
          <Route index path='jeans' element={<Jeans />} />
        </Route>

        <Route path='/users' element={<Users />}>
          <Route path='/users/:id' element={<Detailspage />} />z
        </Route>
        <Route path='*' element={<PageError />} />
        <Route path='/form' element={<Form />} />
        <Route path='/formikform' element={<FormikForm />} />
        <Route path='/context' element={<Context />} />
        <Route path='/axios' element={<Axios />} />
        <Route path='/particle' element={<Stars />} />
        <Route path='/crudapp' element={<CrudApp />}>
          <Route path='read' element={
            <React.Suspense fallback={<div class="spinner-border text-success p-4 mt-4" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>}>
              <Read/>
            </React.Suspense>
          } />
          <Route path='insert' element={<Create />} />
          <Route path='update' element={<Update/>} />
        </Route>
      </Routes>
      <Outlet />
    </div>

  );
}

export default App;
