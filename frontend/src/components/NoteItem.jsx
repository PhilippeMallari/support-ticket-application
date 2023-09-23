import React from 'react'
import { useSelector } from 'react-redux'

function NoteItem({ note }) {
    // The code below will get the user
    const {user} = useSelector((state) => state.auth)

    return (
        <div className="note" style={{
            backgroundColor: note.isStaff ? 'rgba(0,0,0,0.7)' : '#fff',
            color: note.isStaff ? '#fff' : '#000',
        }}>
            <h4>
            Note from: {note.isStaff ? <span>Staff</span> : <span>{user.name}</span>}</h4>
            <p>
                {note.text}
            </p>
            <div className="note-date">
                {new Date().toLocaleDateString('en-US')}
            </div>
        </div>
    )
}

export default NoteItem