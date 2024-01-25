import UniversityItem from './UniversityItem';
import './UniversityList.css';
const UniversityList = props => {
    if(props.items.length === 0){   //item is a name choosen by you it can be whatever you want
        return <h2 className="expenses-list__fallback">Found no university!</h2>
    }
    return (
        <section id="university-list">
            {props.items.map((university) => (
                        <UniversityItem
                            key={university.id}
                            image={university.image}
                            name={university.name}
                            offers= {university.offers} />
                    ))}
        </section>
    );
};

export default UniversityList;