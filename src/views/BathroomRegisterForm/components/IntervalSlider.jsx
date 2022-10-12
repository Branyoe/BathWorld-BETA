import { Stack, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';


export default function PhotoInp() {

  return (
    <Box
      sx={{ 
        mt: 2,
        mb: 2,
        p: 1, 
        outline: "1px #bdbdbd solid", 
        borderRadius: "5px" 
      }}
      maxWidth="false"
    >
      <Typography
        variant='caption'
        component="div"
        ml={1}
        mb={1}
      >
        Fotos
      </Typography>
      <Stack direction="row" gap={1}>
        <TextField
          id="photoInp"
          name="photoInp"
          type="file"
          size="small"
          fullWidth
        />
      </Stack>
    </Box>
  );
}