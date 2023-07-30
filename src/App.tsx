/* eslint-disable react/react-in-jsx-scope */
import {useMemo} from 'react';
import { CssBaseline,ThemeProvider } from '@mui/material';
import {createTheme} from "@mui/material/styles"
import './App.css';
import { themeSettings } from './theme';
import { useSelector } from 'react-redux';
import RootInterface from './models/rootModel';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import DashboardMain from "./pages/Dashboard"
function App() {
  const mode = useSelector((state:RootInterface)=>state.global.mode)
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode])
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Navigate to="/dashboard" replace/> }/>
              <Route path="/dashboard" element={<DashboardMain/> }/>
            </Route>
            
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
