import type { CollectionConfig } from 'payload'

export const Benefits: CollectionConfig = {
  slug: 'benefits',
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
    { 
      name: 'items', 
      type: 'relationship', 
      relationTo: 'items', 
      hasMany: true,
      label: 'Items'
    },
  ],
}
