export const size = {
  phoneUpperBoundary: 600,
  tabletUpperBoundary: 900,
  tabletLandscapeUpperBoundary: 1200,
  desktopUpperBoundary: 1800,
}

export const device = {
  phoneOnly: `(max-width: ${size.phoneUpperBoundary - 1}px)`,
  tabletOnly: `(min-width: ${size.phoneUpperBoundary}px) and (max-width: ${
    size.tabletLandscapeUpperBoundary
  }px)`,
  desktopOnly: `(min-width: ${size.tabletLandscapeUpperBoundary}px)`,
}
