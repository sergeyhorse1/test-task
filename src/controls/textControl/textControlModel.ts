import { makeAutoObservable } from "mobx";

class TextControlModel {
	text: string = "";
	
	constructor() {
		makeAutoObservable(this);
	}
	
	setText(newText: string) {
		this.text = newText;
	}
	
	clearText() {
		this.text = "";
	}
}

export default TextControlModel;
