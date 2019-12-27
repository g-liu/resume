class Courseworks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { courses: props.courses };
  }

  render() {
  	if (!this.state.courses || this.state.courses.length == 0) {
  		return null;
  	}
    return (<aside id="coursework">
    	<h3>Coursework</h3>
    	<ul>
	    	{this.state.courses.map((course, index) => {
	    		return <Coursework name={course} key={index} />
	    	})}
	    </ul>
	</aside>);
  }
}