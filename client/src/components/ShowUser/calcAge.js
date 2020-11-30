function yearsDiff(d1, d2) {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    let yearsDiff =  date2.getFullYear() - date1.getFullYear();
    return yearsDiff;
}

function monthsDiff(d1, d2) {
  let date1 = new Date(d1);
  let date2 = new Date(d2);
  let years = yearsDiff(d1, d2);
  let months =(years * 12) + (date2.getMonth() - date1.getMonth()) ;
  return months;
}

function Age(d1){
    const d2 = new Date().toDateString().slice(4)
    const month = monthsDiff(d1,d2)
    const age = Math.floor(month/12)
    return age
}

export default Age