// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Business Card',
    backgroundColor:'#FF9933'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Business Card',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#000000',
	text:'Name:Bassim AlShedokhy \n Windows System Administrator \n Phone:208-596-7716 \n E-mail:alsh6329@vandals.uidaho.edu',
	font:{fontSize:18,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Portfolio',
    backgroundColor:'#FF9933'
});

var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Portofolio',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#000000',
	text:'I am a Windows system administrator who most recently graduated from University of Idaho. I am passionate about working with technology. Along with my job as a system admin, I enjoy drawing, playing music and gathering with good friends. Also, I love traveling and discovering new places and cultures. \n \n Please feel free to contact me through my information on the first page',
	font:{fontSize:15,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
win2.add(label2);

var pic = Titanium.UI.createImageView({
	image: "me.jpg",
	height:100,
	width:100,
	picAlign:'center',
	top:100
});
win2.add(pic);
win2.show(pic);

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
