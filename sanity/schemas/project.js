export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      desciption: 'Title of the project',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}]
    },
    {
      name: 'linkToBuild',
      title: 'LinkToBuild',
      type: 'url'
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'string'
    },
  ]
}
