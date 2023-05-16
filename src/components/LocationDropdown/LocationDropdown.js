import { UL, Wrapper } from './LocationDropdownElements';
import { MdPlace } from 'react-icons/md';

function LocationDropdown({ setLocation }) {
  const Location = [
    'Helsinki, Finland',
    'Turku, Finland',
    'Vaasa, Finland',
    'Oulu, Finland',
  ];
  return (
    <>
      <Wrapper>
        {Location.map((location, id) => (
          <div>
            <UL onHover>
              <li key={id} onClick={() => setLocation(location)}>
                <MdPlace /> {location}
              </li>
            </UL>
          </div>
        ))}
      </Wrapper>
    </>
  );
}

export default LocationDropdown;
