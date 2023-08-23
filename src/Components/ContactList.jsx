import { useDispatch, useSelector } from "react-redux";
import AddContact from "./AddContact";
import { selectContacts, deleteContact } from "../contactSlice";
import Modal from "./Modal";
import { useState } from "react";
import EditContact from "./EditContact";
const ContactList = () => {

    const { contacts } = useSelector(selectContacts);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [editId, setEditId] = useState();
    const [editModal, setEditModal] = useState(false);
    const handelEdit = (id) => {
        setEditId(id);
        setEditModal(!editModal);
    }
    return (
        <div className="flex flex-col items-center w-full p-5 ">

            <h1>All your contact will appear here </h1>
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 justify-center place-items-center mt-5">
                {contacts?.map((el) => (
                    <div
                        key={el.id}
                        className="flex flex-col items-center  text-center bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    >
                        <div className="flex flex-col justify-center items-center">
                            <span className="mb-1 font-bold text-sm text-gray-900 dark:text-white">
                                {`First name: ${el.name}`}
                            </span>
                            <span className="font-bold  text-sm text-gray-900 dark:text-white">
                                {`Last name: ${el.number}`}
                            </span>
                            <span className="font-bold  text-sm text-gray-900 dark:text-white">
                                {`Active: ${el.isActive}`}
                            </span>
                        </div>
                        <div className="flex text-center mt-4 space-x-3 md:mt-6">
                            <button
                                className="w-fit p-4 text-xs h-5 inline-flex items-center font-medium text-center text-white bg-green-500 hover:bg-green-700 rounded-md "
                                onClick={() => { handelEdit(el.id)}}
                            >
                                Edit
                            </button>
                            <button
                                className="w-fit p-4 text-xs h-5 inline-flex items-center font-medium text-center text-white bg-red-600 hover:bg-red-800 border border-gray-300 rounded-md"
                                onClick={() => dispatch(deleteContact(el.id))}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <button
                className=" bg-dark-purple hover:bg-[#2d5473] text-white font-bold py-2 px-4 rounded mt-3"
                onClick={() => {
                    setIsOpen(true);
                }}
            >
                Create New Contact
            </button>
            <Modal isOpen={isOpen} onClose={() => { setIsOpen(false) }} children={<AddContact  onClose={setIsOpen} />} />
            <Modal isOpen={editModal} onClose={() => { setEditModal(false) }} children={<EditContact id={editId} onClose={setEditModal} />} />
        </div>
    );
};

export default ContactList;