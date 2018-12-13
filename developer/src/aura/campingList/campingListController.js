({
    doInit: function(component, event, helper) {

        console.log("this is a test");
    },
    clickCreateItem: function(component, evt, hlpr) {
        
        var validItem = component.find('CampingItemform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);   
        
        if(validItem) {
            
            var newItem = component.get("v.newItem");
            var newItemObj = JSON.parse(JSON.stringify(newItem));
            var items = component.get("v.items");
            items.push(newItemObj);
            component.set("v.items", items);
            //console.log("updated items", JSON.stringify(cmp.get("v.items")));
            component.set("v.newItem",
                    {'sobjectType' : 'Camping_Item__c',
                     'Name' : '',
                     'Quantity__c' : 0,
                     'Price__c' : 0,
                     'Packed__c' : false});           
        }
    }
})