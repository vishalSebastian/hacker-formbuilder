import React from 'react';
import { FieldNumber } from './common/NumberField';
import { FieldSelect } from "./common/Select"
import { FieldText } from "./common/TextField"

export const PreviewAvailableElements = () => {
    return <div>
        <h3>These are the available components for building form, No new components needs to be added. </h3>
        <div className='field-area'>
            <div className='field-item'>
                <h4>type === 'text'</h4>
                <FieldText />
            </div>
            <div className='field-item'>
                <h4>type === 'select'</h4>
                <FieldSelect />
            </div>
            <div className='field-item'>
                <h4>type === 'number'</h4>
                <FieldNumber />
            </div>

        </div>
    </div>
}