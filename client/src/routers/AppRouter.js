import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import React from 'react'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import AccountPage from '../pages/AccountPage'
import ProjectsPage from '../pages/ProjectsPage'
import ProjectPage from '../pages/ProjectPage'
import UsersPage from '../pages/admin/UsersPage'
import NotFoundPage from '../pages/NotFoundPage'
import Layout from '../components/layout/Layout'
import PrivateRoute from './PrivateRoute'


function AppRouter() {
  return (
    <Router>
        <Layout>
        
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='/login' element={<LoginPage/>}/>
            <Route exact path='/register' element={<RegisterPage/>}/>
            <Route exact path='/account' element={<PrivateRoute><AccountPage/></PrivateRoute>}/>
            <Route exact path='/projects' element={<PrivateRoute><ProjectsPage/></PrivateRoute>}/>
            <Route exact path='/project/:projectId' element={<PrivateRoute><ProjectPage/></PrivateRoute>}/>
            <Route exact path='/admin/users' element={<PrivateRoute><UsersPage/></PrivateRoute>}/>

            <Route path='*' element={<NotFoundPage/>}/>

        </Routes>
        
        </Layout>
    </Router>
    
  )
}

export default AppRouter