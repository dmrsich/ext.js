/*global Ext:false */
Ext.onReady(function () {
    var tabs = Ext.create('Ext.tab.Panel', {
    	renderTo: 'left-tabs',
        tabPosition: 'left',
         height: 1000,
        align: 'middle',
        defaults: {
            bodyPadding: 10
          },

        items: [{
            title: 'Tab 1',
            html: "test",
        }, {
            id: 'remove-this-tab',
            title: 'Tab 2',
            html: 'Another one'
        }],
        renderTo: Ext.getBody()
    });
});
