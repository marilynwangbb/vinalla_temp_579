import React from 'react';
import { Table } from 'react-bootstrap';

const DueDateSummary = ({ counts }) => {

    console.log(counts)
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Due within 3 Days</th>
                    <th>Due within 5 Days</th>
                    <th>Due within 7 Days</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{counts.dueIn3Days}</td>
                    <td>{counts.dueIn5Days}</td>
                    <td>{counts.dueIn7Days}</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default DueDateSummary;
