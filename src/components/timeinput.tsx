import * as React from 'react';
import { Input } from './input';
import { RandomStringGenerator, CheckDataMatches } from '../helpers/util';
import { TimeDto } from '../models';
import { isNull } from 'util';

interface TimeInputProps {
    data: TimeDto;
    id?: string;
    label?: string;
    onChange(val: TimeInputDataDto): void;
}

export interface TimeInputDataDto {
    hour: number | null;
    min: number | null;
}

interface TimeInputState extends TimeInputDataDto {

}

export class TimeInput extends React.Component<TimeInputProps, TimeInputState> {

    private id: string = this.props.id || RandomStringGenerator();

    constructor(props: TimeInputProps) {
        super(props);
        this.state = {
            min: null,
            hour: null
        }
    }

    componentDidMount() {
        this.setState({
            hour: this.props.data.hour,
            min: this.props.data.min
        });
    }

    componentDidUpdate(prevProps: TimeInputProps) {
        if (!CheckDataMatches(prevProps.data, this.props.data)) {
            let { hour, min } = this.props.data;

            this.setState({
                ...this.state,
                hour: hour,
                min: min
            });
        }
    }

    //#region Events
    onChangeHour(e: React.ChangeEvent<HTMLInputElement>) {
        let val = Number(e.target.value);

        this.setState({
            ...this.state,
            hour: val
        }, this.onChange);
    }

    onChangeMin(e: React.ChangeEvent<HTMLInputElement>) {
        let val = Number(e.target.value);
        this.setState({
            min: val
        }, this.onChange);
    }

    onChange() {
        this.props.onChange({
            hour: this.state.hour,
            min: this.state.min
        });
    }
    //#endregion Events

    parseStringTimeFormat(value: number | null): string {
        if (isNull(value)) {
            return '-';
        }

        let val = String(value);
        return val.length === 1 ? `0${value}` : val;
    }

    render() {
        return (
            <React.Fragment>
                <div className="timeInput">
                    <label htmlFor={this.id}>{this.props.label}</label>
                    <Input
                        id={this.id}
                        value={this.parseStringTimeFormat(this.state.hour)}
                        max={24}
                        min={0}
                        type="number"
                        onChange={(e) => this.onChangeHour(e)}
                    />

                    <Input
                        id={this.id}
                        value={this.parseStringTimeFormat(this.state.min)}
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