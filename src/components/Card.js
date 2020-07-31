import React from 'react';

const Card = ({name, type}) => {
	const encodedName = name.split(' ').join('_');
	const url = `https://starwars.fandom.com/wiki/${encodedName}`;
	return (
		<div className="signs tc fl w-100 w-third-ns pa2 pv5 ba bw2 b--gold pa2 shadow-1">
			<h3 className="yellow f4">{type} Sign</h3>
			<h2><a class="link underline b dim light-yellow" href={url} target="_blank">{name}</a></h2>
		</div>
		);
}

export default Card;