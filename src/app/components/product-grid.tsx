import { APIProduct } from '@/app/types'
import { ProductCard } from './product-card'

interface ProductGridProps {
  products: APIProduct[]
  loading: boolean
}

export function ProductGrid({ products, loading }: ProductGridProps) {



  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-x-6 md:gap-y-8">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-100 aspect-[3/5] mb-3 sm:mb-4 rounded-lg"></div>
            <div className="bg-gray-200 h-3 sm:h-4 w-3/4 mb-1 sm:mb-2 rounded"></div>
            <div className="bg-gray-200 h-2 sm:h-3 w-full rounded"></div>
          </div>
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No products found in this category.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-x-6 md:gap-y-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}