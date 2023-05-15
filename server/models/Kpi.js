import mongoose from "mongoose";

const KpiSchema = new mongoose.Schema(
  {
    totalPurchases: Number,
    totalSales: Number,
    totalExpenses: Number,
    totalProfit: Number,
    totalCustomers: Number,
    ratingAvg: Number,
    topTenShipCities: {
      type: Map,
      of: String,
    },
    salesAvgByFullfilment: {
      type: Map,
      of: Number,
    },
    customerSatisfaction: {
      type: Map,
      of: Number,
    },
    salesAvg: {
      type: Map,
      of: Number,
    },
    cartStatus: {
      type: Map,
      of: Number,
    },
    monthlyData: [
      {
        month: String,
        totalProfit: Number,
      },
    ],
    dailyData: [
      {
        date: String,
        totalSales: Number,
      },
    ],
  },
  { timestamps: true }
);

const Kpi = mongoose.model("Kpi", KpiSchema);
export default Kpi;
