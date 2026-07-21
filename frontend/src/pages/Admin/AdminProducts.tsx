import { useState } from 'react'
import { useProducts } from '@/hooks/useProducts'

function AdminProducts() {
  const { products, categories } = useProducts()
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would call the backend API
    console.log('Submitting product:', formData)
    setFormData({ name: '', category: '', price: '', description: '' })
    setShowForm(false)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Products</h1>
          <p className="mt-1 text-slate-400">Manage your product catalog</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-amber-700"
        >
          {showForm ? 'Cancel' : 'Add Product'}
        </button>
      </div>

      {/* Add Product Form */}
      {showForm && (
        <div className="rounded-lg border border-slate-700 bg-slate-800 p-6">
          <h2 className="mb-6 text-xl font-semibold text-white">Add New Product</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-300">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-white placeholder-slate-400 focus:border-amber-600 focus:outline-none"
                  placeholder="e.g., Chocolate Croissant"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-white focus:border-amber-600 focus:outline-none"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300">Price (Rs.)</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                  step="0.01"
                  className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-white placeholder-slate-400 focus:border-amber-600 focus:outline-none"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-white placeholder-slate-400 focus:border-amber-600 focus:outline-none"
                placeholder="Product description..."
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="rounded-lg bg-amber-600 px-6 py-2 font-semibold text-white transition-colors duration-200 hover:bg-amber-700"
              >
                Add Product
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="rounded-lg border border-slate-600 px-6 py-2 font-semibold text-slate-300 transition-colors duration-200 hover:bg-slate-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Products Table */}
      <div className="rounded-lg border border-slate-700 bg-slate-800">
        <div className="border-b border-slate-700 px-6 py-4">
          <h2 className="text-lg font-semibold text-white">All Products ({products.length})</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="px-6 py-4 text-left font-semibold text-slate-400">Name</th>
                <th className="px-6 py-4 text-left font-semibold text-slate-400">Category</th>
                <th className="px-6 py-4 text-left font-semibold text-slate-400">Price</th>
                <th className="px-6 py-4 text-left font-semibold text-slate-400">Status</th>
                <th className="px-6 py-4 text-left font-semibold text-slate-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-slate-700 hover:bg-slate-700/50">
                  <td className="px-6 py-4 text-white">{product.name}</td>
                  <td className="px-6 py-4 text-slate-300">Category</td>
                  <td className="px-6 py-4 text-white">Rs. {(product.price_in_paisa / 100).toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                        product.available
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {product.available ? 'Available' : 'Unavailable'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="text-amber-400 hover:text-amber-300">Edit</button>
                      <button className="text-red-400 hover:text-red-300">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminProducts
