declare module "@salesforce/apex/CustomLookupController.searchRecords" {
  export default function searchRecords(param: {searchKey: any, objectName: any}): Promise<any>;
}
declare module "@salesforce/apex/CustomLookupController.updateRecordField" {
  export default function updateRecordField(param: {parentId: any, parentObject: any, fieldApi: any, value: any}): Promise<any>;
}
