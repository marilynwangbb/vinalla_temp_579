import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import StatusCell from './StatusCell';
import TableAutoFill from './TableAutoFill';
import './InteractiveTable.css';

const InteractiveTable = () => {
  const [rows, setRows] = useState(() => {
    const savedRows = localStorage.getItem('tableRows');
    return savedRows ? JSON.parse(savedRows) : [{ id: 1, company: "", status: "", industry: "", position: "", applicationLink: "", dueDate: "" }];
});

  const [note, setNote] = useState('');

  const updateRows = (newRows) => {
    setRows(newRows);
    localStorage.setItem('tableRows', JSON.stringify(newRows));
  };

  const handleChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    updateRows(newRows);
};

  const addRow = () => {
    const newRow = { id: rows.length + 1, company: "", status: "", industry: "", position: "", applicationLink: "", dueDate: "" };
    setRows(prevRows => {
        const updatedRows = [newRow, ...prevRows];
        localStorage.setItem('tableRows', JSON.stringify(updatedRows));
        return updatedRows;
    });

  
};

const deleteRow = (index) => {
  const updatedRows = rows.filter((_, idx) => idx !== index);
  updateRows(updatedRows);
};

  return (
      <div className = "interactive-table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Company</th>
              <th>Status</th>
              <th>Industry</th>
              <th>Position</th>
              <th>Application Link</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
                <td>
                <TableAutoFill
                    value={row.company}
                    onChange={(newValue) => handleChange(index, 'company', newValue)}
                  />
                </td>
                <StatusCell
                  index={index}
                  currentStatus={row.status}
                  onStatusChange={(status) => handleChange(index, "status", status)}
                />
                <td>
                  <Form.Control
                    as="select"
                    value={row.industry}
                    onChange={(e) => handleChange(index, "industry", e.target.value)}
                  >
                    <option value="tech">Tech</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                  </Form.Control>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    value={row.position}
                    onChange={(e) => handleChange(index, "position", e.target.value)}
                  />
                </td>
                <td>
                  <Form.Control
                    type="text"
                    placeholder="Paste application link here"
                    value={row.applicationLink}
                    onChange={(e) => handleChange(index, 'applicationLink', e.target.value)}
                  />
                  {row.applicationLink && (
                    <a href={row.applicationLink} target="_blank" rel="noopener noreferrer">Open Link</a>
                  )}
                </td>

                <td>
                    <Form.Control
                        type="date"
                        value={row.dueDate}
                        onChange={(e) => handleChange(index, 'dueDate', e.target.value)}
                    />
                </td>

              <td>
                <Button variant="danger" onClick={() => deleteRow(index)}>x</Button>
              </td>

              </tr>
            ))}
          </tbody>
        </Table>
        <Button onClick={addRow}>Add Row</Button>
      </div>
  );
};

export default InteractiveTable;
