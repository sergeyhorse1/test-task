
import React from "react";
import { observer } from "mobx-react-lite";
import CountryControlModel from "./textControlAutoModel";

interface CountryControlProps {
	model: CountryControlModel
}

const CountryControl : React.FC<CountryControlProps> = observer(({ model }) => {
	return (
		<div>
			<input
				type="text"
				value={model.text}
				onChange={(e) => model.setText(e.target.value)}
			/>
			{model.suggestions.length > 0 && (
				<ul style={{ border: '1px solid #ccc', listStyleType: 'none', padding: 0 }}>
					{model.suggestions.map((suggestion) => (
						<li key={suggestion.name} onClick={() => model.selectSuggestion(suggestion)}>
							<img src={suggestion.flag} alt={suggestion.name} style={{ width: '20px', marginRight: '8px' }} />
							<strong>{suggestion.name}</strong> - {suggestion.fullName}
						</li>
					))}
				</ul>
			)}
		</div>
	);
});

export default CountryControl;
