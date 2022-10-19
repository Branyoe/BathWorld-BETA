import MarkerComponent from './MarkerComponent';
import BathroomIcon from '../../../../../icons/BathroomIcon';
import bathroomDrawerStore from '../../../../../stores/bathroomDrawerStore';

export default function Markers({ bathrooms }) {
  const { setIsOpen, setData } = bathroomDrawerStore(state => ({
    setIsOpen: state.setIsOpen,
    setData: state.setData
  }))

  return bathrooms?.map(bathroom => (
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