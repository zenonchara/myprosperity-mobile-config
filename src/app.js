import React from "react";
import TabBar from "app/components/tabbar";
import { map } from "lodash";

import ToolConfig from "./app/toolConfig";
import CalculatorConfig from "./app/calculatorConfig";
import DashboardConfig from "./app/dashboardConfig";
import CustomiseConfig from "./app/customiseConfig";

const tabs = [
  { key: "dashboard", label: "Dashboard", component: <DashboardConfig />},
  { key: "tools", label: "Tools", component: <ToolConfig />},
  { key: "customise", label: "Customise", component: <CustomiseConfig />},
  { key: "calculators", label: "Calculators", component: <CalculatorConfig />},
];

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {currentTab: "tools"};

    if (window.location.hash) {
      const urlHash = window.location.hash.substring(1);

      if (map(tabs, "key").includes(urlHash)) {
        this.state = {currentTab: urlHash};
      }

    }

  }

  handleTabClick(tab) {
    this.setState({currentTab: tab});
  }

  render() {

    return (
      <>
        <div className="container">

          <TabBar
            tabs={tabs}
            onClick={this.handleTabClick.bind(this)}
            currentTab={this.state.currentTab}
          />

          <form
            action="/AgentPortal/AgentSettings/MobileAppSettings"
            method="post"
            noValidate="novalidate"
          >

            <div className="tab-content">
              {tabs.map( tab => {
                let classes = ["tab-pane"];
                if (tab.key === this.state.currentTab) {
                  classes.push("active");
                }

                return (
                  <div className={classes.join(" ")} key={tab.key}>
                    {tab.component}
                  </div>
                )

              })}
            </div>

          </form>

        </div>
      </>
    );
  }
};
