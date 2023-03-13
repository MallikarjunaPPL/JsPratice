 import React from 'react';
 import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';
 const updatedComp=(OriginalComp)=>{
   
    
     const NewComp = () => {
        const [inpval,setVal]=useState({
            name:"",
            mail:""
        })
         const [newLi,setLi]=useState([])
         const nameChange=event=>{
             setVal({...inpval,name:event.target.value})
         }
         const mailChange=event=>{
             setVal({...inpval,mail:event.target.value})
         }
         const SubmitForm=event=>{
             event.preventDefault()
             if (inpval.name!==""&&inpval.mail!==""){
             const newVal={
                id:uuidv4(),
                new_name:inpval.name,
                 new_mail:inpval.mail,
               
             }
             setLi(((prev) => [...prev, newVal]))
             setVal({...inpval,name:"",mail:""})
            
         }
         }
         const clearItems=()=>{
           
           setLi([])
       }
    
        return (
           <OriginalComp inpval={inpval} newLi={newLi} nameChange={nameChange} SubmitForm={SubmitForm} clearItems={clearItems}  mailChange={mailChange} />
        );
     };
    return NewComp
    
   
 }
 export default updatedComp;