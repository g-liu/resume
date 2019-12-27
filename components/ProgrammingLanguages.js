class ProgrammingLanguages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { languages: props.languages };
  }

  render() {
  	if (!this.state.languages || this.state.languages.length == 0) {
  		return null;
  	}
    return (<aside id="programming">
    	<h3>Programming</h3>
    	<ul>
	    	{this.state.languages.map((language, index) => {
	    		return <ProgrammingLanguage name={language} key={index} />
	    	})}
	    </ul>
	</aside>);
  }
}