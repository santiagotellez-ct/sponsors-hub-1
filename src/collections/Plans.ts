import type { CollectionConfig } from 'payload'

export const Plans: CollectionConfig = {
  slug: 'plans',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    { name: 'name', type: 'text', required: true, label: 'Name' },
    { name: 'perksDiscount', type: 'number', label: 'Perks Discount (%)' },
    { 
      name: 'benefits', 
      type: 'relationship', 
      relationTo: 'benefits', 
      hasMany: true,
      label: 'Benefits'
    },
  ],
}
