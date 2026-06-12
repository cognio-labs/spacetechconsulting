import type { LucideIcon } from "lucide-react";
import { Building2, Home, Landmark, TrendingUp, Cpu, Building } from "lucide-react";
import propCommercial from "@/assets/prop-commercial.jpg";
import propResidential from "@/assets/prop-residential.jpg";
import propAffordable from "@/assets/prop-affordable.jpg";
import propMilitary from "@/assets/prop-military.jpg";
import propSfr from "@/assets/prop-sfr.jpg";
import propMixed from "@/assets/prop-mixed.jpg";

export type PropertyType = {
  slug: string;
  icon: LucideIcon;
  image: string;
  title: string;
  eyebrow: string;
  body: string;
  overview: string;
  features: string[];
  benefits: string[];
  process: string[];
};

export const propertyTypes: PropertyType[] = [
  {
    slug: "commercial",
    icon: Building2,
    image: propCommercial,
    title: "Commercial",
    eyebrow: "Enterprise lease operations",
    body: "We run Voyager Commercial for large portfolios. Lease management, CAM recoveries, tenant billing, Deal Manager configuration, and construction job tracking.",
    overview: "Commercial portfolios need clean lease administration, auditable recoveries, disciplined billing, and reporting that finance and asset teams can trust. SpaceTech helps teams stabilize Voyager Commercial and improve the operating model around it.",
    features: ["Lease administration setup", "CAM recovery configuration", "Tenant billing controls", "Deal Manager optimization", "Construction job tracking", "Portfolio reporting"],
    benefits: ["Cleaner billing cycles", "Stronger audit readiness", "Better asset-level visibility", "Reduced manual reconciliation"],
    process: ["Assess lease, billing, and recovery workflows.", "Prioritize configuration fixes and report gaps.", "Implement changes with testing and release notes.", "Monitor cycle health and continuous improvements."],
  },
  {
    slug: "residential-multifamily",
    icon: Home,
    image: propResidential,
    title: "Residential (Multifamily)",
    eyebrow: "Resident lifecycle performance",
    body: "Voyager Residential and RentCafe, set up end to end. Lead-to-lease workflows, resident portals, maintenance dispatch, budgeting, and revenue tracking.",
    overview: "Multifamily teams rely on fast resident workflows and dependable integrations across leasing, portals, payments, maintenance, budgeting, and reporting. We tune the end-to-end stack so operators can move with confidence.",
    features: ["Voyager Residential configuration", "RentCafe workflow support", "Lead-to-lease process design", "Maintenance dispatch setup", "Budget and revenue tracking", "Resident portal governance"],
    benefits: ["Faster leasing execution", "Better resident experience", "Reduced support friction", "Improved operating visibility"],
    process: ["Map the resident and staff journey.", "Identify friction in leasing, portal, and maintenance flows.", "Configure, test, and train role-based users.", "Track adoption and optimize recurring workflows."],
  },
  {
    slug: "affordable-housing",
    icon: Landmark,
    image: propAffordable,
    title: "Affordable Housing",
    eyebrow: "Compliance-ready housing systems",
    body: "LIHTC, HUD, state programs. We configure Voyager Affordable Housing for certifications, recerts, waiting lists, and audit-ready compliance reporting.",
    overview: "Affordable housing operations need precision. Certifications, recertifications, waiting lists, subsidy workflows, and reporting must be configured carefully so compliance and property teams stay aligned.",
    features: ["LIHTC and HUD workflow support", "Certification and recertification setup", "Waiting list configuration", "Compliance reporting", "Audit documentation support", "Program-specific controls"],
    benefits: ["Improved compliance confidence", "Fewer manual workarounds", "Clearer audit trails", "Better team handoffs"],
    process: ["Review program rules and current Yardi setup.", "Document compliance gaps and workflow risks.", "Configure controls, reports, and validation steps.", "Support audits, recerts, and continuous governance."],
  },
  {
    slug: "military-housing",
    icon: TrendingUp,
    image: propMilitary,
    title: "Military Housing",
    eyebrow: "Specialized privatized housing",
    body: "Privatized military housing runs on different rules. We configure Yardi for BAH tracking, occupancy reporting, work order management, and government compliance.",
    overview: "Military housing combines resident service expectations with government reporting, BAH tracking, occupancy rules, and work order accountability. We help teams run those specialized workflows in Yardi with discipline.",
    features: ["BAH tracking support", "Occupancy reporting", "Work order management", "Resident service workflows", "Government compliance reporting", "Operational dashboards"],
    benefits: ["More reliable compliance reporting", "Better maintenance accountability", "Stronger operational transparency", "Reduced reporting cycle stress"],
    process: ["Assess housing rules, data quality, and reporting needs.", "Prioritize compliance and maintenance workflow fixes.", "Deploy configuration changes and dashboards.", "Review KPIs and refine service governance."],
  },
  {
    slug: "single-family-rental",
    icon: Cpu,
    image: propSfr,
    title: "Single-Family Rental",
    eyebrow: "Scalable distributed portfolios",
    body: "SFR at scale needs a different Yardi setup. We build it for leasing automation, maintenance dispatch, owner distributions, property-level P&Ls, and investor reporting.",
    overview: "Single-family rental portfolios need scale without losing property-level clarity. We configure Yardi workflows for distributed operations, investor reporting, owner accounting, and field execution.",
    features: ["Leasing automation", "Maintenance dispatch workflows", "Owner distribution support", "Property-level P&Ls", "Investor reporting packages", "Portfolio KPI dashboards"],
    benefits: ["Cleaner scale operations", "Faster investor reporting", "Better property-level accountability", "Less manual spreadsheet work"],
    process: ["Segment portfolio workflows and stakeholder needs.", "Design scalable accounting, leasing, and maintenance patterns.", "Build reporting and automation with testing.", "Operationalize dashboards and support cadence."],
  },
  {
    slug: "mixed-use-properties",
    icon: Building,
    image: propMixed,
    title: "Mixed-Use Properties",
    eyebrow: "Unified residential and commercial",
    body: "Residential and commercial under one roof means one Yardi environment. We get the modules working together with shared GL structures and consolidated reporting across asset types.",
    overview: "Mixed-use assets need residential and commercial workflows to coexist without breaking finance, reporting, or operational clarity. SpaceTech aligns modules, GL structures, and reporting across the full property model.",
    features: ["Shared GL structure design", "Residential and commercial module alignment", "Consolidated reporting", "Lease and resident workflow support", "Cross-asset controls", "Executive dashboards"],
    benefits: ["One clearer operating model", "Better consolidated reporting", "Reduced module friction", "More confident decision-making"],
    process: ["Assess the current module and GL architecture.", "Define shared controls and reporting requirements.", "Configure and validate cross-module workflows.", "Monitor close cycles, reporting, and issue patterns."],
  },
];

export function getPropertyType(slug: string) {
  return propertyTypes.find((property) => property.slug === slug);
}
