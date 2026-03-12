
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export interface CategoryItem {
  name: string
  subcategories?: string[]
}

interface CategorySidebarProps {
  categories: CategoryItem[]
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export function CategorySidebar({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategorySidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-full flex items-center justify-between bg-black text-white px-4 py-3 font-medium text-sm rounded-lg"
        >
          <span>Categories</span>
          {isMobileMenuOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Sidebar - Hidden on mobile, visible on desktop */}
      <aside className="hidden lg:block w-full lg:w-96 flex-shrink-0">
        <div className="border border-gray-200">
          {/* Header */}
          <div className="bg-black text-white px-4 py-3 font-medium text-sm">
            Products
          </div>

          {/* List */}
          <div className="divide-y divide-gray-100">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => onSelectCategory(cat.name)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                  selectedCategory === cat.name ? 'bg-gray-100 font-medium' : ''
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Mobile Accordion Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mb-6">
          <div className="border border-gray-200 rounded-lg">
            {/* List */}
            <div className="divide-y divide-gray-100">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => {
                    onSelectCategory(cat.name)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                    selectedCategory === cat.name ? 'bg-gray-100 font-medium' : ''
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
