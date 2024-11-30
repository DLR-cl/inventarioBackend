import { BadRequestException } from '@nestjs/common';
import { PassThrough } from 'stream';
import { Request } from 'express'
import { createParserCsvOrXlsx } from './parser-factory.js';
import { Workbook } from 'exceljs';
const ALLOWED_MIME_TYPES: string[] = [
    'text/csv',
    'application/vnd.ms-excel',
    'text/comma-separated-values',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-excel',
  ] as const;

export class CvsOrXlsxMulterEngine {
    private destKey: string;
    private maxFileSize: number;
    constructor( opts: { destKey: string; maxFileSize: number}) {
        this.destKey = opts.destKey;
        this.maxFileSize = opts.maxFileSize;
    }

    async _handleFile(req: Request, file: any, cb: any){
        try {
            console.log(file);
            const contentLength = Number(req.headers['content-length']);
            if(
                typeof contentLength === 'number' && 
                contentLength > this.maxFileSize
            ) {
                throw new Error(`El tamaño máximo del archivo es ${this.maxFileSize} bytes.`);
            }
            const fileType = await import('file-type');
            const fileStream = await fileType.fileTypeStream(file.stream);
            const mime = fileStream.fileType?.mime ?? file.mimetype;
            if(!ALLOWED_MIME_TYPES.includes(mime)){
                throw new BadRequestException('El archivo debe ser *.csv o *.xlsx');
            }

            const replacementStream = new PassThrough();
            fileStream.pipe(replacementStream);
            const parser = createParserCsvOrXlsx(mime);
            const data = await parser.read(replacementStream);
            cb(null, {
                [this.destKey]:
                    mime === 'text/csv' ? data: (data as Workbook).getWorksheet(),
            });
        } catch(error){
            console.log(error)
            cb(error);
        }
    
    }
    
    public _removeFile(req: Request, file: any, cb: any){
        cb(null);
    }
}