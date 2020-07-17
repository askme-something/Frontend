import React from "react";
import { Input, Button } from "antd";

class Register extends React.Component
{
	render()
	{
		return(
			<div style={{padding: "10%"}}>
				<h1>Quiz App</h1>
				<p>Please provide your details.</p>
				<Input size="large" placeholder="Organization Name" /><br />
				<Input size="large" placeholder="Full Name" /><br />
				<Input size="large" placeholder="Email" /><br />
				<Input.Password size="large" placeholder="Password" /><br /><br />
				<Button type="primary">Register</Button>
			</div>
		);
	}
}

export default Register;