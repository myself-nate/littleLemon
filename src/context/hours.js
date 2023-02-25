import {createContext, useContext, useState} from "react";

const HoursContext = createContext(undefined);

export const HoursProvider = ({ children }) => {
    class Hours{
        constructor(open,close,operating=true){
            [this.oh, this.om] = open.split(':');
            [this.ch,this.cm] = close.split(':');
            this.lastbookingh = Number(close.split(':',1)) -1;
            this.operating = operating
        }
    }
    class weekday extends Hours{
        constructor(open='11:30',close='20:30',operating=true){
            super(open,close,operating)
        }
    }
    class weekend extends Hours{
        constructor(open='12:30',close='21:30',operating=true){
            super(open,close,operating)
        }
    }
  const [hours] = useState([
    new weekend('12:30','20:30'),//sunday
    new weekday(),//monday
    new weekday(),
    new weekday(),
    new weekday(),
    new weekday('11:30','21:30'),
    new weekend()//saturday
])

// console.log(hours)
  return (
    <HoursContext.Provider value={hours}>
      {children}
    </HoursContext.Provider>
  );
};

export const useHoursContext = () => useContext(HoursContext);