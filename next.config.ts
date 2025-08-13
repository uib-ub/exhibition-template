import nextra from 'nextra'

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
  defaultShowCopyCode: true,
  staticImage: true
})

// Export the final Next.js config with Nextra included
export default withNextra({
  /**
   * Enable static exports.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. This is the slug of your GitHub repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: "/exhibition-template",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
})