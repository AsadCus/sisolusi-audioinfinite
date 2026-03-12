import { useState, useMemo } from 'react'
import { Autocomplete, TextField } from '@mui/material'
import { Button } from '@/components/ui/button'
import { APIProduct } from '../types'

interface SearchBarProps {
  products: APIProduct[]
  onSearch: (searchTerm: string) => void
}

export function SearchBar({ products, onSearch }: SearchBarProps) {
  const [search, setSearch] = useState('')

  const productOptions = useMemo(() => {
  return [...new Set(products.map(p => p.name).filter(Boolean))]
}, [products])

  return (
    <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
      <Autocomplete
        freeSolo
        options={productOptions}
        sx={{ 
          width: {
            xs: 200,
            sm: 260,
            md: 320
          }
        }}
        onInputChange={(_, newInputValue) => {
          setSearch(newInputValue)
          onSearch(newInputValue)
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search products"
            size="small"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onSearch(search)
              }
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
                '& fieldset': {
                  borderColor: '#e5e7eb',
                },
                '&:hover fieldset': {
                  borderColor: '#d1d5db',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#d1d5db',
                  boxShadow: 'none',
                },
              },
            }}
          />
        )}
      />

      <Button
        onClick={() => onSearch(search)}
        className="rounded-lg text-sm px-3 sm:px-4"
      >
        <span className="hidden sm:inline">Search</span>
        <span className="sm:hidden">🔍</span>
      </Button>
    </div>
  )
}