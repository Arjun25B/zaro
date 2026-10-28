export interface ZaroProduct {
  id: string
  title: string
  tag: string
  category: string
  description: string
  tint: "blue" | "indigo" | "teal" | "rose"
  icon: string
  linkText: string
}

export const ZARO_PRODUCTS: ZaroProduct[] = [
  {
    id: "zaro-business",
    title: "ZARO Business",
    tag: "ERP & Operations",
    category: "Operational Suite",
    description: "Enterprise resource planning, multi-entity financial ledgers, procurement pipelines, and automated staff workflows unified under one pane.",
    tint: "blue",
    icon: "briefcase",
    linkText: "Explore Operations",
  },
  {
    id: "zaro-virtual-world",
    title: "ZARO Virtual World",
    tag: "Digital Twins & 3D Spatial",
    category: "Spatial Simulation",
    description: "Real-time physical asset mirrors, spatial IoT visualization, immersive telemetry overlays, and predictive physics simulations.",
    tint: "indigo", // strictly using deep slate-indigo #1A1A3E, NO purple
    icon: "layers",
    linkText: "Inspect Digital Twins",
  },
  {
    id: "zaro-api",
    title: "ZARO API & Integration",
    tag: "High-Throughput Gateway",
    category: "Connectivity Hub",
    description: "Zero-latency GraphQL & gRPC data pipelines, legacy mainframe bridging, event mesh brokers, and strict mTLS security governance.",
    tint: "teal",
    icon: "network",
    linkText: "Developer Documentation",
  },
  {
    id: "zaro-industry",
    title: "ZARO Industry Solutions",
    tag: "Domain Micro-Suites",
    category: "Industry Verticals",
    description: "30+ pre-certified vertical modules configured for regulatory compliance, ISO audits, sensor telemetry, and instant deployment.",
    tint: "rose",
    icon: "boxes",
    linkText: "Browse All Verticals",
  },
]

export interface CorezanService {
  id: string
  title: string
  eyebrow: string
  description: string
  icon: string
  capabilities: string[]
  isHero?: boolean
}

export const COREZAN_SERVICES: CorezanService[] = [
  {
    id: "ai-consulting",
    title: "AI Development & Enterprise Consulting",
    eyebrow: "Flagship Strategic Capability",
    description: "Custom Large Language Model fine-tuning, domain-specific retrieval-augmented generation (RAG), and autonomous agent swarms engineered for high-stakes enterprise decisions.",
    icon: "brain",
    capabilities: ["Private LLM Infrastructure", "Autonomous Agent Workflows", "Vector Database Topology", "Multi-Modal Reasoning"],
    isHero: true,
  },
  {
    id: "intelligent-automation",
    title: "Intelligent Process Automation",
    eyebrow: "Cognitive RPA",
    description: "Replace fragile legacy macros with vision-guided agents that execute complex document processing and back-office reconciliations.",
    icon: "cpu",
    capabilities: ["Document OCR & Extraction", "Self-Healing RPA"],
  },
  {
    id: "data-analytics",
    title: "Predictive Analytics & Telemetry",
    eyebrow: "Real-time Insights",
    description: "Convert raw high-frequency telemetry from thousands of endpoints into deterministic foresight and anomaly signals.",
    icon: "chart",
    capabilities: ["Streaming ETL", "Predictive Forecasting"],
  },
  {
    id: "cloud-engineering",
    title: "Cloud Engineering & Zero-Trust",
    eyebrow: "Resilient Systems",
    description: "Multi-cloud Kubernetes architectures hardened against catastrophic outages, featuring automated sovereign data compliance.",
    icon: "cloud",
    capabilities: ["Kubernetes Governance", "Zero-Trust Mesh"],
  },
  {
    id: "product-development",
    title: "Full-Lifecycle Product Engineering",
    eyebrow: "Turnkey Execution",
    description: "From concept architecture to global deployment: battle-tested frontends, high-performance backends, and rock-solid SLAs.",
    icon: "code",
    capabilities: ["Micro-Frontend Systems", "Sub-10ms APIs"],
  },
]
