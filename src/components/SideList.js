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

  Title = () => {
    return <h3>{this.state.title}</h3>
  }

  ListHeader = () => {
    // override this in subclasses if one wishes to have a list header
    return null;
  }

  ListFooter = () => {
    // override this in subclasses if one wishes to have a list footer
    return null;
  }

  List = () => {
    return (<ul>
        {this.state.items.map((item, index) => {
          return <this.state.itemComponent data={item} key={index} />
        })}
    </ul>);
  }

  render() {
  	if (!this.state.items || this.state.items.length === 0) {
  		return null;
  	}

    return (<aside id={this.state.id}>
      	<this.Title />
        <this.ListHeader />
      	<this.List />
        <this.ListFooter />
      </aside>);
  }
}

export default SideList;