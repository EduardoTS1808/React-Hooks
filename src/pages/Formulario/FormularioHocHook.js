import React,{useEffect} from 'react';

export default function MyFormComponenteHook (ref, handle){

  useEffect(()=>{
      const listerner = (event)=>{
        if(!ref.current){
          return
        }
        handle(event)

      }
      document.addEventListener("submit", listerner)
    },[ref, handle]
  )

}