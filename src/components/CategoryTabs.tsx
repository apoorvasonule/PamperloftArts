import { useLocation, useNavigate } from 'react-router-dom';

const CategoryTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const categories = [
    { label: 'Keychains & Charms', path: '/category/keychains' },
    { label: 'Kundan Mandalas', path: '/category/kundan' },
    { label: 'Memopads & Sticky notes', path: '/category/stickynotes' },
  ];

  return (
    <div className="bg-pink-50 py-3 border-b border-pink-200 px-4">
      <div className="flex flex-wrap gap-2">
        {categories.map(({ label, path }) => {
          const isActive = location.pathname === path;

          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`font-pixel px-4 py-2 rounded-md transition
                ${
                  isActive
                    ? 'bg-pink-600 text-white hover:bg-pink-700'
                    : 'bg-pink-200 text-pink-900 hover:bg-pink-300'
                }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTabs;
