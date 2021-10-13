import { useHistory } from 'react-router-dom';
import React from 'react';

export default function BackButton ()  {
    const history = useHistory();

    return <button id="back-button" onClick={history.goBack} className ="btn btn-primary">Back</button>
}
