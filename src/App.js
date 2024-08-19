import React from 'react';
import './App.css';
import Landingpage from './stores/pages/landingpage';
import New from './stores/pages/New';
import {Routes,Route} from 'react-router-dom';
import Brands from './stores/pages/brands';
import Makeup from './stores/pages/makeup';
import Skincare from './stores/pages/skincare';
import New1 from './stores/pages/new1';
import New2 from './stores/pages/new2';
import New3 from './stores/pages/new3';
import New4 from './stores/pages/new4';
import New5 from './stores/pages/new5';
import New6 from './stores/pages/new6';
import M1 from './stores/pages/m1';
import M6 from './stores/pages/m6';
import M5 from './stores/pages/m5';
import M4 from './stores/pages/m4';
import M3 from './stores/pages/m3';
import M2 from './stores/pages/m2';
import T1 from './stores/pages/t1';
import T2 from './stores/pages/t2';
import T3 from './stores/pages/t3';
import T4 from './stores/pages/t4';
import T5 from './stores/pages/t5';
import T6 from './stores/pages/t6';
import Signin from './stores/components/login';
import SignUp from './stores/components/registration';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/New' element={<New/>}/>
        <Route path='/brands' element={<Brands></Brands>}/>
        <Route path='/makeup' element={<Makeup/>}/>
        <Route path='/skincare' element={<Skincare/>}/>
        <Route path='/new1' element={<New1/>}/>
        <Route path='/new2' element={<New2/>}/>
        <Route path='/new3' element={<New3/>}/>
        <Route path='/new4' element={<New4/>}/>
        <Route path='/new5' element={<New5/>}/>
        <Route path='/new6' element={<New6/>}/>
        <Route path='/m1' element={<M1></M1>}/>
        <Route path='/m2' element={<M2/>}/>
        <Route path='/m3' element={<M3/>}/>
        <Route path='/m4' element={<M4/>}/>
        <Route path='/m5' element={<M5></M5>}/>
        <Route path='/m6' element={<M6/>}/>
        <Route path='/t1' element={<T1/>}/>
        <Route path='/t2' element={<T2/>}/>
        <Route path='/t3' element={<T3/>}/>
        <Route path='/t4' element={<T4/>}/>
        <Route path='/t5' element={<T5/>}/>
        <Route path='/t6' element={<T6/>}/>
        <Route path='/login' element={<Signin/>}/>
        <Route path='/registration' element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App;