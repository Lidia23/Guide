import './Universitetet.css';
import Menu from '../Menu';
import Footer from '../Footer';
import Offers from './Offers';
import UniversityList from './UniversityList';
import NewUniversity from '../NewUniversities/NewUniversity.jsx';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { fetchAddedUnis, updateAddedUnis } from '../http.js';
import UniversityItem from './UniversityItem.js';
import axios from "axios";
// const DUMMY_UNI = [
//     {
//         id: 'u1',
//         image: "../images/university-images/fakulteti-i-ekonomise.png",
//         name: "University of Tirana",
//         offers: <Offers />,
//     },
//     {
//         id: 'u2',
//         image: "../images/university-images/politechnic-university-of-tirana.jpg",
//         name: 'Car Insurance',
//         offers: <Offers />,
//     },
//     {
//         id: 'u3',
//         image: "../images/university-images/linnaeus-university.png",
//         name: 'New Desk (Wooden)',
//         offers: <Offers />,
//     },
//     {
//         id: 'u4',
//         image: "../images/university-images/university-of-bologna.png",
//         name: 'New Desk (Wooden)',
//         offers: <Offers />,
//     },
//     {
//         id: 'u5',
//         image: "../images/university-images/technical-university-of-munich.png",
//         name: 'New Desk (Wooden)',
//         offers: <Offers />,
//     },
//     {
//         id: 'u6',
//         image: "../images/university-images/university-of-zurich.png",
//         name: 'New Desk (Wooden)',
//         offers: <Offers />,
//     },
//     {
//         id: 'u7',
//         image: "../images/university-images/university-of-warwick.png",
//         name: 'New Desk (Wooden)',
//         offers: <Offers />,
//     },
//     {
//         id: 'u8',
//         image: "../images/university-images/university-of-helsinki.png",
//         name: 'New Desk (Wooden)',
//         offers: <Offers />,
//     },

// ];
export default function Universitetet(props) {
    // const [addedUniversities, setAddedUniversities] = useState();
    const [listOfPosts, setListOfPosts] = useState([])
    // const [isFetching, setIsFetching] = useState(false);
    // const [error, setError] = useState();
    // const [errorUpdatingUnis, setErrorUpdatingUnis] = useState();

    // const university = useRef();
    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response) => {
            setListOfPosts(response.data);
        });
    }, []);

    // const addUniHandler = async (university) => {
    //     setAddedUniversities(prevUniversities => {
    //         if (!prevUniversities) {
    //             prevUniversities = [];
    //       }
    //       if (prevUniversities.some((uni) => uni.id === university.id)) {
    //         return prevUniversities;
    //       }
    //       return [university, ...prevUniversities];
    //     });

    //     try {
    //         // Wait for the state to be updated before calling updateAddedUnis
    //         await updateAddedUnis([university, ...addedUniversities]); // Return the previous state to setAddedUniversities

    //     } catch (error) {
    //         setAddedUniversities(addedUniversities);
    //         console.error('Failed to update added universities:', error);
    //     }
    // }

    // const handleRemoveUni = useCallback(async function handleRemoveUni() {
    //     setAddedUniversities((prevPickedPlaces) =>
    //       prevPickedPlaces.filter((place) => place.id !== university.current.id)
    //     );
    //     try {
    //       await updateAddedUnis(
    //         addedUniversities.filter((place) => place.id !== university.current.id)
    //       );
    //     } catch (error) {
    //         setAddedUniversities(addedUniversities); //roll back the change
    //       setErrorUpdatingUnis({ message: error.message || 'Failed to delete place.' });
    //     };
    //   }, [addedUniversities]);

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
                    <UniversityList items={listOfPosts} />
                </section>
            </main>
            <Footer />
        </div>
    )
}