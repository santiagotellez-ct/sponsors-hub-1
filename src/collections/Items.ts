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
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'deliverableType',
      type: 'select',
      required: true,
      defaultValue: 'none',
      dbName: 'item_deliverable_type_enum',
      options: [
        { label: 'Texto', value: 'text' },
        { label: 'Imagen', value: 'image' },
        { label: 'Documento', value: 'document' },
        { label: 'Ninguno', value: 'none' },
      ],
    },
  ],
}
