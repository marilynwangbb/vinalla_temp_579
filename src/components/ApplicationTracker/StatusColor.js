const StatusColor = (statusName) => {
    const statusColors = {
      "Online Application": "#c6e2ec",
      "Online Assessment": "#8cc4d9",
      "Interview": "#409dbf",
      "On-site / Final Round": "#337e99",
      "Offer": "#1b7e65",
      "Rejected": "#798682"
    };
    return statusColors[statusName] || "transparent"; // Default to transparent if no status
  };
  
  export default StatusColor;