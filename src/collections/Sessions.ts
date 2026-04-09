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
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'meetingLink',
      type: 'text',
    },
    {
      name: 'sponsor',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Próxima', value: 'proxima' },
        { label: 'Pasada', value: 'pasada' },
      ],
      defaultValue: 'proxima',
      required: true,
    },
  ],
}
