# DESIGN.md

## Ton
Calme, haut de gamme, minimaliste. Beaucoup d'espace, peu d'éléments.
Un seul accent de couleur par page.

## Polices
- Titres : Cabinet Grotesk (500 et 700), classe font-display
- Texte : Inter, classe font-sans (par défaut)

## Couleurs (déclarées dans app/globals.css)
- Fond : #FAFAF7 (bg-fond)
- Texte : #111111 (text-texte)
- Primaire : #111111 (bg-primaire)
- Accent : #C2410C (text-accent)
- Texte discret : #5C5C57 (text-discret)

## Espacements (échelle unique, en px)
4, 8, 12, 16, 24, 32, 48, 64, 96
Classes Tailwind correspondantes : 1, 2, 3, 4, 6, 8, 12, 16, 24
Interdit : 5, 7, 10, 14, 20 et toutes les valeurs hors échelle.

## Rayons
- sm : 4px
- md : 8px
- lg : 16px

## Ombres
- Douce : 0 1px 2px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.06) (shadow-douce)
- Pas d'autre ombre.

## Règles
- Mobile d'abord.
- Contraste texte minimum 4,5:1.
- Un seul effet "wow" par page.
- Respecter prefers-reduced-motion.