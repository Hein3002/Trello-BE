import { injectable } from "tsyringe";
import { Database } from "../config/database";
import { BoardModel } from "../models/boardModel";

@injectable()
export class BoardReponsitory {
    constructor(private db: Database) { };

    async createBoard(board: BoardModel): Promise<any> {
        try {
            const sql = 'call CreateBoard(?, ?, ?, ?, ?, @err_code, @err_msg)';
            await this.db.query(sql, [
                board.workspace_id,
                board.name,
                board.description,
                board.background,
                board.status
            ]);
            return true;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async updateIBoard(board: BoardModel): Promise<any> {
        try {
            const sql = 'call UpdateIBoard(?, ?, ?, ?, ?, ?, @err_code, @err_msg)';
            const [results] = await this.db.query(sql, [
                board.board_id,
                board.workspace_id,
                board.name,
                board.description,
                board.background,
                board.status
            ]);

            if (Array.isArray(results) && results.length > 0) {
                return results[0];
            }

            return null;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async updateBoardWhenMoveColumn(board: BoardModel): Promise<any> {
        try {
            const sql = 'call UpdateBoardWhenMoveColumn(?, ?, @err_code, @err_msg)';
            await this.db.query(sql, [
                board.board_id,
                board.column_id_order
            ]);

            return true;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async getBoardById(id: string): Promise<any> {
        try {
            const sql = 'call GetBoardByID(?, @err_code, @err_msg)';
            const [results] = await this.db.query(sql, [id]);

            if (Array.isArray(results) && results.length > 0) {
                return results[0];
            }

            return null;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async deleteBoard(id: string): Promise<any> {
        try {
            const sql = 'call DeleteBoard(?, @err_code, @err_msg)';
            const [results] = await this.db.query(sql, [id]);

            if (Array.isArray(results) && results.length > 0) {
                return results[0];
            }

            return null;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}