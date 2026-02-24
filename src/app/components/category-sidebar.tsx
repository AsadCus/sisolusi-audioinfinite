
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
  return (
    <aside className="w-full lg:w-96 flex-shrink-0">
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
              className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                selectedCategory === cat.name ? 'bg-gray-100 font-medium' : ''
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}
