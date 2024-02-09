import React from 'react';
import SideListItem from './SideListItem';

/* Generic top level class for a general list */
class SideList extends React.Component {
  constructor(props) {
    super(props);

    const {data, listId} = props;

    this.state = { title: data.title, id: listId, items: data.items };
    this.state.itemComponent = SideListItem;
  }

  render() {
  	if (!this.state.items || this.state.items.length === 0) {
  		return null;
  	}

    return (<aside id={this.state.id}>
    	<h3>{this.state.title}</h3>
    	<ul>
	    	{this.state.items.map((language, index) => {
	    		return <this.state.itemComponent name={language} key={index} />
	    	})}
	    </ul>
	</aside>);
  }
}

export default SideList;