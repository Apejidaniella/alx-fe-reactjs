import './App.css'
import FormikForm from './components/formikForm';
import RegistrationForm from './components/RegistrationForm'

function App() {
 

  return (
    <>
     
     <div>
      <FormikForm />
      </div>
      <hr className='mb-4'/>
      <div> 
        <RegistrationForm />
      </div>
    </>
  )
}

export default App;
