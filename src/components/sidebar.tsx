import React from "react";
import { FaCog, FaBell, FaHome, FaUser, FaComment, FaCalendarAlt, FaChartLine, FaFolderOpen, FaClipboard } from 'react-icons/fa';

interface RightSidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`fixed top-0 right-0 w-80 bg-white border-l border-gray-200 h-full transition-transform duration-300 ${isOpen ? '' : 'transform translate-x-full'}`}>
            <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                    <h5 className="mb-0">Dashboard</h5>
                    <div className="flex gap-2">
                        <button className="btn btn-sm btn-light">
                            <FaCog />
                        </button>
                        <button className="btn btn-sm btn-light">
                            <FaBell />
                        </button>
                    </div>
                </div>
            </div>

            {/* User Profile */}
            <div className="p-4 border-b border-gray-200">
                <div className="flex items-center">
                    <img src="https://via.placeholder.com/40" alt="User" className="rounded-full me-2" />
                    <div>
                        <h6 className="mb-0">John Doe</h6>
                        <small className="text-muted flex items-center">
                            <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></span>
                            Online
                        </small>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col mt-2">
                <a href="#" className="flex items-center p-3 hover:bg-gray-100 text-gray-700">
                    <FaHome className="me-2" size={20} />
                    Dashboard
                </a>
                <a href="#" className="flex items-center p-3 hover:bg-gray-100 text-gray-700">
                    <FaUser className="me-2" size={20} />
                    Profile
                </a>
                <a href="#" className="flex items-center p-3 hover:bg-gray-100 text-gray-700">
                    <div className="flex items-center">
                        <FaComment className="me-2" size={20} />
                        Messages
                    </div>
                    <span className="bg-red-500 text-white text-xs py-1 px-2 rounded-full">3</span>
                </a>
                <a href="#" className="flex items-center p-3 hover:bg-gray-100 text-gray-700">
                    <FaCalendarAlt className="me-2" size={20} />
                    Calendar
                </a>
                <a href="#" className="flex items-center p-3 hover:bg-gray-100 text-gray-700">
                    <FaChartLine className="me-2" size={20} />
                    Analytics
                </a>
                <a href="#" className="flex items-center p-3 hover:bg-gray-100 text-gray-700">
                    <FaFolderOpen className="me-2" size={20} />
                    Projects
                </a>
            </nav>

            {/* Recent Activity */}
            <div className="p-4 mt-3">
                <h6 className="text-muted mb-3">Recent Activity</h6>
                <div className="flex items-center mb-3">
                    <div className="bg-gray-100 rounded p-2 me-2">
                        <FaClipboard />
                    </div>
                    <div>
                        <small className="d-block">Updated Project Files</small>
                        <small className="text-muted">2 hours ago</small>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="bg-gray-100 rounded p-2 me-2">
                        <FaUser />
                    </div>
                    <div>
                        <small className="d-block">Team Meeting</small>
                        <small className="text-muted">4 hours ago</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;
