import { MdSearch } from 'react-icons/md';
import AppContext from '../../context/AppContext';
import { useContext } from 'react';

import { Input, Nav, Button } from './NavSearchElements';
import { WrapperG } from '../GuestDropdown/GuestDropdownElements';

import LocationDropdown from '../LocationDropdown/LocationDropdown';
import GuestDropdown from '../GuestDropdown/GuestDropdown';

function NavSearch() {
  const {
    Toggle,
    Filtrado,
    location,
    setLocation,
    isOpen,
    setIsOpen,
    navExpand,
    setNavExpand,
    adult,
    setAdult,
    child,
    setChild,
  } = useContext(AppContext);

 

  const Open = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {navExpand ? (
        <div>
          <Nav expand onClick={Open}>
          <Input placeholder="Location" expandInput  value={location} readOnly />



            <Input
              placeholder="Guests"
              expandInput
              value={`${adult + child} Guests `}
            />

            <Button expandBtn onClick={Filtrado} readOnly>
              <MdSearch size={25} style={{ color: '#ffffff' }} />
              Search
            </Button>
          </Nav>
          {isOpen ? (
            <LocationDropdown setLocation={setLocation} readOnly />
          ) : (
            <WrapperG>
              <GuestDropdown
                adult={adult}
                setAdult={setAdult}
                child={child}
                setChild={setChild}
              />
            </WrapperG>
          )}
        </div>
      ) : (
        <Nav>
          <div onClick={Toggle}>
            <Input
              placeholder="Select Location"
              disabled
              defaultValue={location}
            />
            <Input
              placeholder="Add Guests"
              disabled
              defaultValue={`${adult + child} Guests `}
            />
          </div>
          <Button>
            <MdSearch size={35} style={{ color: '#eb5757' }} />
          </Button>
        </Nav>
      )}
    </>
  );
}

export default NavSearch;
