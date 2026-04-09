import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
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
    { name: 'title', type: 'text', required: true, label: 'Title' },
    { name: 'startDate', type: 'date', required: true, label: 'Start Date' },
    { name: 'endDate', type: 'date', required: true, label: 'End Date' },
  ],
}
