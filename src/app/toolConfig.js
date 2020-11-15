import React from "react";
import {SortableContainer, SortableElement, SortableHandle} from 'react-sortable-hoc';
import arrayMove from 'array-move';

import image from "assets/tool-image.png";

const Handle = SortableHandle(() =>
  <div className="drag-handle">
    <span className="fal fa-grip-lines text-muted"></span>
  </div>
)

const SortableTool = SortableElement(({tool}) => (
  <li key={`key-${tool.MobileAppToolId}`}>
    <input name={`Tools[${tool.index}].MobileAppToolId`} type="hidden" defaultValue={tool.MobileAppToolId} />
    <input name={`Tools[${tool.index}].DisplayOrder`} type="hidden" value={tool.index+1}/>

    <div className="tool-config-row">

      <label className="custom-control custom-checkbox">
        <input
          className="custom-control-input"
          name={`Tools[${tool.index}].IsActive`}
          value="true" type="checkbox"
          defaultChecked={tool.IsActive}
        />
        <span className="custom-control-label" >
        </span>
      </label>

      <span className="fal fa-fw fa-phone tool-icon"></span>

      <input
        className="form-control tool-label"
        name={`Tools[${tool.index}].PreferenceText`}
        type="text"
        defaultValue={tool.PreferenceText}
        maxLength="65"
        placeholder={tool.defaultText}
      />

      {typeof tool.PreferenceUrl !== 'undefined' ? (
        <input
          className="form-control tool-url"
          name={`Tools[${tool.index}].PreferenceUrl`}
          type="text"
          defaultValue=""
          maxLength="2000"
          placeholder="http:// ..."
        />
      ): null}

      <Handle />
    </div>

  </li>
));

const SortableToolList = SortableContainer(({tools}) => {
  return (
    <ul className="tool-config-list list-unstyled">
      {tools.map((tool, index) => {
        tool.index = index;
        return (
          <SortableTool key={`item-${tool.MobileAppToolId}`} index={index} tool={tool} />
        )
        })}
    </ul>
  );
});

export default class ToolConfig extends React.Component {

  constructor(props) {
    super(props);
    this.state = {tools: window.formData.Tools};
  }

  onSortEnd({oldIndex, newIndex}) {
    console.log(oldIndex, newIndex);
    this.setState({
      tools: arrayMove(this.state.tools, oldIndex, newIndex),
    });
  };

  render() {
    const { tools } = this.state;
    return (
      <div className="row">
        <div className="col-8">
          <SortableToolList
            tools={tools}
            onSortEnd={this.onSortEnd.bind(this)}
            lockAxis="y"
            useDragHandle={true}
            helperClass="tool-drag-helper"
          />
        </div>
        <div className="col-4">
          <img src={image}  className="preview-image tool-preview-image"/>
          <p className="small text-muted">
            Make changes to this list to change which tools are available and how they’re arranged to
            clients within the mobile app (The circular buttons beneath the main dashboard).
          </p>

          <p className="small text-muted">
            Tools can be added and removed with the checkboxes, and rearranged by using the drag
            handles on the end of each row.
          </p>
        </div>
      </div>
    );
  }

}
