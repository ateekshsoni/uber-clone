import React from 'react'

const LocationSearchPanel = (props) => {

  const Location = [
    "Shree Jewellers , Holi Tekra Rehti , Dis- Sehore",
    "Hanuman Mandir , Hanumar chok , Rehti , Dis- Sehore",
    "Shree Jewellers , Holi Tekra Purana Thana Road Rehti , Dis- Sehore",
  ]
  return (
    <div>
      {/* this is just a sample data */}
      {
        Location.map((elem , idx)=>{
          return(
            <div key={idx} onClick={()=>{props.setVehiclePanel(true) ,  props.setOpenPanel(false)}} className='flex gap-4 bg-[#eeeeee] items-center justify-start  mx-4 my-4 rounded-md '>
              <h2 className=' h-8 w-8 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill"></i></h2>
              <h4 className='font-medium'> {elem} </h4>
            </div>
          )
        })
      }
    </div>
  )
}

export default LocationSearchPanel;