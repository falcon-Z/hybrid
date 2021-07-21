import { Request, ResponseToolkit, ResponseObject } from '@hapi/hapi';

export async function index(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    const response = h.response("Server works");
    return response;
}