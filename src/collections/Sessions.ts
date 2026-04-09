import type { CollectionConfig } from 'payload'

export const Sessions: CollectionConfig = {
  slug: 'sessions',
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
    { name: 'date', type: 'date', required: true, label: 'Date' },
    { name: 'meetingLink', type: 'text', label: 'Meeting Link' },
    { 
      name: 'sponsor', 
      type: 'relationship', 
      relationTo: 'users',
      required: true,
      label: 'Sponsor'
    },
    { 
      name: 'status', 
      type: 'select', 
      options: [
        { label: 'Próxima', value: 'proxima' },
        { label: 'Pasada', value: 'pasada' },
      ],
      required: true,
      label: 'Status'
    },
  ],
}
