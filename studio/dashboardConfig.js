export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '60477c989abbc9bc072fd790',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-uf-stilescape-studio',
                  apiId: 'de64f75f-6613-40aa-bd7d-757beb0a5214'
                },
                {
                  buildHookId: '60477c9875ef1fe042647f6b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-uf-stilescape',
                  apiId: 'c340c00d-db5a-4307-ac17-9a83139d3f25'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ursusfux/sanity-nextjs-uf-stilescape',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-uf-stilescape.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
