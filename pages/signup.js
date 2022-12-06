import { useRouter } from "next/router";
import { useState } from "react"
import Typical from "react-typical"

import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'


export default function SignUp() {

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const toggle =()=>{
    if(type==='password') {
      setIcon(eye);
      setType('text');
    }
    else{
      setIcon(eyeOff);
      setType('password');
    }
  }


    const router = useRouter();
    const signIn = () =>{
      router.push('/');
    }
    return (
      <div className="container">
        <div className="static-part">
          <div className="sticky">
          <div className="logo-part">
              <img src="https://app.clouddley.com/_next/image?url=%2Fimages%2Fauth-logo.png&w=256&q=75"/>
            </div>
            <div className="image-part">
              <img src="https://app.clouddley.com/_next/image?url=%2Fimages%2Fauth-image.png&w=1920&q=75"/>
            </div>
            <div className="text-part">
            <h2>Deploy your Services <br/>
              <span> With
                <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  ' no hassle!_',
                  4500,
                  ' ease!_',
                  4500
                ]}
                />
              </span>
            </h2>
          </div> 
          </div>
            
        </div>
  
        <div className="form-part">
        <div className="clouddley-logo"></div>
          <div className="form-container">
          <p className="query">Already have an account? <span onClick={signIn} className='blue'>Sign In</span></p>
          <h2 className="blue">Create an Account</h2>
          <div className="name-part">
            <p>Full Name</p>
            <input type='text' placeholder='Enter your fullname'/>
          </div>
          <div className="email-part">
            <p>Email Address</p>
            <input type='text' placeholder='Enter email address'/>
          </div>
          <div className="password">
            <p>Password</p>
            <div className="password-eye">
              <input type={type} placeholder='Enter password'/>
              <Icon icon={icon} size={25} onClick={toggle} className='eye'/>
            </div>
            
          </div>
          <div className="options">
            <div>
              <input type='checkbox'/>
              <p>Accept <span className="blue">Terms and Conditions</span></p>
            </div>
            <div>
              <input type='checkbox'/>
              <p>I would love to receive emails (optional)</p>
            </div>
            
          </div>
          <button>Submit</button>
          <div className="line-part">
            <div></div>
            <p>or sign up with</p>
            <div></div>
          </div>
          <div className="icons-part">
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"/>
              <p>Google</p>
            </div>
            <div>
              <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
              <p>Github</p>
            </div>
          </div>
         </div>
  
        </div>
      
      </div>
    )
  }
  