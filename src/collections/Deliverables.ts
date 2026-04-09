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
    },
    {
      name: 'item',
      type: 'relationship',
      relationTo: 'items',
      required: true,
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
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'notes',
      type: 'textarea',
    },
  ],
}
