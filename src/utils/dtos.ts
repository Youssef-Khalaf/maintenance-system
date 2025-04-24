export interface RegisterUserDto {
  id: string;
  name: string;
  password: string;
  phone: string;
  departmentId: number;
  jobTitleId: number;
  managerID: string;
  isActive: boolean;
  fromMobile: boolean;
}
export interface LoginUserDto {
  id: string;
  password: string;
  fromMobile: boolean;
}
export interface JWTPayload {
  id: string;
  name: string;
  phone: string;
  departmentId: number;
  jobTitleId: number;
  managerID: string;
  isActive: boolean;
}
