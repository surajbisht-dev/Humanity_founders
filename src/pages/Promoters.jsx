import PromoterTable from "../components/PromoterTable";

const promoters = [
  {
    name: "Emery Dokidis",
    contact: "+979970174715",
    leads: 12,
    rate: "50%",
    followUp: "28-4-2024",
    revenue: "$50",
    status: "Active",
  },
  {
    name: "Kadin Lipshutz",
    contact: "+971501948279",
    leads: 8,
    rate: "30%",
    followUp: "27-5-2024",
    revenue: "$900",
    status: "Active",
  },
  {
    name: "Randy Culhane",
    contact: "+971501598978",
    leads: 15,
    rate: "60%",
    followUp: "29-5-2024",
    revenue: "$1000",
    status: "Inactive",
  },
  {
    name: "Jaxson Vaccaro",
    contact: "+971522503635",
    leads: 10,
    rate: "45%",
    followUp: "30-6-2024",
    revenue: "$500",
    status: "Completed",
  },
  {
    name: "Jocelyn Levin",
    contact: "+971554315300",
    leads: 6,
    rate: "28%",
    followUp: "01-7-2024",
    revenue: "$1,500",
    status: "Inactive",
  },
  {
    name: "Maren Septimus",
    contact: "+971525620832",
    leads: 18,
    rate: "65%",
    followUp: "03-7-2024",
    revenue: "$2,000",
    status: "Completed",
  },
  {
    name: "Haylie Saris",
    contact: "+971503328228",
    leads: 13,
    rate: "58%",
    followUp: "05-7-2024",
    revenue: "$300",
    status: "Active",
  },
  {
    name: "Randy Herwitz",
    contact: "+971554231522",
    leads: 12,
    rate: "50%",
    followUp: "10-7-2024",
    revenue: "$600",
    status: "Inactive",
  },
];

export default function PromotersPage() {
  return <PromoterTable data={promoters} />;
}
