import React from 'react';
import Card from "./Card";

const CardList = ({cardObj}) => {
	return (
		<div className="mw9 center ph3-ns">
		<Card name={cardObj.person} type="Character" />
	  	<Card name={cardObj.planet} type="Planet" />
	  	<Card name={cardObj.species} type="Species" />
	  	</div>
  	)
}

export default CardList;