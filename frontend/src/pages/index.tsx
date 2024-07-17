import { useEffect, useRef } from "react";
import axios from "axios";
import { Crypto } from "../types/index";

const Dashboard: React.FC = () => {
  const filterRef = useRef<HTMLSelectElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fetchData = async (filter: string) => {
    try {
      const response = await axios.get<Crypto[]>(
        `http://localhost:8000/crypto/${filter}`
      );
      renderTable(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderTable = (data: Crypto[]) => {
    if (tableRef.current) {
      const tbody = tableRef.current.querySelector("tbody");
      if (tbody) {
        tbody.innerHTML = "";
        data.forEach((crypto, index) => {
          const row = document.createElement("tr");
          row.className = "text-center";
          row.innerHTML = `
            <td class="py-2 px-4 border-b">${index + 1}</td>
            <td class="py-2 px-4 border-b">${crypto.code}</td>
            <td class="py-2 px-4 border-b">${crypto.name}</td>
            <td class="py-2 px-4 border-b">${crypto.rate}</td>
            <td class="py-2 px-4 border-b">${crypto.volume}</td>
            <td class="py-2 px-4 border-b">${crypto.cap}</td>
            <td class="py-2 px-4 border-b">${crypto.allTimeHighUSD}</td>
          `;
          tbody.appendChild(row);
        });
      }
    }
  };

  const handleFilterChange = () => {
    const selectedFilter = filterRef.current?.value || "ETH";
    fetchData(selectedFilter);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      fetchData(selectedFilter);
    }, 5000);
  };

  useEffect(() => {
    handleFilterChange();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">CRYPTER DASHBOARD</h1>
      <div className="mb-4">
        <label htmlFor="filter" className="mr-2">
          Filter by crypto:
        </label>
        <select
          id="filter"
          ref={filterRef}
          className="p-2 border border-gray-300 rounded"
          onChange={handleFilterChange}
        >
          <option value="ETH">Ethereum</option>
          <option value="BTC">Bitcoin</option>
          <option value="USDT">Tether</option>
          <option value="BNB">BNB</option>
          <option value="SOL">Solana</option>
        </select>
      </div>
      <table
        ref={tableRef}
        className="min-w-full bg-white border border-gray-200"
      >
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Sr No</th>
            <th className="py-2 px-4 border-b">Code</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Rate</th>
            <th className="py-2 px-4 border-b">Volume</th>
            <th className="py-2 px-4 border-b">Cap</th>
            <th className="py-2 px-4 border-b">All Time High USD</th>
          </tr>
        </thead>
        <tbody>{}</tbody>
      </table>
    </div>
  );
};

export default Dashboard;
