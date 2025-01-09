import React from "react";
import {observer} from "mobx-react";
import TextControlModel from "./controls/textControl/textControlModel";
import TextControl from "./controls/textControl/textControl";
import CountryControlModel from "./controls/textControlAutoComplite/textControlAutoModel";
import CountryControl from "./controls/textControlAutoComplite/textControlAuto";

const App = observer(() => {
  const control1Model = new TextControlModel();
  const control2Model = new TextControlModel();
  
  const controlAuto1Model = new CountryControlModel(3); // Максимум 3 подсказки
  const controlAuto2Model = new CountryControlModel(10); // Максимум 10 подсказок
  
  const control1LeftButtons = [];
  const control1RightButtons = [
    {
      text: "Clear",
      onClick: () => control1Model.clearText(),
    },
    {
      text: "Set to 'Hello world!'",
      onClick: () => control1Model.setText("Hello world!"),
    },
  ];
  
  const control2LeftButtons = [
    {
      text: "Check Number",
      onClick: () => {
        const number = parseFloat(control2Model.text);
        if (!isNaN(number)) {
          alert(number);
        } else {
          alert("Not a number");
        }
      },
    },
  ];
  
  const control2RightButtons = [
    {
      text: "Show Alert",
      onClick: () => alert(control2Model.text),
    },
  ];
  
  return (
    <>
      <div>
        <h1>Text Control Example</h1>
        <h2>Control 1</h2>
        <TextControl model={control1Model} leftButtons={control1LeftButtons} rightButtons={control1RightButtons}/>
        <h2>Control 2</h2>
        <TextControl model={control2Model} leftButtons={control2LeftButtons} rightButtons={control2RightButtons}/>
      </div>
      <div>
        <h1>Country Selector</h1>
        <h2>Control with Max Suggestions: 3</h2>
        <CountryControl model={controlAuto1Model}/>
        <h2>Control with Max Suggestions: 10</h2>
        <CountryControl model={controlAuto2Model}/>
      </div>
    </>
  );
});

export default App;
