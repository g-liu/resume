import React from 'react';
import SideListItem from './SideListItem';

class SideListItemDetailed extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.data.name;
    this.yoe = props.data.yoe;
  }

  render() {
    return (<li>
      <>{this.title}</>
      {this.yoe ?
        <>
        &nbsp;
        <span className="sm company-name location">({this.yoe}&nbsp;{this.yoe === "1" ? "yr." : "yrs."})</span>
        </> : ""}
    </li>);
  }
}

export default SideListItemDetailed;