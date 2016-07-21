export function generateMonths() {
  return ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
}

export function generateYears() {
  let years = new Array();
  let currentYear = new Date().getFullYear();
  for (let i=0; i<5; i++) {
    let label = currentYear.toString().slice(-2);
    years.push(label);
    currentYear++;
  }
  return years;
}

export function generateCSV(data: any[][]) {
  let csvContent = "data:text/csv;charset=utf-8,";
  data.forEach((row, index) => {
    let dataString = row.join(",");
    csvContent += index < data.length-1 ? dataString + "\n" : dataString;
  });
  return csvContent;
}
