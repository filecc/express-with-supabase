

export default class CustomError extends Error {
    status: string;
    code: number;

    constructor(message: string, status: string, code: number) {
        super(message);
        this.status = status;
        this.code = code;
    }
}
