import React from 'react';
import { useDrag } from 'react-dnd';
import StatusColor from './StatusColor';
import './StatusTag.css';
const StatusTag = ({ status }) => {
  const [, drag] = useDrag(() => ({
    type: "STATUS_TAG",
    item: { name: status },
  }));

  return (
    <div ref={drag} className="status-tag" style={{
        backgroundColor: StatusColor(status),
    }}>
      {status}
    </div>
  );
};

export default StatusTag;
