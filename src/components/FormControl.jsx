import React, { useState } from "react"
import './FormControl.css'

function FormControl () {
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [error,setError] = useState(false)
    // const [emailAddress,setEmailAddress] = useState('')

    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(firstName.length===0 || lastName.length===0){
            setError(true)
        }
        if(firstName&&lastName){
            console.log("FirstName:",firstName,"LastName:",lastName)
        }
       
    }

    

    return (
        <div>

        <h1 align="center"><u><i>FORM CONTROL</i></u></h1>

        <form onSubmit={handleSubmit}>
        <fieldset>

        <legend>
                    Personal Information
            </legend>
            <p>
                    First name :
                    <input type="text" name="username" onChange={e => setFirstName(e.target.value)}></input>
            
                <label className="error">{error&&firstName.length<=0?"frist name must required" : ""}</label>
            </p>    
                <p>
                    Last name :
                    <input type="text" name="username" onChange={e => setLastName(e.target.value)}></input>
                <label className="error">{error&&lastName.length<=0?"last name must required" : ""}</label><br></br>
                </p>
                
                <p>
                    Email Add :
                    <input type="text" name="useremail"></input><br></br>

                </p>
                
                <p>
                    Describe yourself :
                </p>
                <textarea rows="7" cols="80"></textarea>

        </fieldset>

        <p align="center">
                <input type="submit" name="submit"></input>
        </p>
                    
        </form>
        
        </div>
        
        
    )
}

export default FormControl;