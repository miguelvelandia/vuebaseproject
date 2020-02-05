function panel_refresh(panel,action,callback){        
    if(!panel.hasClass("panel-refreshing")){
        panel.append('<div class="panel-refresh-layer"><img class="loader" src="img/loaders/page-loader.gif"/></div>');
        panel.find(".panel-refresh-layer").width(panel.width()).height(panel.height());
        panel.addClass("panel-refreshing");
        
        if(action && action === "shown" && typeof callback === "function") 
            callback();
    }else{
        panel.find(".panel-refresh-layer").remove();
        panel.removeClass("panel-refreshing");
        
        if(action && action === "hidden" && typeof callback === "function") 
            callback();        
    }       
    
}