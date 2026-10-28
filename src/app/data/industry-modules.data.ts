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
  { id: "industrial", name: "Industrial & Manufacturing", category: "Commercial", icon: "factory", description: "Predictive asset maintenance and SCADA integration." },
  { id: "constructions", name: "Constructions & Engineering", category: "Infrastructure", icon: "hardhat", description: "BIM lifecycle tracking and worker safety monitoring." },
  { id: "public-services", name: "Public Services & Gov", category: "Public Sector", icon: "landmark", description: "Citizen identity systems and automated compliance." },
  { id: "municipality", name: "Municipality Management", category: "Public Sector", icon: "building", description: "Civic asset tracking and regional resource dispatch." },
  { id: "cities", name: "Smart Cities", category: "Infrastructure", icon: "globe", description: "Centralized urban sensory data, lighting, and traffic grid." },
  { id: "campus", name: "Campus & Universities", category: "Public Sector", icon: "graduation", description: "Facility security, student lifecycle, and facility scheduling." },
  { id: "buildings", name: "Smart Buildings & Facilities", category: "Commercial", icon: "building-2", description: "HVAC energy optimization and spatial occupancy analytics." },
  { id: "transportation", name: "Transportation & Transit", category: "Infrastructure", icon: "bus", description: "Multi-modal routing, passenger load telemetry, and EV grids." },
  { id: "logistics", name: "Logistics & Supply Chain", category: "Commercial", icon: "truck", description: "Cold-chain monitoring, automated freight, and EDI dispatch." },
  { id: "ports", name: "Ports & Intermodal Hubs", category: "Infrastructure", icon: "anchor", description: "Berth scheduling, container crane automation, and customs sync." },
  { id: "marine", name: "Marine & Vessel Tracking", category: "Infrastructure", icon: "ship", description: "Maritime AIS tracking and offshore engine telemetry." },
  { id: "telecom", name: "Telecom & Edge Networks", category: "Technology", icon: "radio", description: "Cell tower health, 5G slicing, and bandwidth governance." },
  { id: "metering", name: "Smart Metering & Utilities", category: "Technology", icon: "gauge", description: "AMI smart grid infrastructure, leak detection, and billing." },
  { id: "retail", name: "Retail & Omnichannel", category: "Commercial", icon: "shopping", description: "Real-time shelf vision, POS aggregation, and dynamic pricing." },
  { id: "hospitality", name: "Hospitality & Leisure", category: "Commercial", icon: "hotel", description: "Guest contactless journey and central reservation telemetry." },
  { id: "healthcare", name: "Healthcare & Life Sciences", category: "Public Sector", icon: "heart", description: "HIPAA-compliant EHR integration and clinical device telemetry." },
  { id: "waste", name: "Waste Management", category: "Public Sector", icon: "trash", description: "Smart bin fill sensing and dynamic route optimization." },
  { id: "farming", name: "Precision Agriculture", category: "Commercial", icon: "sprout", description: "Soil sensor arrays, autonomous drone irrigation, and yield models." },
  { id: "mining", name: "Mining & Heavy Resources", category: "Commercial", icon: "pickaxe", description: "Haul truck collision avoidance and ore grade telemetry." },
  { id: "oil-gas", name: "Oil & Gas Exploration", category: "Infrastructure", icon: "flame", description: "Pipeline pressure leak surveillance and rig safety telemetry." },
  { id: "parking", name: "Smart Parking Networks", category: "Infrastructure", icon: "parking", description: "License plate OCR, inductive stall sensing, and dynamic rates." },
  { id: "equestrian", name: "Equestrian & Livestock", category: "Commercial", icon: "award", description: "Equine bio-telemetry, pedigree registries, and arena climate." },
  { id: "defense", name: "Defense & Strategic Infra", category: "Public Sector", icon: "shield", description: "Air-gapped telemetry, perimeter radar, and encrypted comms." },
  { id: "laundry", name: "Commercial Laundry", category: "Commercial", icon: "shirt", description: "Industrial RFID linen inventory and wash cycle optimization." },
  { id: "amusement", name: "Amusement Parks & Venues", category: "Commercial", icon: "sparkles", description: "Ride dispatch telemetry, virtual queues, and ticketing sync." },
  { id: "warehouses", name: "Autonomous Warehouses", category: "Commercial", icon: "boxes", description: "AGV fleet coordination and high-bay vertical storage sync." },
  { id: "media", name: "Media & Broadcasting", category: "Technology", icon: "tv", description: "Low-latency live stream packaging and digital asset DAM." },
  { id: "climate", name: "Climate Monitoring & ESG", category: "Technology", icon: "cloud-rain", description: "Carbon footprint ledgering and atmospheric particulate sensors." },
  { id: "custom", name: "Custom Enterprise Domain", category: "Technology", icon: "plus", description: "Compose tailor-made schemas and micro-frontends with ZARO API." },
]
