const hours = () => {
    const today = new Date();
    const t=today.getHours();
    if (t>=5 && t<12) {
        return "Morning"
    } else if(t===12){
        return "Noon"
    }else if (t>12 && t<6) {
        return "Afternoon"
    } else if(t>=6 && t<10){
        return "Evening"
    }else{
        return "Night"
    }
  };

  const day=()=>{
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
return weekday[d.getDay()];
  }
export {hours , day}