

function ExpenseDate(props) {
    const month = props.date.toLocaleString("en-US", {month: "long"});
    const day = props.date.toLocaleString("en-US", {date: "2-digit"});
    // const year = props.date.getFullYear();
    console.log("month Sachin", month)
    return (
        <div>
            <div>{month}</div>
            <div>{day}</div>
            {/* <div>{year}</div> */}
        </div>
    )
}

export default ExpenseDate;