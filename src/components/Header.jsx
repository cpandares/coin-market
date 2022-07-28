
import { AppBar, Container, Toolbar, Typography, Select, MenuItem, createTheme,ThemeProvider } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../context/CryptoContex';



const Header = () => {
    
    const history = useHistory();
    const { currency,setCurrency  } = CryptoState()

    const darkTheme = createTheme({
        palette: {
            primary:{
                main: '#ffffff',
            },
            type: 'dark',
        },
    })
    return (
        <ThemeProvider theme={ darkTheme }>

            <AppBar 
                color='transparent' 
                position='static'
                >
                <Container>
                    <Toolbar>
                        <Typography 
                            variant='h6'
                            style={{
                            flex:1,
                            color:"gold",
                            fontWeight:"bold",
                            cursor:"pointer"
                            }}
                            onClick={() => history.push('/')}
                        >Crypto Pool
                        </Typography>

                        <Select 
                            variant='outlined'
                            style={{
                                width:100,
                                height:40,
                                marginRigtht:15
                            }}
                            value={currency}
                            onChange={(e)=>setCurrency(e.target.value)}
                        >
                            <MenuItem value={'USD'}>USD</MenuItem>
                            <MenuItem value={'EUR'}>EUR</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
};

export default Header;