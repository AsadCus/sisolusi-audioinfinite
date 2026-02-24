import { ChevronDown } from 'lucide-react'

export type SortOption = 'name' | 'newest'

interface SortDropdownProps {
  value: SortOption
  onChange: (value: SortOption) => void
}

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="appearance-none border border-gray-300 px-4 py-2 pr-10 text-sm focus:outline-none focus:border-black bg-white"
      >
        <option value="name">Sort by Name</option>
        <option value="newest">Sort by Newest</option>
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  )
}
