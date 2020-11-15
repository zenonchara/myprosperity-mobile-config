import React from "react";

import image from "assets/dashboard-image.png";

export default class DashboardConfig extends React.Component {


  render() {

    const dashboardOptions = [
      {
        value: "0",
        label: "Automatic (default)",
        description: "Let myprosperity dynamically control which feature to promote to your clients.",
      },
      {
        value: "10",
        label: "Financial review",
        description: "Invite your clients to browse your services, see which services they haven't used recently, and request more service.",
      },
      {
        value: "13",
        label: "Client priorities (opportunities)",
        description: "description of opportunities here.",
      },
      {
        value: "200",
        label: "Review super/SMSF",
        description: "description of super review here.",
      },
      {
        value: "201",
        label: "Debt review",
        description: "description of debt review here.",
      },
    ];

    return (
      <div className="row">
        <div className="col-8">
          {dashboardOptions.map(option => (
            <label className="dashboard-option" key={`key-${option.value}`}>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  name="DashboardCtaInternal"
                  className="custom-control-input"
                  value={option.value}
                  defaultChecked={window.formData.DashboardCtaInternal === option.value}
                />
                <span className="custom-control-label h6" >{option.label}</span>
              </div>
              <p>
                {option.description}
              </p>
            </label>
          ))}
        </div>
        <div className="col-4">
          <img src={image}  className="preview-image tool-preview-image"/>
          <p className="small text-muted">
            The “Dashboard promotion” is the most prominent, top-left tile of the mobile app.
            You can select from which feature should be promoted in this location.
          </p>
        </div>
      </div>
    );

  }
}
