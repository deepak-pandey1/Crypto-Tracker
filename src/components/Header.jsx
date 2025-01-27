import React from 'react'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CryptoState } from '../CryptoContext'


const Title = styled(Typography)(({ theme }) => ({
    flex: 1,
    color: 'gold',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    cursor: 'pointer',
}));

// Create a dark theme with mode: "dark"
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: "#fff",
      },
    },
  });

function Header() {
  
  const { currency, setCurrency } = CryptoState();
  
  const navigate = useNavigate(); //navigate to different routes in your application


  return (
    <ThemeProvider theme={darkTheme}>
        <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <Container> 
                <Toolbar>
                    
                    <Title onClick={() => navigate('/')} variant="h6">
                        Crypto Tracker
                    </Title>
    
                    <Select
                        variant="outlined"
                        style={{ width: 100, height: 40, marginLeft: 15 }}
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        >       
                        <MenuItem value={"USD"}>USD</MenuItem>
                        <MenuItem value={"INR"}>INR</MenuItem>
                    </Select>

                </Toolbar>
            </Container>
        </AppBar>
    </ThemeProvider>
  )
}

export default Header


/*
NOTE:
container: that makes elements responsive.
Typography: that is used to display text.
Toolbar: that is used to display the content.
we use styled API to style the Typography component.





*/