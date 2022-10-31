import React, {useState} from 'react'

const Form = () => {

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [pw, setPw] = useState("")
    const [confirmpw, setConfirmPw] = useState("")


    const [infoList, setInfoList] = useState ([])

    const submitHandler = (e) => {
        // code goes here
        e.preventDefault();
        console.log("Form submitted: ", firstname, lastname, email, pw, confirmpw)
        // taking in new data
        let infoObj = {firstname, lastname, email, pw, confirmpw}
        
        setInfoList([...infoList, infoObj])
    
    }

    return (
        <div>
        <form onSubmit= {submitHandler}>
        <div className="form-group">
            <label>First Name:</label>
            <input onChange={(e) => setFirstName(e.target.value)} type= "text" className='form-control' />
        </div>
        <div className="form-group">
            <label>Last Name: </label>
            <input onChange={(e) => setLastName(e.target.value)} type= "text" className='form-control' />
        </div>
        <div className="form-group">
            <label>Email: </label>
            <input onChange={(e) => setEmail(e.target.value)} type= "text" className='form-control' />
        </div>
            <div className="form-group">
            <label>Password: </label>
        <input onChange={(e) => setPw(e.target.value)} type= "password" className='form-control' />
        </div>
        <div className="form-group">
        <label>Confirm Password: </label>
        <input onChange={(e) => setConfirmPw(e.target.value)} type= "password" className='form-control' />
        </div>
        <div className="form-group">
            <button type="submit" value="Submit">submit</button>
        </div>
        </form>
        <hr/>
        <div className='info'>
            <p>First Name:  {firstname}</p>
            <p> Last Name: {lastname}</p>
            <p> Email: {email}</p>
            <p>Password: {pw}</p>
            <p>Confirm Password: {confirmpw}</p>
        </div>
        
        </div>
    )
}


export default Form