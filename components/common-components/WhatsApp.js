import React from 'react'
import ReactWhatsapp from "react-whatsapp";
const WhatsAppLogo = () => {
    return (
        <>
            <ReactWhatsapp number="0000000000" message="Hello World!!!">
                <img
                    style={{
                        position: 'fixed',
                        right: '40px',
                        bottom: '40px'
                    }}
                    src='/images/wapp.png' alt="whatsappIcon"
                    height={80}
                    width={80}
                />
            </ReactWhatsapp>
        </>
    )
}

export default WhatsAppLogo