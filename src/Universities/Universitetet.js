import './Universitetet.css';
import Menu from '../Menu';
import Footer from '../Footer';
import Offers from './Offers';

const DUMMY_UNI = [
    {
        id: 'u1',
        image: "../images/university-images/fakulteti-i-ekonomise.png",
        name: 'University of Tirana',
        offers: <Offers />,
    },
    {
        id: 'u2',
        image: "../images/university-images/politechnic-university-of-tirana.jpg",
        name: 'Car Insurance',
        offers: <Offers />,
    },
    {
        id: 'u3',
        image: "../images/university-images/linnaeus-university.png",
        name: 'New Desk (Wooden)',
        offers: <Offers />,
    },
    {
        id: 'u4',
        image: "../images/university-images/university-of-bologna.png",
        name: 'New Desk (Wooden)',
        offers: <Offers />,
    },
    {
        id: 'u5',
        image: "../images/university-images/technical-university-of-munich.png",
        name: 'New Desk (Wooden)',
        offers: <Offers />,
    },
    {
        id: 'u6',
        image: "../images/university-images/university-of-zurich.png",
        name: 'New Desk (Wooden)',
        offers: <Offers />,
    },
    {
        id: 'u7',
        image: "../images/university-images/university-of-warwick.png",
        name: 'New Desk (Wooden)',
        offers: <Offers />,
    },
    {
        id: 'u8',
        image: "../images/university-images/university-of-helsinki.png",
        name: 'New Desk (Wooden)',
        offers: <Offers />,
    },

];
export default function Universitetet() {
    // const [universities, setUniversities] = useState(DUMMY_UNI);
    // const addExpenseHandler = university => {
    //     setUniversities(prevUniversities => {
    //     return ([university, ...prevUniversities]);
    //   });
    // }
    return (
        <div>
            <Menu />
            <main class="container-fluid">
                <div id="university-banner">
                    <h1>Universities</h1>
                    <div class="url-route">
                        <a href="home" >Home</a>
                        <span> &gt;</span>
                        <a href="universitetet">Universities</a>
                    </div>
                </div>
                <section id="university-list">
                    <a href="universitet"><div class="university">
                        <img src={DUMMY_UNI[0].image} alt="" />
                        <h6>{DUMMY_UNI[0].name}</h6>
                        <Offers />
                    </div></a>
                    <a href="university/polytechnic-university-of-tirana.html"><div class="university">
                        <img src="../images/university-images/politechnic-university-of-tirana.jpg" alt="" />
                        <h6>Polytechnic University of Tirana</h6>
                        <Offers />
                    </div></a>
                    <a href="university/linnaeus-university.html"><div class="university">
                        <img src="../images/university-images/linnaeus-university.png" alt="" />
                        <h6>Linnaeus University</h6>
                        <Offers />
                    </div></a>
                    <a href="university/university-of-bologna.html"><div class="university">
                        <img src="../images/university-images/university-of-bologna.png" alt="" />
                        <h6>University of Bologna</h6>
                        <Offers />
                    </div></a>
                    <a href="university/technical-university-of-munich.html"><div class="university">
                        <img src="../images/university-images/technical-university-of-munich.png" alt="" />
                        <h6>Technical University of Munich</h6>
                        <Offers />
                    </div></a>
                    <a href="university/university-of-zurich.html"><div class="university">
                        <img src="../images/university-images/university-of-zurich.png" alt="" />
                        <h6>University of Zurich</h6>
                        <Offers />
                    </div></a>
                    <a href="university/university-of-warwick.html"><div class="university">
                        <img src="../images/university-images/university-of-warwick.png" alt="" />
                        <h6>University of Warwick</h6>
                        <Offers />
                    </div></a>
                    <a href="university/university-of-helsinki.html"><div class="university">
                        <img src="../images/university-images/university-of-helsinki.png" alt="" />
                        <h6>University of Helsinki</h6>
                        <Offers />
                    </div></a>
                </section>
            </main>
            <Footer />
        </div>
    )
}