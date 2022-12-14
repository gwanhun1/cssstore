import React from 'react';
import styled from 'styled-components';

const S = {
	Button: styled.div`
		display: inline-block;
		color: #fff;
		text-decoration: none;
		padding: 20px 50px;
		border: 3px solid #71dc4d;
		border-radius: 10px;
		cursor: pointer;

		&:hover {
			animation: pulsate 1s ease-in-out;
		}

		@keyframes pulsate {
			0% {
				box-shadow: 0 0 25px #a9dc98, 0 0 25px #43bf19;
			}
		}
	`,
};

function BorderLightButton() {
	return <S.Button>Click Button</S.Button>;
}

export default BorderLightButton;
