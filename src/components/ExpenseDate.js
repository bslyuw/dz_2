import './ExpenseDate.css'

const ExpenseDate = (props) => {
    return(
        <div className="expense-inner">
            <div className="expense-block">
                <div className="expense-date">
                    <div className="expense-date__month">{props.month}</div>
                    <div className="expense-date__year">{props.year}</div>
                    <div className="expense-date__day">{props.day}</div>
                </div>
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__description">
                <div className="expense-item__price">${props.price}</div>
            </div>
        </div>
    )
}

export default ExpenseDate