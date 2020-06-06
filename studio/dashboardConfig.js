export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5edbb4fd05042b0cdf8e15b4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-alex-studio',
                  apiId: '47e01f92-7af9-4456-8580-23f4ed134ad3'
                },
                {
                  buildHookId: '5edbb4fdf7ef3a9aefa7e047',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-alex',
                  apiId: 'bb7bdd3a-7211-4573-b7f3-744ded7fadc7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adewinne/sanity-kitchen-sink-alex',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-alex.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
