import React from 'react';

class SideListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
  }

  render() {
    return (<li>{this.state.name}</li>);
  }
}

export default SideListItem;