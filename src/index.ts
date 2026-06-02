import type { MTPlanet } from "./utils/types";

export const planets_maket: MTPlanet[] = [
    {
        id: 1,
        name: 'Mercury',
        texture: '/textures/planets/planet-1.webp',
        radius: 0.15,
        distance: 1.5,
        speedDelay: 2
    },
    {
        id: 2,
        name: 'Venus',
        texture: '/textures/planets/planet-2.webp',
        radius: 0.3,
        distance: 2.3,
        speedDelay: 3
    },
    {
        id: 3,
        name: 'Earth',
        texture: '/textures/planets/planet-3.webp',
        radius: 0.1,
        distance: 2.9,
        speedDelay: 4
    },
    {
        id: 4,
        name: 'Mars',
        texture: '/textures/planets/planet-4.webp',
        radius: 0.35,
        distance: 3.5,
        speedDelay: 5
    }
]