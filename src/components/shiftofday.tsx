import * as React from 'react';
import { ShiftOfDayDto, KeyAndValueDto } from '../models';
import { Card } from './card';
import { CheckDataMatches } from '../helpers/util';
import { TimeInput } from './timeinput';
import { Checkbox } from './checkbox';
import { FormItem } from './formItem';
import { Button } from './button';

interface ShiftOfDayProps {
    day: KeyAndValueDto;
    className?: string;
    data: ShiftOfDayDto;
    onSave(data: ShiftOfDayDto): void;
}

export const ShiftOfDay: React.FC<ShiftOfDayProps> = (props) => {
    const [state, setState] = React.useState<ShiftOfDayDto>(props.data);

    const isChanged = () => {
        return CheckDataMatches(props.data, state);
    };

    const onSave = () => {
        props.onSave(state);
    }

    const className = () => {
        let classList: string[] = ['shiftofday', props.day.key];

        props.className && classList.push(props.className);

        return classList.join(' ');
    }
    return (
        <Card
            subTitle="Gün"
            reversSortTitle={true}
            title={props.day.value}
            className={className()}
        >
            <FormItem>
                <Checkbox checked={state.isHoliday} onChange={() => setState({ ...state, isHoliday: !state.isHoliday })} label="Tatil" />
            </FormItem>
            <FormItem>
                <TimeInput
                    data={{
                        hour: state.startHour,
                        min: state.startMinute
                    }}
                    label="Başlangıç"
                    onChange={e => setState({ ...state, startHour: e.hour, startMinute: e.min })}
                />
                <TimeInput
                    data={{
                        hour: state.finishHour,
                        min: state.finishMinute
                    }}
                    label="Bitiş"
                    onChange={e => setState({ ...state, finishHour: e.hour, finishMinute: e.min })}
                />
            </FormItem>

            <FormItem vAlign="end">
                <Button
                    text="Kaydet"
                    onClick={() => onSave()}
                    disabled={isChanged()}
                />
            </FormItem>
        </Card>
    );
}