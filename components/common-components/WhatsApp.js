import React from 'react'
import ReactWhatsapp from "react-whatsapp";
const WhatsAppLogo = () => {
    return (
        <>
            <ReactWhatsapp number="9981333039" message="Hi">
                <img
                    style={{
                        position: 'fixed',
                        right: '20px',
                        bottom: '20px'
                    }}
                    src='/images/wapp.png' alt="whatsappIcon"
                    height={60}
                    width={60}
                />
            </ReactWhatsapp>
        </>
    )
}

export default WhatsAppLogo