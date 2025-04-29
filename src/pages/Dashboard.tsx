
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Settings, Bell, LogOut, Home, FileText, Users, BarChart } from "lucide-react";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const sidebarItems = [
    { icon: Home, label: "Home", active: true },
    { icon: FileText, label: "Documents" },
    { icon: Users, label: "Team" },
    { icon: BarChart, label: "Analytics" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-white border-r">
        <div className="flex items-center justify-center h-16 border-b">
          <h1 className="text-xl font-bold">FlowApp</h1>
        </div>
        <nav className="flex-grow py-4">
          <ul>
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors ${
                    item.active ? "bg-gray-100 border-l-4 border-blue-600" : ""
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1">
        {/* Header */}
        <header className="flex items-center justify-between bg-white p-4 border-b shadow-sm">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                {user?.name?.charAt(0).toUpperCase() || <User className="w-4 h-4" />}
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="p-6">
          <h2 className="text-2xl font-bold mb-6">Welcome, {user?.name || "User"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,259</div>
                <p className="text-xs text-green-500">+16% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23</div>
                <p className="text-xs text-green-500">+2 new this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">145</div>
                <p className="text-xs text-red-500">-5% from yesterday</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your team's activity in the past 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-start space-x-4 border-b pb-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <User className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Task updated by Team Member</p>
                        <p className="text-sm text-gray-500">{i} hour{i !== 1 ? 's' : ''} ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Your Profile</CardTitle>
                <CardDescription>Manage your account information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="w-10 h-10 text-blue-500" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold">{user?.name || "User"}</h3>
                    <p className="text-gray-500">{user?.email || "user@example.com"}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700">Edit Profile</Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
