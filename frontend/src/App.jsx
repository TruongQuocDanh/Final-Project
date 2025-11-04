import { Layout } from 'antd';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Layout style={{ minHeight: '100vh', background: '#eaf2ff' }}>
      <Dashboard />
    </Layout>
  );
}
