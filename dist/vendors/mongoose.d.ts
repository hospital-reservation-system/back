import mongoosePrev from "mongoose";
declare const mongoose: typeof mongoosePrev & {
    generateCustomId(prefix: string): string;
};
export default mongoose;
