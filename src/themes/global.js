import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	* {
		box-sizing: border-box;
	}

	ul,
	ol {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	a {
		color: inherit;
		text-decoration: none;
	}


	*::-webkit-scrollbar {
		width: 8px;
		height: 8px;
	}

	*::-webkit-scrollbar-thumb {
		background: rgb(204, 204, 204);
		border-radius: 4px;
	}

	*::-webkit-scrollbar-thumb:hover {
		background: rgb(179, 179, 179);
		box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
	}

	*::-webkit-scrollbar-thumb:active {
		background-color: rgb(153, 153, 153);
	}

	*::-webkit-scrollbar-track {
		background: rgb(224, 224, 224);
		border-radius: 4px;
	}

	*::-webkit-scrollbar-track:hover,
	*::-webkit-scrollbar-track:active {
		background: rgb(212, 212, 212);
	}
`;

export { GlobalStyle };