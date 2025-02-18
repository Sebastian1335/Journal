import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
    name: "journal",
    initialState: {
        isSaving: false,
        messageSaved: "",
        notes: [],
        active: null,
        // active: {
        //     id: "ABC123",
        //     title: "",
        //     body: "",
        //     date: 12345,
        //     imageUrls: []
        // },
    },
    //Todo lo que hay en los reducers debe ser sincrono
    reducers: {
        savingNewNote: (state, action) => {
            state.isSaving = true
        },

        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },

        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = ''
        },
        setNotes: (state, action) => {
            state.notes = action.payload
        },
        setSaving: (state, action) => {
            state.isSaving = true
            state.messageSaved = ''
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map(n => n.id === action.payload.id ? action.payload : n)
            state.messageSaved = `Nota: ${action.payload.title}, actualizado correctamente`
        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload]
            state.isSaving = false
        },
        clearNotesLogout: (state, action) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null
        },
        deleteNoteByID: (state, action) => {
            state.notes = state.notes.filter(n => n.id !== action.payload)
            state.active = null
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteByID,
    setPhotosToActiveNote,
    clearNotesLogout
} = journalSlice.actions;
