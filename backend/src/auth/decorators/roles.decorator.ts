import { SetMetadata } from "@nestjs/common";
import { roles } from "@prisma/client";

export const ROLES_KEY = "roles";
export const Roles = (role: roles) => SetMetadata(ROLES_KEY, role);