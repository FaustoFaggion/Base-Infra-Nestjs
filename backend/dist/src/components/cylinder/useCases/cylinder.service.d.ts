import { CylinderDiameterDto, CylinderForceDto, CylinderVelocityDto, CylinderVelocityResponseDto } from "../domain/dtos";
export declare class CylinderService {
    private cylinderArea;
    forceAdvance(dto: CylinderForceDto): Promise<number>;
    forceRetraction(dto: CylinderForceDto): Promise<number>;
    velocityAdvance(dto: CylinderVelocityDto): Promise<CylinderVelocityResponseDto>;
    velocityRetraction(dto: CylinderVelocityDto): Promise<CylinderVelocityResponseDto>;
    diameter(dto: CylinderDiameterDto): Promise<any>;
}
