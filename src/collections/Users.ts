import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Sponsor', value: 'sponsor' },
      ],
      defaultValue: 'sponsor',
      required: true,
    },
    {
      name: 'assignedEvent',
      type: 'relationship',
      relationTo: 'events',
      hasMany: false,
    },
    {
      name: 'assignedPlan',
      type: 'relationship',
      relationTo: 'plans',
      hasMany: false,
    },
    {
      name: 'sponsorData',
      type: 'group',
      admin: {
        condition: (data) => data.role === 'sponsor',
      },
      fields: [
        { name: 'fullName', type: 'text', label: 'Nombre completo' },
        { name: 'companyName', type: 'text', label: 'Nombre de la empresa' },
        { name: 'phone', type: 'text', label: 'Celular/WhatsApp' },
        { name: 'corporateEmail', type: 'email', label: 'Email corporativo' },
        { name: 'linkedin', type: 'text', label: 'LinkedIn' },
        { name: 'companyDescription', type: 'textarea', label: 'Descripción de la compañía' },
        { name: 'eventGoals', type: 'textarea', label: 'Objetivos del evento' },
        { name: 'brandDifferentiator', type: 'textarea', label: 'Diferenciador de marca' },
        { 
          name: 'logo', 
          type: 'relationship', 
          relationTo: 'media',
          label: 'Logo'
        },
      ],
    },
  ],
}
