import React from 'react'

export default function Contact() {
    return (
        <div className="contact">
            <h2 className="header-mb-primary">Contact</h2>
            <div className="contact_form">
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="E-mail" />
                    <input type="text" placeholder="Phone Number" />
                    <input className="btn-primary" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}
