import './UniversityItem.css';
import Offers from './Offers';
import { Link } from 'react-router-dom';

export default function UniversityItem({ unis }) { //fallbackText, isLoading, loadingText, onSelect
    console.log(unis);
    return (
        unis.map((value, key) => {
            return(<div className="university" key={key}>
                <Link to={`/universitet/${value.id}`}>
                    <img src={`http://localhost:3001/posts/${value.uniimage}`} alt="" />
                    <h6>{value.uniname}</h6>
                </Link>
                <Offers projectlist={value.id}/>
                </div>
            )
        })
    );
}

// {/* {isLoading && <p className="fallback-text">{loadingText}</p>}
//             {!isLoading && unis.length === 0 && <p className="fallback-text">{fallbackText}</p>} */}
//             {/* {!isLoading && unis.length > 0 && ( */}
            
//             {/* )} */}