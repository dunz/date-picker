import React, { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import { Calendar } from './components/Calendar';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';

function App(): JSX.Element {
    const [date, setDate] = useState(new Date());
    const onChangeValue = useCallback((value) => {
        setDate(value);
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <Reset />
            <GlobalStyle />
            <div className="App">
                <header className="App-header">
                    <Calendar value={date} onChange={onChangeValue} />
                </header>
            </div>
        </ThemeProvider>
    );
}

export default App;
