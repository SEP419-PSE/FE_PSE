import { Search } from 'lucide-react'
import { Header } from './components/header'
import { useLanguage } from './components/LanguageContext'
import { LanguageSwitcher } from './components/LanguageSwitcher'

export default function OrganizerPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Header />
      

      <main className="ml-64 pt-16 p-6">
        <h1 className="text-2xl font-bold text-white mb-6">{t.title}</h1>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              placeholder={t.search}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>

          
        </div>

        <div className="flex flex-col items-center justify-center h-[calc(100vh-250px)]">
          <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mb-4">
            <img 
              src="/empty-state.svg" 
              alt="No events" 
              className="w-16 h-16 opacity-50"
            />
          </div>
          <p className="text-white/60">No events found</p>
        </div>
      </main>

      <LanguageSwitcher />
    </div>
  )
}
