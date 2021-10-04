import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import { Calendar } from './components/Calendar';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';

function App(): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <Reset />
            <GlobalStyle />
            <div className="App">
                <header className="App-header">
                    <Calendar />
                </header>
            </div>
        </ThemeProvider>
    );
}

export default App;
