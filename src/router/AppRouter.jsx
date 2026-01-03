import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages & Components (Assuming these are structured under '../pages' and '../components')
import Layout from '../components/layout/Layout'; 
import BrowsePage from '../pages/BrowsePage';
import MovieDetailPage from '../pages/MovieDetailPage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';

/**
 * AppRouter component defines the routing structure for the Netflix application.
 * It uses react-router-dom to handle navigation.
 */
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Authentication/Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<LoginPage mode="signup" />} /> {/* Assuming login page handles signup too */}

        {/* Protected Routes - Wrapped in the Layout Component 
            The Layout component usually contains the Header/Navigation and possibly authentication logic.
        */}
        <Route element={<Layout />}>
          
          {/* Main Browsing Routes */}
          <Route path="/" element={<BrowsePage />} />
          <Route path="/browse" element={<BrowsePage />} /> 
          
          {/* Specific Categories */}
          <Route path="/tvshows" element={<BrowsePage category="tv" title="TV Shows" />} />
          <Route path="/movies" element={<BrowsePage category="movie" title="Movies" />} />
          <Route path="/latest" element={<BrowsePage category="latest" title="New & Popular" />} />
          <Route path="/mylist" element={<BrowsePage category="list" title="My List" />} />
          
          {/* Detail/Watch Route */}
          <Route path="/watch/:mediaType/:id" element={<MovieDetailPage />} />

        </Route>

        {/* Fallback Route for 404 Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;