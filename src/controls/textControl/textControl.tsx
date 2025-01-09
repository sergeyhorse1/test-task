// TextControl.tsx
import React from "react";
import { observer } from "mobx-react-lite";
import TextControlModel from "./textControlModel";

interface ButtonConfig {
	text: string
	onClick: () => void
}

interface TextControlProps {
	model: TextControlModel
	leftButtons?: ButtonConfig[]
	rightButtons?: ButtonConfig[]
}

const TextControl: React.FC<TextControlProps> = observer(({ model, leftButtons = [], rightButtons = [] }) => {
	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			{leftButtons.map((button, index) => (
				<button key={index} onClick={button.onClick} style={{ marginRight: "8px" }}>
					{button.text}
				</button>
			))}
			<input
				type="text"
				value={model.text}
				onChange={(e) => model.setText(e.target.value)}
				placeholder="Введите текст"
				style={{ marginRight: "8px" }}
			/>
			{rightButtons.map((button, index) => (
				<button key={index} onClick={button.onClick} style={{ marginLeft: "8px" }}>
					{button.text}
				</button>
			))}
		</div>
	);
});

export default TextControl;
