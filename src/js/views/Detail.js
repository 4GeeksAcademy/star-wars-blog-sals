import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
    const params = useParams();
    const { store } = useContext(Context);
    const [details, setDetails] = useState(null);

    const getDetails = () => {
        switch (params.nature){
            case "characters":
                const character = store.characters.find((item) => item.uid == params.id);
                setDetails(character.properties);
                break;
            case "vehicles":
                const vehicle = store.vehicles.find((item) => item.uid == params.id);
                setDetails(vehicle.properties);
                break;
            case "planets":
                const planet = store.planets.find((item) => item.uid == params.id);
                setDetails(planet.properties);
                break;
            };
        }

    useEffect(() => {
        getDetails();
    }, []);


    if(params.nature=="characters"){
        return (
            <>
                {details && (
                    <div className="jumbotron mt-5 pt-5">
                        <div className="d-flex justify-content-center">
                            <img
                                className="rounded"
                                src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
                                alt={details.name}
                            />
                            
                        </div>
                        <br />
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h3 className="display-5">{details.name}</h3>
                            <h5>Birth Year: {details.birth_year}</h5>
                            <h5>Height: {details.height} cm</h5>
                            <h5>Mass: {details.mass} kg</h5>
                            <h5>Gender: {details.gender}</h5>
                            <h5>Hair Color: {details.hair_color}</h5>
                            <h5>Skin Color: {details.skin_color}</h5>
    
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
    } else if(params.nature=="vehicles"){
        return (
            <>
                {details && (
                    <div className="jumbotron mt-5 pt-5">
                        <div className="d-flex justify-content-center">
                            <img
                                className="rounded"
                                src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`}
                                alt={details.name}
                            />
                            
                        </div>
                        <br />
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h3 className="display-5">{details.name}</h3>
                            <h5>Model: {details.model}</h5>
                            <h5>Class: {details.vehicle_class}</h5>
                            <h5>Manufacturer: {details.manufacturer}</h5>
                            <h5>Cost: {details.cost_in_credits}</h5>
                            <h5>Length: {details.length}</h5>
                            <h5>Crew: {details.crew}</h5>
    
                            <hr className="my-4" />
    
                            <Link to="/">
                                <span className="btn btn-primary btn-lg" href="#" role="button">
                                    Back home
                                </span>
                            </Link>
                        </div>
                    </div>
                )}
            </>)
    } else if(params.nature=="planets"){
        return (
            <>
                {details && (
                    <div className="jumbotron mt-5 pt-5">
                        <div className="d-flex justify-content-center">
                            <img
                                className="rounded"
                                src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`}
                                alt={details.name}
                            />
                            
                        </div>
                        <br />
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h3 className="display-5">{details.name}</h3>
                            <h5>Diameter: {details.diameter}</h5>
                            <h5>Gravity: {details.gravity}</h5>
                            <h5>Population: {details.population}</h5>
                            <h5>Climate: {details.climate}</h5>
                            <h5>Terrain: {details.terrain}</h5>
                            <h5>Orbital Period: {details.orbital_period}</h5>
    
                            <hr className="my-4" />
    
                            <Link to="/">
                                <span className="btn btn-primary btn-lg" href="#" role="button">
                                    Back home
                                </span>
                            </Link>
                        </div>
                    </div>
                )}
            </>)    
};
}

export default Detail;