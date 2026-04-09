import type { CollectionConfig } from 'payload'

export const Deliverables: CollectionConfig = {
  slug: 'deliverables',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    { 
      name: 'sponsor', 
      type: 'relationship', 
      relationTo: 'users',
      required: true,
      label: 'Sponsor'
    },
    { 
      name: 'item', 
      type: 'relationship', 
      relationTo: 'items',
      required: true,
      label: 'Item'
    },
    { 
      name: 'status', 
      type: 'select', 
      options: [
        { label: 'Bloqueado', value: 'bloqueado' },
        { label: 'Pendiente', value: 'pendiente' },
        { label: 'En Revisión', value: 'en_revision' },
        { label: 'Aprobado', value: 'aprobado' },
      ],
      defaultValue: 'bloqueado',
      required: true,
      label: 'Status'
    },
    { 
      name: 'file', 
      type: 'relationship', 
      relationTo: 'media', 
      label: 'File'
    },
    { name: 'notes', type: 'textarea', label: 'Notes' },
  ],
}
