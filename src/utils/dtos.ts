export interface RegisterUserDto {
  id: string;
  name: string;
  password: string;
  phone: string;
  departmentId: number;
  jobTitleId: number;
  managerID: string;
  isActive: boolean;
}
export interface LoginUserDto {
  id: string;
  password: string;
}
