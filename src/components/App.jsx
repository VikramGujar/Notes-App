import React, { useState } from "react";
import Header from "./Header";
import NoteInput from "./NoteInput";
import Note from "./Note";
import Footer from "./Footer";

function App(){
    const [allNotes,setAllNotes] = useState([])

    function addNewNote(newNote){
        setAllNotes(prevValue =>{
            return [...prevValue,newNote];
        });
    }
    

    function deleteNote(id){
        setAllNotes(prevValue => {
            return prevValue.filter((item,index) =>{
                return index !== id;
            });
            
        })
    }


    return(
        <div>
            <Header />
            <NoteInput 
            onClick = {addNewNote}
            />
            <div className="main-note-container">
            {allNotes.map((noteItem,index) =>{
                return <Note 
                key = {index}
                id = {index}
                title = {noteItem.title}
                description = {noteItem.content}
                dltClick ={deleteNote}
                />
            })
            }</div>
            <Footer />
        </div>
    )
}

export default App;