import React, { useState } from 'react';
import Summary from "./Summary";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import DueDateSummary from './DueDateSummary';
import './Summary.css';

function SummaryContainer() {
  const convertStatus = (status) => {
    switch (status) {
      case "Online Application": return "Application";
      case "Online Assessment": return "OA";
      case "On-site / Final Round": return "Final";
      default: return status;
    }
  };

  const initializeSummaryData = () => {
    const savedRecords = JSON.parse(localStorage.getItem('tableRows') || '[]');
    const totalApplications = savedRecords.length;
    const counts = savedRecords.reduce((acc, row) => {
      const normalizedStatus = convertStatus(row.status);
      acc[normalizedStatus] = (acc[normalizedStatus] || 0) + 1;
      return acc;
    }, {});

    return {
      total: totalApplications,
      counts: {
        Offer: counts.Offer || 0,
        Application: counts.Application || 0,
        OA: counts.OA || 0,
        Interview: counts.Interview || 0,
        Final: counts.Final || 0,
        Rejected: counts.Rejected || 0
      }
    };
  };

  const initializeDueCounts = () => {
    const savedDueCounts = JSON.parse(localStorage.getItem('dueCounts'));
    return savedDueCounts || { dueIn3Days: 0, dueIn5Days: 0, dueIn7Days: 0 };
  };

  const [summaryData, setSummaryData] = useState(initializeSummaryData());
  const [dueCounts, setDueCounts] = useState(initializeDueCounts());

  const updateDueCounts = () => {
    const savedRows = JSON.parse(localStorage.getItem('tableRows') || '[]');
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    let dueIn3Days = 0, dueIn5Days = 0, dueIn7Days = 0;

    savedRows.forEach(row => {
        const dueDate = new Date(row.dueDate);
        const daysUntilDue = Math.floor((dueDate - now) / (1000 * 3600 * 24)); // Use Math.floor for downward rounding

        if (daysUntilDue <= 3) {
            dueIn3Days++;
        }
        if (daysUntilDue > 3 && daysUntilDue <= 5) {
            dueIn5Days++;
        }
        if (daysUntilDue > 5 && daysUntilDue <= 7) {
            dueIn7Days++;
        }
    });

    const newDueCounts = { dueIn3Days, dueIn5Days, dueIn7Days };
    console.log("New due counts:", newDueCounts); 
    setDueCounts(newDueCounts);
    localStorage.setItem('dueCounts', JSON.stringify(newDueCounts));
};

  const refreshAll = () => {
    setSummaryData(initializeSummaryData());
    updateDueCounts();
  };

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Summary</Accordion.Header>
        <Accordion.Body>
          <Summary data={summaryData} refreshSummary={refreshAll} />
          <DueDateSummary counts={dueCounts} />
          <Button onClick={refreshAll}>Refresh All Summaries</Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default SummaryContainer;
