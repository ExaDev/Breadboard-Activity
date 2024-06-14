import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

type ThemeColors = {
  light: string
  lightgray: string
  gray: string
  darkgray: string
  dark: string
  secondary: string
  tertiary: string
  highlight: string
}

type Themes = {
  lightMode: ThemeColors
  darkMode: ThemeColors
}

function hslToHex(h: number, s: number, l: number): string {
  l /= 100
  const a = (s * Math.min(l, 1 - l)) / 100
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0")
  }
  return `#${f(0)}${f(8)}${f(4)}`
}

function hslToRgba(h: number, s: number, l: number, a: number): string {
  l /= 100
  const a_s = (s * Math.min(l, 1 - l)) / 100
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const color = l - a_s * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
  }
  const r = f(0)
  const g = f(8)
  const b = f(4)
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

function generateTheme(baseHue: number, baseSaturation: number, baseLightness: number): Themes {
  const lightMode: ThemeColors = {
    light: hslToHex(baseHue, baseSaturation, baseLightness + 80),
    lightgray: hslToHex(baseHue, baseSaturation, baseLightness + 50),
    gray: hslToHex(baseHue, baseSaturation, baseLightness + 20),
    darkgray: hslToHex(baseHue, baseSaturation, baseLightness - 30),
    dark: hslToHex(baseHue, baseSaturation, baseLightness - 50),
    secondary: hslToHex((baseHue + 30) % 360, baseSaturation, baseLightness),
    tertiary: hslToHex((baseHue + 60) % 360, baseSaturation, baseLightness),
    highlight: hslToRgba(baseHue, baseSaturation, baseLightness, 0.15),
  }

  const darkMode: ThemeColors = {
    light: hslToHex(baseHue, baseSaturation, baseLightness - 80),
    lightgray: hslToHex(baseHue, baseSaturation, baseLightness - 50),
    gray: hslToHex(baseHue, baseSaturation, baseLightness - 20),
    darkgray: hslToHex(baseHue, baseSaturation, baseLightness + 30),
    dark: hslToHex(baseHue, baseSaturation, baseLightness + 50),
    secondary: hslToHex((baseHue + 210) % 360, baseSaturation, baseLightness),
    tertiary: hslToHex((baseHue + 60) % 360, baseSaturation, baseLightness),
    highlight: hslToRgba(baseHue, baseSaturation, baseLightness, 0.15),
  }

  return { lightMode, darkMode }
}

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "ExaDev Public Notebook",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "exadev.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: generateTheme(
        // 210, // blue
        20, // blue
        50, // 50%
        50, // 50%
      ),
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({
        enableInHtmlEmbed: true,
        enableYouTubeEmbed: true,
        enableCheckbox: true,
      }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
