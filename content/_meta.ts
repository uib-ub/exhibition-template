const meta = {
  'index': {
    title: 'Exhibition Template',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'default',
      toc: false
    }
  },
  'documentation': {
    title: 'Documentation',
    type: 'menu',
    items: {
      'index': {
        title: 'Getting Started Guide',
        href: '/documentation'
      },
      'content-guide': {
        title: 'Content Creation Guide',
        href: '/documentation/content-guide'
      },
      'what-is-iiif': {
        title: 'What is IIIF?',
        href: '/documentation/what-is-iiif'
      },
      'ui-components': {
        title: 'UI Components Guide',
        href: '/documentation/ui-components'
      },
      'troubleshooting': {
        title: 'Troubleshooting Guide',
        href: '/documentation/troubleshooting'
      },
      'quick-reference': {
        title: 'Quick Reference Guide',
        href: '/documentation/quick-reference'
      },
      'checklist': {
        title: 'Getting Started Checklist',
        href: '/documentation/checklist'
      }
    }
  },
  'theme': {
    title: 'Theme',
    type: 'menu',
    items: {
      'theme-1': {
        title: 'Theme 1',
        href: '/theme/theme-1'
      },
      'theme-2': {
        title: 'Theme 2',
        href: '/theme/theme-2'
      }
    }
  },
  'about': {
    title: 'About',
    type: 'page',
  },
  'contact': {
    title: 'Contact',
    type: 'page',
  },
}

export default meta;
