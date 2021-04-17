import fs from 'fs';
import path from 'path';
import { Data, Interface, Param } from './types';
import { get, transFirstLetterUpperCase } from './utils';

const HttpMethods = ['get', 'post', 'put', 'delete'];

class SwaggerParser {
    private nodeList:Interface[] = [];
    constructor() {
        this.nodeList = [];
    }

    init(root: string) {
        const file = fs.readFileSync(path.join(__dirname, root), 'utf-8');
        const json = JSON.parse(file);
        json['paths'] && this.structHttpRequest(json);
        return this.nodeList;
    }

    structHttpRequest(json: Data) {
        const paths = json['paths'];
        for(let path in paths) {
            HttpMethods.forEach((method) => {
                const httpRequest = paths[path][method];
                if(httpRequest) {
                    this.structRequest(httpRequest);
                    this.structResponse(httpRequest, json);
                }
            })
        }
    }

    structRequest(item: Data) {
        const params: Param[] = [];
        (item['parameters'] || []).forEach((p: Param) => {
            if(p.type !== 'array') {
                params.push({
                    name: p.name,
                    type: p.type,
                    required: p.required || false
                    
                });
            } else {
                params.push({
                    name: p.name,
                    type: {
                        type: p.type,
                        valueType: get(p, 'items.type')
                    },
                    required: p.required || false
                });   
            }
        });
        const request = {
            name: transFirstLetterUpperCase(item['operationId']) + 'Request',
            params
        };
        this.nodeList.push(request);
    }

    structResponse(item: Data, json: Data) {
        const params: Param[] = [];
        const paramsKeysString = get(item, 'responses.200.schema.$ref');
        if(!paramsKeysString) return;
        const paramsKeysList = paramsKeysString.split('/').slice(1).join('.');
        const paramsObject = get(json, paramsKeysList)['properties'];
        Object.keys(paramsObject).forEach((key: string) => {
            params.push({
                name: key,
                type: paramsObject[key].type,
                required: false
            })
        });
        const response = {
            name: transFirstLetterUpperCase(item['operationId']) + 'Response',
            params
        };
        this.nodeList.push(response);
    }
}

export default SwaggerParser;
