import React, { useMemo, useState } from 'react';

import { range } from '../utils';

export const Calendar: React.VFC = () => {
    const [date] = useState(new Date());
    date.setMonth(date.getMonth() - 1);

    const dates = useMemo(() => {
        const prevLast = new Date(date.getFullYear(), date.getMonth(), 0);
        const prevLastDate = prevLast.getDate();
        const prevLastDay = prevLast.getDay();

        const thisLast = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        const thisLastDate = thisLast.getDate();
        const thisLastDay = thisLast.getDay();

        const prevDates = prevLastDay === 6 ? [] : range(prevLastDate - prevLastDay, prevLastDate);
        const thisDates = range(1, thisLastDate);
        const nextDates = range(1, 7 - (thisLastDay + 1));

        return [...prevDates, ...thisDates, ...nextDates];
    }, [date]);

    return (
        <article>
            <p>
                {date.getFullYear()} 년 {date.getMonth() + 1} 월
            </p>
            {dates.map((date, index) => (
                <p key={index}>{date}</p>
            ))}
        </article>
    );
};
