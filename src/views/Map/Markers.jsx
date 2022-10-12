import MarkerComponent from '../Home/components/MarkerComponent';
import useBathroom from '../../stores/useBathroom'
import BathroomIcon from '../../icons/BathroomIcon';

export default function Markers({ bathrooms }) {
  const { setIsOpen, setData } = useBathroom(state => ({
    setIsOpen: state.setIsOpen,
    setData: state.setData
  }))

  return bathrooms?.map((bathroom, i) => (
    <div key={bathroom.id}>
      <MarkerComponent
        position={[bathroom.lat, bathroom.lng]}
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