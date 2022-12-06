
import { useRouter } from "next/router"
import Typical from "react-typical"

function Home() {
  const router = useRouter();
  const signUp = () =>{
    router.push('/signup');
  }
  const havePassword =()=>{
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
            <h2 className="blue forget-part">Forgot Password?</h2>
            <p>Enter your mail to receive link to reset password</p>

            <div className="email-part forget-details">
            <p>Email Address</p>
            <input type='text' placeholder='Enter email address'/>
            </div>
            <p className="blue have-password" onClick={havePassword}>Have Password?</p>
            <button className="forget-button">Submit</button>
        </div>

      </div>
    
    </div>
  )
}

export default Home;
