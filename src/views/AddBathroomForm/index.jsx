
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PhotoInp from './components/PhotoInp';
import { Avatar, Button } from '@mui/material';
import { dataBase } from "../../firebase"
import { collection, doc, setDoc } from "firebase/firestore"
import { useFormik } from 'formik';
import * as yup from 'yup';
import bathroomStore from '../../stores/bathroomStore';

const theme = createTheme();

export default function AddBathroomForm({ handleClose }) {
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

  const { setBathrooms } = bathroomStore(state => ({
    setBathrooms: state.setBathrooms
  }))

  const addBathroom = async (data) => {
    const newBathroom = doc(collection(dataBase, "bathrooms"));
    await setDoc(newBathroom, data)
    const getBathrooms = async () => {
      try {
        await setBathrooms();
      } catch (error) {
        console.log(error);
      }
    }
    getBathrooms();
    handleClose();
  }

  const validationSchema = yup.object({
    name: yup
      .string('solo texto')
      .required('campo requerido'),
    lat: yup
      .number("solo numeros")
      .required("campo requerido"),
    lng: yup
      .number("solo numeros")
      .required("campo requerido"),
    type: yup
      .string("solo texto")
      .required("campo requerido"),
    photo: yup
      .string("solo texto")
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      lat: 0,
      lng: 0,
      type: "gratis",
      photo: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      addBathroom(values);
    },
  });


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
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 0 }}>
            <TextField
              margin="dense"
              required
              fullWidth
              id="name"
              label="Nombre del baño"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="lat"
              label="Latitud"
              type="number"
              id="latInp"
              autoComplete="current-password"
              onChange={formik.handleChange}
              value={formik.values.lat}
              error={formik.touched.lat && Boolean(formik.errors.lat)}
              helperText={formik.touched.lat && formik.errors.lat}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="lng"
              label="Longitud"
              type="number"
              id="lngInp"
              autoComplete="current-password"
              onChange={formik.handleChange}
              value={formik.values.lng}
              error={formik.touched.lng && Boolean(formik.errors.lng)}
              helperText={"sexo"}
            />
            <TextField
              margin='normal'
              id="outlined-select-currency-native"
              select
              name="type"
              required
              fullWidth
              label="Tipo"
              SelectProps={{
                native: true
              }}
              onChange={formik.handleChange}
              value={formik.values.type}
            >
              {brmTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <PhotoInp handleChange={formik.handleChange} state={formik.values.photo} />
            <Avatar />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Agregar
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}