export interface TimeDto {
    hour: number;
    min: number;
}

export interface StartTimeDto {
    startHour: number;
    startMinute: number;
}

export interface FinishTimeDto {
    finishHour: number;
    finishMinute: number;
}

export interface ShiftOfDayDto extends StartTimeDto, FinishTimeDto {
    isHoliday: boolean;
}

export interface DefaultShiftDto extends StartTimeDto { }

export interface ShiftDto {
    shift: ShiftOfDayDto[];
    default: DefaultShiftDto;
}

export type vAlign = 'start' | 'center' | 'end';