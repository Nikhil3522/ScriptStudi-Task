const Signup = () => {
    return (
        <div className="signupContainer">
            <div style={{width: '605px', margin: 'auto'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div></div>
                    <h3>Welcome to TheReadWhere</h3>
                    <div style={{backgroundColor: 'black', color: 'white', width: '102px', height: '38px', borderRadius: '6px', lineHeight: '38px'}}>Cancel</div>
                </div>
                <p style={{textAlign: 'left'}}>Create TheReadWhere account</p>

                <div>
                    <input type="email" name="email" placeholder='Email address' style={{width: '596px', height: '48px', border: 'none', marginTop: '30px'}}/>
                </div>

                <div>
                    <input type="password" name="password" placeholder='Password' style={{width: '596px', height: '48px', border: 'none', marginTop: '20px'}}/>
                </div>

                <div style={{marginTop: '35px'}}>
                    <input type="text" placeholder='First Name' style={{width: '290px', height: '48px', border: 'none'}}/>
                    <input type="text" placeholder='Last Name' style={{marginLeft: '10px', width: '290px', height: '48px', border: 'none'}}/>
                </div>

                <p style={{marginTop: '30px', textAlign: 'left'}}>Allow email communications:</p>

                <div style={{display: 'flex' , marginTop: '10px', textAlign: 'left'}}>
                    <div>
                        <input type="checkbox"/>
                    </div>
                    <div style={{marginLeft: '10px'}}>
                        <p style={{fontWeight: '500' ,fontSize: '14px', lineHeight: '2px'}}>General Updates</p>
                        <p style={{color: 'rgba(168, 168, 168, 1)', fontWeight: '400', fontSize: '12px', lineHeight: '0px'}}>New titles, new features, and other cool updates.</p>
                    </div>
                </div>

                <div style={{display: 'flex' , marginTop: '10px', textAlign: 'left'}}>
                    <div>
                        <input type="checkbox"/>
                    </div>
                    <div style={{marginLeft: '10px'}}>
                        <p style={{fontWeight: '500' ,fontSize: '14px', lineHeight: '2px'}}>New issues and topic trends</p>
                        <p style={{color: 'rgba(168, 168, 168, 1)', fontWeight: '400', fontSize: '12px', lineHeight: '0px'}}>Choose frm your saved topics and favorite publication below.</p>
                    </div>
                </div>

                <div style={{display: 'flex', marginTop: '35px'}}>
                    <p style={{fontWeight: '600', fontSize: '12px', color: 'rgba(168, 168, 168, 1)', width: '450px', margin: 'auto'}}>
                        By registering for a Thereadwhere account, you agree to the <span style={{color: 'rgba(43, 196, 140, 1)'}}>Terms of Use</span> and the <span style={{color: 'rgba(43, 196, 140, 1)'}}>Privacy Policy</span>
                    </p>
                </div>

                <div style={{width: '596px', height: '48px', borderRadius: '55px', backgroundColor: 'rgba(144, 220, 192, 1)', margin: 'auto', marginTop: '25px'}}>
                    <span style={{color: 'white', lineHeight: '48px'}}>Create my account</span>
                </div>

                <p style={{fontWeight: '500', fontSize: '12px', width: '350px', margin: 'auto', marginTop: '25px'}}>
                    Without an account, you can still access thereadwhere catalog via a sponsored <span style={{fontWeight: '600', color: 'rgba(43, 196, 140, 1)'}}>Hotspot</span>
                </p>

                <hr style={{marginTop: '30px', marginBottom: '30px'}}></hr>

                <p>Existing User? <span style={{color: 'rgba(43, 196, 140, 1)'}}>Please sign in</span></p>
            </div>
        </div>
    )
}

export default Signup;