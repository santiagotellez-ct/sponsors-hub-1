import type { CollectionConfig } from 'payload'

export const Items: CollectionConfig = {
  slug: 'items',
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
    { name: 'description', type: 'textarea', label: 'Description' },
    { 
      name: 'deliverableType', 
      type: 'select', 
      options: [
        { label: 'Text', value: 'text' },
        { label: 'Image', value: 'image' },
        { label: 'Document', value: 'document' },
        { label: 'None', value: 'none' },
      ],
      required: true,
      label: 'Deliverable Type'
    },
  ],
}
