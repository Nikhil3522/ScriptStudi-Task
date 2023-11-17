import logo from '../assets/logo.png';
import apps from '../assets/apps.png';
import readlist from '../assets/readlist.png';
import clipbook from '../assets/clipbook.png';
import search from '../assets/search.png';
import user from '../assets/user.png';
import publish from '../assets/publish.png';

const Header = () => {
    return (
        <div style={{fontSize: '12px', fontWeight: '600', fontStyle: 'Lato'}}>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <p>Saturday,09 September 2023</p>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p>Full forecast</p>
                    <p>43 C</p>
                    <p>Telegana, India</p>
                </div>
            </div>

            <hr style={{minHeight: '14px', backgroundColor: 'rgba(42, 42, 41, 1)'}}></hr>

            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '30px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '300px'}}>
                    <div style={{display: 'flex'}}>
                        <img src={clipbook} style={{width: '15px', height: '20px', marginTop: '10px'}}/>&nbsp; 
                        <p>Clipbook</p>
                    </div>

                    <div style={{display: 'flex'}}>
                        <img src={readlist} style={{width: '15px', height: '20px', marginTop: '10px'}}/>&nbsp; 
                        <p>My Readlist</p>
                    </div>

                    <div style={{display: 'flex'}}>
                        <img src={apps} style={{width: '15px', height: '20px', marginTop: '10px'}}/>&nbsp; 
                        <p>Apps</p>
                    </div>              
                </div>
                

                <div style={{marginLeft: '200px', marginTop: '-15px'}}>
                    <img src={logo}/>
                    <p>National Edition</p>
                </div>

                <div style={{width: '491px', height: '35px', border: '1px solid gray', borderRadius: '30px', display: 'flex', justifyContent: 'space-between'}}>
                    <input type='text' placeholder='search' style={{width: '400px', border: 'none', borderRadius: '40px', marginLeft: '30px'}}/>
                    <img style={{marginRight: '30px', width: '25px', height: '25px', marginTop: '5px'}} src={search}/>
                </div>
            </div>
            <hr></hr>

                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <a style={{textDecoration: 'none', color: 'black'}} href="#"><p>All</p></a>
                    <a style={{textDecoration: 'none', color: 'black'}} href="#"><p>News</p></a>
                    <a style={{textDecoration: 'none', color: 'black'}} href="#"><p>Entertainment</p></a>
                    <a style={{textDecoration: 'none', color: 'black'}} href="#"><p>Sports</p></a>
                    <a style={{textDecoration: 'none', color: 'black'}} href="#"><p>Lifestyle</p></a>
                    <a style={{textDecoration: 'none', color: 'black'}} href="#"><p>Marketplaces</p></a>
                    <a style={{textDecoration: 'none', color: 'black'}} href="#"><p>Fintech</p></a>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '300px'}}>
                        <div style={{backgroundColor: 'black', color: 'white', width: '132px', height: '36px', border: '1px solid black', borderRadius: '42px'}}>
                            <p><img src={user}/> &nbsp;Login/signup</p>
                        </div>

                        <div style={{backgroundColor: 'black', color: 'white', width: '132px', height: '36px', border: '1px solid black', borderRadius: '42px'}}>
                            <p><img src={publish}/> &nbsp;Publish</p>
                        </div>
                    </div>
          

                </div>

            <hr></hr>
        </div>
    )
}

export default Header;