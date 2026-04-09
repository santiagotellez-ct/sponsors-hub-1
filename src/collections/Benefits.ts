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
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Ej: "Speaking y contenido", "Branding", "Networking"',
      },
    },
    {
      name: 'items',
      type: 'relationship',
      relationTo: 'items',
      hasMany: true,
      admin: {
        description: 'Items individuales que componen este beneficio',
      },
    },
  ],
}
