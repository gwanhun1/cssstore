import React from 'react';
import styled from 'styled-components';

function GradationButton() {
	const Button = styled.button`
		height: 60px;
		width: 200px;
		padding: 0 40px;
		border-radius: 30px;
		background: linear-gradient(-45deg, #25ea4c, #338aff, #25eaa2);
		background-size: 400%;
		background-position: 90% 0;
		color: #fff;
		transition: background 0.8s;
		transition: 0.8s;
		border: none;
		cursor: pointer;

		&:hover {
			background-position: 185% 50%;
			transform: scale(1.1);
		}
	`;
	return <Button>Get Started</Button>;
}

export default GradationButton;
