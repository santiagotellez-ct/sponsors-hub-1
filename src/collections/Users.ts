import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
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
      admin: {
        condition: (data) => data.role === 'sponsor',
      },
    },
    {
      name: 'assignedPlan',
      type: 'relationship',
      relationTo: 'plans',
      admin: {
        condition: (data) => data.role === 'sponsor',
      },
    },
    {
      name: 'sponsorDetails',
      type: 'group',
      admin: {
        condition: (data) => data.role === 'sponsor',
      },
      fields: [
        {
          name: 'fullName',
          type: 'text',
        },
        {
          name: 'companyName',
          type: 'text',
        },
        {
          name: 'whatsappNumbers',
          label: 'Celular/WhatsApp',
          type: 'text',
        },
        {
          name: 'corporateEmail',
          type: 'email',
        },
        {
          name: 'linkedin',
          type: 'text',
        },
        {
          name: 'companyDescription',
          type: 'textarea',
        },
        {
          name: 'eventObjectives',
          type: 'textarea',
        },
        {
          name: 'brandDifferentiator',
          type: 'textarea',
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
