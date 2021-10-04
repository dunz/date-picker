import classNames from 'classnames';
import React, { useCallback, useState } from 'react';

import { range } from '../utils';

import { Styled } from './styles';

const getDates = (date = new Date()) => {
    const prevLast = new Date(date.getFullYear(), date.getMonth(), 0);
    const prevLastDate = prevLast.getDate();
    const prevLastDay = prevLast.getDay();

    const thisLast = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const thisLastDate = thisLast.getDate();
    const thisLastDay = thisLast.getDay();

    const prevDates = prevLastDay === 6 ? [] : range(prevLastDate - prevLastDay, prevLastDate);
    const thisDates = range(1, thisLastDate);
    const nextDates = range(1, 7 - (thisLastDay + 1));

    return {
        prevDates,
        thisDates,
        nextDates
    };
};

export const Calendar: React.VFC = () => {
    const [date] = useState(new Date(2021, 9, 20));
    const { prevDates, thisDates, nextDates } = getDates(date);
    const isToday = useCallback(
        (d: number): boolean => {
            return d === date.getDate();
        },
        [date]
    );

    return (
        <Styled.Calendar>
            <h1>
                {date.getFullYear()} 년 {date.getMonth() + 1} 월
            </h1>
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
                    <li key={index} className={classNames({ today: isToday(date) })}>
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
    );
};
