import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./card";
import SearchFilter from "./searchFilter";

function App() {
  const [records, setRecords] = useState([]);
  const [filteredRecord, setfilteredRecord] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;

  useEffect(() => {
    const apiUrl = "https://api.enye.tech/v1/challenge/records";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setRecords(data.records.profiles);
        setfilteredRecord(data.records.profiles);
      });
  }, []);
  function handleSearchSubmit(e) {
    e.preventDefault();
    const newrec = records.filter(
      (record) =>{
     return   (record.FirstName.toUpperCase() === searchTerm.trim().toUpperCase() ||
        record.LastName.toUpperCase() === searchTerm.trim().toLowerCase())}
    );
    setfilteredRecord(newrec);
  }
  function handleSearchChange(e) {
    setSearchTerm(e.target.value);
  }
  function handleReset() {
    setfilteredRecord(records);
    
  }

  function handleGenderFilter(e) {
    const data = e.target.value;
    const newrec = records.filter(
      (record) => record.Gender.toUpperCase() === data.toUpperCase()
    );
    setfilteredRecord(newrec);
  }
  function handleTransactionFilter(e) {
    const data = e.target.value;
    const newrec = records.filter(
      (record) => record.PaymentMethod.toUpperCase() === data.toUpperCase()
    );
    setfilteredRecord(newrec);
  }
  function handlePaginationClick(e) {
    setCurrentPage(e.target.id);
  }
  //logic for displaying record
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const latestRecords = filteredRecord.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  //logic for page number
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredRecord.length / recordsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="App">
      <SearchFilter
        handleSearchChange={handleSearchChange}
        handleGenderFilter={handleGenderFilter}
        handleSearchSubmit={handleSearchSubmit}
        handleReset={handleReset}
        handleTransactionFilter={handleTransactionFilter}
      />
      <div className="container">
        {records.length < -1 ? (
          <h1>Loading</h1>
        ) : (
          latestRecords.map((record, id) => <Card key={id} record={record} />)
        )}
      </div>
      <ul className="pagination">
        { pageNumbers.map((pn) => (
              <li key={pn} id={pn} onClick={handlePaginationClick}>
                {pn}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default App;
