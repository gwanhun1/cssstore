import React from 'react';
import styled from 'styled-components/macro';

const Text = styled.span`
	opacity: 1;
`;

const Icon = styled.i`
	opacity: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-60%, -50%);
	transition: width 0.5s;
	font-size: 25px;
`;

const Button = styled.button`
	position: relative;
	width: 200px;
	height: 50px;
	font-size: 20px;
	background-color: #212121;
	color: #fff;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: width 0.5s, border-radius 0.5s;

	&:focus {
		width: 50px;
		background-color: #48ed48;
		border-radius: 50%;
	}

	&:focus ${Text} {
		opacity: 0;
	}

	&:focus ${Icon} {
		opacity: 1;
	}
`;

function InteractionButton() {
	return (
		<Button>
			<Text>Submit</Text>
			<Icon>✓</Icon>
		</Button>
	);
}

export default InteractionButton;
