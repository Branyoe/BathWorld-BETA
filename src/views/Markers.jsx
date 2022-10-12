import data from '../data.json';
import MarkerComponent from './Home/components/MarkerComponent';
import useBathroom from '../stores/bathroom'
import BathroomIcon from '../icons/BathroomIcon';

export default function Markers() {
  const { setIsOpen, setData } = useBathroom(state => ({
    setIsOpen: state.setIsOpen,
    setData: state.setData
  }))

  return data.bathrooms.map((bathroom, i) => (
    <div key={bathroom.id}>
      <MarkerComponent
        position={bathroom.coordinates}
        icon={BathroomIcon}
        eventHandlers={{
          click: () => {
            setIsOpen(true);
            setData(bathroom)
          }
        }}
      />
    </div>
  ))
}