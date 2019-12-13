export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5df3650183252adfc028da59',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-h2bgiu6v',
                  apiId: 'f99acc1e-c023-4119-a1e0-0811a359fc8d'
                },
                {
                  buildHookId: '5df36501118371ea4be66b40',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-e1m72ym8',
                  apiId: '259a8741-d141-429a-8ab3-b92dd5351dcc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mxmgilbert/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-e1m72ym8.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
