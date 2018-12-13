({
    doInit : function(component, event, helper) {
         console.log("do nothing for now");
     },
    packItem: function(component, event, helper) {
        var a = component.get("v.item", true);
        a.Packed__c = true;
        component.set("v.item", a);
        var btnClicked = event.getSource();
        btnClicked.set("v.disabled",true);
        console.log("button clicked");
	}
})