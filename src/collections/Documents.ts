import type { CollectionConfig } from 'payload'

export const Documents: CollectionConfig = {
  slug: 'documents',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Title' },
    { 
      name: 'file', 
      type: 'relationship', 
      relationTo: 'media',
      required: true,
      label: 'File'
    },
    { 
      name: 'sponsor', 
      type: 'relationship', 
      relationTo: 'users',
      required: true,
      label: 'Sponsor'
    },
  ],
}
