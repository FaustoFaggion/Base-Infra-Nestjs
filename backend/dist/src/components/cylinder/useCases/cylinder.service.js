"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CylinderService = void 0;
class CylinderService {
    cylinderArea(dto, direction) {
        let area;
        if (direction === 'advance') {
            area = ((Math.pow(dto.piston_diam, 2)) * Math.PI) / 4;
        }
        if (direction === 'retraction') {
            area = ((Math.pow(dto.piston_diam, 2) - Math.pow(dto.rod_diam, 2)) * Math.PI) / 4;
        }
        return area;
    }
    async forceAdvance(dto) {
        let area = this.cylinderArea(dto, "advance");
        let force = dto.piston_diam * area * 10;
        return force;
    }
    async forceRetraction(dto) {
        let area = this.cylinderArea(dto, 'retraction');
        let force = dto.pressure * area * 10;
        return force;
    }
    async velocityAdvance(dto) {
        let response;
        let piston_area = this.cylinderArea(dto, 'advance');
        let return_area = this.cylinderArea(dto, 'retraction');
        let velocity = dto.flow / piston_area;
        response.return_flow = velocity * return_area;
        response.velocity = velocity;
        return response;
    }
    async velocityRetraction(dto) {
        let response;
        let efetive_area = this.cylinderArea(dto, 'retraction');
        let return_area = this.cylinderArea(dto, 'advance');
        let velocity = dto.flow / efetive_area;
        response.return_flow = velocity * return_area;
        response.velocity = velocity;
        return response;
    }
    async diameter(dto) {
        let area = dto.force / (dto.pressure * 10);
        let diameter = Math.sqrt((area * 4) / Math.PI);
        return diameter;
    }
}
exports.CylinderService = CylinderService;
//# sourceMappingURL=cylinder.service.js.map