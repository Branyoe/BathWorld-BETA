
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PhotoInp from './components/IntervalSlider';

const theme = createTheme();

export default function AddBathroomForm() {

  const [brmType, setBrmType] = React.useState('gratis');

  const handleChange = (event) => {
    setBrmType(event.target.value);
  };

  const brmTypes = [
    {
      value: "paga",
      label: "paga"
    },
    {
      value: "gratis",
      label: "gratis"
    }
  ]


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate sx={{ mt: 0 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Nombre del baño"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="latInp"
              label="Latitud"
              type="number"
              id="latInp"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="lngInp"
              label="Longitud"
              type="number"
              id="lngInp"
              autoComplete="current-password"
            />
            <TextField
              margin='normal'
              id="outlined-select-currency-native"
              select
              required
              fullWidth
              label="Tipo"
              value={brmType}
              onChange={handleChange}
              SelectProps={{
                native: true
              }}
            >
              {brmTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <PhotoInp/>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}