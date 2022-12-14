import React from 'react';
import styled from 'styled-components/macro';

const InputGroup = styled.div`
	position: relative;
`;

const InputLabel = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	transform: translate(10px, 10px);
	transition: transform 0.4s;
	outline: #d1c5fc;
	color: #fff;
`;

const Input = styled.input`
	padding: 10px;
	border: none;
	border-radius: 4px;
	font: inherit;
	color: #fff;
	background-color: transparent;
	outline: 2px solid #fff;

	&:focus + ${InputLabel} {
		transform: translate(10px, -14px) scale(0.8);
		color: #70ff85;
		padding-inline: 5px;
		background-color: #242329;
	}
	&:valid ${InputLabel} {
		transform: translate(10px, -14px) scale(0.8);
		color: #70ff85;
		padding-inline: 5px;
		background-color: #242329;
	}

	&:is(:focus, :valid) {
		outline: #70ff85;
		border: 1px solid #70ff85;
	}
`;

const Flex = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100px;
`;

function TextUpInput() {
	return (
		<Flex>
			<InputGroup>
				<Input />
				<InputLabel>Email Address</InputLabel>
			</InputGroup>
			<InputGroup>
				<Input />
				<InputLabel>Password</InputLabel>
			</InputGroup>
		</Flex>
	);
}

export default TextUpInput;
