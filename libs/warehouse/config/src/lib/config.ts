export const WAREHOUSE_MESSAGE_HOST = process.env['WAREHOUSE_MESSAGE_HOST'] ?
                                        process.env['WAREHOUSE_MESSAGE_HOST'] :
                                        '127.0.0.1';
export const WAREHOUSE_MESSAGE_PORT = process.env['WAREHOUSE_MESSAGE_PORT'] ?
                                        parseInt(process.env['WAREHOUSE_MESSAGE_PORT']) :
                                        3200;
