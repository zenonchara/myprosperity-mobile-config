import React from "react";

import ColorPicker from "app/components/colorpicker";

import appIconPlaceholderImg from "assets/app-icon-placeholder.svg";
import phonePreviewImg from "assets/phone-preview.png";
import PhoneColors from "./components/phone-colors";

export default class CustomiseConfig extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colors: {
        header_background: "#ffffff",
        tile_1: "#30BFBD",
        tile_2: "#88949C",
        tile_3: "#30BFBD",
        tile_4: "#FFFFFF",
        tile_5: "#C0C8CD",
        app_background: "#f3f3f3",
        circle_color: "#E1E5E8",
      },
      app_icon: {
        name: "",
        size: "",
        type: "",
        data: "",
      },
      header_image: {
        name: "",
        size: "",
        type: "",
        data: "",
      },
      appName: ""
    };
  }

  onColorChange({color, id}) {
    const newColors = this.state.colors;
    newColors[id] = color;

    this.setState({
      ...this.state,
      colors: newColors
    });
  }

  onChangeAppName(evt) {
    this.setState({
      ...this.state,
      appName: evt.target.value
    });
  }

  handleChangeImage(id, evt) {
    const reader = new FileReader();
    const file = evt.target.files[0];
    const self = this;

    if(file) {
      reader.onload = function (upload) {
        const image = {
          name: file.name,
          size: file.size,
          type: file.type,
          data: upload.target.result,
        };

        const newState = {
          ...self.state
        };
        newState[id] = image;

        self.setState(newState);
      };
      reader.readAsDataURL(file);
    }
  }


  render() {

    const appIconStyles = {
      backgroundImage: `url(${appIconPlaceholderImg})`
    }
    if(this.state.app_icon.data) {
      console.log(this.state.app_icon.data);
      appIconStyles.backgroundImage = `url(${this.state.app_icon.data}`;
    }

    const state = this.state;

    return (
      <div>

        <div className="row app-icon-fieldset">
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="input-app-name">
                App name
              </label>
              <input
                type="text"
                id="input-app-name"
                className="form-control"
                value={this.state.appName}
                maxLength={12}
                onChange={this.onChangeAppName.bind(this)}
              />
              <small className="form-text text-muted">
                Max 12 characters. Appears on the home screen, as well as within the app.
              </small>
            </div>

            <div className="form-group">
              <div>
                App icon
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile"
                  onChange={this.handleChangeImage.bind(this, ["app_icon"])}
                />
                  <label className="custom-file-label" htmlFor="customFile">
                    {this.state.app_icon.name || "Choose file..."}
                  </label>
              </div>
              <small className="form-text text-muted">
                PNG file recommended. For best results, ensure your image is a 1000px square or larger.
              </small>
            </div>
          </div>

          <div className="col-6 app-preview">
            <div className="app-icon-preview">
              <div style={appIconStyles} className={this.state.app_icon.data ? "app-icon real": "app-icon fake"}/>
              <div className="app-icon-name">
                { this.state.appName ? (
                  this.state.appName
                ): <span className="text-muted">Your App</span>}
              </div>
            </div>
            <div className="phone-preview">
              <img className="background" src={phonePreviewImg} />
              <div className="app" style={appIconStyles} />
            </div>
          </div>
        </div>

        <hr className="my-5"/>

        <div className="row app-icon-fieldset">
          <div className="col-6">
            <div className="form-group">
              <div>
                Header background image
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile"
                  onChange={this.handleChangeImage.bind(this, ["header_image"])}
                />
                  <label className="custom-file-label" htmlFor="customFile">
                    {this.state.header_image.name || "Choose file..."}
                  </label>
              </div>
              <small className="form-text text-muted">
              Defaults to the same firm logo used in the web portal. For best results, use a PNG file with a transparent background.
              </small>
            </div>

            <ColorPicker
              label="Header background color"
              color={this.state.colors.header_background}
              id="header_background"
              onChange={this.onColorChange.bind(this)}
            />

            <div className="tile-color-group">
              <ColorPicker
                label="Tile colours"
                color={this.state.colors.tile_1}
                id="tile_1"
                onChange={this.onColorChange.bind(this)}
              />
              <ColorPicker
                color={this.state.colors.tile_2}
                id="tile_2"
                onChange={this.onColorChange.bind(this)}
              />
              <ColorPicker
                color={this.state.colors.tile_3}
                id="tile_3"
                onChange={this.onColorChange.bind(this)}
              />
              <ColorPicker
                color={this.state.colors.tile_4}
                id="tile_4"
                onChange={this.onColorChange.bind(this)}
              />
              <ColorPicker
                color={this.state.colors.tile_5}
                id="tile_5"
                onChange={this.onColorChange.bind(this)}
              />
            </div>

            <ColorPicker
              label="App background"
              color={this.state.colors.app_background}
              id="app_background"
              onChange={this.onColorChange.bind(this)}
            />

            <ColorPicker
              label="Circle color"
              color={this.state.colors.circle_color}
              id="circle_color"
              onChange={this.onColorChange.bind(this)}
            />

          </div>

          <div className="col-6">
            <PhoneColors
              headerImage={state.header_image.data}
              headerBackground={state.colors.header_background}
              tileColor1={state.colors.tile_1}
              tileColor2={state.colors.tile_2}
              tileColor3={state.colors.tile_3}
              tileColor4={state.colors.tile_4}
              tileColor5={state.colors.tile_5}
              appBackground={state.colors.app_background}
              circleColor={state.colors.circle_color}
            />
          </div>

        </div>



      </div>
    );

  }
}
