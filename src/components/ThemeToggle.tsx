import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

export const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-md hover:bg-indigo-700 transition-colors"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
};