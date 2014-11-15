var main = Ti.UI.createWindow({
	backgroundColor: "#000c75",
	title: "Dallas Cowboys"
	
});

var mainView = Ti.UI.createView({
	backgroundImage: "dallasstar.png",
	top: "70dp",
	width: "120dp",
	height: "120dp"
	
});
var mainButton = Ti.UI.createButton({
	title : "Key Players",
	borderColor: "999999",
	width : "125dp",
	height : "40dp",
	color : "White",
	borderRadius: "10dp",
	font : {
		fontSize : "18dp",
		fontFamily : "TimesNewRoman"
	}
});

var playersWindow = Ti.UI.createWindow({
	title: "Key Players",
	backgroundColor: "White",
	
	
});

mainButton.addEventListener("click", function(){
	playersWindow.open();
});

var tableView = Ti.UI.createTableView({
	title: "Players"
});

tableViewSection = Ti.UI.createTableViewSection({
	headerTitle : "Players",
});

var resources = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images/");

var galleryList = resources.getDirectoryListing();

var dallasData =

{
	KeyPlayers: {
	items: [
		{
			name:  "Tony Romo",
			position: "Quarterback",
			age:  "34",
			image: "tonyromo.jpg",
			desc: "Tony Romo attended Eastern Illinois before playing for the Dallas Cowboys and is 12 years pro, and has appeared in the playoffs many times"
		},
		{
			name:  "Jason Witten",
			position: "Tightend",
			age:  "32",
			image: "jasonwitten.jpg",
			desc: "Jason Witten attended the University of Tennesse,\he has been a huge offensive combo along side Tony Romo and has been a pro bowl selection for many years"
			
		},
		{
			name:  "Dez Bryant",
			position: "WideReciever",
			age:  "25",
			image: "dezbryant.jpg",
			desc: "Dez Bryant was one of the Dallas Cowboys highest overall draft picks in the history of the team, he has the highest reception yards out of the whole team and is a huge deep threat to any opposing defense"
		},
		{
			name:  "Bruce Carter",
			position: "OutsideLineBacker",
			age:  "26",
			image: "brucecarter.jpg",
			desc: "Bruce Carter is said to be one of the toughest and fastest line backers in the NFL he currently leads the team in tackles"
		},
		{
			name:  "Cole Beasly",
			position: "WideReciever",
			age:  "25",
			image: "colebeasly.jpg",
			desc: "Cole Beasly is one the youngest upcoming stars on the team, he is well known for his speed and evasive movements after recieving a catch"
		},
		{
			name:  "DeMarco Murray",
			position: "RunningBack",
			age:  "26",
			image: "demarcomurray.jpg",
			desc: "DeMarco Murray is currently the NFL's leading rusher and has recently broken records for the longest consecutive 100 yard+ games and is definitely one the biggest stars on the Dallas Cowboys squad "
		},
		{
			name:  "Zack Martin",
			position: "Guard",
			age:  "23",
			image: "zachmartin.jpg",
			desc: "Zack Martin is one the youngest and biggest offensive guards on the team, he is well known for stoping tackles in his tracks and gives a lot of extra time for Tony Romo in the pocket "
		},
		{
			name:  "Barry Church",
			position: "Free Safety",
			age:  "26",
			image: "barrychurch.jpg",
			desc: "After impressing coaches through the 2010 preseason by finishing fourth on the team with 15 tackles while also tying for second with three special teams tackles, Barry Church was one-of-four undrafted free agents to make the roster coming out of training camp"
		},
		{
			name:  "Anthony Spencer",
			position: "Defensive End",
			age:  "30",
			image: "anthonyspencer.jpeg",
			desc:"Now entering his sixth pro season and fourth overall as a starter, Anthony Spencer will look to elevate his production at outside linebacker while combining with perennial All-Pro DeMarcus Ware to give the team a feared outside linebacker duo."
		},
		{
			name:  "Brandon Carr",
			position: "WideReciever",
			age:  "28",
			image: "brandoncarr.jpg",
			desc: "The Dallas Cowboys improved their secondary immediately in free agency by signing talented cornerback Brandon Carr to a five year contract."
		},
		{
			name:  "J.J Wilcox",
			position: "Strong Safety",
			age:  "23",
			image: "jjwilcox.jpg",
			desc: "After spending three years on the offensive side of the ball where he accumulated 964 career rushing yards, Wilcox moved to safety before the start of 2012 fall practice."
		},
		{
			name:  "Terrance Williams",
			position: "WideReciever",
			age:  "25",
			image: "terrancewilliams.jpg",
			desc:"Williams finished second on the squad with an efficient 59 receptions for 957 yards."
		},
		{
			name:  "Doug Free",
			position: "Tackle",
			age:  "30",
			image: "dougfree.jpeg",
			desc: "The Cowboys drafted Doug Free in the fourth round (122nd overall) of the 2007 NFL Draft with the hopes of him developing into a key player on the offensive line."
		},
		{
			name:  "Travis Frederick",
			position: "Center",
			age:  "23",
			image: "travisfre.jpg",
			desc: "The vastly underrated talent proved the last two seasons \that he is just as dominant of a drive blocker as his more heralded alumni."
		},
		{
			name:  "Rolando McClain",
			position: "LineBacker",
			age:  "25",
			image: "rolando.jpg",
			desc:"Rolando McClain has recently been added to the Cowboys squad and but is already 4 years pro\and is already well known for his strength and very smart offensive reading skills"
		},
		{
			name:  "Joseph Randle",
			position: "RunningBack",
			age:  "22",
			image: "josephrandle.jpg",
			desc: "A two-year starter, Randle played a vital role in the success of the Cowboys’ offensive since first suiting up at the university during his freshman campaign. He decided to leave school after his junior year to play in the National Football League in 2013."
		},
		{
			name:  "George Selvie",
			position: "Defensive End",
			age:  "27",
			image: "georgeselviue.jpeg",
			desc: " George Selvie one of the newest additions to the defensive squad and reigns from south Florida"
		},
		{
			name:  "Tyron Smith",
			position: "Tackle",
			age:  "23",
			image: "tyronsmith.jpg",
			desc: " For just the fourth time in team history, and first time since 1981, the Dallas Cowboys selected an offensive lineman in the first round of the draft when they picked Tyron Smith with the ninth overall pick in the 2011 NFL Draft"
		},
		{
			name:  "Gavin Escobar",
			position: "TightEnd",
			age:  "23",
			image: "gavinescobar.jpg",
			desc:"Gavin Escobar has already been a huge plus to the Dallas Offensive leading the team in the most red zone touchdown receptions"
		},
		{
			name:  "Dwayne Harris",
			position: "WideReciever",
			age:  "27",
			image: "dwayneharris.jpg",
			desc:"Dwayne Harris a 3rd string wide reciever but is also known for receiving punt kicks and kickoff returns and making huge yardage gains"
		}
	]
		
	
}
};

var tableSections = [];
for (var n in dallasData) {
	var dallasTVS = Ti.UI.createTableViewSection({
		headerTitle : dallasData[n].name
	});
	for (var i = 0, players = dallasData[n].items; i < players.length; i++) {
		var player = players[i];
		
		var row = Ti.UI.createTableViewRow({
			backgroundColor:"Gray",
			info : player,
			height : '60dp'
		});
		var dalLabel = Ti.UI.createLabel({
			text: player.name,
			color: "#000c75",
			info : player
		});
		// create label
		var diView = Ti.UI.createView({
			backgroundColor:"Black",
			height: "1dp",
			width: "100%",
			bottom:"0"
		
		});
		
		var thumb = Ti.UI.createImageView({
			height: "40dp",
			width: "40dp",
			borderRadius: "20dp",
			right: "20dp",
			top: "20dp",
			image: player
			
		});
		row.add(thumb);
		row.add(dalLabel);
		row.add(diView);
		// create a divider view
		
		//add label and divider
		
		dallasTVS.add(row);
		
	}
	tableSections.push(dallasTVS);
}

var dalDetail = function(info) {

	var detail = Ti.UI.createWindow({
		backgroundColor : "#000c75",
		title : info.name,
	});
	var detailView = Ti.UI.createView({
		backgroundColor: "Black",
		borderRadius: "10dp",
		width: "275dp",
		height: "80dp",
		bottom: "150dp"
	});
	
	var dalAge = Ti.UI.createLabel({
		text: "Age: " + info.age,
		color: "White",
		top: "10dp"
		
	});

	var dalDesc = Ti.UI.createLabel({
		text : info.desc,
		color : "White",
		bottom: "15dp",
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	
	var dalPos = Ti.UI.createLabel({
		text: "Position: " + info.position,
		color: "White",
		top: "40dp"		
	});

	var dalImage = Ti.UI.createImageView({
		image : info.image,
		top : "0dp",
		width: "210dp",
		height: "250dp"
	});
	
	detailView.add(dalPos);
	detailView.add(dalAge);
	detail.add(detailView);
	detail.add(dalImage);
	detail.add(dalDesc);
	detail.open();
};

tableView.addEventListener("click", function(x){
	dalDetail(x.source.info);
});

tableView.setData(tableSections);
playersWindow.add(tableView);
main.add(mainView);
main.add(mainButton);
main.open();
