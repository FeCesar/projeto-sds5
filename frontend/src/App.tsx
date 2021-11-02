import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";

const App = () => {
  return (
    <>
      <NavBar></NavBar>

      <div className="container">
        <DataTable></DataTable>
      </div>
      
      <Footer></Footer>
    </>
  );
}

export default App;
