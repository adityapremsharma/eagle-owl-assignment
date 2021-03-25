import React, {useState, useEffect} from 'react'
import firebase from "firebase"

export default function ContactHome() {

    const db = firebase.firestore();

    const [search, setSearch] = useState("")
    const [contactHomeData, setContactHomeData] = useState([])

//     const fetchBlogs = async() => {
        
//         const response = db.collection('contactHome');
//         const data = await response.get();
//         data.docs.forEach(item => {
//         console.log(item.data())
//     })
// }

    const getContactHome = async() => {
    
        const collection = db.collection("contactHome")
        await collection.onSnapshot((results) => {
            results.forEach(result => setContactHomeData([...contactHomeData, result.data()]))
        });
    
    }


    useEffect(() => {
       getContactHome()
    }, [])


    return (
        <div className="contact-home">
        <h1 className="header-mb-primary">Contact Home</h1>
        <input type="text" placeholder="Search User"/>
        {contactHomeData.map(data => {
            return <div className="card-primary">
            <div className="text-container">
                <h1>{data.name}</h1>
                <h2>{data.email}</h2>
                <h2>{data.phoneNumber}</h2>
                </div>
                <div className="btn-container">
                <a href={`tel:${data.phoneNumber}`} className="btn-primary">Call</a>
                <a href={`mailto:${data.email}`} className="btn-primary">Mail</a>
                </div>
            </div>
        })}
            
        </div>
    )
}
