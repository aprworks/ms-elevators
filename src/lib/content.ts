export const business = {
  name: "MS Elevators",
  proprietor: "P. Mahesh",
  tagline: "Choose the Best Lift for Your Building",
  phoneDisplay: "99596 04704",
  phoneHref: "+919959604704",
  phoneSecondaryDisplay: "97001 88376",
  phoneSecondaryHref: "+919700188376",
  whatsapp: "919959604704",
  email: "mselevators9@gmail.com",
  addressLines: [
    "H.No 8-4-315/6, Shop No 4",
    "Near Metro Station, Erragadda, Hyderabad - 500018",
  ],
  rating: 4.6,
  reviewCount: 19,
  sourceListingUrl:
    "https://www.justdial.com/Hyderabad/Ms-Elevators-Erragadda/040PXX40-XX40-210831162704-N4U9_BZDET",
  mapQuery:
    "MS Elevators, H.No 8-4-315/6, Shop No 4, Near Metro Station, Erragadda, Hyderabad - 500018, Telangana",
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "new-lift-installation",
    title: "New Lift Installation",
    short: "New lift installation for homes and businesses.",
    description:
      "We undertake new lift installation for all commercial and residential spaces, from planning and shaft assessment through to commissioning, so your building gets a safe, reliable lift built for its exact space and load requirements.",
  },
  {
    slug: "maintenance",
    title: "Maintenance",
    short: "Scheduled upkeep that keeps lifts running smoothly.",
    description:
      "We are proficient in rendering all types of maintenance services, with regular inspections and preventive checks that catch small issues before they become breakdowns, extending the life of your elevator.",
  },
  {
    slug: "service",
    title: "Service",
    short: "Fast, reliable servicing from skilled technicians.",
    description:
      "Our trusted and skilled professionals diagnose and fix elevator faults quickly, minimising downtime for your building. From door sensors and control panels to motors and cabling, we service it right the first time.",
  },
  {
    slug: "modification-spares",
    title: "Modification of All Lifts & Spares",
    short: "Upgrades, modernisation, and genuine spare parts.",
    description:
      "We modify and modernise all types of existing lifts, replacing worn components with genuine spares to bring older elevators up to current safety and performance standards.",
  },
];

export const whyChooseUs = [
  {
    icon: "map-pin",
    title: "Local Erragadda Experts",
    description:
      "Based in Erragadda, Hyderabad, we know the buildings and lift systems across the area and respond quickly when you need us.",
  },
  {
    icon: "shield",
    title: "Skilled, Trusted Professionals",
    description:
      "Every installation and service is handled by trained technicians who take pride in getting it right the first time.",
  },
  {
    icon: "star",
    title: "Rated 4.6 by Local Customers",
    description: `Rated ${business.rating}/5 from ${business.reviewCount} customer ratings on JustDial, reflecting consistent, dependable service.`,
  },
  {
    icon: "building",
    title: "Commercial & Residential",
    description:
      "From apartment buildings to commercial complexes, we install and maintain elevators for spaces of every size.",
  },
  {
    icon: "clock",
    title: "Full Maintenance Plans",
    description:
      "Keep your elevator compliant and running smoothly year-round with maintenance tailored to your building.",
  },
  {
    icon: "truck",
    title: "Modification & Spares",
    description:
      "We modernise older lifts and supply genuine spare parts to keep every part of your elevator running as it should.",
  },
];
