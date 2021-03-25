import React, {useState} from 'react'
import firebase from "firebase"

export default function Contact() {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phoneNumber: ""
    })


    const addDataToFirebase = (e) => {
        e.preventDefault()

        const db = firebase.firestore();
        // db.settings({
        //     timestampsInSnapshots: true
        // });
        db.collection("contactHome").add(userData);  
        
    }

    return (
        <div className="contact">
            <h2 className="header-mb-primary">Contact</h2>
            <div className="contact_form">
                <form onSubmit={addDataToFirebase}>
                    <input type="text" placeholder="Name" value={userData.name} onChange={(e) => setUserData({...userData, name: e.target.value})} />
                    <input type="email" placeholder="E-mail" value={userData.email} onChange={(e) => setUserData({...userData, email: e.target.value})} />
                    <input type="text" placeholder="Phone Number" value={userData.phoneNumber} onChange={(e) => setUserData({...userData, phoneNumber: e.target.value})} />
                    <input className="btn-primary" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}
