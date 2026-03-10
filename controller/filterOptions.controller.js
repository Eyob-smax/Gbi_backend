import { createPrismaClient } from "../models/DatabaseConfig.js";
import { asyncHandler } from "../utils/util.js";

const prisma = createPrismaClient().client;

// Get unique filter values for dropdowns
export const getFilterOptions = asyncHandler(async (req, res) => {
  // Get unique batch numbers
  const batches = await prisma.universityusers.findMany({
    select: { batch: true },
    distinct: ['batch'],
    orderBy: { batch: 'asc' }
  });

  // Get unique departments
  const departments = await prisma.universityusers.findMany({
    select: { departmentname: true },
    distinct: ['departmentname'],
    orderBy: { departmentname: 'asc' }
  });

  res.json({
    success: true,
    filterOptions: {
      batches: batches.map(b => b.batch),
      departments: departments.map(d => d.departmentname),
      genders: ["Male", "Female"],
      participationTypes: [
        "None",
        "Gbi_Gubaye_Secretariat",
        "Audit_and_Inspection_Section",
        "Education_and_Apostolic_Service_Section",
        "Accounting_and_Assets_Section",
        "Development_and_Income_Collection_Section",
        "Languages_and_Special_Interests_Section",
        "Hymns_and_Arts_Section",
        "Planning_Monitoring_Reports_and_Information_Management_Section",
        "Professional_and_Community_Development_Section",
        "Batch_and_Programs_Coordination_Section",
        "Member_Care_Advice_and_Capacity_Building_Section"
      ],
      sponsorshipTypes: ["Government", "Self_Sponsored", "Scholarship"],
      clergyStatuses: ["None", "Deacon", "Priest", "Other"]
    }
  });
});
