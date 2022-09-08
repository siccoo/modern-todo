import './index.scss'

const Calendar = () => {
    const now = new Date();
    const today = {
        month: now.toLocaleString("en-US", { month: 'short' }),
        date: now.getDate(),
    }

    return (
        <div className='calendar'>
            <div className='calendar__icon'>
                <div className='calendar__icon__month'>{today.month}</div>
                <div className='calendar__icon__date'>{today.date}</div>
            </div>
            <div className='calendar__label'>Today</div>
        </div>
    )
}

export default Calendar