import './App.css';
// import Section from './components/section';
import BookingForm from './components/booking-form'
import { HoursProvider } from './context/hours';
function Booking() {
   return (
    <>
       Booking content
       <HoursProvider>
         <BookingForm/>
       </HoursProvider>
   </>
  );
}

export default Booking;