import React, { useState, useEffect } from 'react';
import { Button, Form, ListGroup, Modal } from 'react-bootstrap';
import './NotesManager.css';

const NotesManager = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState({ title: '', content: '', keywords: '' });
    const [showAdd, setShowAdd] = useState(false);
    const [viewNote, setViewNote] = useState(null);

    useEffect(() => {
        const savedNotes = localStorage.getItem('notes');
        if (savedNotes) {
            setNotes(JSON.parse(savedNotes));
        }
    }, []);

    const handleShowAdd = () => setShowAdd(true);
    const handleCloseAdd = () => setShowAdd(false);

    const handleShowView = (note) => {
        setViewNote(note);
    };
    const handleCloseView = () => {
        setViewNote(null);
    };

    const addNote = () => {
        if (newNote.title.trim() && newNote.content.trim()) {
            const newNotes = [...notes, {
                id: notes.length + 1,
                title: newNote.title,
                content: newNote.content,
                keywords: newNote.keywords.split(',').map(keyword => keyword.trim()).filter(keyword => keyword),
                date: new Date().toISOString().split('T')[0],
                highlighted: false
            }];
            setNotes(newNotes);
            localStorage.setItem('notes', JSON.stringify(newNotes.sort((a, b) => new Date(b.date) - new Date(a.date))));
            setNewNote({ title: '', content: '', keywords: '' });
            handleCloseAdd();
        }
    };

    const deleteNote = (id) => {
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
    };

    return (
        <div>
            <Modal show={showAdd} onHide={handleCloseAdd}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            value={newNote.title}
                            onChange={(e) => setNewNote({...newNote, title: e.target.value})}
                            placeholder="Note title"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Content</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={newNote.content}
                            onChange={(e) => setNewNote({...newNote, content: e.target.value})}
                            placeholder="Write your note content here..."
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Keywords</Form.Label>
                        <Form.Control
                            type="text"
                            value={newNote.keywords}
                            onChange={(e) => setNewNote({...newNote, keywords: e.target.value})}
                            placeholder="Enter keywords, separated by commas"
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAdd}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addNote}>
                        Save Note
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="list-group-container">
            <ListGroup className="mt-3">
                {notes.map(note => (
                    <ListGroup.Item
                        key={note.id}
                        action
                        onClick={() => handleShowView(note)}
                    >
                        {new Date(note.date).toLocaleDateString()} - {note.title} - <span className="keywords">{note.keywords.join(', ')}</span>
                        <Button variant="danger" size="sm" onClick={(e) => {
                            e.stopPropagation(); // Prevent onClick event from firing when the button is clicked
                            deleteNote(note.id);
                        }}>x</Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            </div>

            <Modal show={viewNote !== null} onHide={handleCloseView}>
                <Modal.Header closeButton>
                    <Modal.Title>{viewNote?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{viewNote?.content}</Modal.Body>
                <Modal.Footer>
                    <Button className="new-note-button" variant="secondary" onClick={handleCloseView}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Button variant="primary" onClick={handleShowAdd}>Add New Note</Button>
        </div>
    );
};

export default NotesManager;
