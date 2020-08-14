import * as React from 'react';
import { TimeInput } from './timeinput';
import { Card } from './card';
import { DefaultShiftDto, TimeDto } from '../models';
import { CheckMergeData } from '../helpers/util';

interface DefaultWorkTimeProps {
    data: DefaultShiftDto;
    onSave(data: DefaultShiftDto): void;
}

export const DefaultWorkTime: React.FC<DefaultWorkTimeProps> = (props) => {
    const [state, setState] = React.useState<DefaultShiftDto>(props.data)

    React.useEffect(() => {
        setState(props.data);
    }, [props.data])

    const onChange = (data: TimeDto) => {
        console.log(data);
        setState({
            startHour: data.hour,
            startMinute: data.min
        });
    }

    const isChanged = () => {
        return CheckMergeData(props.data, state);
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
            <button
                className="pull-right"
                onClick={() => onSave()}
                disabled={isChanged()}
            >Kaydet</button>
        </Card>
    )
}