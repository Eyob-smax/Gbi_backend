import { JoiValidator } from "../../utils/util.js";
import { prisma } from "../../models/DatabaseConfig.js";

const schema = JoiValidator();
import express from "express";

const getusers = express.Router();

getusers.get("/users", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

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
