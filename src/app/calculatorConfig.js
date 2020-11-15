import React from "react";
import {SortableContainer, SortableElement, SortableHandle} from 'react-sortable-hoc';
import arrayMove from 'array-move';

import image from "assets/calculator-image.png";

const Handle = SortableHandle(() =>
  <div className="drag-handle">
    <span className="fal fa-grip-lines text-muted"></span>
  </div>
)

const SortableCalculator = SortableElement(({calculator}) => (
  <li key={`calculator-li-${calculator.MobileAppToolId}`}>
    <input name={`Calculators[${calculator.index}].MobileAppToolId`} type="hidden" defaultValue={calculator.MobileAppToolId} />
    <input name={`Calculators[${calculator.index}].DisplayOrder`} type="hidden" value={calculator.index+1}/>

    <div className="tool-config-row">

      <label className="custom-control custom-checkbox">
        <input
          className="custom-control-input"
          name={`Calculators[${calculator.index}].IsActive`}
          value="true" type="checkbox"
          defaultChecked={calculator.IsActive}
        />
        <span className="custom-control-label" >
        </span>
      </label>

      <input
        className="form-control tool-label"
        name={`Calculators[${calculator.index}].PreferenceText`}
        type="text"
        defaultValue={calculator.PreferenceText}
        maxLength="65"
        placeholder={calculator.defaultText}
      />

      <Handle />
    </div>

  </li>
));

const SortableCalculatorList = SortableContainer(({calculators}) => {
  return (
    <ul className="tool-config-list list-unstyled">
      {calculators.map((calculator, index) => {
        calculator.index = index;
        return (
          <SortableCalculator key={`calculator-${calculator.MobileAppToolId}`} index={index} calculator={calculator} />
        )
        })}
    </ul>
  );
});

export default class CalculatorConfig extends React.Component {

  constructor(props) {
    super(props);
    const formData = window.formData;
    this.state = {calculators: formData.Calculators};
  }

  onSortEnd({oldIndex, newIndex}) {
    console.log(oldIndex, newIndex);
    this.setState({
      calculators: arrayMove(this.state.calculators, oldIndex, newIndex),
    });
  };

  render() {
    const { calculators } = this.state;
    return (
      <div className="row">
        <div className="col-8">
          <SortableCalculatorList
            calculators={calculators}
            onSortEnd={this.onSortEnd.bind(this)}
            lockAxis="y"
            useDragHandle={true}
            helperClass="tool-drag-helper"
          />
        </div>
        <div className="col-4">
          <img src={image}  className="preview-image tool-preview-image"/>
          <p className="small text-muted">
          The mobile app gives clients access to list of helpful financial calculators from around the web.
          Edit this list to change what calculators you offer when clients access the calculators option from the app.
          </p>

          <p className="small text-muted">
            Calculators can be added and removed with the checkboxes, and rearranged by using the drag
            handles on the end of each row.
          </p>
        </div>
      </div>
    );
  }

}
