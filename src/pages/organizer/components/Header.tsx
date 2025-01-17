import { ChevronDown, FileText, LogOut, ShoppingBag, User } from 'lucide-react'
import { useLanguage } from './LanguageContext'


export function Header() {
  const { t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-pse-green px-4 flex items-center justify-between z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
          <img src="/logo.svg" alt="Logo" className="w-6 h-6" />
        </div>
        <h1 className="text-white text-xl font-medium">Organizer Center</h1>
      </div>

      <div className="relative group">
        <button className="flex items-center gap-2 text-white">
          <User className="w-5 h-5" />
          <span>{t.account}</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
          <div className="py-1">
            <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
              <ShoppingBag className="w-4 h-4" />
              <span>{t.menu.tickets}</span>
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
              <FileText className="w-4 h-4" />
              <span>{t.menu.myEvents}</span>
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
              <User className="w-4 h-4" />
              <span>{t.menu.profile}</span>
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
              <LogOut className="w-4 h-4" />
              <span>{t.menu.signOut}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

