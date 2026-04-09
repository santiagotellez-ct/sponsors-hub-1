import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'role', 'assignedPlan'],
  },
  auth: true,
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    // Role field
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'sponsor',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Sponsor', value: 'sponsor' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    // Relationships
    {
      name: 'assignedEvent',
      type: 'relationship',
      relationTo: 'events',
      admin: {
        position: 'sidebar',
        description: 'Evento asignado a este usuario',
      },
    },
    {
      name: 'assignedPlan',
      type: 'relationship',
      relationTo: 'plans',
      admin: {
        position: 'sidebar',
        description: 'Plan de patrocinio asignado',
      },
    },
    // Sponsor Data Group
    {
      name: 'sponsorData',
      type: 'group',
      admin: {
        description: 'Información del sponsor (solo para usuarios con rol sponsor)',
        condition: (data) => data?.role === 'sponsor',
      },
      fields: [
        {
          name: 'fullName',
          type: 'text',
          label: 'Nombre completo',
        },
        {
          name: 'companyName',
          type: 'text',
          label: 'Nombre de la empresa',
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Celular / WhatsApp',
        },
        {
          name: 'corporateEmail',
          type: 'email',
          label: 'Email corporativo',
        },
        {
          name: 'linkedIn',
          type: 'text',
          label: 'LinkedIn',
          admin: {
            description: 'URL del perfil de LinkedIn (opcional)',
          },
        },
        {
          name: 'companyDescription',
          type: 'textarea',
          label: 'Descripción de la compañía',
        },
        {
          name: 'eventObjectives',
          type: 'textarea',
          label: 'Objetivos del evento',
          admin: {
            description: '¿Qué espera lograr el sponsor con este evento?',
          },
        },
        {
          name: 'brandDifferentiator',
          type: 'textarea',
          label: 'Diferenciador de marca',
          admin: {
            description: '¿Qué hace única a esta marca?',
          },
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo de la empresa',
        },
      ],
    },
  ],
}
