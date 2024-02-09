import React from 'react';

class SideListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data };
  }

  render() {
    return (<li>{this.state.data}</li>);
  }
}

export default SideListItem;