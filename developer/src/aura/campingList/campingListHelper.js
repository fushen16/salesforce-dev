({
	createItem : function(component, event) {
        
        var validItem = component.find('CampingItemform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);   
        
        if(validItem) {
            
            var newItem = component.get("v.newItem");
            var action = component.get("c.saveItem");
            action.setParams({
                "campingItem": newItem
            });
            
            action.setCallback(this, function(response){
                var state = response.getState();
                if (state === "SUCCESS") {
                	var items = component.get("v.items");
                	items.push(response.getReturnValue());
                	component.set("v.items", items);
                	
                	//reset the new item form
                    component.set("v.newItem",
                            {'sobjectType' : 'Camping_Item__c',
                             'Name' : '',
                             'Quantity__c' : 0,
                             'Price__c' : 0,
                             'Packed__c' : false});  
                }
            });
            
            $A.enqueueAction(action);        
        }
		
	}
})