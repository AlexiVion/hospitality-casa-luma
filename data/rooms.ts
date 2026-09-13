export type Room = {
  slug: string;
  name: string;
  eyebrow: string;
  shortDescription: string;
  description: string;
  capacity: number;
  bed: string;
  size: string;
  highlights: string[];
  amenities: string[];
  image: string;
  gallery: string[];
  indicativeRate: number;
};

export const rooms: Room[] = [
  {
    slug: "luma-garden-room",
    name: "Luma Garden Room",
    eyebrow: "Quiet garden stay",
    shortDescription:
      "A calm ground-floor room opening toward the garden, designed for slow mornings and simple comfort.",
    description:
      "The Luma Garden Room is the most intimate expression of Casa Luma: natural materials, soft light, a private outdoor edge, and everything needed for a short restorative stay in the hills.",
    capacity: 2,
    bed: "1 queen bed",
    size: "28 m²",
    highlights: ["Garden orientation", "Private outdoor seating", "Walk-in shower"],
    amenities: ["Breakfast included", "Wi-Fi", "Air conditioning", "Minibar", "Natural toiletries"],
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85"
    ],
    indicativeRate: 185,
  },
  {
    slug: "sierra-suite",
    name: "Sierra Suite",
    eyebrow: "Open views, more space",
    shortDescription:
      "A larger suite with a sitting area and broad views toward the hills, made for longer stays and slower afternoons.",
    description:
      "The Sierra Suite gives the landscape more room to enter. A separate sitting area, generous glazing, and a quieter upper-level position make it the natural choice for guests who want more space without losing the intimacy of a small property.",
    capacity: 2,
    bed: "1 king bed",
    size: "41 m²",
    highlights: ["Mountain outlook", "Separate sitting area", "Deep soaking tub"],
    amenities: ["Breakfast included", "Wi-Fi", "Air conditioning", "Espresso setup", "Bathrobes"],
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1587985064135-0366536eab42?auto=format&fit=crop&w=1600&q=85"
    ],
    indicativeRate: 245,
  },
  {
    slug: "casa-suite",
    name: "Casa Suite",
    eyebrow: "The most private stay",
    shortDescription:
      "Casa Luma's premium suite pairs a private terrace, expanded living space, and the property's most complete amenity set.",
    description:
      "The Casa Suite is conceived as the property's most private stay: a generous room, its own terrace, a larger bathing area, and an atmosphere that feels closer to a small residence than a hotel room.",
    capacity: 3,
    bed: "1 king bed + daybed",
    size: "52 m²",
    highlights: ["Private terrace", "Indoor-outdoor lounge", "Large stone bath"],
    amenities: ["Breakfast included", "Wi-Fi", "Air conditioning", "Espresso setup", "Welcome amenity"],
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1600&q=85"
    ],
    indicativeRate: 320,
  },
];

export function getRoom(slug: string) {
  return rooms.find((room) => room.slug === slug);
}
