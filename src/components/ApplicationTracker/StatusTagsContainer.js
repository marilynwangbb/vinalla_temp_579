import React from 'react';
import StatusTag from './StatusTag';

const StatusTagsContainer = () => {
  const statuses = [
    "Online Application",
    "Online Assessment",
    "Interview",
    "On-site / Final Round",
    "Offer",
    "Rejected"
  ];

  return (
    <div style={{ margin: '20px', padding: '10px', backgroundColor:'#f2f3f3', marginBottom: '20px' }}>
      {statuses.map((status, index) => (
        <StatusTag key={index} status={status} />
      ))}
    </div>
  );
};

export default StatusTagsContainer;