import AppContext from './AppContext';

import { useState } from 'react';
import StayData from '../Data/Data';
const AppState = (props) => {
  const [location, setLocation] = useState('Location');
  const [count, setCount] = useState(0);
  const [navExpand, setNavExpand] = useState(false);
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [filtro, setFiltro] = useState(StayData)


  let filterData = StayData.filter((item) => {

    return item.city;
  });
  const Toggle = () => {
    setNavExpand(!navExpand);
    
  };
  const Filtrado=() => {
    const Guests = adult + child
    let lugar = ""
    if(location.includes('Vaasa')){
      lugar="Vaasa"
    } else if (location.includes('Helsinki')){
      lugar="Helsinki"
    }else if(location.includes('Turku')){
      lugar="Turku"
    }else{
      lugar= 'Oulu'
    }
    if(location != "Location" && (Guests)!==0){
      let DobleFiltro= null;
      const FiltroLocation = StayData.filter(Element => Element.city==lugar)
      DobleFiltro=FiltroLocation.filter(Element => Element.maxGuests >= Guests)
      Toggle();
      setFiltro(DobleFiltro)
    } else if(location != "Location"){
      const FiltroLocation = StayData.filter(Element => Element.city===lugar)
      Toggle();
      setFiltro(FiltroLocation)
    } else {
      const FiltroGuests = StayData.filter(Element => Element.maxGuests >=Guests)
      Toggle();
      setFiltro(FiltroGuests)
    }}

  return (
    <AppContext.Provider
      value={{
        filtro,
        Filtrado,
        Toggle,
        StayData,
        filterData,
        location,
        setLocation,
        count,
        setCount,
        navExpand,
        setNavExpand,
        adult,
        setAdult,
        child,
        setChild,
        isOpen,
        setIsOpen,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
