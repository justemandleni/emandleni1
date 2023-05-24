({
    openFlow: function(component, event, helper) {
        console.log("Opening flow...");
        component.set("v.showModal", true);
        
        // Start the flow
        var flow = component.find("flowData");
        console.log("Flow component: ", flow);
        flow.startFlow("Customer_Service_Portal_Create_Case", []);
    },
    
    closeFlow: function(component, event, helper) {
        console.log("Closing flow...");
        component.set("v.showModal", false);
        
        // Reset the flow to its initial state
        var flow = component.find("flowData");
        console.log("Flow component: ", flow);
        flow.get("v.flow").restartFlow();
    }
})
