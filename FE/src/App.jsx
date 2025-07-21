import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminGrievanceList from './pages/Admin/AdminGrievanceList';
import AdminGrievanceDetail from './pages/Admin/AdminGrievanceDetail';
import AdminUsers from './pages/Admin/AdminUsers';
import AdminReports from './pages/Admin/AdminReports';
import DepartmentGrievances from "./pages/Admin/DepartmentGrievances"; // adjust pat





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/grievances" element={<AdminGrievanceList />} />
        <Route path="/admin/grievance/:id" element={<AdminGrievanceDetail />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        <Route path="/admin/department/:deptName" element={<DepartmentGrievances />} />

      </Routes>
    </Router>
  );
}

export default App;
