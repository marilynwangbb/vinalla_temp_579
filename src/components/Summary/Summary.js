import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import './Summary.css';

const Summary = ({ data, refreshSummary }) => {
    const calculatePercentage = (count) => {
        if (data.total === 0) return 0;
        return (count / data.total * 100).toFixed(1);
    };

    return (
        <div>
            <h3>Total Applications: {data.total}</h3>
            <ProgressBar className="progress-bar-overall">
                <ProgressBar striped className="progress-bar-offer" now={calculatePercentage(data.counts.Offer)} label={`${calculatePercentage(data.counts.Offer)}%`} key={1} />
                <ProgressBar striped className="progress-bar-application" now={calculatePercentage(data.counts.Application)} label={`${calculatePercentage(data.counts.Application)}%`} key={2} />
                <ProgressBar striped className="progress-bar-oa" now={calculatePercentage(data.counts.OA)} label={`${calculatePercentage(data.counts.OA)}%`} key={3} />
                <ProgressBar striped className="progress-bar-interview" now={calculatePercentage(data.counts.Interview)} label={`${calculatePercentage(data.counts.Interview)}%`} key={4} />
                <ProgressBar striped className="progress-bar-final" now={calculatePercentage(data.counts.Final)} label={`${calculatePercentage(data.counts.Final)}%`} key={5} />
                <ProgressBar striped className="progress-bar-rejected" now={calculatePercentage(data.counts.Rejected)} label={`${calculatePercentage(data.counts.Rejected)}%`} key={6} />
            </ProgressBar>
            <div className="legend">
                <div><span className="dot offer"></span> Offer</div>
                <div><span className="dot application"></span> Application</div>
                <div><span className="dot oa"></span> Online Assessment (OA)</div>
                <div><span className="dot interview"></span> Interview</div>
                <div><span className="dot final"></span> Final Round</div>
                <div><span className="dot rejected"></span> Rejected</div>
            </div>
        </div>
    );
};

export default Summary;
