import * as React from 'react';
import { ShiftOfDayDto } from '../models';
import { Card } from './card';
import { CheckDataMatches } from '../helpers/util';
import { TimeInput } from './timeinput';
import { Checkbox } from './checkbox';
import { FormItem } from './formItem';

interface ShiftOfDayProps {
    dayName: string;
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

    return (
        <Card
            subTitle="Gün"
            reversSortTitle={true}
            title={props.dayName}
            className="shiftofday"
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
                <button
                    className="pull-right"
                    onClick={() => onSave()}
                    disabled={isChanged()}
                >Kaydet</button>
            </FormItem>
        </Card>
    );
}