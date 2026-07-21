import { useState } from 'react'

function AdminSettings() {
  const [settings, setSettings] = useState({
    businessName: 'Grandir Bakery',
    phone: '+1 (234) 567-890',
    email: 'hello@grandir.com',
    address: '123 Bakery Street, Artisan City, AC 12345',
    description: 'Fresh, artisan baked goods made daily',
    pickupEnabled: true,
    deliveryEnabled: true,
    openingTime: '07:00',
    closingTime: '20:00',
  })

  const [isSaving, setIsSaving] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSaving(false)
    alert('Settings saved successfully!')
  }

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="mt-1 text-slate-400">Manage your business information and preferences</p>
      </div>

      {/* Settings Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Business Information */}
        <div className="rounded-lg border border-slate-700 bg-slate-800 p-6">
          <h2 className="mb-6 text-xl font-semibold text-white">Business Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300">Business Name</label>
              <input
                type="text"
                name="businessName"
                value={settings.businessName}
                onChange={handleInputChange}
                className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-white placeholder-slate-400 focus:border-amber-600 focus:outline-none"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-300">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={settings.phone}
                  onChange={handleInputChange}
                  className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-white placeholder-slate-400 focus:border-amber-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={settings.email}
                  onChange={handleInputChange}
                  className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-white placeholder-slate-400 focus:border-amber-600 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300">Address</label>
              <input
                type="text"
                name="address"
                value={settings.address}
                onChange={handleInputChange}
                className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-white placeholder-slate-400 focus:border-amber-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300">Description</label>
              <textarea
                name="description"
                value={settings.description}
                onChange={handleInputChange}
                rows={3}
                className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-white placeholder-slate-400 focus:border-amber-600 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="rounded-lg border border-slate-700 bg-slate-800 p-6">
          <h2 className="mb-6 text-xl font-semibold text-white">Features</h2>
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="pickupEnabled"
                checked={settings.pickupEnabled}
                onChange={handleInputChange}
                className="h-5 w-5 rounded bg-slate-700 border-slate-600 text-amber-600 focus:ring-amber-600"
              />
              <span className="text-white">Enable Pickup Orders</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="deliveryEnabled"
                checked={settings.deliveryEnabled}
                onChange={handleInputChange}
                className="h-5 w-5 rounded bg-slate-700 border-slate-600 text-amber-600 focus:ring-amber-600"
              />
              <span className="text-white">Enable Delivery Orders</span>
            </label>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="rounded-lg border border-slate-700 bg-slate-800 p-6">
          <h2 className="mb-6 text-xl font-semibold text-white">Operating Hours</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-300">Opening Time</label>
              <input
                type="time"
                name="openingTime"
                value={settings.openingTime}
                onChange={handleInputChange}
                className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-white focus:border-amber-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300">Closing Time</label>
              <input
                type="time"
                name="closingTime"
                value={settings.closingTime}
                onChange={handleInputChange}
                className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-white focus:border-amber-600 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={isSaving}
            className="rounded-lg bg-amber-600 px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-amber-700 disabled:bg-slate-600 disabled:cursor-not-allowed"
          >
            {isSaving ? 'Saving...' : 'Save Settings'}
          </button>
          <button
            type="button"
            className="rounded-lg border border-slate-600 px-8 py-3 font-semibold text-slate-300 transition-colors duration-200 hover:bg-slate-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default AdminSettings
