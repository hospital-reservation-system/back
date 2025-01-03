import HttpException from "@/api/common/exceptions/http.exception";
import { AdminService } from "@/api/admin/service/admin.service.type";
import { AdminRepository } from "@/api/admin/repository/admin.repository";
import { HospitalRepository } from "@/api/admin/repository/hospital.repository";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

export class AdminServiceImpl implements AdminService {
  constructor(
    private readonly _adminRepository: AdminRepository,
    private readonly _hospitalRepository: HospitalRepository,
  ) {}

  /** 회원가입(role = admin, hospital) */
  async signUp(params: Omit<IAdmin, "id" | "role">): Promise<IAdmin> {
    try {
          const findAdmin = await this._adminRepository.findByEmail(params.email);
          
          if (findAdmin) {
            throw new HttpException(409, "이미 존재하는 이메일입니다.");
          }
    
          const saltedPassword = await bcrypt.hash(params.password, 12);
    
          const newAdmin = await this._adminRepository.signup({
            ...params,
            password: saltedPassword,
            role: "admin",
          });
    
          return newAdmin;
    
        } catch (error) {
          throw error;
        }
  }  

  /** 관리자 전체 조회(role = admin) */
  async getAdmins(): Promise<IAdmin[]> {
    const admins = await this._adminRepository.getAdmins();
    return admins;
  }

  /** 관리자 조회(role = admin) */
  async getAdmin(id: string): Promise<IAdmin> {
    const admin = await this._adminRepository.getAdmin(id);
    if (!admin) {
      throw new HttpException(404, "해당 관리자는 존재하지 않습니다.");
    }
    return admin;
  }

  /** 관리자 수정(role = admin) */
  async updateAdmin(id: string, params: Partial<Omit<IAdmin, "id" | "order">>): Promise<void> {
    const findAdmin = await this._adminRepository.findById(id);

    if (!findAdmin) {
      throw new HttpException(404, "해당 관리자는 존재하지 않습니다.");
    }

    const updatedAdmin = await this._adminRepository.updateAdmin(id, {...params});

    return updatedAdmin;
  }

  /** 관리자 삭제(role = admin) */
  async deleteAdmin(id: string): Promise<void> {
    const admin = await this._adminRepository.findById(id);
    if (!admin) {
      throw new HttpException(404, "해당 관리자는 존재하지 않습니다.");
    }
    await this._adminRepository.deleteAdmin(id);
    return;
  }

  /** 병원 목록 조회(role = admin) */
  async getHospitals(): Promise<IHospital[]> {
    const hospitals = await this._hospitalRepository.getHospitals();  
    return hospitals;
  }
  
}