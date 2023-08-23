import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../contactSlice';

const AddContact = ({ onClose  }) => {

    const [Name, setName] = useState('');
    const [Number, setNumber] = useState('');
    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch();

    const handleClick = () => {
        if (Name === '' || Number === '') {
            return;
        }

        dispatch(addContact({
            name: Name,
            number: Number,
            isActive: isActive,
            id: Date.now().toLocaleString()
        }))

        setName('');
        setNumber('');
        setIsActive(false);
        onClose();
    }

    return (
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-indigo-700 ">
                Add Contact
            </h1>
            <form className="mt-6">
                <div className="mb-2">
                    <label>
                        <span className="text-gray-700">Name</span>
                        <input
                            type="text"
                            name="name"
                            className="w-full block px-1 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="John cooks"
                            value={Name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </label>
                </div>
                <div className="mb-2">
                    <label>
                        <span className="text-gray-700">Number</span>
                        <input type="number" id="phone" name="phone" maxLength={10} recquired
                            className="block w-full mt-2 px-1 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="00000000"
                            value={Number}
                            onChange={(e) => { setNumber(e.target.value) }}
                            required
                        />
                    </label>
                </div>

                <div className="mb-6 flex">
                    <p className='me-3'>
                        Active:
                    </p>
                    <input type="checkbox" className=" indeterminate:bg-gray-300 " checked={isActive} onChange={() => { setIsActive(!isActive) }} />
                </div>

                <div className="mb-6">
                    <button
                        onClick={handleClick}
                        type='button'
                        className="
                        w-full h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800">
                        Add
                    </button>
                </div>
                <div></div>
            </form>
        </div>

    );
};

export default AddContact;