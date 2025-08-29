import { useEffect } from 'react';
import usePintreeStore from './store/usePintreeStore';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';
import './App.css';

function App() {
  const loadInitialData = usePintreeStore((state) => state.loadInitialData);

  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
