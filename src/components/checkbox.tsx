import * as React from 'react';
import { RandomStringGenerator } from '../helpers/util';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export class Checkbox extends React.Component<CheckboxProps> {

    private _id: string = '';

    constructor(props: CheckboxProps) {
        super(props);

        this._id = this.props.id || RandomStringGenerator()
    }


    render() {
        return (
            <div className="material-checkbox">
                <span className="material-checkbox-input">
                    <input
                        {...this.props}
                        type="checkbox"
                        id={this._id}
                    />
                </span>

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