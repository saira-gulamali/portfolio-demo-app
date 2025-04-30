// const Card = ({ children }: { children?: ReactNode }) => {
//   return (
//     <div className="border-2 border-blue-600 m-4 p-4 rounded-lg shadow-lg bg-white flex flex-col items-center justify-center w-64 h-64">
//       hello card
//       {children}
//     </div>
//   );
// };

import { DemoItem } from "../utils/types";

const Card = ({ title, description, imageUrl, link, project }: DemoItem) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      <h2 className="text-sm text-gray-500 mb-2">{project}</h2>

      <img src={imageUrl} alt={description} className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <a
        href={link}
        className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Visit Demo
      </a>
    </div>
  );
};

export default Card;
