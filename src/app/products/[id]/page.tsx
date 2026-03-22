'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { APIProduct } from '@/app/types'
import { Navigation } from '@/app/components/navigation'
import { Footer } from '@/app/sections/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const productId = params.id as string
  const API_URL = process.env.NEXT_PUBLIC_API_URL as string

  const [product, setProduct] = useState<APIProduct | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${API_URL}/${productId}`)
        const data = await response.json()
        setProduct(data.data)
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }

    if (productId) {
      fetchProduct()
    }
  }, [productId, API_URL])

  const handlePreviousImage = () => {
    if (product && product.galleries.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? product.galleries.length - 1 : prev - 1
      )
    }
  }

  const handleNextImage = () => {
    if (product && product.galleries.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === product.galleries.length - 1 ? 0 : prev + 1
      )
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setZoomPosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 py-8 pt-24">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-100 aspect-square rounded-lg"></div>
              <div className="space-y-4">
                <div className="bg-gray-200 h-8 w-3/4 rounded"></div>
                <div className="bg-gray-200 h-4 w-full rounded"></div>
                <div className="bg-gray-200 h-4 w-2/3 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  if (!product) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 py-8 pt-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
            <Button onClick={() => router.push('/categories')}>
              Back to Products
            </Button>
          </div>
        </div>
      </main>
    )
  }

  const currentImage = product.galleries[currentImageIndex]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8 pt-24">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-6 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-gray-100 aspect-square overflow-hidden rounded-lg">
              {currentImage ? (
                <div 
                  className="relative w-full h-full"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    src={currentImage.file_url}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                  
                  {/* Zoom */}
                  {isHovering && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        backgroundImage: `url(${currentImage.file_url})`,
                        backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                        backgroundSize: '300%',
                        backgroundRepeat: 'no-repeat',
                        cursor: 'zoom-in',
                      }}
                    />
                  )}
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <div className="w-40 h-40 bg-gray-400 rounded-sm"></div>
                </div>
              )}

              {/* Image Navigation */}
              {product.galleries.length > 1 && (
                <>
                  <button
                    onClick={handlePreviousImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {product.galleries.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.galleries.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex
                        ? 'border-blue-500'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Image
                      src={image.file_url}
                      alt={`${product.name} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              
              {/* Category */}
              {product.category && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {product.category.name}
                  </span>
                </div>
              )}

              {/* Supplier */}
              {product.supplier && (
                <div className="mb-6">
                  {product.supplier.desc && (
                    <p className="text-sm text-gray-500 mt-1">{product.supplier.desc}</p>
                  )}
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Description</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {product.description}
              </p>
            </div>

            {/* Specifications Table */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 text-sm font-medium text-gray-900 bg-gray-50 w-1/3">Type</td>
                        <td className="py-3 px-4 text-sm text-gray-700">Professional Audio System</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 text-sm font-medium text-gray-900 bg-gray-50">Frequency Response</td>
                        <td className="py-3 px-4 text-sm text-gray-700">20Hz - 20kHz</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 text-sm font-medium text-gray-900 bg-gray-50">Power Output</td>
                        <td className="py-3 px-4 text-sm text-gray-700">500W RMS</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 text-sm font-medium text-gray-900 bg-gray-50">Impedance</td>
                        <td className="py-3 px-4 text-sm text-gray-700">8 Ohms</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 text-sm font-medium text-gray-900 bg-gray-50">SPL Max</td>
                        <td className="py-3 px-4 text-sm text-gray-700">125 dB</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 text-sm font-medium text-gray-900 bg-gray-50">Dimensions</td>
                        <td className="py-3 px-4 text-sm text-gray-700">600 x 400 x 300 mm</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 text-sm font-medium text-gray-900 bg-gray-50">Weight</td>
                        <td className="py-3 px-4 text-sm text-gray-700">15 kg</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 text-sm font-medium text-gray-900 bg-gray-50">Connectivity</td>
                        <td className="py-3 px-4 text-sm text-gray-700">Bluetooth 5.0, USB, AUX, XLR</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 text-sm font-medium text-gray-900 bg-gray-50">Power Supply</td>
                        <td className="py-3 px-4 text-sm text-gray-700">AC 220-240V, 50/60Hz</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 text-sm font-medium text-gray-900 bg-gray-50">Material</td>
                        <td className="py-3 px-4 text-sm text-gray-700">High-density plywood, Metal grille</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 text-sm font-medium text-gray-900 bg-gray-50">Warranty</td>
                        <td className="py-3 px-4 text-sm text-gray-700">2 Years International Warranty</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-sm font-medium text-gray-900 bg-gray-50">Included Accessories</td>
                        <td className="py-3 px-4 text-sm text-gray-700">Power cable, Remote control, User manual</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h2>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Category</span>
                    <span className="text-sm font-medium">{product.category?.name || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-sm text-gray-600">Added Date</span>
                    <span className="text-sm font-medium">
                      {new Date(product.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                onClick={() => router.push('/categories')}
                variant="outline"
                className="flex-1"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
