import {useState} from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useBooking = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [variables,setVariables]= useState()
  const emailregex = /^( ([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@ ((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

  const submit = async (url, data, stage=1,setStage) => {
    let [date,rest]= new Date().toISOString().split('T')
    let [hour,minute] = rest.split(':',0-1)

    setLoading(true)
    const random  = Math.random();//desides  outcome
    if(stage === 0){
      setVariables(null)
      setResponse(null)
      setStage(1)
      setLoading(false)
    }
    if(stage === 1){
      setVariables(data)

      try{
        if(date>data.data){throw new Error('The selected date has passed')}
        if(date===data.date){
          if(hour>data.hour){throw new Error('The selected time has passed (hour)')}
          if(hour===data.hour && minute> data.minute){throw new Error('The selected time has passed (minuter)')}
          if(hour===data.hour || (hour+1=== data.hour && minute < data.minute)){throw new Error('You cant book for less than an hours time')}
        }
        if(data.guests <1){throw new Error('Must be at least one Guest')}
        if(data.guests > 10){throw new Error('For prarts over 10 a booking must be made over the phone or in perosn')}
        if(random<0.2){throw new Error('Stage one failed')}
        await wait(2000);
        setResponse({avalible:true,message:'We have a table. please enter your details to reserve ',messagetype: 'sucess'})
        setVariables(data)
        setStage(2)


      }catch(error){setResponse({message: error.message,messagetype: 'error',avalible:false})}
      finally{setLoading(false)}
    }else if(stage === 2){
      try {
        if(data.name === ''){throw new Error('Name is required')}
        if(data.email === '' || emailregex.test(data.email)){throw new Error('Invalid email')}
        if (random < 0.2) {throw new Error("Something went wrong");}
        await wait(2000);
        console.log(variables,data)
        setResponse({booked:true})
        setStage(3)
     }catch (error) {
      console.log(error.message)
      setResponse({
        booked: false,
        message: error.message,
        messagetype: 'error'
      })
    } finally {
      setLoading(false);
    }
  }}
  return { isLoading, response, submit };
  }

export default useBooking;
