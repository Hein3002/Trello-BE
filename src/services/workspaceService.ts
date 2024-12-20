import { injectable } from "tsyringe";
import { WorkspaceReponsitory } from "../repositories/workspaceRepository";
import { WorkspaceModel } from "../models/workspaceModel";

@injectable()
export class WorkspaceService {
    constructor(private workspaceReponsitory: WorkspaceReponsitory) {};

    async createWorkspace(workspace: WorkspaceModel): Promise<any> {
        return this.workspaceReponsitory.createWorkspace(workspace);
    }

    async updateWorkspace(workspace: WorkspaceModel): Promise<any> {
        return this.workspaceReponsitory.updateWorkspace(workspace);
    }

    async getWorkspaceById(id: string): Promise<any> {
        return this.workspaceReponsitory.getWorkspaceById(id);
    }

    async deleteWorkspace(id: string): Promise<any> {
        return this.workspaceReponsitory.deleteWorkspace(id);
    }

    async createMember(workspace: WorkspaceModel): Promise<any> {
        return this.workspaceReponsitory.createMember(workspace);
    }

    async getAllWorkspaceByUserIdMember(id: string): Promise<any> {
        return this.workspaceReponsitory.getAllWorkspaceByUserIdMember(id);
    }

    async getAllWorkspaceByUserIdGuest(id: string): Promise<any> {
        return this.workspaceReponsitory.getAllWorkspaceByUserIdGuest(id);
    }
}