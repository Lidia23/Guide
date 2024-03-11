import UniversityItem from './UniversityItem';
import './UniversityList.css';
import { fetchAvailableUnis, updateAddedUni } from '../http';
import { useState, useEffect } from 'react';

const UniversityList = ({items}) => {
    // const [isFetching, setIsFetching] = useState(false);
    // const [availableUnis, setAvailableUnis] = useState([]);
    // const [error, setError] = useState();
    // const [addedUniversities, setAddedUniversities] = useState([]);

    // useEffect(() => {
    //     const fetchUnis = async () => {
    //         setIsFetching(true);
    //         try {
    //             const unis = await fetchAvailableUnis();
    //             setAvailableUnis(unis);
    //         } catch (error) {
    //             setError({ message: error.message || 'Coud not fetch unis, please try again later.' });
    //         }
    //         setIsFetching(false);
    //     }
    //     fetchUnis();
    // }, []);
    // if (error) {
    //     return <h2 className="expenses-list__fallback">Found no university!</h2>
    // }

    return (<>
        <section id="university-list">
            <UniversityItem
                unis={items} //[...items, ...availableUnis]
                // isLoading={isFetching}
                // loadingText="Fetching unis data ..."
                // fallbackText="No unis available."
                />
        </section></>
    );
};

export default UniversityList;