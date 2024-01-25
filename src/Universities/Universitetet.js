import './Universitetet.css';
import Menu from '../Menu';
import Footer from '../Footer';
import Offers from './Offers';
import UniversityList from './UniversityList';
import NewUniversity from '../NewUniversities/NewUniversity';
import React, { useState } from 'react';

const DUMMY_UNI = [
    {
        id: 'u1',
        image: "../images/university-images/fakulteti-i-ekonomise.png",
        name: "University of Tirana",
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
    const [universities, setUniversities] = useState(DUMMY_UNI);
    const addUniHandler = university => {
        setUniversities(prevUniversities => {
        return ([university, ...prevUniversities]);
      });
    }
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
                    <NewUniversity onAddUni={addUniHandler} />
                    <UniversityList items={universities} />
                </section>
            </main>
            <Footer />
        </div>
    )
}