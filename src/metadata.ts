import { ApiManager, QueryDefinition, Type } from '@soft/apimanager';
import { Authentication } from '@soft/authentication';
import { plainToClass } from 'class-transformer';

export interface MetadataConfig{
  allCustomObjects: String;
  objects: String[];
  excludeNamespaces: Boolean
}

export class Metadata{
  apiManager: ApiManager;
  constructor(auth: Authentication) {
    console.log('\n\tService: Hello! I\'m the Service Module!');
    this.apiManager = new ApiManager(auth);
  }
  public async getModel(config: MetadataConfig) {

    if (config.allCustomObjects) {
      let instructions: QueryDefinition = plainToClass(QueryDefinition, {
        Name: 'DescribeGlobal',
        Type: Type.DESCRIBE_GLOBAL,
        Expression: {
          Query: 'SObject:*'
        },
        ExcludeNamespaces: config.excludeNamespaces
      }); 
      // config.objects = this.apiManager.execute(instructions);
    }
    //   conn.describeGlobal().then(res => {
    //     for (let i = 0; i < res.sobjects.length; i++) {
    //       let object = res.sobjects[i];
    //       if (config.objects === undefined)
    //         config.objects = [];

    //       // If the sObject is a real custom object
    //       if (object.custom && (object.name.indexOf('__c') !== -1)) {
    //         if (config.debug)
    //           utils.log('# excludeManagedPackage (' + config.excludeManagedPackage + '): ' + object.name, config);

    //         if (config.excludeManagedPackage) {
    //           if ((object.name.split('__').length - 1 < 2))
    //             config.objects.push(object.name);
    //         } else {
    //           config.objects.push(object.name);
    //         }
    //       }
    //     }

    //     if (config.debug)
    //       utils.log(JSON.stringify(config.objects), config);

    //     const downloader = new Downloader(config, logger, conn);
    //     const builder = new ExcelBuilder(config, logger);

    //     // Download metadata files
    //     downloader.execute().then(result => {
    //       logger(result + ' downloaded');
    //       // Generate the excel file
    //       builder.generate().then(result => {
    //         resolve();
    //       });
    //     })
    //   });
    // } else {
    
    // let instructions: QueryDefinition = plainToClass(QueryDefinition, {
    //   Name: 'DescribeSObjects',
    //   Type: Type.DESCRIBE,
    //   Query: 'SObject:*'
    // }); 

    // this.apiManager.execute(instructions);
  }
}  
