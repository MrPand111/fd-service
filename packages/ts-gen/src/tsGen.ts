import { existsSync, mkdirSync, writeFileSync } from 'fs';
import path from 'path';
import ts from 'typescript';
import SwaggerParser from './swagger';
import { Config, Interface, ObjectType } from './types';

class TsGen {
    private config: Config;
    constructor(config: Config) {
        this.config = config;
        this.init();
    }

    init() {
        const { root } = this.config;
        const declares = new SwaggerParser().init(root);
        const statements = this.genSource(declares);
        const tsFile: any = ts.createSourceFile(
            'index.ts',
            '',
            ts.ScriptTarget.Latest,
            false,
            ts.ScriptKind.TS
        );
        tsFile.statements = ts.factory.createNodeArray(statements);
        this.writeFile(tsFile);
    }

    writeFile(f: ts.SourceFile) {
        const { output } = this.config;
        const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
        const dir = path.join(__dirname, output, './service');
        if(!existsSync(dir)) {
            mkdirSync(dir);
        }
        writeFileSync(path.join(dir, '/index.ts'), printer.printFile(f), 'utf-8');
    }

    genSource(declares: Interface[]) {
        const nodeList: any[] = [];
        for(const s of declares) {
            nodeList.push(this.genInterface(s));
        }
        return nodeList;
    }

    genType(type: string | ObjectType): ts.TypeNode {
        if(type === 'string') return ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
        if(type === 'integer') return ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
        if(type === 'object') return ts.factory.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword);
        if(typeof type === 'object') {
            return ts.factory.createArrayTypeNode(
                this.genType(type.valueType)
            )
        }
        throw Error(`unsupport type ${JSON.stringify(type)}`);
    }

    genInterface(s: Interface) {
        return ts.factory.createInterfaceDeclaration(
            undefined,
            [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
            s.name,
            undefined,
            undefined,
            (s.params || []).map((item) => (
                ts.factory.createPropertySignature(
                    undefined,
                    item.name,
                    item.required === false ? undefined : ts.factory.createToken(ts.SyntaxKind.QuestionToken),
                    this.genType(item.type)
                )
            ))
        );
    }
}

export default TsGen;