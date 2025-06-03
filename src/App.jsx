import { useState } from 'react';
import UserGrowthChart from './components/UserGrowthChart';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const users = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'David Brown', email: 'david@example.com', role: 'Editor', status: 'Inactive' },
    { id: 3, name: 'Adaora Obi', email: 'adaora@example.com', role: 'Viewer', status: 'Active' },
    { id: 4, name: 'Emeka Okafor', email: 'emeka@example.com', role: 'Admin', status: 'Active' },
    { id: 5, name: 'Liam Smith', email: 'liam@example.com', role: 'Editor', status: 'Inactive' },
    { id: 6, name: 'Chioma Nwosu', email: 'chioma@example.com', role: 'Viewer', status: 'Active' },
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={darkMode ? 'bg-dark text-light d-flex' : 'bg-white text-dark d-flex'}>
      {/* Sidebar */}
      <div
        className={`p-3 ${darkMode ? 'bg-secondary text-light' : 'bg-dark text-white'}`}
        style={{ width: '260px', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
        <h4 className="mb-4 fw-bold">📋 Dashboard Menu</h4>
        <ul className="nav flex-column gap-2">
          <li className="nav-item"><a href="#" className="nav-link text-white">🏠 Dashboard</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-white">👥 Users</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-white">📊 Analytics</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-white">⚙ Settings</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 d-flex flex-column" style={{ marginLeft: '260px', width: 'calc(100% - 260px)' }}>
        {/* Navbar */}
        <nav className={`navbar px-4 shadow-sm ${darkMode ? 'bg-secondary navbar-dark' : 'bg-light navbar-light'}`}
             style={{ position: 'fixed', top: 0, left: '260px', right: 0, zIndex: 1000, height: '60px' }}>
          <h4 className="navbar-brand mb-0 fw-bold">📊 User Dashboard</h4>
          <div className="d-flex align-items-center gap-3">
            <button
              className={`btn btn-sm ${darkMode ? 'btn-light' : 'btn-dark'}`}
              onClick={() => setDarkMode(prev => !prev)}
            >
              {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
            </button>
            <span className="fw-bold">Christian 👤</span>
            <div className="dropdown me-3">
  <button className="btn btn-light position-relative" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    🔔
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      3
      <span className="visually-hidden">unread messages</span>
    </span>
  </button>
  <ul className="dropdown-menu dropdown-menu-end shadow">
    <li><h6 className="dropdown-header">Notifications</h6></li>
    <li><a className="dropdown-item" href="#">New user signed up</a></li>
    <li><a className="dropdown-item" href="#">Monthly report is ready</a></li>
    <li><a className="dropdown-item" href="#">Server restarted</a></li>
  </ul>
</div>
            <button className="btn btn-outline-danger btn-sm">Logout</button>
          </div>
        </nav>

        {/* Dashboard Content */}
        <div className="p-4 pt-5 mt-4">
  <div className={`mb-4 p-4 rounded shadow-sm ${darkMode ? 'bg-secondary text-light' : 'bg-light'}`}>
    <h2 className="fw-bold mb-1">Welcome, Christian 👋</h2>
    <p className="text-muted">Here's what's happening today.</p>
  </div>


          {/* Summary Cards */}
          <div className="row mt-4">
            {[
              { title: '👥 Users', value: '1,245' },
              { title: '💰 Revenue', value: '$12,380' },
              { title: '📈 Sessions', value: '7,890' },
              { title: '📥 New Signups Today', value: '129' },
              { title: '🎯 Conversion Rate', value: '8.5%' },
            ].map((item, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className={`card shadow-sm h-100 ${darkMode ? 'bg-dark text-light' : ''}`}>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h6 className="card-title text-muted small fw-semibold">{item.title}</h6>
                    <p className="card-text fs-4 fw-bold">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Users Table */}
          <div className="mt-5">
            <h5 className="fw-semibold">📋 Users Table</h5>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Search by name, email, or role"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="table-responsive">
              <table className={`table table-bordered table-hover ${darkMode ? 'table-dark' : 'table-striped'}`}>
                <thead className={darkMode ? 'table-secondary' : 'table-dark'}>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user, index) => (
                      <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                          <span className={`badge bg-${user.status === 'Active' ? 'success' : 'secondary'}`}>
                            {user.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center">No users found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Chart */}
          <div className="mt-5">
            <h5 className="fw-semibold">📈 User Growth Overview</h5>
            <div className={`p-3 rounded shadow-sm ${darkMode ? 'bg-dark text-light' : 'bg-white'}`}>
              <UserGrowthChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
