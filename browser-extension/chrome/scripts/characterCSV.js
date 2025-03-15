// j
async function loadCSV(fileURL) {
    const response = await fetch(fileURL);
    const data = await response.text();
    return data;
}

// Load character information from a CSV file
function parseCSV(csvData) {
    const lines = csvData.split('\n');
    const header = lines[0].split(',');
    const rows = [];
  
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');
      const row = {};
      for (let j = 0; j < header.length; j++) {
        row[header[j]] = values[j];
      }
      rows.push(row);
    }
    return rows;
}