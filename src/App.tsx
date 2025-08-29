import { useEffect } from 'react';
import usePintreeStore from './store/usePintreeStore';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';
import './App.css';

function App() {
  const loadInitialData = usePintreeStore((state) => state.loadInitialData);

  useEffect(() => {
    loadInitialData();
  }, []);

  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
