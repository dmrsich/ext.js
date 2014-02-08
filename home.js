/*global Ext:false */
Ext.onReady(function () {
    var tabs = Ext.create('Ext.tab.Panel', {
        tabPosition: 'left',
         height: 1000,
        align: 'middle',
        defaults: {
            bodyPadding: 10
          },

        items: [{
            title: 'Welcome',
            html: "<center><h1>Welcome to Howard Consulting & Investments</h1></br><img src='hci.jpg' alt='hci logo'></center>",
        }, {
            title: 'About Us',
            html: "<center><h1>About Us</h1></br>We strive to bring new innovative content to our local communities while alos teaching interns about the application development business.</center>",
           }],
        renderTo: Ext.getBody()
    });
});