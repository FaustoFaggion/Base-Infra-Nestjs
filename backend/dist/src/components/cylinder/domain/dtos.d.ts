export declare class CylinderForceDto {
    pressure: number;
    pressure_unit: string;
    piston_diam: number;
    rod_diam: number;
    diam_unit: string;
}
export declare class CylinderVelocityDto {
    flow: number;
    flow_unit: string;
    piston_diam: number;
    rod_diam: number;
    diam_unit: string;
}
export declare class CylinderVelocityResponseDto {
    velocity: number;
    velocity_unit: number;
    return_flow: number;
    flow_unit: string;
}
export declare class CylinderDiameterDto {
    force: number;
    force_unit: string;
    pressure: number;
    pressure_unit: string;
}
