import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { CardHeader, CardBody } from './YourCardComponents'; // Adjust this import according to your project structure

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
