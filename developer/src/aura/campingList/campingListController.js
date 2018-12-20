({
    doInit: function(component, event, helper) {
        
        var action = component.get("c.getItems");
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            }
            else{
                console.log("Failed with state: " + state);
            }
        });
        
        $A.enqueueAction(action);
        
        //console.log("this is a test");
    },
    
    handleAddItem: function(component, event, helper) {
        
        helper.handleAddItem(component, event);
    }
 })