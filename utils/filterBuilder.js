export const buildUserFilters = (query) => {
  const where = {};

  // Helper to check if value is valid (not null, undefined, or string 'null')
  const isValid = (val) => val && val !== 'null' && val !== 'undefined';

  // Gender filter (User table)
  if (isValid(query.gender) && ["Male", "Female"].includes(query.gender)) {
    where.gender = query.gender;
  }

  // Clergy status filter (User table)
  if (isValid(query.clergicalstatus) && ["Deacon", "Priest", "Other", "None"].includes(query.clergicalstatus)) {
    where.clergicalstatus = query.clergicalstatus;
  }

  // Year filter - filters by last 2 digits of studentid (e.g., UGR-0650-16 for 2016)
  if (isValid(query.year)) {
    const year = query.year.toString().slice(-2); // Get last 2 digits (e.g., "2016" -> "16")
    where.studentid = { endsWith: `-${year}` };
  }

  // University-related filters (nested relation)
  const universityWhere = {};

  if (isValid(query.batch)) {
    const batch = parseInt(query.batch, 10);
    if (!isNaN(batch)) {
      universityWhere.batch = batch;
    }
  }

  if (isValid(query.participation)) {
    universityWhere.participation = query.participation;
  }

  if (isValid(query.sponsorshiptype) && ["Government", "Self_Sponsored", "Scholarship"].includes(query.sponsorshiptype)) {
    universityWhere.sponsorshiptype = query.sponsorshiptype;
  }

  if (isValid(query.cafeteriaaccess)) {
    universityWhere.cafeteriaaccess = query.cafeteriaaccess === "true";
  }

  if (isValid(query.tookcourse)) {
    universityWhere.tookcourse = query.tookcourse === "true";
  }

  if (isValid(query.departmentname)) {
    universityWhere.departmentname = { contains: query.departmentname, mode: "insensitive" };
  }

  // Apply nested filter only if there are university filters
  if (Object.keys(universityWhere).length > 0) {
    where.universityusers = universityWhere;
  }

  return where;
};
