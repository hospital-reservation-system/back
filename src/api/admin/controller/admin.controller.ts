import { NextFunction, Request, Response } from "express";
import { AdminService } from "@/api/admin/service/admin.service.type";

export default class AdminController {
  constructor(private _adminService: AdminService) {
    this.signup = this.signup.bind(this);
    this.getAdmins = this.getAdmins.bind(this);
    this.getAdmin = this.getAdmin.bind(this);
    this.updateAdmin = this.updateAdmin.bind(this);
    this.deleteAdmin = this.deleteAdmin.bind(this);
    this.getHospitals = this.getHospitals.bind(this);

    this.updateHospital = this.updateHospital.bind(this);
    this.deleteHospital = this.deleteHospital.bind(this);
    this.getHospital = this.getHospital.bind(this);
  }

  /** 회원가입(role = admin, hospital) */
  async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const admin = await this._adminService.signUp({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        role: req.body.role,
        hospital: req.body.hospital,
      });

      res.status(201).json({ message: "회원가입 성공", data: admin });
    } catch (error) {
      next(error);
    }
  }

  /** 관리자 전체 조회(role = admin) */
  async getAdmins(req: Request, res: Response, next: NextFunction) {
    try {
      const admins = await this._adminService.getAdmins();
      res.status(200).json({
        message: "관리자 회원 목록 조회 성공",
        data: admins,
      });
    } catch (error) {
      res.status(400).json({ message: "관리자 병원 목록 조회 실패" });
      next(error);
    }
  }

  /** 관리자 조회(role = admin) */
  async getAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const admin = await this._adminService.getAdmin(id);

      res.status(200).json({
        message: "관리자 상세 조회 성공",
        data: admin,
      });
    } catch (error) {
      next(error);
    }
  }

  /** 관리자 수정(role = admin) */
  async updateAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      // const { id } = req.params;
      // await this._adminService.updateAdmin(id, req.body);
      const admin = await this._adminService.updateAdmin(req.params.id, req.body);
      res.status(200).json({
        message: "관리자 수정 성공",
        data: admin,
      });
    } catch (error) {
      res.status(400).json({ message: "관리자 수정 실패" });
    }
  }

  /** 관리자 삭제(role = admin) */
  async deleteAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await this._adminService.deleteAdmin(id);
      res.status(200).json({ message: "관리자 삭제 성공" });
    } catch (error) {
      res.status(404).json({ message: "관리자 삭제 실패" });
      // next(error);
    }
  }

  /** 병원 목록 조회(role = admin) */
  async getHospitals(req: Request, res: Response, next: NextFunction) {
    try {
      const hospitals = await this._adminService.getHospitals();
      res.status(200).json({
        message: "관리자 병원 목록 조회 성공",
        data: hospitals,
      });
    } catch (error) {
      res.status(400).json({ message: "관리자 병원 목록 조회 실패" });
      next(error);
    }
  }

 /** 병원 수정(role = hospital) */
  async updateHospital(req: Request, res: Response, next: NextFunction) {
    try {
    // const { id } = req.params;
    // await this._adminService.updateHospital(id, req.body);
    const hospital = await this._adminService.updateHospital(req.params.id, req.body);
    res.status(200).json({
      message: "병원 수정 성공",
      data: hospital,
    });
    } catch (error) {
      res.status(400).json({ message: "병원 수정 실패" });
      // next(error);
    }
  }

  /** 병원 삭제(role = hospital) */
  async deleteHospital(req: Request, res: Response, next: NextFunction) {
    try {
    const { id } = req.params;
    await this._adminService.deleteHospital(id);
      res.status(200).json({ message: "병원 삭제 성공" });
    } catch (error) {
      next(error);
    }
  }

  /** 병원 상세 조회(role = hospital) */
  async getHospital(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const hospital = await this._adminService.getHospital(id);
      res.status(200).json({
        message: "병원 상세 조회 성공",
        data: hospital,
      });
    } catch (error) {
      res.status(404).json({ message: "병원 상세 조회 실패" });
      // next(error);
    }
  }
}