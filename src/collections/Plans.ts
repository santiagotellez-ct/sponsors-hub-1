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
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Ej: "Platino", "Oro", "Plata", "Bronce"',
      },
    },
    {
      name: 'perksDiscount',
      type: 'number',
      required: true,
      defaultValue: 0,
      min: 0,
      max: 100,
      admin: {
        description: 'Porcentaje de descuento en perks (ej: 50 para 50%)',
      },
    },
    {
      name: 'benefits',
      type: 'relationship',
      relationTo: 'benefits',
      hasMany: true,
      admin: {
        description: 'Beneficios incluidos en este plan',
      },
    },
  ],
}
