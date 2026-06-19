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
  features: Array<{ title: string; items: string[] }>;
  benefits: string[];
  process: string[];
  visible?: boolean;
};

export const propertyTypes: PropertyType[] = [
  {
    slug: "commercial",
    icon: Building2,
    image: propCommercial,
    title: "Commercial",
    eyebrow: "Enterprise lease operations",
    body: "We run Voyager Commercial for large portfolios. With hands-on Yardi experience on lease administration, tenant billing, Bank Book, CAM recoveries/Outgoings, Procure to Pay, Construction Manager, Facilities Manager, Deal Manager, SharePoint, and Fixed Assets.",
    overview: "We run Voyager Commercial for large portfolios. With hands-on Yardi experience on lease administration, tenant billing, Bank Book, CAM recoveries/Outgoings, Procure to Pay, Construction Manager, Facilities Manager, Deal Manager, SharePoint, and Fixed Assets.",
    features: [
      { title: "Lease administration setup", items: ["Automated lease workflows", "Critical date compliance"] },
      { title: "CAM recoveries/Outgoings configuration", items: ["Recovery estimates and letters/correspondence", "Recovery reconciliation/washup"] },
      { title: "Tenant billing controls", items: ["Automated invoicing", "Automated bank reconciliation (bank book)"] },
      { title: "Deal Manager optimization", items: ["Pipeline visibility", "Workflow automation"] },
      { title: "Construction job tracking", items: ["Budget monitoring", "Project milestones"] },
      { title: "Facility Management", items: ["Reactive Work orders", "Proactive PPM & Inspections", "Connect Tenant, Facility manager & vendor"] },
      { title: "Portfolio reporting", items: ["Real-time dashboards", "Performance forecasting"] },
    ],
    benefits: ["Cleaner billing cycles", "Stronger audit readiness", "Better asset-level visibility", "Reduced manual reconciliation"],
    process: ["Assess lease, billing, and recovery workflows.", "Prioritize configuration fixes and report gaps.", "Implement changes with testing and release notes.", "Monitor system health and continuous improvements."],
  },
  {
    slug: "residential-multifamily",
    icon: Home,
    image: propResidential,
    title: "Residential",
    eyebrow: "Resident lifecycle performance",
    body: "Voyager Residential and RentCafe, set up end to end. Lead-to-lease workflows, resident portals, maintenance dispatch, budgeting, and revenue tracking.",
    overview: "Multifamily teams rely on fast resident workflows and dependable integrations across leasing, portals, payments, maintenance, budgeting, and reporting. We tune the end-to-end stack so operators can move with confidence.",
    features: [
      { title: "Voyager Residential configuration", items: ["Property setup", "Lease workflows"] },
      { title: "RentCafe workflow support", items: ["Resident onboarding", "Portal automation"] },
      { title: "Lead-to-lease process design", items: ["Prospect tracking", "Leasing optimization"] },
      { title: "Maintenance dispatch setup", items: ["Work order routing", "Vendor coordination"] },
      { title: "Budget and revenue tracking", items: ["Financial forecasting", "Variance controls"] },
      { title: "Resident portal governance", items: ["Access management", "Resident engagement"] },
    ],
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
    features: [
      { title: "LIHTC and HUD workflow support", items: ["Tenant eligibility", "Affordable housing operations"] },
      { title: "Certification and recertification setup", items: ["Income verification", "Compliance tracking"] },
      { title: "Waiting list configuration", items: ["Applicant screening", "Occupancy management"] },
      { title: "Compliance reporting", items: ["Audit-ready reports", "Regulatory insights"] },
      { title: "Audit documentation support", items: ["Evidence tracking", "Audit preparation"] },
      { title: "Program-specific controls", items: ["HUD program rules", "Policy enforcement"] },
    ],
    benefits: ["Improved compliance confidence", "Fewer manual workarounds", "Clearer audit trails", "Better team handoffs"],
    process: ["Review program rules and current Yardi setup.", "Document compliance gaps and workflow risks.", "Configure controls, reports, and validation steps.", "Support audits, recerts, and continuous governance."],
    visible: false,
  },
  {
    slug: "military-housing",
    icon: TrendingUp,
    image: propMilitary,
    title: "Military Housing",
    eyebrow: "Specialized privatized housing",
    body: "Privatized military housing runs on different rules. We configure Yardi for BAH tracking, occupancy reporting, work order management, and government compliance.",
    overview: "Military housing combines resident service expectations with government reporting, BAH tracking, occupancy rules, and work order accountability. We help teams run those specialized workflows in Yardi with discipline.",
    features: [
      { title: "BAH tracking support", items: ["Allowance validation", "Resident eligibility"] },
      { title: "Occupancy reporting", items: ["Vacancy insights", "Portfolio monitoring"] },
      { title: "Work order management", items: ["Maintenance dispatch", "Lifecycle tracking"] },
      { title: "Resident service workflows", items: ["Request management", "Resident experience"] },
      { title: "Government compliance reporting", items: ["Audit controls", "Regulatory automation"] },
      { title: "Operational dashboards", items: ["KPI analytics", "Portfolio insights"] },
    ],
    benefits: ["More reliable compliance reporting", "Better maintenance accountability", "Stronger operational transparency", "Reduced reporting cycle stress"],
    process: ["Assess housing rules, data quality, and reporting needs.", "Prioritize compliance and maintenance workflow fixes.", "Deploy configuration changes and dashboards.", "Review KPIs and refine service governance."],
    visible: false,
  },
  {
    slug: "single-family-rental",
    icon: Cpu,
    image: propSfr,
    title: "Single Family Rental (SFR)",
    eyebrow: "Scalable distributed portfolios",
    body: "SFR at scale needs a different Yardi setup. We build it for leasing automation, maintenance dispatch, owner distributions, property-level P&Ls, and investor reporting.",
    overview: "Single-family rental portfolios need scale without losing property-level clarity. We configure Yardi workflows for distributed operations, investor reporting, owner accounting, and field execution.",
    features: [
      { title: "Leasing automation", items: ["Lead-to-lease workflows", "Automated renewals"] },
      { title: "Maintenance dispatch workflows", items: ["Vendor tracking", "Service resolution"] },
      { title: "Owner distribution support", items: ["Automated payouts", "Financial transparency"] },
      { title: "Property-level P&Ls", items: ["Revenue visibility", "Profitability insights"] },
      { title: "Investor reporting packages", items: ["Custom statements", "Portfolio analytics"] },
      { title: "Portfolio KPI dashboards", items: ["Operational metrics", "Business insights"] },
    ],
    benefits: ["Cleaner scale operations", "Faster investor reporting", "Better property-level accountability", "Less manual spreadsheet work"],
    process: ["Segment portfolio workflows and stakeholder needs.", "Design scalable accounting, leasing, and maintenance patterns.", "Build reporting and automation with testing.", "Operationalize dashboards and support cadence."],
    visible: false,
  },
  {
    slug: "mixed-use-properties",
    icon: Building,
    image: propMixed,
    title: "Mixed Portfolio",
    eyebrow: "Unified residential and commercial",
    body: "Residential and commercial under one roof means one Yardi environment. We get the modules working together with shared GL structures and consolidated reporting across asset types.",
    overview: "Mixed-use assets need residential and commercial workflows to coexist without breaking finance, reporting, or operational clarity. SpaceTech aligns modules, GL structures, and reporting across the full property model.",
    features: [
      { title: "Shared GL structure design", items: ["Standardized accounting", "Unified operations"] },
      { title: "Residential and commercial module alignment", items: ["Cross-module integration", "Consistent workflows"] },
      { title: "Consolidated reporting", items: ["Financial visibility", "Performance analytics"] },
      { title: "Lease and resident workflow support", items: ["Lifecycle management", "Operational automation"] },
      { title: "Cross-asset controls", items: ["Centralized governance", "Scalable compliance"] },
      { title: "Executive dashboards", items: ["Real-time KPIs", "Strategic insights"] },
    ],
    benefits: ["One clearer operating model", "Better consolidated reporting", "Reduced module friction", "More confident decision-making"],
    process: ["Assess the current module and GL architecture.", "Define shared controls and reporting requirements.", "Configure and validate cross-module workflows.", "Monitor close cycles, reporting, and issue patterns."],
  },
];

export const visiblePropertyTypes = propertyTypes.filter((property) => property.visible !== false);

export function getPropertyType(slug: string) {
  return visiblePropertyTypes.find((property) => property.slug === slug);
}
