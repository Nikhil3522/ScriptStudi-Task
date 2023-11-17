import facebook from '../assets/socialIcon/facebook.png';
import twitter from '../assets/socialIcon/twitter.png';
import google from '../assets/socialIcon/google.png';
import linkedin from '../assets/socialIcon/linkedin.png';

const Login = () => {
    return (
        <div className="loginContainer">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div></div>
                <h3>Welcome to TheReadWhere</h3>
                <div style={{backgroundColor: 'black', color: 'white', width: '102px', height: '38px', borderRadius: '6px', lineHeight: '38px'}}>Cancel</div>
            </div>

            <div style={{display: 'flex', color: 'white', justifyContent: 'space-evenly', marginTop: '50px', width: '800px', margin: 'auto', marginTop: '100px'}}>
                <div>
                    <div style={{display: 'flex', justifyContent: 'center', margin: 'auto', backgroundColor: '#3E5EA1', width: '366px', height: '48px', lineHeight: '48px', borderRadius: '138px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.15)', marginTop: '15px'}}>
                        <img src={facebook} style={{marginTop: '10px', height: '24px', width: '24px'}}/> 
                        <p style={{marginTop: '-3px', marginLeft: '10px'}}>Facebook</p>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', margin: 'auto', backgroundColor: '#2AA8E0', width: '366px', height: '48px', lineHeight: '48px', borderRadius: '138px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.15)', marginTop: '15px'}}>
                        <img src={twitter} style={{marginTop: '10px', height: '24px', width: '24px'}}/> 
                        <p style={{marginTop: '-3px', marginLeft: '10px'}}>Twitter</p>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', margin: 'auto', backgroundColor: '#FFFFFF', width: '366px', height: '48px', lineHeight: '48px', borderRadius: '138px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.15)', color: 'black', marginTop: '15px'}}>
                        <img src={google} style={{marginTop: '10px', height: '24px', width: '24px'}}/> 
                        <p style={{marginTop: '-3px', marginLeft: '10px'}}>Google</p>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', margin: 'auto', backgroundColor: '#187EB4', width: '366px', height: '48px', lineHeight: '48px', borderRadius: '138px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.15)', marginTop: '15px'}}>
                        <img src={linkedin} style={{marginTop: '10px', height: '24px', width: '24px'}}/> 
                        <p style={{marginTop: '-3px', marginLeft: '10px'}}>Linkedin</p>
                    </div>
                </div>

                <hr class="vertical-line"></hr>


                <div style={{width: '366px'}}>
                    <div>
                        <input type="email" name="email" placeholder='Email address' style={{width: '366px', height: '48px', border: 'none'}}/>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder='Password' style={{width: '366px', height: '48px', border: 'none', marginTop: '20px'}}/>
                    </div>
                    <div style={{marginTop: '20px', display: 'flex', justifyContent: 'space-between', fontSize: '14px'}}>
                        <span><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />Stay signed in</span>
                        <span style={{color: 'rgba(43, 196, 140, 1)'}}>Forgot Password?</span>
                    </div>
                    <div style={{marginTop: '20px', display: 'flex'}}>
                        <p style={{fontWeight: '600', fontSize: '12px', color: 'rgba(168, 168, 168, 1)', width: '270px', margin: 'auto'}}>
                            By registering for a Thereadwhere account, you agree to the <span style={{color: 'rgba(43, 196, 140, 1)'}}>Terms of Use</span> and the <span style={{color: 'rgba(43, 196, 140, 1)'}}>Privacy Policy</span>
                        </p>
                    </div>

                    <div style={{backgroundColor: 'rgba(144, 220, 192, 1)', width: '401px', height: '56px', lineHeight: '56px', borderRadius: '55px', marginTop: '20px'}}>
                        <span style={{fontSize: '19.79px', fontWeight: '700', color: '#ffffff'}}>Sign in</span>
                    </div>
                </div>
            </div>

            <div>
                <p style={{fontSize: '14px', fontWeight: '600'}}>
                    <span style={{color: 'rgba(43, 196, 140, 1)'}}>New User? Sign up now</span> It’s fast, easy and free
                </p>
            </div>
        </div>
    )
}

export default Login;