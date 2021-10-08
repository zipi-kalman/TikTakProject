function convertActionName(actionName) {//addPupil
    return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();//ADD_PUPIL
}


const actions = new Proxy(
    {},
    {
        get: function (target, prop) {
        
            if (target[prop] === undefined)
                return function (args) {
                    return { type: convertActionName(prop), payload: args }//{type:"ADD_PUYPIL", payload:name="sasi",id="12345654"}
                }
            else
                return target[prop];
        },

    }
)
export default actions;










