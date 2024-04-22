import React from 'react';
import { useDrop } from 'react-dnd';
import StatusColor from './StatusColor';

const StatusCell = ({ index, currentStatus, onStatusChange }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "STATUS_TAG",
    drop: (item) => onStatusChange(item.name),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }), [index, onStatusChange]);

  return (
    <td ref={drop} style={{
      backgroundColor: isOver ? 'lightgrey' : StatusColor(currentStatus),
      color: 'black',
      textAlign: 'center',
      fontWeight: 600,
    }}>
      {currentStatus || "Drop status here"}
    </td>
  );
};

export default StatusCell;
