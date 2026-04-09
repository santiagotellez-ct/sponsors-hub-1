import type { CollectionConfig } from 'payload'

export const Deliverables: CollectionConfig = {
  slug: 'deliverables',
  admin: {
    useAsTitle: 'item',
    defaultColumns: ['sponsor', 'item', 'status', 'updatedAt'],
  },
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
      admin: {
        description: 'Sponsor al que pertenece este entregable',
      },
    },
    {
      name: 'item',
      type: 'relationship',
      relationTo: 'items',
      required: true,
      admin: {
        description: 'Item específico del beneficio',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'bloqueado',
      options: [
        { label: 'Bloqueado', value: 'bloqueado' },
        { label: 'Pendiente', value: 'pendiente' },
        { label: 'En Revisión', value: 'en_revision' },
        { label: 'Aprobado', value: 'aprobado' },
      ],
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Archivo subido por el sponsor (opcional hasta que lo suban)',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        description: 'Notas y feedback del administrador',
      },
    },
  ],
}
