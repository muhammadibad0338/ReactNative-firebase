import React from 'react'
import {View,Text} from 'react-native'
import Dashboard from './screens/dashboard'
import ImagePicker from './screens/imagepicker'
import Login from './screens/Login'
import SignUp from './screens/Signup'

function App(){
  return <>
    <Text>Firebase</Text>
    {/* <SignUp />
    <Login />
    <Dashboard /> */}
    <ImagePicker />
  </>
}
export default App