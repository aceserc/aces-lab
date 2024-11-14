import { z } from "zod";

export const NonEmptyString = (label: string) => {
  return z.string({
    message: `${label} can't be empty`,
  }).min(1, {
    message: `${label} can't be empty`,
  }).refine(val => val.trim() !== "", {
    message: `${label} can't be empty`,
  });
};

export const PositiveNumber = (label: string) => {
  return z.number({
    message: `${label} must be a positive number`,
  }).int().positive({
    message: `${label} must be a positive number`,
  });
};

export const URL = (label: string) => {
  return z.string({
    message: `${label} must be a valid URL`,
  }).url({
    message: `${label} must be a valid URL`,
  });
};

export const Email = (label: string) => {
  return z.string({
    message: `${label} must be a valid email`,
  }).email({
    message: `${label} must be a valid email`,
  });
};
