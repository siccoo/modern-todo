import './index.scss'

const Calendar = () => {
    const now = new Date();
    const today = {
        month: now.toLocaleString("en-US", { month: 'short' }),
        date: now.getDate(),
    }

    return (
        <div className='calendar'>
            <div>

            </div>
        </div>
    )
}

export default Calendar