export const breakpoints = {
  tablet: `@media (min-width: 768px)`, // Планшеты и выше
  desktop: `@media (min-width: 1024px)`, // Десктопы и выше
  
  mobileOnly: `@media (max-width: 767px)`,
} as const;