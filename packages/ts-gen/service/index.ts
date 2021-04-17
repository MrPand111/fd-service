export interface AddFunctionListUsingPOSTRequest {
    string?: string;
    strings: string[];
    type?: string;
}
export interface AddFunctionListUsingPOSTResponse {
    code: number;
    data: object;
    message: string;
}
export interface DeleteFunctionListUsingDELETERequest {
    string?: string;
    strings?: string[];
}
export interface DeleteFunctionListUsingDELETEResponse {
    code: number;
    data: object;
    message: string;
}
export interface DeleteFunctionListsUsingDELETERequest {
    string?: string;
}
export interface DeleteFunctionListsUsingDELETEResponse {
    code: number;
    data: object;
    message: string;
}
export interface SelectFunctionListUsingGETRequest {
}
export interface SelectFunctionListUsingGETResponse {
    code: number;
    data: object;
    message: string;
}
export interface LoginUsingPOSTRequest {
    password?: string;
    username?: string;
}
export interface LoginUsingPOSTResponse {
    code: number;
    data: object;
    message: string;
}
export interface LogoutUsingGETRequest {
    username: string;
}
export interface LogoutUsingGETResponse {
    code: number;
    data: object;
    message: string;
}
export interface AddRoleUsingPOSTRequest {
    roleName?: string;
    string: string;
    strings: string[];
}
export interface AddRoleUsingPOSTResponse {
    code: number;
    data: object;
    message: string;
}
export interface DeleteRoleUsingDELETERequest {
    roleName?: string;
}
export interface DeleteRoleUsingDELETEResponse {
    code: number;
    data: object;
    message: string;
}
export interface DeleteRoleFunctionUsingDELETERequest {
    roleName?: string;
    string?: string;
}
export interface DeleteRoleFunctionUsingDELETEResponse {
    code: number;
    data: object;
    message: string;
}
export interface DeleteRoleFunctionAllUsingDELETERequest {
    roleName?: string;
}
export interface DeleteRoleFunctionAllUsingDELETEResponse {
    code: number;
    data: object;
    message: string;
}
export interface DeleteRoleFunctionsUsingDELETERequest {
    roleName?: string;
    string: string;
    strings?: string[];
}
export interface DeleteRoleFunctionsUsingDELETEResponse {
    code: number;
    data: object;
    message: string;
}
export interface SelectRoleFunctionUsingGETRequest {
    roleName?: string;
}
export interface SelectRoleFunctionUsingGETResponse {
    code: number;
    data: object;
    message: string;
}
export interface SelectRolesUsingGETRequest {
}
export interface SelectRolesUsingGETResponse {
    code: number;
    data: object;
    message: string;
}
export interface UpdateRoleNameUsingPUTRequest {
    roleName?: string;
    updateRoleName?: string;
}
export interface UpdateRoleNameUsingPUTResponse {
    code: number;
    data: object;
    message: string;
}
export interface TestUsingGETRequest {
}
export interface TestUsingGETResponse {
    code: number;
    data: object;
    message: string;
}
