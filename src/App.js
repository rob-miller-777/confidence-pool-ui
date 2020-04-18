import React from 'react'
import Sheet from './sheet/Sheet'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import { withAuthenticator } from 'aws-amplify-react' // or 'aws-amplify-react-native';
import '@aws-amplify/ui/dist/style.css'

Amplify.configure(awsconfig)

function App() {
  return (
    <div className="App">
      <Sheet/>
    </div>
  )
}

const signUpConfig = {
  header: 'Confidence Pool Signup',
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Name',
      key: 'name',
      required: true,
      displayOrder: 2,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 3,
      type: 'password'
    }
  ]
}
const usernameAttributes = 'Name'
export default withAuthenticator(App, {signUpConfig, usernameAttributes})
