import * as React from 'react';
import { Input } from './input';
import { RandomStringGenerator, CheckMergeData } from '../helpers/util';
import { TimeDto } from '../models';

interface TimeInputProps {
    data: TimeDto;
    id?: string;
    label?: string;
    onChange(val: TimeDto): void;
}

interface TimeInputState {
    hour: string;
    min: string;
}

export class TimeInput extends React.Component<TimeInputProps, TimeInputState> {

    private id: string = this.props.id || RandomStringGenerator();

    constructor(props: TimeInputProps) {
        super(props);
        this.state = {
            min: '00',
            hour: '00'
        }
    }

    componentDidMount() {
        this.setState({
            hour: String(this.props.data.hour),
            min: String(this.props.data.min)
        });
    }

    componentDidUpdate(prevProps: TimeInputProps) {
        if (!CheckMergeData(prevProps.data, this.props.data)) {
            let { hour, min } = this.props.data;
            this.setState({
                hour: String(hour),
                min: String(min)
            });
        }
    }

    //#region Events
    onChangeHour(e: React.ChangeEvent<HTMLInputElement>) {
        let val = e.target.value;

        this.setState({
            hour: val
        }, this.onChange);
    }

    onChangeMin(e: React.ChangeEvent<HTMLInputElement>) {
        let val = e.target.value;
        this.setState({
            min: val
        }, this.onChange);
    }

    onChange() {
        this.props.onChange({
            hour: Number(this.state.hour),
            min: Number(this.state.min)
        });
    }
    //#endregion Events

    toTime(value: string) {
        return value.length === 1 ? `0${value}` : value;
    }

    render() {
        return (
            <React.Fragment>
                <div className="timeInput">
                    <label htmlFor={this.id}>{this.props.label}</label>
                    <Input
                        id={this.id}
                        value={this.toTime(this.state.hour)}
                        max={24}
                        min={0}
                        type="number"
                        onChange={(e) => this.onChangeHour(e)}
                    />

                    <Input
                        id={this.id}
                        value={this.toTime(this.state.min)}
                        max={60}
                        min={0}
                        type="number"
                        onChange={(e) => this.onChangeMin(e)}
                    />
                </div>
            </React.Fragment>
        );
    }
}