import * as helper from "./utils/helper";

export async function onLoad(executionContext: Xrm.Events.EventContext): Promise<void> {
    const formContext = executionContext.getFormContext();

    const openChildren = await getActiveChildAccounts(formContext.data.entity.getId());

    if (openChildren !== null) {
        formContext.ui.setFormNotification(
            "There are " + openChildren.length + " active Accounts related to this contact.",
            "INFO",
            "AmountChildAccounts",
        );
    }
}

async function getActiveChildAccounts(parentId: string): Promise<any[] | null> {
    return helper.loadRecords(
        "account",
        "?$select=primarycontactid&$filter=statecode eq 0 and _primarycontactid_value eq " + parentId,
    );
}
