export const SIZE = {
  phoneUpperBoundary: 600,
  tabletUpperBoundary: 900,
  tabletLandscapeUpperBoundary: 1200,
  desktopUpperBoundary: 1800,
}

export const DEVICE = {
  phoneOnly: `(max-width: ${SIZE.phoneUpperBoundary - 1}px)`,
  tabletDown: `(max-width: ${SIZE.tabletLandscapeUpperBoundary - 1}px)`,
  tabletOnly: `(min-width: ${
    SIZE.phoneUpperBoundary
  }px) and (max-width: ${SIZE.tabletLandscapeUpperBoundary - 1}px)`,
  desktopOnly: `(min-width: ${SIZE.tabletLandscapeUpperBoundary}px)`,
}
