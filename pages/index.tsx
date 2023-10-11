import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from "@/components/Table";

interface Product {
  id: number;
  name: string;
  price: number;
}

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [arrTable, setArrTable] = useState<Product[]>([]);

  const handleGetDataBySearch = async () => {
    try {
      axios
        // .post(`https://dummyjson.com/products/search?q=${search}`)
        .get(`https://dummyjson.com/products?limit=${page}`)
        .then((res) => {
          const newData = res?.data?.data;
          setArrTable(newData?.products);
          setPage(newData?.limit);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetDataBySearch();
  }, []);
  return (
    <>
      <Sidebar>
        <div className="w-full">
          <SearchBar setSearch={setSearch} search={search} />
          <Table />
        </div>
      </Sidebar>
    </>
  );
};
export default Home;
