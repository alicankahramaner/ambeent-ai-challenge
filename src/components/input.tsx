import * as React from 'react';
import { RandomStringGenerator } from '../helpers/util';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export class Input extends React.Component<InputProps> {

    private _id: string = '';

    constructor(props: InputProps) {
        super(props);

        this._id = this.props.id || RandomStringGenerator()
    }


    render() {
        return (
            <div className="material-input">
                <input
                    {...this.props}
                    id={this._id}
                    placeholder={this.props.placeholder || ' '}
                />
                {
                    this.props.label ?
                        <label htmlFor={this._id}>
                            {this.props.label}
                        </label>
                        : null
                }
            </div>
        );
    }
}