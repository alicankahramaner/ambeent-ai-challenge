import * as React from 'react';
import { RandomStringGenerator } from '../helpers/util';
import { isNullOrUndefined } from 'util';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

export class Input extends React.Component<InputProps> {

    private _id: string = '';

    constructor(props: InputProps) {
        super(props);

        this._id = this.props.id || RandomStringGenerator()
    }

    state = {
        value: ''
    }

    componentDidMount() {
        this.setState({
            value: this.props.value
        })
    }

    componentDidUpdate(prevProps: InputProps) {
        if (prevProps.value !== this.props.value) {
            this.setState({
                value: this.props.value
            })
        }
    }

    onKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
        let { min, max } = this.props;

        let val = Number(this.state.value);

        if (!isNullOrUndefined(max) && (val > max)) {
            this.setState({
                value: String(max)
            })
        }

        if (!isNullOrUndefined(min) && (val < min)) {
            this.setState({
                value: String(min)
            })
        }
    }

    onChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ value: event.target.value });

        this.props.onChange && this.props.onChange(event);
    }

    render() {
        return (
            <div className="material-input" >
                <input
                    {...this.props}
                    id={this._id}
                    value={this.state.value}
                    type={this.props.type || 'text'}
                    onChange={(event) => this.onChange(event)}
                    onKeyUp={(event) => this.onKeyUp(event)}
                    placeholder={this.props.placeholder || ' '}
                />
                {
                    this.props.label ?
                        <label htmlFor={this._id}>
                            {this.props.label}
                        </label>
                        : null
                }
            </div >
        );
    }
}