import React from "react";
import "../../styles/home.css";

export const Home = () => {
	return (
		<>
			<div className="container">
				<h1 className="text-danger">Characters</h1>
				<div className="my-carousel">
					<div className="my-card">
						<div>
							<img src="https://picsum.photos/200/200" alt="" />
						</div>
						<div className="body-text">
							<p>Name</p>
							<p>Gender</p>
							<p>Hair Color</p>
							<p>Eye Color</p>
						</div>
						<div className="boton-abajo">
							<button className="btn btn-outline-primary">Learn More</button>
							<button className="btn btn-outline-warning">C</button>
						</div>
					</div>
				</div>
			</div>
			<div className="container mt-5">
				<h1 className="text-danger">Planets</h1>
				<div className="my-carousel">
					<div className="my-card">
						<div>
							<img src="https://picsum.photos/200/200" alt="" />
						</div>
						<div className="body-text">
							<p>Population</p>
							<p>Terrain</p>
						</div>
						<div className="boton-abajo">
							<button className="btn btn-outline-primary">Learn More</button>
							<button className="btn btn-outline-warning">C</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
