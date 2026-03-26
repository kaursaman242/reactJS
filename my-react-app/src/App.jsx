import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard';
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCard from "./components/StatCard";
import RightPanel from "./components/RightPanel";

// const App = () => {
//   const [val, setVal] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/todos")
//       .then((response) => {
//         setVal(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>First 5 Todos</h1>

//       {val
//         .filter((item, index) => index < 5)
//         .map((item) => (
//           <p key={item.id}>
//             {item.id} - {item.title}
//           </p>
//         ))
//       }


//     </div>
//   );
// };

// export default App;






// const App = () => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);

//   const [search, setSearch] = useState("");
//   const [status, setStatus] = useState("all");


//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => {
//         setData(res.data);
//         setFilteredData(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);


//   useEffect(() => {
//     let result = data;


//     if (search) {
//       result = result.filter((item) =>
//         item.title.toLowerCase().includes(search.toLowerCase())
//       );
//     }


//     if (status === "completed") {
//       result = result.filter((item) => item.completed === true);
//     } else if (status === "notCompleted") {
//       result = result.filter((item) => item.completed === false);
//     }

//     setFilteredData(result);
//   }, [search, status, data]);


//   const handleReset = () => {
//     setSearch("");
//     setStatus("all");
//     setFilteredData(data);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Advanced Filter in React</h2>

//       {}
//       <input
//         type="text"
//         placeholder="Search by title..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ marginRight: "10px", padding: "5px" }}
//       />

//       {}
//       <select
//         value={status}
//         onChange={(e) => setStatus(e.target.value)}
//         style={{ marginRight: "10px", padding: "5px" }}
//       >
//         <option value="all">All</option>
//         <option value="completed">Completed</option>
//         <option value="notCompleted">Not Completed</option>
//       </select>

//       {}
//       <button onClick={handleReset}>Reset</button>

//       <hr />

//       {}
//       {filteredData.map((item) => (
//         <div key={item.id}>
//           <p>
//             <strong>{item.id}</strong> - {item.title} (
//             {item.completed ? "COMPLETED" : "NOT COMPLETED"})
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;



// function App() {
//   const [search, setSearch] = useState("");
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     if (!search) {
//       setProducts([])
//       return
//     } 
    
  
//       const searchProduct = async () => {
//         try {
//           const res = await axios.get(
//             `https://dummyjson.com/products/search?q=${search}`
//           );
//           setProducts(res.data.products);
//         } catch (error) {
//           console.log(error);
//         }
//       };
//       searchProduct()
//     }, [search]);





// return (
//   <div>
//     <h2>Product Search</h2>

//     <input
//       type="text"
//       placeholder="Search..."
//       value={search}
//       onChange={(e) => setSearch(e.target.value)}
//     />



//     {products.map((item) => (
//       <div key={item.id}>
//         <p>{item.title}</p>
//         <p>₹ {item.price}</p>
//       </div>
//     ))}
//   </div>
// );
// }

// export default App;





// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [skip, setSkip] = useState(0)
//   const limit = 5; 

//   useEffect(() => {
//     const fetchData = async () => {
//       try {

//         const res = await axios.get(
//           `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
//         );

//         setProducts((prev)=> [...prev, ...res.data.products]);;
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, [skip]);

//   return (
//     <div className='border justify-items-center justify-content-center'>
//       <h2 className='text-3xl p-5 m-5 bg-black text-white '>Product List</h2>

//       {products.map((item) => (
//         <div key={item.id}>
//           <p>{item.title}</p>
//         </div>
//       ))}

      
//       <button  onClick={() => setSkip(skip+limit)}>
//         Load more

//       </button>
//     </div>
//   );
// };

// export default App;






// const App = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     alert("Form Submitted!");
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-xl shadow-lg w-80"
//       >
//         <h2 className="text-2xl font-bold mb-4 text-center">
//           Controlled Form
//         </h2>

//         {/* Name */}
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full p-2 mb-3 border rounded-lg"
//         />

//         {/* Email */}
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full p-2 mb-3 border rounded-lg"
//         />

//         {/* Password with toggle */}
//         <div className="relative mb-4">
//           <input
//             type={showPassword ? "text" : "password"} 
//             name="password"
//             placeholder="Enter Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg pr-16"
//           />

//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-2 top-2 text-sm text-blue-500"
//           >
//             {showPassword ? "Hide" : "Show"}
//           </button>
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
//      return(
//       <>
//       <Dashboard/>
//       </>
//      )

// };

// export default App;



function App() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">

        <Topbar />

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6">
          <StatCard
            title="Total Applications"
            value="5672"
            percent="+74%"
            color="purple"
          />
          <StatCard
            title="Shortlisted"
            value="3045"
            percent="+60%"
            color="yellow"
          />
          <StatCard
            title="Rejected"
            value="1055"
            percent="+46%"
            color="red"
          />
        </div>

        {/* Charts Placeholder */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="bg-white h-64 rounded-xl shadow-md flex items-center justify-center">
            Chart Here 📊
          </div>

          <div className="bg-white h-64 rounded-xl shadow-md flex items-center justify-center">
            Acquisitions 📈
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="p-6">
        <RightPanel />
      </div>

    </div>
  );
}

export default App;
