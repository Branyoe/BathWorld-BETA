import data from '../data.json';
import MarkerComponent from './Home/MarkerComponent';
import IconLocation from './IconLocation';
import useBathroom from '../stores/bathroom'

export default function Markers() {
  const { setIsOpen, setData } = useBathroom(state => ({
    setIsOpen: state.setIsOpen,
    setData: state.setData
  }))

  return data.bathrooms.map((bathroom, i) => (
    <div key={bathroom.id}>
      <MarkerComponent
        position={bathroom.coordinates}
        icon={IconLocation}
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