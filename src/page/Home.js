import Header from "../component/Header";
import Footer from "../component/Footer";
import { homeContent } from "../constant";

const Home = () => {
    return (
        <div style={{paddingLeft: '35px', paddingRight: '35px'}}>
            <Header />

            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: '25px', marginTop: '50px'}}>
                {homeContent.map((item, index) => (
                    <div key={index} style={{backgroundImage: `url(${item['image']})`, backgroundSize: 'cover', width: '330px', height: '320px'}}>
                        <img src={item['company']} alt="Company Logo" />
                    </div>
                ))}
            </div>

            <hr style={{marginTop: '40px', marginBottom: '40px'}}></hr>

            <Footer />
        </div>
    )
}

export default Home;