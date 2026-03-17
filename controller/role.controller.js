import { createPrismaClient } from "../models/DatabaseConfig.js";
import { AppError } from "../utils/util.js";

const prisma = createPrismaClient().client;

// Create a new role
export const createRole = async (req, res, next) => {
  try {
    const { name, ...permissions } = req.body;

    if (!name) {
      return next(new AppError("Role name is required", 400));
    }

    const existingRole = await prisma.role.findUnique({
      where: { name },
    });

    if (existingRole) {
      return next(new AppError("Role with this name already exists", 400));
    }

    const newRole = await prisma.role.create({
      data: {
        name,
        ...permissions,
      },
    });

    res.status(201).json({
      success: true,
      message: "Role created successfully",
      data: newRole,
    });
  } catch (error) {
    next(new AppError(error.message, 500));
  }
};

// Get all roles
export const getRoles = async (req, res, next) => {
  try {
    const roles = await prisma.role.findMany({
      orderBy: { id: "asc" },
    });

    res.status(200).json({
      success: true,
      data: roles,
    });
  } catch (error) {
    next(new AppError(error.message, 500));
  }
};

// Get a single role by ID
export const getRole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const role = await prisma.role.findUnique({
      where: { id: parseInt(id) },
    });

    if (!role) {
      return next(new AppError("Role not found", 404));
    }

    res.status(200).json({
      success: true,
      data: role,
    });
  } catch (error) {
    next(new AppError(error.message, 500));
  }
};

// Update a role
export const updateRole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, ...permissions } = req.body;

    const role = await prisma.role.findUnique({
      where: { id: parseInt(id) },
    });

    if (!role) {
      return next(new AppError("Role not found", 404));
    }

    // Check if updating to an existing name
    if (name && name !== role.name) {
      const existingName = await prisma.role.findUnique({
        where: { name },
      });
      if (existingName) {
        return next(new AppError("Role with this name already exists", 400));
      }
    }

    const updatedRole = await prisma.role.update({
      where: { id: parseInt(id) },
      data: {
        name: name || role.name,
        ...permissions,
      },
    });

    res.status(200).json({
      success: true,
      message: "Role updated successfully",
      data: updatedRole,
    });
  } catch (error) {
    next(new AppError(error.message, 500));
  }
};

// Delete a role
export const deleteRole = async (req, res, next) => {
  try {
    const { id } = req.params;

    const role = await prisma.role.findUnique({
      where: { id: parseInt(id) },
    });

    if (!role) {
      return next(new AppError("Role not found", 404));
    }

    await prisma.role.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({
      success: true,
      message: "Role deleted successfully",
    });
  } catch (error) {
    next(new AppError(error.message, 500));
  }
};
