'use client'

import { useEffect, useState, useMemo } from 'react'
import { APIProduct } from '@/app/types'
import { Navigation } from '@/app/components/navigation'
import { Footer } from '@/app/sections/footer'
import { CategorySidebar, ProductGrid, SortDropdown, CategoryItem, SortOption, SearchBar } from '../components'
import { BannerSection } from '../sections/banner-section'

export default function CategoriesPage() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL as string


  const [products, setProducts] = useState<APIProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products')
  const [sortBy, setSortBy] = useState<SortOption>('name')
  const [search, setSearch] = useState<string>('')

 useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch(API_URL)
      const data = await response.json()
      const fetchedProducts = data.data || []

      setProducts(fetchedProducts)

      const firstCategory = fetchedProducts.find(
        (p: APIProduct) => p.category?.name
      )?.category?.name

      if (firstCategory) {
        setSelectedCategory(firstCategory)
      }
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  fetchProducts()
}, [API_URL])
  // kategori
  const apiCategories: CategoryItem[] = useMemo(() => {
    const categoryMap = new Map<string, APIProduct['category']>()
    products.forEach(p => {
      if (p.category?.name && !categoryMap.has(p.category.name)) {
        categoryMap.set(p.category.name, p.category)
      }
    })
    return [
      { name: 'All Products' },
      ...Array.from(categoryMap.values()).map(cat => ({
        name: cat.name,
      }))
    ]
  }, [products])


  // filter, sort
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products

    if (selectedCategory !== 'all' && selectedCategory !== 'All Products') {
      filtered = products.filter(p =>
        p.category?.name.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        selectedCategory.toLowerCase().includes(p.category?.name.toLowerCase() || '')
      )
    }

    if (search) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      )
    }

    return [...filtered].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name)
      }
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    })
  }, [products, selectedCategory, sortBy, search])

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <BannerSection />
      
      <div className="max-w-[1400px] mx-auto px-4 py-8 pt-24">
        <div className="flex flex-col lg:flex-row gap-8">
          <CategorySidebar
            categories={apiCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <SearchBar products={products} onSearch={setSearch} />
              <SortDropdown value={sortBy} onChange={setSortBy} />
            </div>

            <ProductGrid products={filteredAndSortedProducts} loading={loading} />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
