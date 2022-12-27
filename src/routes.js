import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Home from './Pages/home'
import Users from './Pages/users'


function MyRouters() {


    return (
        <Router>
            
            <Routes>
                <Route  path="/" element={<Home/>} />
                <Route  path="/users" element={<Users/>} />
            </Routes>

        </Router>
    )


}

export default MyRouters  

//*Forma usada na versão do router-dom 5
/* <Router>
            
<Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/users" component={Users} />
</Switch>

</Router>
    ) */