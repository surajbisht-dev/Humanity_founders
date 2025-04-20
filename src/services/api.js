export const getDashboardData = () =>
  Promise.resolve({
    promoters: 1234,
    conversionRate: "23.5%",
    revenue: "$12,345",
    campaigns: 3,
  });

export const getCampaigns = () =>
  Promise.resolve([
    {
      name: "Summer Referral Program",
      startDate: "5/31/2024",
      endDate: "8/30/2024",
      referrals: 245,
      conversion: "32%",
      roi: "287%",
    },
    {
      name: "Early Bird Special",
      startDate: "8/20/2024",
      endDate: "9/19/2024",
      referrals: 300,
      conversion: "40%",
      roi: "320%",
    },
  ]);

export const getPromoters = () =>
  Promise.resolve([
    {
      name: "Emery Dokidis",
      contact: "+979970174715",
      leads: 12,
      conversionRate: "50%",
      revenue: "$1,200",
    },
    {
      name: "Randy Culhane",
      contact: "+971501598978",
      leads: 15,
      conversionRate: "60%",
      revenue: "$880",
    },
    {
      name: "Jaxson Vaccaro",
      contact: "+971522503635",
      leads: 10,
      conversionRate: "45%",
      revenue: "$500",
    },
  ]);

export const getLeads = () =>
  Promise.resolve([
    {
      name: "Emery Dokidis",
      email: "emerydoki@gmail.com",
      contact: "+979970174715",
      coupon: "SAVE10NOW",
      status: "Pending",
    },
    {
      name: "Randy Culhane",
      email: "randyculhane@gmail.com",
      contact: "+971501598978",
      coupon: "EXCLUSIVE20",
      status: "Completed",
    },
    {
      name: "Jocelyn Levin",
      email: "jocelynlevin@gmail.com",
      contact: "+971554315300",
      coupon: "FIRSTORDER10",
      status: "Pending",
    },
  ]);

export const getPayouts = () =>
  Promise.resolve([
    {
      id: "#P-1048",
      promoter: "Emery Dokidis",
      points: 500,
      rewardDate: "Apr 5, 2025",
      campaign: "Spring Boost",
      status: "Paid",
    },
    {
      id: "#P-1046",
      promoter: "Randy Culhane",
      points: 300,
      rewardDate: "Apr 5, 2025",
      campaign: "Early Bird Special",
      status: "Disputed",
    },
    {
      id: "#P-1045",
      promoter: "Jaxson Vaccaro",
      points: 100,
      rewardDate: "Apr 5, 2025",
      campaign: "Early Bird Special",
      status: "Paid",
    },
  ]);
