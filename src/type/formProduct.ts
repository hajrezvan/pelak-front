export interface IFormProduct {
  name: string;
  email: string;
  phone: string;
  contactMethods: ("t" | "w")[];
  description: string; // در مرحله اول خالی، در مرحله دوم پر
}