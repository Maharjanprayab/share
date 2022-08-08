import logo from './logo.svg';
import './App.css';
import './reg-form.css';
import './login-form.css';

function App() {
  return (
    <div className='form'>


      <div className='form-element' id='reg-form'>

        <div id='form-reg'>

          <div id='reg-1'>

            <h2 className='reg-1-text'>Registration</h2>

          </div>

          <div id='reg-2'>

            <form action='' className='reg-2-form'>

              <div className='text-reg'>
                <label for='fname' className='label-text'>First name</label>
                <input type='text' id='fname' name='fname'/>
              </div>  
              <div className='text-reg'>  
                <label for='lname' className='label-text'>Last name</label>
                <input type='text' id='lname' name='lname'/>
              </div>
              <div className='text-reg'>
                <label for='uname' className='label-text'>Username</label>
                <input type='text' id='uname' name='uname'/>
              </div>
              <div className='text-reg'>
                <label for='pass' className='label-text'>Password</label>
                <input type='password' id='pass' name='pass'/>
              </div>
              <div className='text-reg'>
                <label for='email' className='label-text'>Email</label>
                <input type='email' id='email' name='email'/>
              </div>

              <div id='gender'>
                <label for='gender' className='label-text'>Gender</label>
                <input type='radio' className='pointer' value='male' id='male' name='gender'/><label className='pointer' htmlFor='male'>Male</label>
                <input type='radio' className='pointer' value='female' id='female' name='gender'/><label className='pointer' htmlFor='female'>Female</label>
                <input type='radio' className='pointer' value='others' id='others' name='gender'/><label className='pointer' htmlFor='others'>Others</label>
              </div>

              <div>
                <div id='dob0'>Date of birth</div>
                <input className='pointer' type='date' id='dob' name='dob' min='1920-01-01' max='2022-01-01'/>
              </div>

              <div>
                <label className='label-text'>Describe Yourself</label>
                <textarea name='describe' rows='4' column='50'></textarea>
              </div>

              <div id='submit'>
                <input className='pointer' type='submit' value='Submit'/>
              </div>

            </form>

          </div>

          <div id='reg-3'>
              <span className='reg-3-text'>Already have an account?</span>
            <div id='reg-change' onClick='rotate(1)'>
              <span className='reg-3-text'>Login Here</span>
            </div>

          </div>

        </div>

      </div>


      <div className='form-element' id='login-form'>
        
        <div id='form-login'>

          <div id='login-1'>

          </div>

          <div id='login-2'>

          </div>

          <div id='login-3'>
            <span className='login-3-text'> New here? Go to</span>
            <div id='login-change'>
              <span className='login-3-text'>Registration</span>
            </div>

          </div>

        </div>

      </div>


    </div>
  );
}

export default App;
