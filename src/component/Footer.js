import arrow from '../assets/arrow.png';
import upi from '../assets/paymentIcon/upi.png';
import visa from '../assets/paymentIcon/visa.png';
import rupay from '../assets/paymentIcon/rupay.png';
import mastercard from '../assets/paymentIcon/mastercard.png';
import americanexpress from '../assets/paymentIcon/americanexpress.png';
import maestro from '../assets/paymentIcon/maestro.png';

const Footer = () => {
    return (
        <>
        <div className="footer">
            <div>
                <h5 style={{textAlign: 'left'}}>USEFUL LINKS</h5>
                <div style={{textAlign: 'left'}}>
                    <p><img src={arrow} style={{width: '7px', height: '7px'}}/>&nbsp; About Us</p>
                    <p><img src={arrow} style={{width: '7px', height: '7px'}}/>&nbsp; Advertise With Us</p>
                    <p><img src={arrow} style={{width: '7px', height: '7px'}}/>&nbsp; Careers</p>
                    <p><img src={arrow} style={{width: '7px', height: '7px'}}/>&nbsp; Terms of Use</p>
                    <p><img src={arrow} style={{width: '7px', height: '7px'}}/>&nbsp; Privacy Policy</p>
                    <p><img src={arrow} style={{width: '7px', height: '7px'}}/>&nbsp; Contact Us</p>
                </div>
            </div>

            <div>
                <h5 style={{textAlign: 'left'}}>HELP</h5>
                <div style={{textAlign: 'left'}}>
                    <p><img src={arrow} style={{width: '7px', height: '7px'}}/>&nbsp; Payments</p>
                    <p><img src={arrow} style={{width: '7px', height: '7px'}}/>&nbsp; Download Apps</p>
                    <p><img src={arrow} style={{width: '7px', height: '7px'}}/>&nbsp; Cancellations $ Return</p>
                    <p><img src={arrow} style={{width: '7px', height: '7px'}}/>&nbsp; Gift</p>
                </div>
            </div>

            <div>
                <h5 style={{textAlign: 'left'}}>FEEDBACKS</h5>
                <div style={{textAlign: 'left'}}>
                    <p><img src={arrow} style={{width: '7px', height: '7px'}}/>&nbsp; Send Feedback</p>
                </div>
            </div>

            <div>
                <h5 style={{textAlign: 'left'}}>Payments</h5>
                <div style={{display: 'flex', width: '170px', flexWrap: 'wrap'}}>
                    <img src={mastercard} style={{margin: '4px'}}/>
                    <img src={americanexpress} style={{margin: '4px'}}/>
                    <img src={maestro} style={{margin: '4px'}}/>
                    <img src={visa} style={{margin: '4px'}}/>
                    <img src={rupay} style={{margin: '4px'}}/>
                    <img src={upi} style={{margin: '4px'}}/>
                </div>
            </div>

            <div>
                <h5 style={{textAlign: 'right'}}>Subscribe Our Newsletter</h5>
                <p style={{textAlign: 'right'}}>Get Early Updates On Our Services and Softwares</p>
                <div style={{border: '1px solid black', width: '405px', height: '51.09px', borderRadius: '53.31px', display: 'flex', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px'}}>
                   <p style={{width: '100px', marginTop: '15px'}}>Enter Your Email</p>
                   <div style={{backgroundColor: 'black', color: 'white', width: '132px', height: '36px', border: '1px solid black', borderRadius: '42px', marginTop: '5px'}}>
                        <p style={{color: 'white'}}>Join</p>
                    </div>
                </div>
            </div>
        </div>
        <p style={{fontFamily: 'lato', fontSize: '12px', fontWeight: '400px', color: '#6C6C6C'}}>© 2023 thereadwhere. All Rights Reserved. Designed by Scriptstudio.io</p>
        </>
    )
}

export default Footer;