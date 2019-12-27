class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return [<tr>
					<td class="years" rowspan="3"><span class="months">Jun-Aug</span> 2015</td>
					<td class="job-title"><h4>Software Engineering Intern</h4></td>
					<td class="type">TYPE</td>
				</tr>,
				<tr>
					<td class="employer" colspan="2"><a href="http://cdk.com">CDK Global</a></td>
				</tr>,
				<tr>
					<td class="job-description" colspan="2">
						<p>Add functionality to existing Angular JS mobile app to allow car dealers to manage their incentives. Integrated with CDK's in-house REST APIs, wrote extensive tests. Added push notifications through Pushwoosh.</p>
					</td>
				</tr>];
	}
}