export async function loadRecords(
    entityName: string,
    query: string,
    maxPageSize?: number,
    errorCallback?: (error: any) => void,
): Promise<any>{
    try {
        const result: any = await Xrm.WebApi.online.retrieveMultipleRecords(entityName, query, maxPageSize);

        return result?.entities?.length >= 1 ? result.entities : null;
    } catch (e: any) {
        if (errorCallback != null) errorCallback(e);

        throw Error();
    }
}
