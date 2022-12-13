import clsx from 'clsx';
import React, { useCallback, useMemo, useState } from 'react';

import { range } from '../utils';

import { Styled } from './styles';

enum Direction {
    Prev = -1,
    Next = 1
}

const MONTH_RANGE = { MIN: 0, MAX: 11 };

const useDates = (year: number, month: number) =>
    useMemo(() => {
        const prevLast = new Date(year, month, 0);
        const prevLastDate = prevLast.getDate();
        const prevLastDay = prevLast.getDay();

        const thisLast = new Date(year, month + 1, 0);
        const thisLastDate = thisLast.getDate();
        const thisLastDay = thisLast.getDay();

        const prevDates = prevLastDay === 6 ? [] : range(prevLastDate - prevLastDay, prevLastDate);
        const thisDates = range(1, thisLastDate);
        const nextDates = range(1, 6 - thisLastDay);
        return {
            prevDates,
            thisDates,
            nextDates
        };
    }, [year, month]);

interface Calendar {
    value: Date;
    onChange: (value: Date) => void;
}

export const Calendar: React.VFC<Calendar> = ({ value, onChange }: Calendar) => {
    const today = useMemo(() => new Date(), []);
    const [year, setYear] = useState(value.getFullYear());
    const [month, setMonth] = useState(value.getMonth());
    const { prevDates, thisDates, nextDates } = useDates(year, month);

    const isToday = useCallback(
        (date: number): boolean => year === today.getFullYear() && month === today.getMonth() && date === today.getDate(),
        [today, year, month]
    );

    const isSelected = useCallback(
        (date: number): boolean => year === value.getFullYear() && month === value.getMonth() && date === value.getDate(),
        [value, year, month]
    );

    const changeYear = useCallback(
        (direction: Direction) => {
            setYear(year + direction);
        },
        [year]
    );
    const changeDate = useCallback(
        (direction: Direction) => {
            let updateMonth = month + direction;
            if (updateMonth < MONTH_RANGE.MIN) {
                updateMonth = MONTH_RANGE.MAX;
                setYear(year - 1);
            }
            if (updateMonth > MONTH_RANGE.MAX) {
                updateMonth = MONTH_RANGE.MIN;
                setYear(year + 1);
            }
            setMonth(updateMonth);
        },
        [year, month]
    );

    const onClickDate = useCallback(
        (date: number) => {
            onChange(new Date(year, month, date));
        },
        [onChange, year, month]
    );

    return (
        <section>
            <input type="text" value={`${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`} readOnly />
            <Styled.Calendar>
                <dl>
                    <dt>
                        <Styled.ChangeDateButton onClick={() => changeYear(Direction.Prev)}>&lt;</Styled.ChangeDateButton>
                        {year} 년<Styled.ChangeDateButton onClick={() => changeYear(Direction.Next)}>&gt;</Styled.ChangeDateButton>
                    </dt>
                    <dd>
                        <Styled.ChangeDateButton onClick={() => changeDate(Direction.Prev)}>&lt;</Styled.ChangeDateButton>
                        {month + 1} 월<Styled.ChangeDateButton onClick={() => changeDate(Direction.Next)}>&gt;</Styled.ChangeDateButton>
                    </dd>
                </dl>
                <ul className="calendar">
                    <li className="weekday">일</li>
                    <li className="weekday">월</li>
                    <li className="weekday">화</li>
                    <li className="weekday">수</li>
                    <li className="weekday">목</li>
                    <li className="weekday">금</li>
                    <li className="weekday">토</li>
                    {prevDates.map((date, index) => (
                        <li key={index} className={'prev-dates'}>
                            {date}
                        </li>
                    ))}
                    {thisDates.map((date, index) => (
                        <li key={index} className={clsx({ today: isToday(date), selected: isSelected(date) })} onClick={() => onClickDate(date)}>
                            {date}
                        </li>
                    ))}
                    {nextDates.map((date, index) => (
                        <li key={index} className={'next-dates'}>
                            {date}
                        </li>
                    ))}
                </ul>
            </Styled.Calendar>
        </section>
    );
};
