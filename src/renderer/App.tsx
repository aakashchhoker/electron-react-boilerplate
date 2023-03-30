import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
// import './App.css';
import Dashboard from './Component/Dashboard';
import AppRoutes from './routes/routes';
const { contextBridge, ipcRenderer } = require('electron');

// contextBridge.exposeInMainWorld('electronAPI', {
//     setTitle: (title) => ipcRenderer.send('set-title', title)
// })

// const { globalCollection } = require('../main');

// Now you can use globalCollection here
// globalCollection.find({}).toArray(function(err, data) {
//   if (err) {
//     console.log('Error:', err);
//   }
//   console.log('Data:=================', data);
// });

const getUsers = () => {
  ipcRenderer.send('getUsers', {});
};

getUsers();
ipcRenderer.on('usersFound', function (evt, data) {
  console.log(data, 'usersFound');
});

export default function App() {
  return (
    <Dashboard>
      <AppRoutes />
    </Dashboard>
  );
}
