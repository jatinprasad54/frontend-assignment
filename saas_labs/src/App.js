import { useEffect, useState, useCallback } from "react";
import "./App.css";
import Pagination from "./components/Pagination";
import { fetchProjects } from "./util/api";

const pageSize = 5;
function App() {
  const [currentPage, SetCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  
  const fetchData = useCallback(async () => {
      try {
        const data = await fetchProjects();
        setData(data);
        const newData = data.slice(0,pageSize);
        setFilteredData(newData);
      } catch (error) {
        console.error(error);
    };
  },[]) 
  
  const handlePageChange = (page) => {
    SetCurrentPage(page);
    const newData = data.slice((page-1) * pageSize, page * pageSize);
    setFilteredData(newData);
  }

  useEffect(() => {
   fetchData();
  },[fetchData]);

  return (
    <div className="app">
      <h1>SAAS LABS ASSIGNMENT</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th className="width-60">S.No.</th>
              <th className="width-200">Percentage funded</th>
              <th className="width-200">Amount pledged</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 && filteredData.map((item) => {
              return (
                <tr key={item["s.no"]}>
                  <td>{item["s.no"]}</td>
                  <td>{item["amt.pledged"]}</td>
                  <td>{item["percentage.funded"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={pageSize}
        onPageChange={(page) => handlePageChange(page)}
      />
    </div>
  );
}

export default App;
