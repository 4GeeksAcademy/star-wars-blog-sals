import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export const Navbar = () => {
	const{ store, actions }= useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Star Wars</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites {store.favorites.length}
						</a>

						<ul class="dropdown-menu">
						{store.favorites.map((item) => {
						return(
							<li><a className="dropdown-item" href="#">{item}</a><button onClick={()=> {
								actions.deleteFavorite(item)
							}}><FontAwesomeIcon icon={faTrash} /></button></li>
						)
					})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
