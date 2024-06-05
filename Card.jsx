import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

const Card = (props) => {
    return (
        <div className="card" onClick={props.onClick}>
            <img src={props.img} alt={props.name} />
            <p className="pokemon_id">{props.id}</p>
            <p className="pokemon_name">{props.name}</p>
            <div className="pokemon_class_wrapper">
                {props.types.map((type, index) => (
                    <span className={type} key={index}>{type}</span>
                ))}
            </div>
        </div>
    );
};

Card.propTypes = {
    img: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired
};

export default Card;


// import PropTypes from 'prop-types';
// import './card.css';
// // import "./Modal"
// const Card = (props) => {
//     const handleClick = () => {
//         alert(props.name + " Xin chào!")
//     }
//     return <>
//         <div className="card" onClick={handleClick}>
//             <img src={props.img} alt="" />
//             <p className="pokemon_id">{props.id}</p>
//             <p className="pokemon_name">{props.name}</p>
//             <div className="pokemon_class_wrapper">
//                 {
//                     props.types.map((type, index) => {
//                         return (
//                             <span className={type} key={index}>{type}</span>
//                         )
//                     }
//                     )
//                 }
//             </div>
//         </div>
//     </>
// };

// Card.propTypes = {
//     img: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     type: PropTypes.arrayOf(PropTypes.string).isRequired
// };

// export default Card;

