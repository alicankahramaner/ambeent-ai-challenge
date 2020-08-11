import * as React from 'react';
import { Input } from './input';
import { RandomStringGenerator } from '../helpers/util';
import { TimeDto } from '../models';

interface TimeInputProps {
    data: TimeDto;
    id?: string;
    label?: string;
}

interface TimeInputState extends TimeDto {

}

export class TimeInput extends React.Component<TimeInputProps, TimeInputState> {

    private id: string = this.props.id || RandomStringGenerator();

    constructor(props: TimeInputProps) {
        super(props);
        this.state = {
            ...this.props.data
        }
    }

    componentWillReceiveProps() {
        this.setState({ ...this.props.data });
    }

    onChangeHour(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            hour: Number(e.target.value)
        });
    }

    onChangeMin(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            min: Number(e.target.value)
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="timeInput">
                    <label htmlFor={this.id}>{this.props.label}</label>
                    <Input
                        id={this.id}
                        value={this.state.hour}
                        onChange={(e) => this.onChangeHour(e)}
                    />

                    <Input
                        id={this.id}
                        value={this.state.min}
                        onChange={(e) => this.onChangeMin(e)}
                    />
                </div>
            </React.Fragment>
        );
    }
}