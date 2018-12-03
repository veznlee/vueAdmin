//像过滤器一样注册
let focus = {
    inserted: function (el) {
        el.focus();
    }
};

let resize = {
    bind:function(el,binding,vnode){
        function documentHandler(e){
            if(binding.expression){
                binding.value(e);
            }
        }
        el.__resize__ = documentHandler;
        window.addEventListener('resize',documentHandler);
    },
    unbind:function(el,binding,vnode){
        window.removeEventListener('resize',el.__resize__);
        delete el.__resize__;
    }
};


// export focus

// export default focus

export {focus,resize}