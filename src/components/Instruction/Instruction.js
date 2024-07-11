import React from 'react';

const Instruction = () => {
    return (
        <div>
            <h2>How It Works <i className="fa-regular fa-circle-question"></i></h2>
            <h3>
                <span className="fw-bold">1. Choose Your Antivirus:</span> <span
                className="fw-normal">Select <b>two</b> or <b>three</b> antivirus programs you want&nbsp;to&nbsp;compare.</span>
            </h3>
            <h3>
                <span className="fw-bold">2. Click Compare:</span> <span
                className="fw-normal">Use the <b>COMPARE</b> button – your results will be saved in&nbsp;the&nbsp;COMPARE&nbsp;tab.</span>
            </h3>
            <h3>
                <span className="fw-bold">3. Modify Your Selection:</span> <span className="fw-normal">You can always undo your choice or select a&nbsp;different&nbsp;antivirus.</span>
            </h3>
            <h4>
                <em>Simple, fast, and effective!&nbsp; <i className="fas fa-dumbbell"></i></em>
            </h4>
        </div>
    );
};

export default Instruction;