import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { ListItemButton } from '@mui/material';
import bathroomDrawerStore from '../../../../../stores/bathroomDrawerStore';
import bathroomStore from '../../../../../stores/bathroomStore';

export default function ResultsList({ inpValue }) {
  const { setIsOpen, setData } = bathroomDrawerStore(state => ({
    setIsOpen: state.setIsOpen,
    setData: state.setData
  }))

  const { bathrooms } = bathroomStore(state => ({
    bathrooms: state.bathrooms
  }))

  const filterData = bathrooms.filter(e => {
    if (inpValue !== '') return e.name.toLowerCase().includes(inpValue.toLowerCase());
    return null;
  })


  if (filterData.length) return (
    <List
      sx={{ width: '100%', maxHeight: '30vh', bgcolor: 'background.paper', overflow: "scroll" }}
    >
      {filterData.map(bathroom => (
        <div key={bathroom.id}>
          <ListItemButton onClick={
            () => {
              setIsOpen(true);
              setData(bathroom);
            }
          }>
            <ListItemText primary={bathroom.name} />
          </ListItemButton>
          <Divider />
        </div>
      ))}
    </List>
  );
}
