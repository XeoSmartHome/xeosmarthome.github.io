import React from 'react';
import './App.css';
import HomePage from "./pages/HomePage";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const theme = createTheme({
	palette: {
		mode: 'dark',
	}
})

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			<HomePage/>
		</ThemeProvider>
	);
}

export default App;
