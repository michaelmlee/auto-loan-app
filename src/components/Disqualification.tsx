import React from "react";
import { Typography } from "@material-ui/core";

interface PropsI {
    error: string
};

const Disqualification: React.FunctionComponent<PropsI> = (props) => {
    return (
        <>  <h2>Auto Loan Qualifications Failed</h2>
            <h2>{props.error}</h2>
            <Typography>Please contact customer support at (555)555-5555 for more information</Typography>
        </>
    );
}

export default Disqualification