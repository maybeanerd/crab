export default defineAppConfig({
  seo: {
    title: 'crab',
    description: 'A nimble Mastodon web client with modern features and elegant design.',
  },
  header: {
    title: 'crab',
    logo: {
      alt: 'crab logo',
      light: 'https://github.com/maybeanerd/crab/blob/main/public/crab-original.png?raw=true',
      dark: 'https://github.com/maybeanerd/crab/blob/main/public/crab-original.png?raw=true',
    },
  },
  socials: {
    github: 'https://github.com/maybeanerd/crab',
    mastodon: 'https://crab.bumscode.com/@maybeanerd',
  },
  github: {
    url: 'https://github.com/maybeanerd/crab',
    branch: 'main',
    rootDir: 'docs',
  },
  toc: {
    title: 'On this page',
    bottom: {
      title: 'Community',
      links: [
        {
          icon: 'i-ph-shooting-star-duotone',
          label: 'Star on GitHub',
          to: 'https://github.com/maybeanerd/crab',
          target: '_blank',
        },
        {
          icon: 'i-simple-icons-mastodon',
          label: 'Follow on Mastodon',
          to: 'https://crab.bumscode.com/@maybeanerd',
        },
      ],
    },
  },
})
