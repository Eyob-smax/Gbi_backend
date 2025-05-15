import { prisma } from "../../models/DatabaseConfig.js";
import express from "express";

const getusers = express.Router();

getusers.get("/users", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  if (isNaN(page) || isNaN(limit)) {
    return res.status(400).json({
      success: false,
      message: "page or limit query format is not valid!",
    });
  }

  try {
    const [users, totalUsers] = await Promise.all([
      prisma.user.findMany({
        skip,
        take: limit,
        orderBy: { userid: "desc" },
        include: { universityusers: true },
      }),
      prisma.user.count(),
    ]);

    res.status(200).json({
      success: true,
      page,
      totalPages: Math.ceil(totalUsers / limit),
      totalUsers,
      users,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

export default getusers;
