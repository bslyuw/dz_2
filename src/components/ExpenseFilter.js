import './ExpenseFilter.css';
const ExpenseFilter = () => {
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Select year</label>
                <select>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                </select>
            </div>
        </div>
    );
};
export default ExpenseFilter;