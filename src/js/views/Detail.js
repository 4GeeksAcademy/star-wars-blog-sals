import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
    const params = useParams();
    const { store } = useContext(Context);
    const [characterDetails, setCharacterDetails] = useState(null);

    const getCharacterDetails = () => {
        const character = store.characters.find((item) => item.uid == params.id);
        setCharacterDetails(character.properties);
    };

    useEffect(() => {
        getCharacterDetails();
    }, []);

    return (
        <>
            {characterDetails && (
                <div className="jumbotron mt-5 pt-5">
                    <div className="d-flex justify-content-center">
                        <img
                            className="rounded"
                            src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
                            alt={characterDetails.name}
                        />
                        
                    </div>
                    <br />
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h3 className="display-5">{characterDetails.name}</h3>
                        <h5>Birth Year: {characterDetails.birth_year}</h5>
                        <h5>Height: {characterDetails.height} cm</h5>
                        <h5>Mass: {characterDetails.mass} kg</h5>
                        <h5>Gender: {characterDetails.gender}</h5>
                        <h5>Hair Color: {characterDetails.hair_color}</h5>
                        <h5>Skin Color: {characterDetails.skin_color}</h5>

                        <hr className="my-4" />

                        <Link to="/">
                            <span className="btn btn-primary btn-lg" href="#" role="button">
                                Back home
                            </span>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};


export default Detail;

// const Detail = () => {
//   const params = useParams();
//   const { store } = useContext(Context);
//   const [characterDetails, setCharacterDetails] = useState(null);

//   const getCharacterDetails = () => {
//     const character = store.characters.find((item) => item._id == params.id);
//     setCharacterDetails(character);
//   };

//   useEffect(() => {
//     getCharacterDetails();
//   }, [params.id]); // Include params.id as a dependency so that the effect runs when the ID changes

//   return (
//     <>
//       {characterDetails && (
//         <div className="jumbotron mt-5 pt-5">
//           <div className="d-flex justify-content-center">
//             <img
//               className="rounded"
//               src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
//               alt={characterDetails.name}
//             />
//           </div>
//           <br />
//           <div className="d-flex flex-column justify-content-center align-items-center">
//             <h3 className="display-5">{characterDetails.name}</h3>
//             <h5>Birth Year: {characterDetails.birth_year}</h5>
//             <h5>Height: {characterDetails.height} cm</h5>
//             <h5>Mass: {characterDetails.mass} kg</h5>
//             <h5>Gender: {characterDetails.gender}</h5>
//             <h5>Hair Color: {characterDetails.hair_color}</h5>
//             <h5>Skin Color: {characterDetails.skin_color}</h5>

//             <hr className="my-4" />

//             <Link to="/">
//               <span className="btn btn-primary btn-lg" href="#" role="button">
//                 Back home
//               </span>
//             </Link>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Detail;
