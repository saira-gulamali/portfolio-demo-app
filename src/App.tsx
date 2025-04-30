// import { Link } from "react-router-dom";
// import "./App.css";
// import reactLogo from "./assets/react.svg";
// import Card from "./components/Card";

// const demoItems = [
//   {
//     title: "Demo 1",
//     description: "Description 1",
//     imageUrl: reactLogo,
//     link: "/navDemo",
//   },
//   {
//     title: "Demo 2",
//     description: "Description 2",
//     imageUrl: reactLogo,
//     link: "/about",
//   },
//   {
//     title: "Demo 3",
//     description: "Description 3",
//     imageUrl: reactLogo,
//     link: "/navDemo",
//   },
//   {
//     title: "Demo 4",
//     description: "Description 4",
//     imageUrl: reactLogo,
//     link: "/about",
//   },
// ];

// function App() {
//   return (
//     <>
//       <h1 className="text-3xl text-blue-500">My React App</h1>
//       <main className="flex flex-col items-center justify-center h-screen">
//         <h2 className="text-2xl text-blue-400">Welcome to my app!</h2>
//         <p className="text-lg text-blue-300">This is a simple React app.</p>
//         <p className="text-lg text-blue-300">
//           It uses Tailwind CSS for styling.
//         </p>
//         <div className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
//           {demoItems.map((item, index) => (
//             <Card key={index}>
//               <img src={item.imageUrl} alt={item.description} />
//               <h3>{item.title}</h3>
//               <Link
//                 to={item.link}
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//               >
//                 Go to {item.title}
//               </Link>
//               <p>{item.description}</p>
//             </Card>
//           ))}
//         </div>
//       </main>
//     </>
//   );
// }

// export default App;

import "./App.css";
import Card from "./components/Card";
import { demoItems } from "./data/demoItems";

function App() {
  return (
    <>
      <h1 className="text-3xl text-blue-500 text-center mt-4">My React App</h1>
      <main className="flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl text-blue-400 mb-2">Welcome to my app!</h2>
        <p className="text-lg text-blue-300">Explore React features.</p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-6 w-full max-w-6xl">
          {demoItems.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
