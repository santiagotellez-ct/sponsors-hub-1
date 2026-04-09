import type { CollectionConfig } from 'payload'

export const Sessions: CollectionConfig = {
  slug: 'sessions',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'sponsor', 'date', 'status'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'meetingLink',
      type: 'text',
      admin: {
        description: 'URL del enlace de la reunión (Zoom, Meet, Teams, etc.)',
      },
    },
    {
      name: 'sponsor',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      admin: {
        description: 'Sponsor asociado a esta sesión',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'proxima',
      options: [
        { label: 'Próxima', value: 'proxima' },
        { label: 'Pasada', value: 'pasada' },
      ],
    },
  ],
}
