import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contacts: [],
};

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },
        editContact: (state, action) => {
            const updatedContact = action.payload;
            console.log(updatedContact , "updated cons")
            const modifiedContact = state.contacts.map((contact) => {
                if (contact.id === updatedContact.id) {
                    return updatedContact;
                }
                return contact;
            });

            state.contacts = modifiedContact;
        },
        deleteContact: (state, action) => {
            const id = action.payload;
            const modifiedContact = state.contacts.filter((contact) => contact.id !== id);
            state.contacts = modifiedContact;
        },
    },
});

export const { addContact, editContact, deleteContact } = contactSlice.actions;

// create and export the selector
export const selectContacts = (state) => state.contacts;
export default contactSlice.reducer;
