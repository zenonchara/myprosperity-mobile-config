import React from "react";

export default class TabBar extends React.Component {
  render() {

    return (
      <ul className="nav nav-tabs my-5">
        {this.props.tabs.map( tab => {
          let classes = ["nav-link"];
          if (tab.key === this.props.currentTab) {
            classes.push("active");
          }

          return (
            <li className="nav-item" key={tab.key}>
              <a className={classes.join(" ")} href={`#${tab.key}`} onClick={() => { this.props.onClick(tab.key) }}>{tab.label}</a>
            </li>
          )
        })}
      </ul>
    );

  }
}
