import React from 'react'

export const DataViewer = ({ config }) => {
    return <div className='display-pane' data-testid="data-viewer">
        <h3>For the input JSON : </h3>
        <pre>
            {JSON.stringify(config, null, 2)}
        </pre>
        <br />
    </div>
}