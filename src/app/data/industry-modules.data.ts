export interface IndustryModule {
  id: string
  name: string
  category: "Infrastructure" | "Public Sector" | "Commercial" | "Technology"
  icon: string
  description: string
}

export const CATEGORIES = ["All", "Infrastructure", "Public Sector", "Commercial", "Technology"] as const
export type CategoryFilter = (typeof CATEGORIES)[number]

export const INDUSTRY_MODULES: IndustryModule[] = [
  { id: "airports", name: "Airports & Aerospace", category: "Infrastructure", icon: "plane", description: "Terminal telemetry, aircraft turnaround, and smart baggage routing." },
  { id: "industrial", name: "Industrial", category: "Commercial", icon: "industrial", description: "Predictive asset maintenance and SCADA integration." },
  { id: "constructions", name: "Constructions", category: "Infrastructure", icon: "constructions", description: "BIM lifecycle tracking and worker safety monitoring." },
  { id: "public-services", name: "Public Services", category: "Public Sector", icon: "public-services", description: "Citizen identity systems and automated compliance." },
  { id: "municipality", name: "Municipality", category: "Public Sector", icon: "municipality", description: "Civic asset tracking and regional resource dispatch." },
  { id: "cities", name: "Cities", category: "Infrastructure", icon: "cities", description: "Centralized urban sensory data, lighting, and traffic grid." },
  { id: "campus", name: "Campus", category: "Public Sector", icon: "campus", description: "Facility security, student lifecycle, and facility scheduling." },
  { id: "buildings", name: "Buildings", category: "Commercial", icon: "buildings", description: "HVAC energy optimization and spatial occupancy analytics." },
  { id: "transportation", name: "Transportation", category: "Infrastructure", icon: "transportation", description: "Multi-modal routing, passenger load telemetry, and EV grids." },
  { id: "logistics", name: "Logistics", category: "Commercial", icon: "logistics", description: "Cold-chain monitoring, automated freight, and EDI dispatch." },
  { id: "ports", name: "Ports", category: "Infrastructure", icon: "ports", description: "Berth scheduling, container crane automation, and customs sync." },
  { id: "marine", name: "Marine", category: "Infrastructure", icon: "marine", description: "Maritime AIS tracking and offshore engine telemetry." },
  { id: "telecom", name: "Telecom", category: "Technology", icon: "telecom", description: "Cell tower health, 5G slicing, and bandwidth governance." },
  { id: "metering", name: "Metering", category: "Technology", icon: "metering", description: "AMI smart grid infrastructure, leak detection, and billing." },
  { id: "retail", name: "Retail", category: "Commercial", icon: "retail", description: "Real-time shelf vision, POS aggregation, and dynamic pricing." },
  { id: "hospitality", name: "Hospitality", category: "Commercial", icon: "hospitality", description: "Guest contactless journey and central reservation telemetry." },
  { id: "healthcare", name: "Healthcare", category: "Public Sector", icon: "healthcare", description: "HIPAA-compliant EHR integration and clinical device telemetry." },
  { id: "waste", name: "Waste", category: "Public Sector", icon: "waste", description: "Smart bin fill sensing and dynamic route optimization." },
  { id: "farming", name: "Farming", category: "Commercial", icon: "farming", description: "Soil sensor arrays, autonomous drone irrigation, and yield models." },
  { id: "mining", name: "Mining", category: "Commercial", icon: "mining", description: "Haul truck collision avoidance and ore grade telemetry." },
  { id: "oil-gas", name: "Oil & Gas", category: "Infrastructure", icon: "oil-gas", description: "Pipeline pressure leak surveillance and rig safety telemetry." },
  { id: "parking", name: "Parking", category: "Infrastructure", icon: "parking", description: "License plate OCR, inductive stall sensing, and dynamic rates." },
  { id: "equestrian", name: "Equestrian", category: "Commercial", icon: "equestrian", description: "Equine bio-telemetry, pedigree registries, and arena climate." },
  { id: "defense", name: "Defense", category: "Public Sector", icon: "defense", description: "Air-gapped telemetry, perimeter radar, and encrypted comms." },
  { id: "laundry", name: "Laundry", category: "Commercial", icon: "laundry", description: "Industrial RFID linen inventory and wash cycle optimization." },
  { id: "amusement", name: "Amusement", category: "Commercial", icon: "amusement", description: "Ride dispatch telemetry, virtual queues, and ticketing sync." },
  { id: "warehouses", name: "Warehouses", category: "Commercial", icon: "warehouses", description: "AGV fleet coordination and high-bay vertical storage sync." },
  { id: "media", name: "Media", category: "Technology", icon: "media", description: "Low-latency live stream packaging and digital asset DAM." },
  { id: "climate", name: "Climate Monitoring", category: "Technology", icon: "climate", description: "Carbon footprint ledgering and atmospheric particulate sensors." },
  { id: "custom", name: "Custom Domain", category: "Technology", icon: "custom", description: "Compose tailor-made schemas and micro-frontends with ZARO API." },
];
