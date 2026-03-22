import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { APIProduct } from '@/app/types'
import {
  Card,
  CardContent,
} from "@/components/ui/card"

interface ProductCardProps {
  product: APIProduct
}

export function ProductCard({ product }: ProductCardProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/products/${product.id}`)
  }

  return (
    <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1" onClick={handleClick}>
      
      <CardContent className="p-4">
        {/* Image */}
        <div className="relative bg-gray-100 aspect-[3/5] mb-4 overflow-hidden flex items-center justify-center rounded-lg">
          {product.galleries && product.galleries.length > 0 ? (
            <Image
            src={product.galleries[0].file_url}
            alt={product.name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
/>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <div className="w-20 h-40 bg-gray-400 rounded-sm"></div>
            </div>
          )}
        </div>

        {/* Info */}
        <h3 className="text-sm font-medium text-gray-900 mb-2 leading-relaxed">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
      </CardContent>
    </Card>
  )
}