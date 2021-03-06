import * as React from 'react';
import { TimeInput, TimeInputDataDto } from './timeinput';
import { Card } from './card';
import { DefaultShiftDto } from '../models';
import { CheckDataMatches } from '../helpers/util';
import { Button } from './button';

interface DefaultWorkTimeProps {
    data: DefaultShiftDto;
    onSave(data: DefaultShiftDto): void;
}

export const DefaultWorkTime: React.FC<DefaultWorkTimeProps> = (props) => {
    const [state, setState] = React.useState<DefaultShiftDto>(props.data)

    const onChange = (data: TimeInputDataDto) => {
        setState({
            startHour: Number(data.hour),
            startMinute: Number(data.min)
        });
    }

    React.useEffect(() => {
        setState(props.data);
    }, [props.data])

    const isChanged = () => {
        return CheckDataMatches(props.data, state);
    };

    const onSave = () => {
        props.onSave(state);
    }

    return (
        <Card
            title="Varsayılan Çalışma Saati"
            subTitle="Bu ayar tatil olan günlerde, gece nöbetinin ayarlanabilmesi için önemlidir"
        >

            <TimeInput
                label="Başlangıç"
                data={{ min: state.startMinute, hour: state.startHour }}
                onChange={(data) => onChange(data)}
            />
            <Button
                text="Kaydet"
                onClick={() => onSave()}
                disabled={isChanged()}
            />
        </Card>
    )
}