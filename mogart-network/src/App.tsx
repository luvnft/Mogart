import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import HomePage from './Pages/Home/home.tsx';
import AboutPage from './Pages/About/About.tsx';
import GroupsPage from './Pages/Groups/GroupsPage.tsx';
import LoginPage from './Pages/Login/LoginPage.tsx';
import ProfilePage from './Pages/Profile/Profile.tsx';
import RegisterPage from './Pages/Register/RegisterPage.tsx';
import BlogPage from './Pages/Blog/BlogPage.tsx';
import BlogDetail from './MogartBase/Details/BlogDetails/BlogDetail.tsx';
import PostDetail from './MogartBase/Details/PostDetail/PostDetail.tsx';
import TagsDetail from './MogartBase/Details/TagsDetails/TagsDetails.tsx';
import SettingsPage from './Pages/Settings/SettingsPage.tsx';
import MessagePage from './Pages/Message/MessagePage.tsx';
import NotificationsPage from './Pages/Notifications/NotificationsPage.tsx';
import ActivityPage from './Pages/Activity/ActivityPage.tsx';
import GlobalPage from './Pages/Global/GlobalPage.tsx';
import SearchPage from './Pages/Search/SearchPage.tsx';

import NotFoundPage from './Pages/ErrorPages/404/404.tsx';
import ServerErrorPage from './Pages/ErrorPages/500/500.tsx';
import ForbiddenPage from './Pages/ErrorPages/403/403.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Groups" element={<GroupsPage />} />
        <Route path="/Blogs" element={<BlogPage />} />
        <Route path="/Global" element={<GlobalPage />} />

        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Messages" element={<MessagePage />} />
        <Route path="/Notifications" element={<NotificationsPage />} />
        <Route path="/Activity" element={<ActivityPage />} />
        <Route path="/Settings" element={<SettingsPage />} />
        <Route path="/Search" element={<SearchPage />} />

        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />

        <Route path="/Blogs/:blogurl" element={<BlogDetail />} />
        <Route path="/Posts/:posturl" element={<PostDetail />} />
        <Route path="/Tags/:tagurl" element={<TagsDetail />} />

        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/403" element={<ForbiddenPage  />} />
        <Route path="/500" element={<ServerErrorPage/>} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
