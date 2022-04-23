import ExpenseDate from "./components/ExpenseDate";

function App() {
    const data = [
        {
            title: "Car Insurance",
            price: 200,
            date: new Date(2022, 1, 4).toString(),
        },
        {
            title: "Book",
            price: 300,
            date: new Date(2022, 7, 26).toString(),
        },
        {
            title: "Internet",
            price: 500,
            date: new Date(2021, 0, 3).toString(),
        },
    ];
    const date =
        {
            month: 'March',
            year: 2020,
            day: 22
        }
    return data.map((item) => (
        <div>
            <ExpenseDate month={date.month} year={date.year} day={date.day}  title={item.title} price={item.price} />
        </div>
    ))
}

export default App;