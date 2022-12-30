import React from "react";

//include images into your bundle
import Card from "./card.jsx"
//create your first component
const Home = (props) => {
	return (
		<div className="container">
			<div className="row row justify-content-center mt-4 bg-dark bg-gradient pt-4 pb-4">
				<div className=" col-1 text-white pt-4 pb-4 fs-1 bg-dark m-2 text-center"><i class="far fa-clock"></i></div>
				<Card counter={ props.counterE }/>
				<Card counter={ props.counterD }/>
				<Card counter={ props.counterC }/>
				<Card counter={ props.counterB }/>
				<Card counter={ props.counterA }/>
			</div>
		</div>)
	
};

export default Home;
