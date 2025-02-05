import multer from "multer";
export declare const storage: multer.StorageEngine;
/** 이미지 업로드 */
export declare const imageUpload: multer.Multer;
/** 이미지 제외한 파일 업로드 하는 멀터  */
export declare const fileUpload: multer.Multer;
/** 비디오만 업로드 가능하게 하는 멀터 */
export declare const videoUpload: multer.Multer;
