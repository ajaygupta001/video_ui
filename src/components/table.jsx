import { PencilIcon } from "@heroicons/react/24/solid";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import { FaEdit, FaTrash } from "react-icons/fa";



const rows = [
  {
    imgSrc: "https://randomuser.me/api/portraits/men/30.jpg",
    name: "John Doe",
    date: "05/06/2020",
    time: "10:00",
  },
  {
    imgSrc: "https://randomuser.me/api/portraits/men/76.jpg",
    name: "John Frillo",
    date: "05/06/2020",
    time: "12:15",
  },
  {
    imgSrc: "https://randomuser.me/api/portraits/men/38.jpg",
    name: "Brett Castillo",
    date: "05/06/2020",
    time: "08:35",
  },
];




const TableRow = ({ user, handleUpdate, handleDelete }) => (
  <tr className="bg-white border-b-2 border-gray-200">
    <td className="px-16 py-2 flex flex-row items-center">
      <img className="h-8 w-8 rounded-full object-cover" src={user.avatar} alt="avatar" />
    </td>
    <td className="px-16 py-2">
      <span className="text-center ml-2 font-semibold">{user.fileName}</span>
    </td>
    <td className="px-16 py-2">
      <span>{user.metadata}</span>
    </td>
    <td className="px-16 py-2">
      <span>{user.time}</span>
    </td>
    <td className="px-16 py-2">
      <div className="text-yellow-500 flex">
        <button className="btn d-flex justify-content-center align-items-center mx-2" onClick={() => handleUpdate(user.id)}>
          <FaEdit />
        </button>
        <button className="btn d-flex justify-content-center align-items-center mx-2" onClick={() => handleDelete(user.id)}>
          <FaTrash />
        </button>
      </div>
    </td>
  </tr>
);




export function TransactionsTable() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (event) => {
    event.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
    
  };


  
  return (
    <div>
      <Card className="h-full w-full">
        <div className="flex justify-center items-center p-4 bg-white-100">
          <div className="flex items-center justify-center w-100">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="bg-blue-400 p-4 w-30 h-8 flex items-center justify-between font-bold text-lg rounded-l-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
              >
                Dropdown
                {isDropdownOpen ? (
                  <AiOutlineCaretUp className="ml-2 h-5 w-5" />
                ) : (
                  <AiOutlineCaretDown className="ml-2 h-5 w-5" />
                )}
              </button>
              {isDropdownOpen && (
                <div className="bg-blue-400 absolute top-12 flex flex-col items-start rounded-lg p-2 w-100 z-50">
                  {rows.map((item, i) => (
                    <div key={i} className="w-100">
                      <h3 className="px-2 py-1 hover:bg-blue-500 rounded">
                        {item.name}
                      </h3>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex h-18 p-2 bg-gray-200  justify-center  rounded-r-lg overflow-hidden">
              <input
                className="border-none bg-transparent text-gray-900 outline-none focus:outline-none  p-2"
                type="search"
                name="search"
                id="search"
                placeholder="Search"
              />
              <button className="px-4 bg-blue-800 text-white">Search</button>
            </div>
          </div>
          <div>
            <input type="file" id="upload" className="hidden" />
            <label
              htmlFor="upload"
              className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Upload
            </label>
          </div>
        </div>

        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none min-h-20 w-full  z-10"
        >
          <CardBody className=" px-0">
          <table className=" w-full table-auto">
          <thead className="justify-between">
            <tr className="bg-[#141e55]">
              <th className="px-16 py-2">
                <span className="text-gray-100 font-semibold">Id</span>
              </th>
              <th className="px-16 py-2">
                <span className="text-gray-100 font-semibold">FileName</span>
              </th>

              <th className="px-16 py-2">
                <span className="text-gray-100 font-semibold">Metadata</span>
              </th>

              <th className="px-16 py-2">
                <span className="text-gray-100 font-semibold">Time</span>
              </th>

              <th className="px-16 py-2">
                <span className="text-gray-100 font-semibold">Action</span>
              </th>
            </tr>
            
          </thead>
          <tbody className="bg-gray-200">
            <tr className="bg-white border-b-2 border-gray-200">
              <td className="px-16 py-2 flex flex-row items-center">
                <img
                  className="h-8 w-8 rounded-full object-cover "
                  src="https://randomuser.me/api/portraits/men/30.jpg"
                  alt=""
                />
              </td>
              <td>
                <span className="text-center ml-2 font-semibold">John Doe</span>
              </td>

              <td className="px-16 py-2">
                <span>05/06/2020</span>
              </td>
              <td className="px-16 py-2">
                <span>10:00</span>
              </td>

              <td className="px-16 py-2">
                <span className="text-yellow-500 flex">
                  
                <button
                      className="btn d-flex justify-content-center align-items-center"
                      onClick={(e) => handelUpdate(user._id)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="btn d-flex justify-content-center align-items-center"
                      onClick={(e) => handelDelete(user._id)}
                    >
                      <FaTrash />
                    </button>
                </span>
              </td>
            </tr>
          </tbody>
          <tbody className="bg-gray-200">
            <tr className="bg-white border-b-2 border-gray-200">
              <td className="px-16 py-2 flex flex-row items-center">
                <img
                  className="h-8 w-8 rounded-full object-cover "
                  src="https://randomuser.me/api/portraits/men/30.jpg"
                  alt=""
                />
              </td>
              <td>
                <span className="text-center ml-2 font-semibold">John Doe</span>
              </td>

              <td className="px-16 py-2">
                <span>05/06/2020</span>
              </td>
              <td className="px-16 py-2">
                <span>10:00</span>
              </td>

              <td className="px-16 py-2">
                <span className="text-yellow-500 flex">
                  
                <button
                      className="btn d-flex justify-content-center align-items-center"
                      onClick={(e) => handelUpdate(user._id)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="btn d-flex justify-content-center align-items-center"
                      onClick={(e) => handelDelete(user._id)}
                    >
                      <FaTrash />
                    </button>
                </span>
              </td>
            </tr>
          </tbody>
          <tbody className="bg-gray-200">
            <tr className="bg-white border-b-2 border-gray-200">
              <td className="px-16 py-2 flex flex-row items-center">
                <img
                  className="h-8 w-8 rounded-full object-cover "
                  src="https://randomuser.me/api/portraits/men/30.jpg"
                  alt=""
                />
              </td>
              <td>
                <span className="text-center ml-2 font-semibold">John Doe</span>
              </td>

              <td className="px-16 py-2">
                <span>05/06/2020</span>
              </td>
              <td className="px-16 py-2">
                <span>10:00</span>
              </td>

              <td className="px-16 py-2">
                <span className="text-yellow-500 flex">
                  
                <button
                      className="btn d-flex justify-content-center align-items-center"
                      onClick={(e) => handelUpdate(user._id)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="btn d-flex justify-content-center align-items-center"
                      onClick={(e) => handelDelete(user._id)}
                    >
                      <FaTrash />
                    </button>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
          </CardBody> 
        </CardHeader>
      </Card>
    </div>
  );
}
