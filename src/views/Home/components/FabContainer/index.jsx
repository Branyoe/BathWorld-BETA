import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { Stack } from "@mui/system";
import useAddForm_FabContainer from "../../../../stores/AddForm_FabContainer";



export default function FabContainer() {

  const { setIsOpen } = useAddForm_FabContainer(state => ({
    setIsOpen: state.setIsOpen,
    setData: state.setData
  }))

  const handleOpenAddForm = () => {
    setIsOpen(true);
  }

  return (
    <>
      <Stack className="fab" gap={1} direction="column">
        <Fab size="normal" color="primary" aria-label="add">
          <MyLocationIcon/>
        </Fab>
        <Fab onClick={handleOpenAddForm} size="normal" color="primary" aria-label="add">
          <AddIcon/>
        </Fab>
      </Stack>
    </>
  );
}