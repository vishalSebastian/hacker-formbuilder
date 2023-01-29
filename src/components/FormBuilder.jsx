import React from 'react';
import { FieldNumber } from './common/NumberField';
import { FieldSelect } from './common/Select';
import { FieldText } from './common/TextField';
/** This component takes config as input props and then return the form respectivly */
export const FormBuilder = ({ config }) => {
    /** You should preserve the typed in value by the user in the below state
     */
    const [formStates, setFormStates] = React.useState({ fn: 'sample first name', ln: 'sample last name', age: 20, isVisited: 'Yes' });

    const renderValues = ({ type }) => {
        switch (type) {
            case 'text':
                return <FieldText />
            case 'number':
                return <FieldNumber />
            case 'select':
                return <FieldSelect />
            default: return []
        }
    }
    return <>
        <div className='content-area'>
            <h3>The respective table view : </h3>
            <div>{config.map((item, index) => {
                return <div key={item.key + index}>
                    {renderValues(item)}</div>
            })}</div>
        </div>
        <pre>{JSON.stringify(formStates, null, 2)}</pre>
    </>
}