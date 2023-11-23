import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export const Home = () => {

	const { store, actions } = useContext(Context)

	return (
		<>
			<div className="container">
				<h1 className="text-danger">Characters</h1>
				<div className="my-carousel">
					{store.characters.map((item) => {
						return(
							<div className="my-card">
						<div>
							<img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} alt="" />
						</div>
						<div className="body-text">
							<p><strong>Name:</strong> {item.properties.name} </p>
							<p><strong>Gender:</strong> {item.properties.gender}</p>
							<p><strong>Hair Color:</strong> {item.properties.hair_color}</p>
							<p><strong>Eye Color:</strong> {item.properties.eye_color}</p>
						</div>
						<div className="boton-abajo">
							<Link to= {`/characters/${item.uid}`}  className="btn btn-outline-primary">Learn More</Link>
							<button className="btn btn-outline-warning" onClick={()=> {
								actions.addFavorite(item.properties.name)
							}}><FontAwesomeIcon icon={faHeart} /></button>
						</div>
					</div>
						)
					})}		
				</div>
			</div>
			<div className="container mt-5">
				<h1 className="text-danger">Planets</h1>
				<div className="my-carousel">
					{store.planets.map((item)=> {
						return(
							<div className="my-card">
						<div>
							<img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} alt="" />
						</div>
						<div className="body-text">
							<p><strong>Name:</strong> {item.properties.name} </p>
							<p><strong>Population:</strong> {item.properties.population} </p>
							<p><strong>Terrain:</strong> {item.properties.terrain}</p>
						</div>
						<div className="boton-abajo">
							<Link to= {`/planets/${item.uid}`}  className="btn btn-outline-primary">Learn More</Link>
							<button className="btn btn-outline-warning" onClick={()=> {
								actions.addFavorite(item.properties.name)
							}}><FontAwesomeIcon icon={faHeart} /></button>
						</div>
					</div>
						)
					})}
				</div>
			</div>
			<div className="container mt-5">
				<h1 className="text-danger">Vehicles</h1>
				<div className="my-carousel">
					{store.vehicles.map((item) => {
						return(
							<div className="my-card">
						<div>
							<img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} alt="" />
						</div>
						<div className="body-text">
							<p><strong>Name:</strong> {item.properties.name} </p>
							<p><strong>Model:</strong> {item.properties.model}</p>
							<p><strong>Class:</strong> {item.properties.vehicle_class}</p>
						</div>
						<div className="boton-abajo">
							<Link to= {`/vehicles/${item.uid}`}  className="btn btn-outline-primary">Learn More</Link>
							<button className="btn btn-outline-warning" onClick={()=> {
								actions.addFavorite(item.properties.name)
							}}><FontAwesomeIcon icon={faHeart} /></button>
						</div>
					</div>
						)
					})}		
				</div>
			</div>
		</>
	);
}
