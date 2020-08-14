import * as React from 'react';
import { vAlign } from '../models';

interface FormItemProps {
    vAlign?: vAlign;
}

export const FormItem: React.FC<FormItemProps> = (props) => {

    const className = () => {
        let classList: string[] = ['formItem'];

        props.vAlign && classList.push(props.vAlign);

        return classList.join(' ');
    }

    return (
        <div className={className()}>
            {props.children}
        </div>
    )
}