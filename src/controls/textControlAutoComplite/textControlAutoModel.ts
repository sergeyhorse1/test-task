import { makeAutoObservable } from "mobx";
import {CountryInfo, getCountryByName} from "../../api/apiService";

class CountryControlModel {
	text: string = "";
	suggestions: CountryInfo[] = [];
	maxSuggestions: number;
	
	
	constructor(maxSuggestions: number) {
		this.maxSuggestions = maxSuggestions
		makeAutoObservable(this)
	}
	
	setText(newText: string) {
		this.text = newText
		this.fetchSuggestions()
	}
	
	async fetchSuggestions() {
		if (this.text.length > 0) {
			const results = await getCountryByName(this.text)
			this.suggestions = results.slice(0, this.maxSuggestions)
		} else {
			this.suggestions = []
		}
	}
	
	selectSuggestion(suggestion: CountryInfo) {
		this.text = suggestion.name
		this.suggestions = []
	}
}

export default CountryControlModel
