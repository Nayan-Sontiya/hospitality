import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from "../../components/common-components/Modal";
import {
    closeModalProfile,
    modalOpenShow,
} from "../../components/helpers/HelperFunctions";

const NewUserModal = ({ newUserPopUpId }) => {

    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        mobile: "",
        zip: ""
    });

    const handleInput = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            axios.post('http://localhost:3001', userDetails)
        } catch (e) {
            console.log(e)
        }
        console.log(userDetails)
        closeModalProfile(newUserPopUpId)
    }

    return (
        <Modal
            modalId={newUserPopUpId}
            modalTitle="Enter Details"
            modalBody={
                <form className='px-3 py-5' >

                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Name
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                name="name"
                                value={userDetails.name}
                                onChange={handleInput}
                                required
                                className="block w-full mt-1 border-b-2 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Email
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="email"
                                value={userDetails.email}
                                onChange={handleInput}
                                name="email"
                                required
                                className="block w-full mt-1 border-b-2 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Mobile No.
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="number"
                                value={userDetails.mobile}
                                onChange={handleInput}
                                name="mobile"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                maxLength={10}
                                required
                                className="block w-full mt-1 border-b-2 focus:outline-none" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="zip"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Zip Code
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="number"
                                value={userDetails.zip}
                                onChange={handleInput}
                                name="zip"
                                maxLength={6}
                                required
                                className="block w-full mt-1 border-b-2 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className='flex justify-center mt-8'>
                        <button onClick={handleSubmit} type='submit' className="bg-green-700 p-1 px-2 text-white rounded mx-auto">Submit</button>
                    </div>

                </form>
            }
        />
    )
}

export default NewUserModal