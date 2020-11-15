import React from 'react'
import { ChromePicker } from 'react-color'

export default class ColorPicker extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      displayColorPicker: false,
    };
  }

  handleClick() {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose() {
    this.setState({ displayColorPicker: false });
  };

  handleChange(color) {
    this.props.onChange({
      color: color.hex,
      id: this.props.id
    });
  };

  render() {
    const {
      label,
      color,
      id,
      onChange
    } = this.props;

    const popover = {
      position: 'absolute',
      zIndex: '2',
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }

    const colorBox = {
      backgroundColor: color
    };

    return (
      <div>

        <div className="form-group color-picker">
          {label ? (
            <label htmlFor={`input-${id}`}>
              { label }
            </label>
          ): null}
          <input
            type="text"
            className="form-control"
            name={`color_${id}`}
            id={id}
            value={color}
            onChange={this.handleChange.bind(this)}
            onClick={this.handleClick.bind(this)}
            maxLength={7}
          />
          <span className="color-picker-preview" style={ colorBox }></span>

          { this.state.displayColorPicker ?
            <div style={ popover }>
              <div style={ cover } onClick={ this.handleClose.bind(this) }/>
              <ChromePicker
                disableAlpha={ true }
                color={ color }
                onChange={ this.handleChange.bind(this) }
              />
            </div>
          : null }

        </div>

      </div>
    )
  }

}
