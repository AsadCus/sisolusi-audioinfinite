'use client'

import { useEffect, useState, useMemo } from 'react'
import { APIProduct } from '@/app/types'
import { Navigation } from '@/app/components/navigation'
import { Footer } from '@/app/sections/footer'
import { CategorySidebar, ProductGrid, SortDropdown, CategoryItem, SortOption, SearchBar } from '../components'
import { BannerSection } from '../sections/banner-section'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export default function CategoriesPage() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL as string


  const [products, setProducts] = useState<APIProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products')
  const [sortBy, setSortBy] = useState<SortOption>('name')
  const [search, setSearch] = useState<string>('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

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

  // Pagination logic
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return filteredAndSortedProducts.slice(startIndex, endIndex)
  }, [filteredAndSortedProducts, currentPage, itemsPerPage])

  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage)

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, sortBy, search])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <BannerSection />
      
      <div className="max-w-[1400px] mx-auto px-4 py-8 pt-24">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <CategorySidebar
            categories={apiCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <div className="flex-1">
            <div className="flex flex-col gap-4 sm:gap-6 mb-6 sm:mb-8">
              <SearchBar products={products} onSearch={setSearch} />
              <div className="flex justify-end">
                <SortDropdown value={sortBy} onChange={setSortBy} />
              </div>
            </div>

            <ProductGrid products={paginatedProducts} loading={loading} />
            
            {/* Pagination */}
            {!loading && filteredAndSortedProducts.length > 0 && totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                    
                    {/* Page numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                      // Show first page, last page, current page, and pages around current
                      if (
                        page === 1 || 
                        page === totalPages || 
                        page === currentPage ||
                        page === currentPage - 1 ||
                        page === currentPage + 1
                      ) {
                        return (
                          <PaginationItem key={page}>
                            <PaginationLink
                              onClick={() => handlePageChange(page)}
                              isActive={page === currentPage}
                              className="cursor-pointer"
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        )
                      }
                      
                      // Show ellipsis for gaps
                      if (
                        (page === currentPage - 2 && currentPage > 3) ||
                        (page === currentPage + 2 && currentPage < totalPages - 2)
                      ) {
                        return (
                          <PaginationItem key={page}>
                            <PaginationEllipsis />
                          </PaginationItem>
                        )
                      }
                      
                      return null
                    })}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
            
            {/* Results info */}
            {!loading && filteredAndSortedProducts.length > 0 && (
              <div className="mt-4 text-center text-sm text-gray-600">
                Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredAndSortedProducts.length)} of {filteredAndSortedProducts.length} results
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
