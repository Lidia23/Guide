import './UniversityItem.css';
import Offers from './Offers';

export default function UniversityItem({ unis }) { //fallbackText, isLoading, loadingText, onSelect
    console.log(unis);
    return (
                unis.map((value, key) => {
                    return(
                        <a href="universitet" class="university" key={key.id}>
                        <img src={`http://localhost:3001/posts/${value.uniimage}`} alt="" />
                        <h6>{value.uniname}</h6>
                        <Offers />
                    </a>
                    )
                    })
    );
}

// {/* {isLoading && <p className="fallback-text">{loadingText}</p>}
//             {!isLoading && unis.length === 0 && <p className="fallback-text">{fallbackText}</p>} */}
//             {/* {!isLoading && unis.length > 0 && ( */}
            
//             {/* )} */}