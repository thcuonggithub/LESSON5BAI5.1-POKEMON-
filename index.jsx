import React from "react";
import "./styles.css";

const Modal = ({ pokemon, onClose }) => {
    return (
        <div className="modal">
            <div className="content">
                <img src={pokemon.image} alt={pokemon.name} />
                <br />
                <div>
                    <span>Tên pokemon: </span>
                    <input type="text" value={pokemon.name} readOnly />
                </div>
                <div>
                    <span>Hệ: </span>
                    <select>
                        {pokemon.types.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};
export default Modal;

