import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";


const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));


export default function Header() {
  return (
    <>
      <Puller />
      <Typography sx={{ p: 2, color: 'text.secondary' }}>{"s"}</Typography>
    </>
  );
}
