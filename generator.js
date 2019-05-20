//generate the sample space and display it in a list, and then go through the past papers to work out what hasn't been done


var crimethemesandchallenges = [
	'the role of discretion in the criminal justice system',
	'issues of compliance and non-compliance in regard to criminal law',
	'the extent to which law reflects moral and ethical standards',
	'the role of law reform in the criminal justice system',
	'the extent to which the law balances the rights of victims, offenders and society',
	'the effectiveness of legal and non-legal measures in achieving justice'
];
var crimetopics = [
	'The nature of crime',
	'The criminal investigation process',
	'Criminal trial process',
	'Sentencing and punishment',
	'Young offenders',
	'International crime'
];

var hrthemesandchallenges = [
	'the changing understanding of the relationship between state sovereignty and human rights',
	'issues of compliance and non-compliance in relation to human rights',
	'the development of human rights as a reflection of changing values and ethical standards',
	'the role of law reform in protecting human rights',
	'the effectiveness of legal and non-legal measures in protecting human rights'
];
var hrtopics = [
	'The nature and development of human rights',
	'Promoting and enforcing human rights',
	'genocide'
];

var learnto = [
	'describe the nature of crime',
	'recognise the different categories of crime',
	'define summary and indictable offences',
	'examine a range of factors that may lead to criminal behaviour',
	'investigate a range of situational and social crime prevention techniques',
	'discuss the powers of police in the criminal process',
	'examine the reporting and investigating of crime',
	'assess the effectiveness of the criminal investigation process as a means of achieving justice',
	'describe the role of courts in the criminal justice process',
	'discuss the use of the adversary system as a means of achieving justice',
	'examine the role of legal representation in the criminal trial',
	'assess the use of defences to criminal charges in achieving justice',
	'evaluate the effectiveness of the jury system in the criminal trial',
	'assess the effectiveness of the criminal trial process as a means of achieving justice',
	'discuss factors that affect sentencing decisions, including the purposes of punishment and the role of the victim',
	'evaluate the effectiveness of different types of penalties, including diversionary programs',
	'assess the roles of alternative methods of sentencing',
	'examine the implications of post-sentencing considerations in achieving justice',
	'evaluate the effectiveness of sentencing and punishment as a means of achieving justice',
	'discuss the issues surrounding the age of criminal responsibility',
	'explain why young offenders are treated differently in the criminal justice system',
	'assess the effectiveness of the criminal justice system when dealing with young offenders',
	'define international crime',
	'describe the various measures used to deal with international crime',
	'evaluate the effectiveness of the domestic and international legal systems in dealing with international crime'
];

var verbs = [
	'discuss',
	'assess',
	'evaluate'
]

document.getElementById('generate').addEventListener('click', essay);

document.getElementById('samplespace').addEventListener('click', samplespace);

// document.getElementById('shortgenerate').addEventListener('click', function(){gen([learnto])});

function essay() {
	var topic = document.getElementById('module').value;
	
	switch (topic) {
		case 'crime':
			gen([verbs, crimethemesandchallenges, crimetopics])
			break;
		case 'humanrights':
			gen([verbs, hrthemesandchallenges, hrtopics]);
			break;
	}
}

function gen(listofthings) {
	var text = '';
	for (var e of listofthings) {
		var len = Math.floor(Math.random() * e.length);
		text = text + e[len] + '; ';
	}
	document.getElementById('output').innerText = text;
}

function samplespace() {
	var text = ''
	for (var a of verbs) {
		for (var b of crimethemesandchallenges) {
			for (var c of crimetopics) {
				text = text + a + '; ' + b + '; ' + c + '\n';
			}
		}
	}
	for (var d of verbs) {
		for (var e of hrthemesandchallenges) {
			for (var f of hrtopics) {
				text = text + d + '; ' + e + '; ' + f + '\n';
			}
		}
	}
	document.getElementById('output').innerText = text;
}