export interface KeyAndValueDto {
    key: string;
    value: any;
}

export interface TimeDto {
    hour: number | null;
    min: number | null;
}

export interface StartTimeDto<T> {
    startHour: T;
    startMinute: T;
}

export interface FinishTimeDto {
    finishHour: number | null;
    finishMinute: number | null;
}

export interface ShiftOfDayDto extends StartTimeDto<number | null>, FinishTimeDto {
    isHoliday: boolean;
}

export interface DefaultShiftDto extends StartTimeDto<number> { }

export interface ShiftDto {
    shift: ShiftOfDayDto[];
    default: DefaultShiftDto;
}

export type vAlign = 'start' | 'center' | 'end';