import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs' // nextra-theme-blog or your custom theme
import { Work } from '@/components/work'
import { IIIFViewer } from '@/components/iiif-viewer'
import { Quote } from '@/components/quote'

// Get the default MDX components
const themeComponents = getThemeComponents()

// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    Work,
    IIIFViewer,
    Quote,
    ...components
  }
}