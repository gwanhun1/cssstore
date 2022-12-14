import React from 'react';
import styled from 'styled-components';
import BorderLightButton from './pages/Button/BorderLightButton';
import InteractionButton from './pages/Button/InteractionButton';
import TextUpInput from './pages/Input/TextUpInput';

const S = {
	BackGround: styled.div`
		background-color: rgb(34, 39, 41);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	`,

	Layout: styled.div`
		margin: 50px 0 50px;
	`,

	Box: styled.div`
		width: 500px;
		height: 400px;
		border: 1px solid white;
	`,

	Title: styled.div`
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		border-bottom: 1px solid white;
		font-size: 20px;
	`,

	Content: styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 80%;
	`,
};

function App() {
	return (
		<div>
			<S.BackGround>
				<S.Layout>
					<S.Box>
						<S.Title>Border-Light-Button</S.Title>
						<S.Content>
							<BorderLightButton />
						</S.Content>
					</S.Box>
					<S.Box>
						<S.Title>Border-Light-Button</S.Title>
						<S.Content>
							<InteractionButton />
						</S.Content>
					</S.Box>
					<S.Box>
						<S.Title>Text-Down-Input</S.Title>
						<S.Content>
							<TextUpInput />
						</S.Content>
					</S.Box>
				</S.Layout>
			</S.BackGround>
		</div>
	);
}

export default App;
