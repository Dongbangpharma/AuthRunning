
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {withAuthenticator} from '@aws-amplify/ui-react'
import MainHeader from './components/MainHeader';
Amplify.configure(awsconfig)

function App() {
  return (
    <div className="App">
     
     <MainHeader/>
    </div>
  );
}

export default withAuthenticator( App);
