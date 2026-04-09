import type { CollectionConfig } from 'payload'

export const Documents: CollectionConfig = {
  slug: 'documents',
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
      name: 'file',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Documento para el sponsor',
      },
    },
    {
      name: 'sponsor',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      admin: {
        description: 'Sponsor destinatario del documento',
      },
    },
  ],
}
