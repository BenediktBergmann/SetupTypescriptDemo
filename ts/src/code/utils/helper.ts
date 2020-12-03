export async function loadRecords(
    entityName: string,
    query: string,
    maxPageSize?: number,
    errorCallback?: (error: any) => void,
): Promise<any[] | null> {
    return new Promise<any>((resolve, reject: any) => {
        Xrm.WebApi.online.retrieveMultipleRecords(entityName, query, maxPageSize).then(
            function success(result) {
                if (
                    result !== null &&
                    result !== undefined &&
                    result.entities !== null &&
                    result.entities.length >= 1
                ) {
                    resolve(result.entities);
                } else {
                    resolve(null);
                }
            },
            function (error) {
                if (errorCallback !== null && errorCallback !== undefined) {
                    errorCallback(error);
                    reject();
                }
            },
        );
    });
}
