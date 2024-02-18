const fetchData = () => {
    fetch("data.json")
    .then((response) => {
        return response.json();
    })
    .then((jsondata) => jsondata)
}
export {fetchData}
