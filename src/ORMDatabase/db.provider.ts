import { DataSource } from "typeorm";

export const DbProvider = [{
    provide:'DATA_SOURCE',
    useFactory:async ()=>{
        const dataSource = new DataSource({
            type:'postgres',
            host:'localhost',
            port:5432,
            username:'root',
            password:'1234',
            database:"json_dbnew",
            synchronize: true,

        });
        return dataSource.initialize();

    }
}]