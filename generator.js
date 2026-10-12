// Question banks for each syllabus. Essays combine a verb, a theme and a topic; short answers come from the syllabus dot points.
// The 2009 syllabus is examined up to the 2027 HSC, and the 2025 syllabus from the 2028 HSC.

// Copyright notice for the syllabus content in this file (themes and challenges, topics, "students learn to" points and content dot points):
// © NSW Education Standards Authority (NESA) for and on behalf of the Crown in right of the State of New South Wales.
// NESA is the source of this material, which is used here for personal bona fide study. It is not covered by this
// repository's GPL licence (see NOTICE), and this project is not affiliated with or endorsed by NESA.
// NESA copyright terms: https://www.nsw.gov.au/education-and-training/nesa/copyright

// Verbs and question forms used in the 2015-2025 HSC papers, the 2025 syllabus sample paper and 44 school trial papers (2011-2025).
const essayVerbs = ['Discuss', 'Assess', 'Evaluate', 'Analyse', 'Explain', 'Examine', 'To what extent', 'How effective', 'How well'];
const shortVerbs = ['Identify', 'Define', 'Outline', 'Describe', 'Explain', 'Compare', 'Discuss', 'Analyse', 'Examine', 'Justify', 'Why', 'Assess', 'Evaluate'];

const syllabuses = {
	'2009': {
		banks: {
			crime: {
				name: 'Crime',
				core: true,
				area: 'crime',
				themes: [
					'the role of discretion in the criminal justice system',
					'issues of compliance and non-compliance in regard to criminal law',
					'the extent to which law reflects moral and ethical standards',
					'the role of law reform in the criminal justice system',
					'the extent to which the law balances the rights of victims, offenders and society',
					'the effectiveness of legal and non-legal measures in achieving justice'
				],
				topics: ['the nature of crime', 'the criminal investigation process', 'the criminal trial process', 'sentencing and punishment', 'young offenders', 'international crime'],
				learnto: [
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
				]
			},
			humanrights: {
				name: 'Human rights',
				core: true,
				area: 'human rights',
				themes: [
					'the changing understanding of the relationship between state sovereignty and human rights',
					'issues of compliance and non-compliance in relation to human rights',
					'the development of human rights as a reflection of changing values and ethical standards',
					'the role of law reform in protecting human rights',
					'the effectiveness of legal and non-legal measures in protecting human rights'
				],
				// The syllabus leaves the issue to the school ("Issues could include ..."), and HSC and trial papers always ask about it in these words.
				topics: ['the nature and development of human rights', 'promoting and enforcing human rights', 'a contemporary human rights issue'],
				learnto: [
					'define human rights',
					'outline how human rights have changed and developed over time',
					'investigate the evolving recognition and importance of universal human rights',
					'examine major human rights documents and explain their contribution to the development of human rights',
					'assess the role of state sovereignty in promoting and enforcing human rights',
					'evaluate the effectiveness of international responses in promoting and enforcing human rights',
					'outline how human rights are incorporated into Australian domestic law',
					'evaluate the effectiveness of Australian responses in promoting and enforcing human rights',
					'discuss the arguments for and against a Charter of Rights for Australia',
					'investigate a contemporary human rights issue and evaluate the effectiveness of legal and non-legal responses to the issue'
				]
			},
			consumers: {
				name: 'Consumers',
				area: 'consumers',
				themes: [
					'the role of the law in encouraging cooperation and resolving conflict in regard to consumers',
					'issues of compliance and non-compliance',
					'laws relating to consumers as a reflection of changing values and ethical standards',
					'the role of law reform in recognising the rights of consumers',
					'the effectiveness of legal and non-legal responses in achieving justice for consumers'
				],
				topics: ['the nature of consumer law', 'consumer redress and remedies', 'credit', 'product certification', 'marketing innovations', 'technology', 'at least ONE contemporary issue concerning consumers'],
				learnto: [
					'outline the developing need for consumer protection',
					'outline the objectives of consumer law',
					'examine the nature, function and regulation of contracts',
					'evaluate the effectiveness of the regulation of marketing, advertising and product certification in achieving consumer protection',
					'examine the role of occupational licensing in achieving consumer protection',
					'recognise the importance of awareness and self-help',
					'examine the range of different remedies available to consumers',
					'evaluate the effectiveness of non-legal and legal measures in achieving justice for consumers',
					'evaluate the effectiveness of legal and non-legal responses to issues concerning credit',
					'evaluate the effectiveness of legal and non-legal responses to issues concerning product certification',
					'evaluate the effectiveness of legal and non-legal responses to issues concerning marketing innovations',
					'evaluate the effectiveness of legal and non-legal responses to issues concerning technology and consumers'
				]
			},
			environment: {
				name: 'Global environmental protection',
				area: 'global environmental protection',
				themes: [
					'the impact of state sovereignty on international cooperation and the resolution of conflict in regard to environmental protection',
					'issues of compliance and non-compliance',
					'the impact of changing values and ethical standards on environmental protection',
					'the role of law reform in protecting the global environment',
					'the effectiveness of legal and non-legal responses in protecting the environment'
				],
				topics: [
					'the nature of global environmental protection',
					'responses to global environmental protection',
					'global threats to the environment',
					'conflict between the demand for resources and global environmental protection',
					'Australia\'s responses to international initiatives for global environmental protection',
					'barriers to achieving an international response to global environmental protection',
					'at least ONE contemporary issue concerning global environmental protection'
				],
				learnto: [
					'define global environmental protection',
					'outline the development of global environmental law',
					'outline the need for laws to protect the global environment',
					'examine the role of sovereignty in assisting and impeding the resolution of global environmental protection issues',
					'outline the structure and function of the United Nations in relation to environmental protection',
					'explain the effects of Australia\'s federal structure in responding to global environmental protection',
					'evaluate the effectiveness of legal and non-legal measures in protecting the global environment',
					'evaluate the effectiveness of the law in relation to global threats to the environment',
					'evaluate the effectiveness of legal responses to conflict between the demand for resources and global environmental protection',
					'evaluate the effectiveness of Australia\'s responses to international initiatives for global environmental protection',
					'evaluate the barriers to achieving an international response to global environmental protection'
				]
			},
			family: {
				name: 'Family',
				area: 'family',
				themes: [
					'the role of the law in encouraging cooperation and resolving conflict in regard to family',
					'issues of compliance and non-compliance',
					'changes to family law as a response to changing values in the community',
					'the role of law reform in achieving just outcomes for family members and society',
					'the effectiveness of legal and non-legal responses in achieving just outcomes for family members'
				],
				topics: ['the nature of family law', 'responses to problems in family relationships', 'the recognition of same-sex relationships', 'the changing nature of parental responsibility', 'surrogacy and birth technologies', 'the care and protection of children', 'at least ONE contemporary issue concerning family law'],
				learnto: [
					'discuss the difficulty of defining \'family\' and the changing concepts of family',
					'distinguish between state and federal jurisdiction in family law',
					'outline the legal requirements of a valid marriage',
					'explain the legal rights and obligations of parents and children, including those derived from international law',
					'outline the legal processes involved in dealing with problems in family relationships',
					'evaluate the effectiveness of the law in protecting victims of domestic violence',
					'examine the role of non-government organisations and the media in relation to family law',
					'evaluate the effectiveness of the law in achieving justice for parties involved in relationship breakdowns',
					'evaluate the effectiveness of legal and non-legal responses to the recognition of same-sex relationships',
					'evaluate the effectiveness of legal and non-legal responses to the changing nature of parental responsibility',
					'evaluate the effectiveness of legal and non-legal responses to surrogacy and birth technologies',
					'evaluate the effectiveness of legal and non-legal responses to the care and protection of children'
				]
			},
			indigenous: {
				name: 'Indigenous peoples',
				area: 'Indigenous peoples',
				themes: [
					'the impact of state sovereignty in encouraging cooperation and resolving conflict regarding Indigenous peoples',
					'issues of compliance and non-compliance',
					'laws relating to Indigenous peoples as a reflection of changing values and ethical standards',
					'the role of law reform in recognising the rights of Indigenous peoples',
					'the effectiveness of legal and non-legal responses in achieving justice for Indigenous peoples'
				],
				topics: ['the nature of the law and Indigenous peoples', 'responses to Indigenous peoples', 'the loss of cultural rights, including language', 'land rights', 'legal rights to natural resources', 'intellectual property rights', 'at least ONE contemporary issue concerning Indigenous peoples'],
				learnto: [
					'define \'Indigenous peoples\'',
					'outline the loss of rights of Indigenous peoples globally',
					'outline the need for legal recognition of Indigenous peoples',
					'explain the difficulties faced by Indigenous peoples in determining their own future',
					'examine the role of sovereignty in assisting and impeding the recognition of the rights of Indigenous peoples',
					'evaluate the effectiveness of legal and non-legal measures in achieving justice for Indigenous peoples',
					'explain the role of Australia\'s federal structure in responding to the needs of Indigenous peoples',
					'evaluate the effectiveness of legal and non-legal responses to the loss of cultural rights, including language',
					'evaluate the effectiveness of legal and non-legal responses to land rights',
					'evaluate the effectiveness of legal and non-legal responses to legal rights to natural resources',
					'evaluate the effectiveness of legal and non-legal responses to intellectual property rights'
				]
			},
			shelter: {
				name: 'Shelter',
				area: 'shelter',
				themes: [
					'the role of the law in encouraging cooperation and resolving conflict in regard to shelter',
					'issues of compliance and non-compliance',
					'laws relating to shelter as a reflection of changing values and ethical standards',
					'the role of law reform in protecting the rights of those seeking shelter',
					'the effectiveness of legal and non-legal responses in achieving just outcomes regarding the provision of shelter'
				],
				topics: ['the nature of shelter', 'legal protection and remedies associated with securing shelter', 'affordability', 'discrimination', 'homelessness', 'social housing', 'at least ONE contemporary issue concerning shelter'],
				learnto: [
					'define \'shelter\' and outline the extent of laws concerning shelter',
					'discuss the right to shelter according to international law',
					'examine the obligation of state and federal governments to provide shelter',
					'describe the types of shelter',
					'outline the process of securing shelter',
					'assess the role of the legal system in protecting those securing and providing shelter',
					'evaluate the effectiveness of legal and non-legal measures in achieving justice for people seeking shelter',
					'evaluate the effectiveness of legal and non-legal responses to housing affordability',
					'evaluate the effectiveness of legal and non-legal responses to discrimination in shelter',
					'evaluate the effectiveness of legal and non-legal responses to homelessness',
					'evaluate the effectiveness of legal and non-legal responses to the provision of social housing'
				]
			},
			workplace: {
				name: 'Workplace',
				area: 'the workplace',
				themes: [
					'the role of the law in encouraging cooperation and resolving conflict in the workplace',
					'issues of compliance and non-compliance',
					'laws relating to the workplace as a reflection of changing values and ethical standards',
					'the role of law reform in recognising rights and enforcing responsibilities in the workplace',
					'the effectiveness of legal and non-legal responses in achieving justice in the workplace'
				],
				topics: ['the nature of workplace law', 'regulation of the workplace', 'discrimination', 'safety', 'termination of employment', 'leave', 'at least ONE contemporary issue concerning the workplace'],
				learnto: [
					'outline the developing need for workplace law',
					'outline the sources of workplace regulations',
					'describe the rights and responsibilities of employers and employees in the workplace',
					'examine the legal framework for workplace law',
					'evaluate the effectiveness of dispute resolution processes',
					'assess the role of the legal system in regulating the workplace',
					'outline how remuneration is determined',
					'evaluate the effectiveness of legal and non-legal measures in protecting and recognising workplace rights',
					'evaluate the effectiveness of legal and non-legal responses to discrimination in the workplace',
					'evaluate the effectiveness of legal and non-legal responses to workplace safety',
					'evaluate the effectiveness of legal and non-legal responses to termination of employment',
					'evaluate the effectiveness of legal and non-legal responses to issues concerning leave'
				]
			},
			worldorder: {
				name: 'World order',
				area: 'world order',
				themes: [
					'the role of law in encouraging cooperation and resolving conflict in regard to world order',
					'issues of compliance and non-compliance',
					'the impact of changing values and ethical standards on world order',
					'the role of law reform in promoting and maintaining world order',
					'the effectiveness of legal and non-legal responses in promoting and maintaining world order'
				],
				topics: ['the nature of world order', 'responses to world order', 'the principle of \'responsibility to protect\'', 'regional and global situations that threaten peace and security', 'the success of global cooperation in achieving world order', 'rules regarding the conduct of hostilities', 'at least ONE contemporary issue concerning world order'],
				learnto: [
					'discuss the concept of \'world order\'',
					'outline the evolving nature of world order',
					'describe the need for world order',
					'explain the implications of the nature of conflict on achieving world order',
					'examine the role of sovereignty in assisting and impeding the resolution of world order issues',
					'explain the role of Australia\'s federal government in responding to world order',
					'evaluate the effectiveness of legal and non-legal measures in resolving conflict and working towards world order',
					'evaluate the effectiveness of legal and non-legal responses to the principle of \'responsibility to protect\'',
					'evaluate the effectiveness of legal and non-legal responses to regional and global situations that threaten peace and security',
					'evaluate the success of global cooperation in achieving world order',
					'evaluate the effectiveness of legal and non-legal responses to rules regarding the conduct of hostilities'
				]
			}
		}
	},
	'2025': {
		// Legal themes and skills apply to every focus area, including the evaluation criteria and outcomes LST-12-03 to LST-12-05.
		themes: [
			'the relationship between law, justice and society',
			'the development of law as a reflection of society\'s values',
			'the effectiveness of legal and non-legal measures in achieving justice for individuals, groups and society',
			'the responsiveness of the legal system to changing values, events, the media, outdated laws and developments in technology',
			'the role, formation and reform of law',
			'the differing perspectives of individuals, groups and society in influencing the law',
			'methods to resolve conflict and encourage cooperation',
			'the accessibility of the law',
			'the achievement of justice',
			'the application of the rule of law',
			'the capacity of the law to meet society\'s needs',
			'the capacity of the law to uphold community standards',
			'the capacity of the law to uphold the interests of justice',
			'the enforceability of legal measures',
			'the need for law reform',
			'the protection of individual rights',
			'the resource efficiency of the law',
			'the responsiveness of the law'
		],
		banks: {
			crime: {
				name: 'The criminal justice system',
				core: true,
				area: 'the criminal justice system',
				topics: ['the nature of crime', 'criminal investigation', 'pre-trial processes', 'the criminal trial', 'sentencing', 'post-sentencing'],
				dotpoints: [
					'the changing nature and types of crime affecting individuals and society',
					'factors affecting criminal behaviour',
					'the importance of situational and social crime prevention',
					'the role of police in investigating crime, protecting the community and upholding the rule of law',
					'police powers and responsibilities under the law in relation to arrests, searches, warrants, questioning and detention',
					'the role of police discretion, including the use of warnings, cautions and fines',
					'the recognition of the rights of the accused, including the right to silence',
					'support measures, including advocacy for the accused and assistance for victims',
					'the roles and impact of pre-trial processes and decisions',
					'the bail process and its implications for the presumption of innocence',
					'the role of remand and its impact on the accused and society',
					'reasons for and the operation of a criminal court hierarchy, including the appeal process',
					'the adversarial system and its implications for the achievement of justice',
					'the use of partial and complete defences to criminal charges',
					'reasons for and against the use of juries and judge-alone trials',
					'the provision of legal aid to improve access to justice',
					'the impact of support services and advocacy to improve access to justice for Aboriginal and Torres Strait Islander Peoples',
					'the purposes of sentencing, including punishment, deterrence, protection and rehabilitation, and their roles in balancing the rights of victims, offenders and society',
					'factors affecting a sentencing decision, including statutory and judicial sentencing guidelines, aggravating and mitigating factors, and the use of judicial discretion',
					'the role and consideration of victim impact statements',
					'types of custodial and non-custodial penalties and the extent to which they achieve their intended outcomes',
					'types of diversionary programs, including intervention, treatment and rehabilitation',
					'the role of and participation in Culturally appropriate options to improve outcomes for Aboriginal and Torres Strait Islander Peoples',
					'the impact of diversionary programs and alternative approaches to sentencing in diverting offenders and reducing recidivism',
					'the classification and placement of offenders in prison',
					'the purpose and conditions of parole',
					'the use of detention and supervision orders for high-risk offenders'
				]
			},
			humanrights: {
				name: 'International relations and human rights',
				core: true,
				area: 'international relations and human rights',
				topics: ['the nature of international relations', 'the nature of human rights', 'international protection of human rights', 'Australian protection of human rights', 'promotion of human rights'],
				dotpoints: [
					'the origin and nature of international relations',
					'the need for international relations in the global community',
					'the changing nature of the global community and the impact of state sovereignty',
					'the contribution of international organisations in fostering relationships in the global community',
					'characteristics of human rights',
					'the changing nature and developing recognition of human rights',
					'categories of human rights, including civil and political rights, economic, social and cultural rights, the right to self-determination, environmental rights and peace rights',
					'foundational instruments for establishing human rights contained in the International Bill of Human Rights: the Universal Declaration of Human Rights, the International Covenant on Civil and Political Rights and the International Covenant on Economic, Social and Cultural Rights',
					'the role of international human rights law in upholding the obligations of nation-states in emerging areas of human rights protection, including the United Nations Declaration on the Rights of Indigenous Peoples',
					'the role and limits of the United Nations in setting standards for human rights protection',
					'the obligations and duties of nation-states to protect human rights through international instruments',
					'ways to monitor the protection and breaches of human rights',
					'responses to breaches of human rights by international courts and tribunals',
					'ONE case study of a human right and the extent to which it is protected at an international level',
					'the process of incorporating international human rights instruments into domestic law',
					'Australia\'s obligation to protect human rights through the Australian Constitution, and statute and common law',
					'the function and importance of the Australian Human Rights Commission',
					'responses to breaches of human rights by Australian courts and tribunals',
					'debates over the need for a human rights framework in Australia',
					'ONE case study of a human right and the extent to which it is protected in Australia',
					'methods to promote human rights, including advocacy, education, persuasion and investigation',
					'the role of non-government organisations that promote and monitor breaches of human rights',
					'the role of organisations that support and advocate for Aboriginal and Torres Strait Islander Peoples\' right to self-determination',
					'the role and limits of the media in promoting human rights',
					'ONE case study of a human right and the extent to which it is promoted by non-government organisations or the media'
				]
			},
			consumers: {
				name: 'Consumer law',
				area: 'consumer law',
				topics: ['the nature of consumer law', 'marketing and advertising', 'credit services', 'industry standards and product safety', 'competition in the marketplace'],
				dotpoints: [
					'the evolving need for consumer protection, including international recognition',
					'key consumer legislation and organisations in Australia, including protections around consumer rights and guarantees',
					'rights and responsibilities of consumers',
					'contracts as a key function of consumer protection against unfair business practices',
					'the roles of non-government organisations and the media in promoting consumer interests',
					'the nature of marketing and advertising, including evolving methods for promoting products and services',
					'statutory regulation of marketing and advertising in Australia',
					'challenges in protecting consumers from unethical marketing practices and scams, including those driven by technology and global markets',
					'the obligations of businesses under the law to avoid unfair practices',
					'the need for consumer protection relating to credit services',
					'the statutory regulation of credit services',
					'challenges facing vulnerable consumers and the importance of advocacy and financial support agencies',
					'responses to non-compliance through consumer credit laws, including enforcement measures',
					'the need for industry standards and product safety in a globalised market',
					'the regulation of industries and product safety in Australia, including mandatory and voluntary standards',
					'the impact of government and industry organisations in addressing compliance challenges',
					'responses to non-compliance with industry standards and product safety, including enforcement measures',
					'the need for competition in the marketplace',
					'the regulation of competition in Australia',
					'challenges for consumers due to anti-competitive behaviour, including limits on choice and price increases',
					'responses to anti-competitive behaviour, including enforcement measures'
				]
			},
			family: {
				name: 'Family law',
				area: 'family law',
				topics: ['the nature of family law', 'family relationships', 'children', 'conflict', 'protection'],
				dotpoints: [
					'the evolving concept of family in Australia',
					'principles of the family law system',
					'the need to regulate family relationships and protect family members',
					'the responsibility of the state to protect families under international law',
					'the role and impact of non-government organisations and the media in promoting and supporting families',
					'types of family structures, including the interconnections of kinship, Community and shared responsibilities for Aboriginal and Torres Strait Islander Peoples',
					'statutory regulation of de facto relationships and marriages',
					'the requirements of a valid marriage',
					'challenges in identifying and responding to forced marriages in Australia',
					'the need for protection of the best interests of the child under domestic and international law',
					'parental responsibility and the obligations of parents and guardians',
					'legal requirements for foster care, Aboriginal and Torres Strait Islander kinship care and adoption',
					'challenges in safeguarding children from harm, including child abuse and neglect',
					'statutory frameworks for separation and divorce',
					'the use of family dispute resolution and the role of the court in resolving conflict',
					'the use of parenting plans, court orders and child support to consider the best interests of a child during relationship breakdown',
					'the determination of property and financial matters to ensure equitable outcomes, including the role of informal and binding financial agreements',
					'the roles and powers of police and courts in promoting safety for family members',
					'legal remedies, advocacy and support for victims of domestic and family violence',
					'responses from government departments and the Children\'s Court to prioritise the safety and wellbeing of children',
					'barriers to the protection of vulnerable individuals and groups from family violence and harm'
				]
			},
			housing: {
				name: 'Housing law',
				area: 'housing law',
				topics: ['the nature of housing law', 'securing a home', 'conflict', 'housing affordability', 'homelessness'],
				dotpoints: [
					'the right to adequate housing under international law and the obligation to provide shelter in Australia',
					'forms of real property ownership',
					'types of property title, including the significance and recognition of native title to Aboriginal and Torres Strait Islander People',
					'the roles of non-government organisations and the media in supporting those seeking housing',
					'legal processes for purchasing and selling property through private treaty and auctions, including the contract of sale',
					'the role of residential tenancy agreements in outlining the rights and responsibilities of landlords and tenants',
					'barriers to buying property, including sources of finance and unfair practices',
					'challenges faced in tenancy relationships, including security of tenure and discrimination',
					'types of residential property disputes',
					'the role of alternative dispute resolution in managing conflict for home owners, neighbours, tenants and landlords',
					'the role of courts and tribunals in resolving property disputes',
					'challenges in the access of justice in property disputes, including complexity, cost and language barriers',
					'the nature and extent of housing affordability and its impact on individuals, families and groups',
					'challenges in securing housing, including financial barriers and supply',
					'the need for social housing, including public and community housing',
					'the importance of Culturally appropriate housing for Aboriginal and Torres Strait Islander Peoples',
					'measures by state and federal governments to address housing affordability',
					'the causes, nature and extent of homelessness in NSW and Australia',
					'the impact of homelessness on the access to and enjoyment of human rights',
					'the role of housing for those with diverse needs and housing instability, including boarding homes and crisis and emergency accommodation',
					'measures by state and federal governments to address the needs of individuals and groups experiencing homelessness'
				]
			},
			peace: {
				name: 'Peace, conflict and the law',
				area: 'peace and conflict',
				topics: ['the nature of peace and conflict', 'global cooperation', 'war and conflict', 'implications of conflict', 'maintaining peace and security'],
				dotpoints: [
					'the evolving need for peace at global, regional and national levels',
					'the regulation of a global society and the impact of state sovereignty',
					'types and causes of global conflict',
					'the creation of international instruments to set global standards for collective security',
					'the roles and involvement of non-government organisations and the media in promoting peace and responding to conflict',
					'the need to foster global cooperation and relationships through mutual aid and assistance',
					'obligations of nation-states and non-state actors under international law',
					'the roles and involvement of the United Nations and intergovernmental organisations in maintaining relationships and promoting international cooperation',
					'Australia\'s participation as a global citizen to enhance collective security',
					'the changing nature of war',
					'the role of international humanitarian law in limiting the impact of armed conflict',
					'the actions of the United Nations in response to conflict',
					'the roles of courts and ad hoc tribunals in resolving conflict, and the use of sanctions to ensure the compliance of individuals and nation-states',
					'the impact of conflict on individuals, groups and nation-states',
					'ways to address displacement as a result of conflict',
					'state sovereignty as a challenge in complying with obligations under international law',
					'the principle of Responsibility to Protect (R2P) as a framework to address conflict',
					'measures to build and promote peace through peacebuilding activities and peacekeeping operations',
					'the use of diplomacy to foster and maintain relationships between nation-states',
					'the use of economic sanctions in response to conflict',
					'responses from the international community to the threat of force by nation-states, including the elimination of weapons of mass destruction'
				]
			},
			workplace: {
				name: 'Workplace law',
				area: 'workplace law',
				topics: ['the nature of workplace law', 'safety', 'fair pay', 'leave', 'discrimination and termination'],
				dotpoints: [
					'the evolution of the labour market and the recognition of employee rights under international law',
					'key workplace legislation and organisations in Australia',
					'the implications of employment status for employees, independent contractors and gig-economy workers',
					'the employment contract and minimum conditions of employment',
					'the roles of trade unions, non-government organisations and the media in advocating for workers\' rights',
					'the need to maintain safe workplaces, including culturally responsive workplaces',
					'the regulation of safety requirements in the workplace',
					'methods of enforcing employer responsibilities through government organisations and courts',
					'challenges in protecting the safety of workers, including technological advancements and the inadequacy of regulation and penalties',
					'the need to protect fair pay in the workplace',
					'the regulatory framework for paid work in Australia',
					'methods of enforcing fair pay through government organisations and courts',
					'challenges facing vulnerable workers, including exploitation, wage theft, unpaid work and unlawful deductions',
					'the evolving recognition of leave entitlements in the workplace',
					'types of leave entitlement',
					'the regulatory framework for leave entitlements',
					'measures to address a changing and diverse workforce without paid leave entitlements',
					'the need to protect workers\' rights regarding discrimination and termination',
					'laws regulating unlawful workplace discrimination, unfair dismissal, unlawful termination and redundancy',
					'the roles of courts and tribunals in resolving disputes and imposing penalties, including alternative dispute resolution',
					'barriers to participation in employment dispute resolution'
				]
			}
		}
	}
};

// Written questions from the 2015-2025 HSC papers, matched to the generated questions they resemble, so a generated question can say it has been seen before.
// The question wording is not stored. Each entry has the year, the question number and the opening verb or question form as worded in the paper, then:
// - essay: { same, similar }, lists of [theme, topic] pairs. Themes index the bank's `themes`; topics index [area].concat(topics), so 0 is the whole focus area.
//   `same` means the generated essay with this question's verb asks the same thing: it shows as "Seen", and the other verbs as similar.
// - short: { same, similar }, lists of indexes into the bank's `learnto`. `same` shows as "Seen", whatever the verb.
// - checked: who judged the pairings. 'subagent' is a Claude subagent following a written rubric; 'person' means someone confirmed them in the local review tool.
//   Either way the entry need not be judged again. Entries without it are best guesses.
// An HSC short answer can still share an essay's theme and topic, and the reverse, so an entry can have both.
const pastPapers = {
	crime: [
		{ year: 2015, q: '24', verb: 'How effective', essay: { same: [[5, 6]], similar: [[5, 0]] }, short: { same: [24], similar: [23] }, checked: 'subagent' }, // domestic and international measures for transnational crime
		{ year: 2016, q: '24', verb: 'To what extent', essay: { same: [[5, 5]], similar: [[0, 5], [4, 5]] }, short: { same: [21], similar: [19, 20] }, checked: 'subagent' }, // treating young offenders differently to achieve justice
		{ year: 2017, q: '24', verb: 'Assess', essay: { same: [[4, 2]], similar: [[3, 2], [4, 0], [4, 3], [5, 2]] }, short: { similar: [7] }, checked: 'subagent' }, // bail and remand, community interests and individual rights
		{ year: 2018, q: '25', verb: 'Discuss', essay: { same: [[0, 0]], similar: [[0, 2], [0, 3], [0, 4], [0, 5]] }, short: { similar: [14] }, checked: 'subagent' }, // discretion in achieving justice
		{ year: 2019, q: '24', verb: 'Explain', essay: { same: [[4, 4]], similar: [[4, 0], [5, 4]] }, short: { same: [17] }, checked: 'subagent' }, // post-sentencing considerations balancing interests
		{ year: 2020, q: '24', verb: 'To what extent', essay: { same: [[2, 3]], similar: [[2, 0]] }, short: { similar: [11, 12, 13] }, checked: 'subagent' }, // trial process and moral and ethical standards
		{ year: 2021, q: '25', verb: 'Assess', essay: { similar: [[5, 0], [5, 1], [5, 4]] }, short: { similar: [4, 15, 18] }, checked: 'subagent' }, // punishing offenders rather than preventing crime
		{ year: 2022, q: '25', verb: 'Assess', essay: { same: [[3, 0]], similar: [[3, 5], [4, 0], [4, 5]] }, short: { similar: [19] }, checked: 'subagent' }, // law reform balancing rights, age of criminal responsibility
		{ year: 2023, q: '25', verb: 'To what extent', essay: { same: [[1, 3]], similar: [[1, 0], [1, 4]] }, short: { similar: [8, 14] }, checked: 'subagent' }, // courts encouraging compliance
		{ year: 2024, q: '24', verb: 'To what extent', essay: { same: [[5, 3], [5, 4]], similar: [[4, 3], [4, 4]] }, short: { similar: [13, 18] }, checked: 'subagent' }, // trial and sentencing, justice for adult offenders
		{ year: 2025, q: '24', verb: 'Analyse', essay: { similar: [[4, 0], [4, 6], [5, 0], [5, 6]] }, short: { similar: [23, 24] }, checked: 'subagent' } // protecting community interests, transnational and domestic crime
	],
	humanrights: [
		{ year: 2015, q: '21', verb: 'Explain', essay: { similar: [[4, 2]] }, short: { similar: [6, 7] }, checked: 'subagent' }, // a statutory authority promoting human rights
		{ year: 2015, q: '22', verb: 'Outline', essay: { similar: [[2, 1], [3, 1]] }, short: { similar: [1, 2] }, checked: 'subagent' }, // law reform and the abolition of slavery
		{ year: 2015, q: '23', verb: 'Compare', essay: { similar: [[4, 2]] }, short: { similar: [6, 7] }, checked: 'subagent' }, // common law and statute law enforcing human rights
		{ year: 2016, q: '21', verb: 'Outline', short: { same: [6], similar: [7] }, checked: 'subagent' }, // incorporation into Australian domestic law
		{ year: 2016, q: '22', verb: 'Discuss', essay: { similar: [[3, 0], [3, 2]] }, short: { same: [8], similar: [7] }, checked: 'subagent' }, // a Charter of Rights
		{ year: 2016, q: '23', verb: 'Assess', essay: { same: [[1, 3], [4, 3]], similar: [[0, 3], [1, 0], [4, 0]] }, short: { similar: [9] }, checked: 'subagent' }, // protection versus enforcement, a contemporary issue
		{ year: 2017, q: '21', verb: 'Outline', essay: { similar: [[2, 1], [4, 2]] }, short: { similar: [1] }, checked: 'subagent' }, // trade unionism and labour rights
		{ year: 2017, q: '22', verb: 'Describe', essay: { similar: [[4, 2]] }, short: { similar: [6, 7] }, checked: 'subagent' }, // the common law promoting and enforcing human rights
		{ year: 2017, q: '23', verb: 'Evaluate', essay: { same: [[4, 3]], similar: [[1, 3], [3, 3], [4, 0]] }, short: { same: [9] }, checked: 'subagent' }, // responses to a contemporary issue
		{ year: 2018, q: '21', verb: 'List', short: { same: [0] }, checked: 'subagent' }, // features of human rights
		{ year: 2018, q: '22', verb: 'Why', essay: { similar: [[2, 1]] }, short: { similar: [1, 2] }, checked: 'subagent' }, // self-determination
		{ year: 2018, q: '23', verb: 'Explain', essay: { similar: [[4, 2]] }, short: { similar: [7] }, checked: 'subagent' }, // separation of powers
		{ year: 2018, q: '24', verb: 'How effective', essay: { similar: [[4, 2]] }, short: { similar: [5, 7] }, checked: 'subagent' }, // NGOs and the media
		{ year: 2019, q: '21', verb: 'Outline', essay: { similar: [[2, 1]] }, short: { similar: [1, 2] }, checked: 'subagent' }, // universal suffrage over time
		{ year: 2019, q: '22', verb: 'How', essay: { similar: [[4, 2]] }, short: { similar: [5] }, checked: 'subagent' }, // the United Nations
		{ year: 2019, q: '23', verb: 'How effective', essay: { similar: [[1, 2], [4, 2], [4, 3]] }, short: { same: [5], similar: [9] }, checked: 'subagent' }, // international responses, a contemporary issue
		{ year: 2020, q: '21', verb: 'How', essay: { similar: [[2, 1]] }, short: { same: [3], similar: [1, 2] }, checked: 'subagent' }, // the ICCPR
		{ year: 2020, q: '22', verb: 'Explain', essay: { similar: [[4, 2]] }, short: { similar: [5] }, checked: 'subagent' }, // intergovernmental organisations
		{ year: 2020, q: '23', verb: 'To what extent', essay: { same: [[1, 0], [1, 2]], similar: [[0, 0], [0, 2], [1, 3]] }, short: { similar: [4, 5] }, checked: 'subagent' }, // compliance with international human rights law
		{ year: 2021, q: '21', verb: 'Define', short: { same: [0] }, checked: 'subagent' }, // human rights
		{ year: 2021, q: '22', verb: 'How', essay: { similar: [[2, 1]] }, short: { similar: [1, 2] }, checked: 'subagent' }, // environmental rights
		{ year: 2021, q: '23', verb: 'Describe', essay: { similar: [[0, 0], [0, 2], [0, 3]] }, short: { similar: [4] }, checked: 'subagent' }, // state sovereignty
		{ year: 2021, q: '24', verb: 'Discuss', essay: { similar: [[3, 2], [4, 2]] }, short: { same: [7], similar: [6, 8] }, checked: 'subagent' }, // Australian legal responses
		{ year: 2022, q: '21', verb: 'Identify', short: { similar: [6, 7] }, checked: 'subagent' }, // rights in the Constitution
		{ year: 2022, q: '22', verb: 'Outline', essay: { similar: [[4, 2]] }, short: { similar: [5] }, checked: 'subagent' }, // NGOs
		{ year: 2022, q: '23', verb: 'Explain', essay: { similar: [[2, 1]] }, short: { similar: [1, 2] }, checked: 'subagent' }, // recognition of one right over time
		{ year: 2022, q: '24', verb: 'Discuss', essay: { similar: [[0, 2], [4, 2]] }, short: { similar: [5] }, checked: 'subagent' }, // the United Nations
		{ year: 2023, q: '21', verb: 'Identify', short: { same: [0] }, checked: 'subagent' }, // features of human rights
		{ year: 2023, q: '22', verb: 'Outline', essay: { similar: [[2, 1]] }, short: { similar: [1, 2] }, checked: 'subagent' }, // universal education
		{ year: 2023, q: '23', verb: 'How', essay: { similar: [[4, 2]] }, short: { similar: [6, 7] }, checked: 'subagent' }, // the High Court
		{ year: 2023, q: '24', verb: 'Evaluate', essay: { same: [[4, 3]], similar: [[4, 0], [4, 2]] }, short: { same: [9], similar: [5, 7] }, checked: 'subagent' }, // legal responses, a contemporary issue
		{ year: 2024, q: '21', verb: 'Define', short: { similar: [1, 2] }, checked: 'subagent' }, // self-determination
		{ year: 2024, q: '22', verb: 'Discuss', essay: { similar: [[2, 0], [2, 2], [3, 2]] }, short: { similar: [6, 7, 8] }, checked: 'subagent' }, // the Constitution and changing values
		{ year: 2024, q: '23', verb: 'Analyse', essay: { same: [[0, 3]], similar: [[0, 0], [0, 2], [1, 3]] }, short: { similar: [4, 9] }, checked: 'subagent' }, // state sovereignty, a contemporary issue
		{ year: 2025, q: '21', verb: 'How', essay: { similar: [[2, 1]] }, short: { similar: [1, 2] }, checked: 'subagent' }, // peace rights over time
		{ year: 2025, q: '22', verb: 'Explain', essay: { similar: [[2, 1], [2, 2], [3, 2], [4, 2]] }, short: { similar: [5] }, checked: 'subagent' }, // the media and change
		{ year: 2025, q: '23', verb: 'How', essay: { similar: [[4, 0], [4, 2]] }, short: { similar: [5, 6, 7] }, checked: 'subagent' } // legal measures protecting human rights
	],
	consumers: [
		{ year: 2015, q: '25(a)', verb: 'To what extent', essay: { similar: [[4, 0]] }, short: { similar: [5, 7] }, checked: 'subagent' }, // NGOs, media and awareness
		{ year: 2015, q: '25(b)', verb: 'Assess', essay: { similar: [[4, 1], [4, 5]] }, short: { same: [3], similar: [10] }, checked: 'subagent' }, // regulation of marketing and advertising
		{ year: 2016, q: '25(a)', verb: 'To what extent', essay: { same: [[0, 0]], similar: [[0, 2]] }, short: { similar: [6] }, checked: 'subagent' }, // cooperation to resolve conflict
		{ year: 2016, q: '25(b)', verb: 'Evaluate', essay: { same: [[4, 3]], similar: [[1, 3], [3, 3]] }, short: { same: [8] }, checked: 'subagent' }, // credit
		{ year: 2017, q: '25(a)', verb: 'Evaluate', essay: { same: [[3, 7]], similar: [[2, 7], [3, 0], [4, 7]] }, checked: 'subagent' }, // a changing legal system, a contemporary issue
		{ year: 2017, q: '25(b)', verb: 'Assess', essay: { same: [[4, 0]], similar: [[4, 2], [4, 7]] }, short: { same: [7] }, checked: 'subagent' }, // legal and non-legal measures
		{ year: 2018, q: '26(a)', verb: 'Evaluate', essay: { same: [[2, 0]], similar: [[2, 7], [3, 0]] }, short: { similar: [0] }, checked: 'subagent' }, // changing values
		{ year: 2018, q: '26(b)', verb: 'To what extent', essay: { similar: [[4, 1], [4, 5]] }, short: { same: [3], similar: [10] }, checked: 'subagent' }, // regulation of marketing and advertising
		{ year: 2019, q: '25(a)', verb: 'Evaluate', essay: { same: [[4, 2]], similar: [[0, 2]] }, short: { similar: [6, 7] }, checked: 'subagent' }, // redress and remedies
		{ year: 2019, q: '25(b)', verb: 'Assess', essay: { same: [[3, 0], [3, 7]], similar: [[2, 7]] }, checked: 'subagent' }, // law reform, a contemporary issue
		{ year: 2020, q: '25(a)', verb: 'Evaluate', essay: { same: [[4, 6]], similar: [[1, 6], [3, 6]] }, short: { same: [11] }, checked: 'subagent' }, // technology
		{ year: 2020, q: '25(b)', verb: 'To what extent', essay: { same: [[1, 0]], similar: [[1, 1], [1, 7]] }, checked: 'subagent' }, // compliance
		{ year: 2021, q: '26(a)', verb: 'To what extent', essay: { same: [[4, 2]], similar: [[0, 2], [4, 0]] }, short: { similar: [6, 7] }, checked: 'subagent' }, // courts and tribunals
		{ year: 2021, q: '26(b)', verb: 'Assess', essay: { same: [[2, 0], [3, 0]], similar: [[3, 6], [3, 7]] }, short: { similar: [0] }, checked: 'subagent' }, // failing to respond to change
		{ year: 2022, q: '26(a)', verb: 'To what extent', essay: { same: [[4, 0]], similar: [[4, 2]] }, short: { same: [7] }, checked: 'subagent' }, // legal versus non-legal responses
		{ year: 2022, q: '26(b)', verb: 'Evaluate', essay: { same: [[0, 0], [0, 7]], similar: [[0, 2]] }, checked: 'subagent' }, // cooperation, at least one issue
		{ year: 2023, q: '26(a)', verb: 'To what extent', essay: { similar: [[4, 4], [4, 5]] }, short: { similar: [3, 9, 10] }, checked: 'subagent' }, // product certification and marketing innovations
		{ year: 2023, q: '26(b)', verb: 'Assess', essay: { similar: [[4, 0], [4, 2]] }, short: { similar: [5, 7] }, checked: 'subagent' }, // government and non-government organisations
		{ year: 2024, q: '25(a)', verb: 'Analyse', essay: { similar: [[1, 0], [4, 0], [4, 2]] }, short: { similar: [7] }, checked: 'subagent' }, // state and federal government organisations
		{ year: 2024, q: '25(b)', verb: 'To what extent', essay: { similar: [[4, 3], [4, 6]] }, short: { similar: [8, 11] }, checked: 'subagent' }, // credit and technology
		{ year: 2025, q: '25(a)', verb: 'To what extent', essay: { same: [[1, 0]], similar: [[1, 7], [4, 0]] }, checked: 'subagent' }, // non-compliance
		{ year: 2025, q: '25(b)', verb: 'Assess', essay: { same: [[2, 7]], similar: [[2, 0], [3, 7], [4, 7]] }, checked: 'subagent' } // changing values and just outcomes, a contemporary issue
	],
	environment: [
		{ year: 2015, q: '26(a)', verb: 'To what extent', essay: { same: [[3, 0]], similar: [[2, 0], [3, 2], [3, 3], [3, 7]] }, short: { similar: [1] }, checked: 'subagent' }, // law reform
		{ year: 2015, q: '26(b)', verb: 'Assess', essay: { similar: [[0, 2], [4, 0], [4, 2]] }, short: { similar: [4, 6] }, checked: 'subagent' }, // the United Nations
		{ year: 2016, q: '26(a)', verb: 'To what extent', essay: { same: [[0, 0]], similar: [[0, 6], [0, 7], [1, 0]] }, short: { similar: [3, 10] }, checked: 'subagent' }, // state sovereignty and conflict
		{ year: 2016, q: '26(b)', verb: 'Evaluate', essay: { same: [[4, 4]], similar: [[0, 4], [1, 4], [2, 4], [3, 4]] }, short: { same: [8] }, checked: 'subagent' }, // demand for resources
		{ year: 2017, q: '26(a)', verb: 'Evaluate', essay: { same: [[3, 7]], similar: [[2, 7], [3, 0], [4, 7]] }, checked: 'subagent' }, // a changing legal system, a contemporary issue
		{ year: 2017, q: '26(b)', verb: 'Assess', essay: { same: [[4, 0], [4, 2]], similar: [[4, 3], [4, 7]] }, short: { same: [6] }, checked: 'subagent' }, // legal and non-legal measures
		{ year: 2018, q: '27(a)', verb: 'Evaluate', essay: { same: [[2, 0]], similar: [[2, 2], [2, 4], [2, 7], [3, 0]] }, checked: 'subagent' }, // changing values
		{ year: 2018, q: '27(b)', verb: 'Discuss', essay: { same: [[0, 0]], similar: [[0, 2], [0, 6], [0, 7]] }, short: { same: [3], similar: [10] }, checked: 'subagent' }, // state sovereignty
		{ year: 2019, q: '26(a)', verb: 'Evaluate', essay: { same: [[4, 2]], similar: [[0, 2], [1, 2], [4, 0], [4, 6]] }, short: { same: [6], similar: [10] }, checked: 'subagent' }, // international responses
		{ year: 2019, q: '26(b)', verb: 'Assess', essay: { same: [[3, 0], [3, 7]], similar: [[2, 7], [3, 2], [3, 3]] }, short: { similar: [1] }, checked: 'subagent' }, // law reform, a contemporary issue
		{ year: 2020, q: '26(a)', verb: 'Evaluate', essay: { same: [[4, 3]], similar: [[0, 3], [1, 3], [3, 3], [4, 7]] }, short: { same: [7] }, checked: 'subagent' }, // global threats
		{ year: 2020, q: '26(b)', verb: 'To what extent', essay: { same: [[1, 0]], similar: [[0, 0], [0, 6], [1, 6], [1, 7]] }, short: { similar: [3, 10] }, checked: 'subagent' }, // cooperation with the law
		{ year: 2021, q: '27(a)', verb: 'To what extent', essay: { similar: [[0, 2], [4, 0], [4, 2]] }, short: { similar: [1, 4, 6] }, checked: 'subagent' }, // courts and conferences
		{ year: 2021, q: '27(b)', verb: 'Assess', essay: { same: [[2, 0], [3, 0]], similar: [[2, 7], [3, 3], [3, 7]] }, short: { similar: [2] }, checked: 'subagent' }, // failing to respond to change
		{ year: 2022, q: '27(a)', verb: 'To what extent', essay: { same: [[4, 0]], similar: [[4, 2], [4, 3], [4, 7]] }, short: { same: [6] }, checked: 'subagent' }, // legal versus non-legal responses
		{ year: 2022, q: '27(b)', verb: 'Evaluate', essay: { same: [[0, 0], [0, 7]], similar: [[1, 0], [1, 7]] }, short: { similar: [3, 10] }, checked: 'subagent' }, // cooperation, at least one issue
		{ year: 2023, q: '27(a)', verb: 'To what extent', essay: { same: [[4, 6]], similar: [[0, 6], [1, 6]] }, short: { similar: [3, 10] }, checked: 'subagent' }, // barriers
		{ year: 2023, q: '27(b)', verb: 'Assess', essay: { same: [[4, 2]], similar: [[0, 2], [4, 0]] }, short: { similar: [4, 6] }, checked: 'subagent' }, // the United Nations and other organisations
		{ year: 2024, q: '26(a)', verb: 'Analyse', essay: { similar: [[1, 5], [3, 5], [4, 5]] }, short: { same: [5], similar: [9] }, checked: 'subagent' }, // Australia's federal structure
		{ year: 2024, q: '26(b)', verb: 'To what extent', essay: { same: [[4, 4]], similar: [[0, 4], [1, 4], [2, 4], [3, 4]] }, short: { same: [8] }, checked: 'subagent' }, // demand for resources
		{ year: 2025, q: '26(a)', verb: 'To what extent', essay: { same: [[1, 0]], similar: [[0, 0], [1, 3], [1, 6], [1, 7], [4, 0]] }, checked: 'subagent' }, // non-compliance
		{ year: 2025, q: '26(b)', verb: 'Assess', essay: { same: [[2, 0], [2, 7]], similar: [[2, 4], [3, 7]] }, checked: 'subagent' } // changing values and just outcomes, a contemporary issue
	],
	family: [
		{ year: 2015, q: '27(a)', verb: 'To what extent', essay: { same: [[2, 1], [2, 3]], similar: [[2, 0], [3, 1], [3, 3]] }, short: { similar: [0, 8] }, checked: 'subagent' }, // law reform on alternative family relationships
		{ year: 2015, q: '27(b)', verb: 'Assess', essay: { similar: [[1, 2], [3, 2], [4, 0], [4, 2]] }, short: { same: [5] }, checked: 'subagent' }, // domestic violence
		{ year: 2016, q: '27(a)', verb: 'To what extent', essay: { same: [[0, 0]], similar: [[0, 2]] }, short: { similar: [4] }, checked: 'subagent' }, // cooperation to resolve conflict
		{ year: 2016, q: '27(b)', verb: 'Evaluate', essay: { same: [[4, 5]], similar: [[1, 5], [2, 5], [3, 5]] }, short: { same: [10] }, checked: 'subagent' }, // birth technologies and surrogacy
		{ year: 2017, q: '27(a)', verb: 'Evaluate', essay: { same: [[3, 7]], similar: [[2, 7], [3, 0], [3, 3], [3, 4], [3, 5], [3, 6], [4, 7]] }, checked: 'subagent' }, // a changing legal system, a contemporary issue
		{ year: 2017, q: '27(b)', verb: 'Assess', essay: { same: [[4, 0]], similar: [[3, 0], [4, 2], [4, 7]] }, checked: 'subagent' }, // legal and non-legal measures
		{ year: 2018, q: '28(a)', verb: 'Evaluate', essay: { same: [[2, 0]], similar: [[2, 1], [2, 3], [2, 7], [3, 0]] }, short: { similar: [0] }, checked: 'subagent' }, // changes reflecting community values
		{ year: 2018, q: '28(b)', verb: 'To what extent', essay: { same: [[4, 2]], similar: [[0, 2], [4, 0]] }, short: { similar: [4, 5, 7] }, checked: 'subagent' }, // legal processes for problems in relationships
		{ year: 2019, q: '27(a)', verb: 'Evaluate', essay: { same: [[4, 2]], similar: [[0, 2], [4, 0]] }, short: { same: [7], similar: [4] }, checked: 'subagent' }, // relationship breakdowns
		{ year: 2019, q: '27(b)', verb: 'Assess', essay: { same: [[3, 0], [3, 7]], similar: [[2, 7], [3, 3], [3, 4], [3, 5], [3, 6], [4, 7]] }, checked: 'subagent' }, // law reform, a contemporary issue
		{ year: 2020, q: '27(a)', verb: 'Evaluate', essay: { same: [[4, 6]], similar: [[2, 6], [3, 6]] }, short: { same: [11], similar: [3] }, checked: 'subagent' }, // care and protection of children
		{ year: 2020, q: '27(b)', verb: 'To what extent', essay: { same: [[1, 0]], similar: [[1, 2], [1, 5], [1, 7]] }, checked: 'subagent' }, // compliance
		{ year: 2021, q: '28(a)', verb: 'To what extent', essay: { same: [[4, 2]], similar: [[0, 0], [0, 2], [4, 0]] }, short: { similar: [4, 7] }, checked: 'subagent' }, // courts and dispute resolution
		{ year: 2021, q: '28(b)', verb: 'Assess', essay: { same: [[2, 0], [3, 0]], similar: [[2, 6], [3, 2], [3, 6]] }, short: { similar: [5, 11] }, checked: 'subagent' }, // failing to respond to change
		{ year: 2022, q: '28(a)', verb: 'To what extent', essay: { same: [[4, 0]], similar: [[4, 2], [4, 7]] }, short: { similar: [6] }, checked: 'subagent' }, // legal versus non-legal responses
		{ year: 2022, q: '28(b)', verb: 'Evaluate', essay: { same: [[0, 0], [0, 7]], similar: [[0, 2]] }, short: { similar: [4] }, checked: 'subagent' }, // cooperation, at least one issue
		{ year: 2023, q: '28(a)', verb: 'To what extent', essay: { same: [[2, 4]], similar: [[3, 4], [4, 4]] }, short: { similar: [3, 9] }, checked: 'subagent' }, // changing parental responsibilities
		{ year: 2023, q: '28(b)', verb: 'Assess', essay: { similar: [[1, 2], [3, 2], [4, 2]] }, short: { same: [5] }, checked: 'subagent' }, // domestic violence
		{ year: 2024, q: '27(a)', verb: 'Analyse', essay: { similar: [[4, 0], [4, 1]] }, short: { similar: [1, 3] }, checked: 'subagent' }, // state and federal governments
		{ year: 2024, q: '27(b)', verb: 'To what extent', essay: { same: [[4, 5]], similar: [[1, 5], [2, 5], [3, 5]] }, short: { same: [10] }, checked: 'subagent' }, // surrogacy and birth technologies
		{ year: 2025, q: '27(a)', verb: 'To what extent', essay: { same: [[1, 0]], similar: [[1, 2], [1, 5], [1, 7], [4, 0]] }, checked: 'subagent' }, // non-compliance
		{ year: 2025, q: '27(b)', verb: 'Assess', essay: { same: [[2, 7]], similar: [[2, 0], [2, 3], [2, 4], [2, 5], [2, 6], [3, 7]] }, checked: 'subagent' } // changing values and just outcomes, a contemporary issue
	],
	indigenous: [
		{ year: 2015, q: '28(a)', verb: 'To what extent', essay: { same: [[0, 0]], similar: [[0, 2], [3, 0]] }, short: { similar: [4] }, checked: 'subagent' }, // state sovereignty and recognition of rights
		{ year: 2015, q: '28(b)', verb: 'To what extent', essay: { same: [[2, 0]], similar: [[2, 1], [2, 2], [2, 7], [3, 0]] }, checked: 'subagent' }, // changing values
		{ year: 2016, q: '28(a)', verb: 'To what extent', essay: { same: [[0, 0]], similar: [[0, 2], [0, 7]] }, short: { similar: [4] }, checked: 'subagent' }, // state sovereignty and conflict
		{ year: 2016, q: '28(b)', verb: 'Evaluate', essay: { same: [[4, 4]], similar: [[3, 4], [4, 5]] }, short: { same: [8], similar: [9] }, checked: 'subagent' }, // land rights
		{ year: 2017, q: '28(a)', verb: 'Evaluate', essay: { same: [[3, 7]], similar: [[2, 7], [3, 0], [4, 7]] }, checked: 'subagent' }, // a changing legal system, a contemporary issue
		{ year: 2017, q: '28(b)', verb: 'Assess', essay: { same: [[4, 0]], similar: [[4, 2]] }, short: { same: [5] }, checked: 'subagent' }, // legal and non-legal measures
		{ year: 2018, q: '29(a)', verb: 'Evaluate', essay: { same: [[2, 0]], similar: [[2, 1], [2, 2], [2, 7], [3, 0]] }, checked: 'subagent' }, // changing values
		{ year: 2018, q: '29(b)', verb: 'To what extent', essay: { same: [[4, 2]], similar: [[0, 2], [4, 0]] }, short: { similar: [3, 5] }, checked: 'subagent' }, // determining their own future
		{ year: 2019, q: '28(a)', verb: 'Evaluate', essay: { same: [[4, 2]], similar: [[0, 0], [0, 2], [4, 0]] }, short: { similar: [4, 5] }, checked: 'subagent' }, // international responses
		{ year: 2019, q: '28(b)', verb: 'Assess', essay: { same: [[3, 0], [3, 7]], similar: [[2, 7]] }, short: { similar: [2] }, checked: 'subagent' }, // law reform, a contemporary issue
		{ year: 2020, q: '28(a)', verb: 'Evaluate', essay: { same: [[4, 3]], similar: [[3, 3], [4, 6]] }, short: { same: [7], similar: [10] }, checked: 'subagent' }, // loss of cultural rights
		{ year: 2020, q: '28(b)', verb: 'To what extent', essay: { same: [[1, 0]], similar: [[0, 0], [1, 2], [1, 7]] }, short: { similar: [4] }, checked: 'subagent' }, // cooperation with the law
		{ year: 2021, q: '29(a)', verb: 'To what extent', essay: { same: [[4, 2]], similar: [[0, 2], [4, 0]] }, short: { similar: [5] }, checked: 'subagent' }, // courts and the United Nations
		{ year: 2021, q: '29(b)', verb: 'Assess', essay: { same: [[2, 0], [3, 0]], similar: [[2, 3], [3, 3]] }, short: { similar: [1] }, checked: 'subagent' }, // failing to respond to change
		{ year: 2022, q: '29(a)', verb: 'To what extent', essay: { same: [[4, 0]], similar: [[4, 2]] }, short: { similar: [5] }, checked: 'subagent' }, // legal versus non-legal responses
		{ year: 2022, q: '29(b)', verb: 'Evaluate', essay: { same: [[0, 7]], similar: [[0, 0], [1, 7], [4, 7]] }, checked: 'subagent' }, // cooperation, at least one issue
		{ year: 2023, q: '29(a)', verb: 'To what extent', essay: { same: [[4, 4], [4, 5]], similar: [[3, 4], [3, 5]] }, short: { similar: [8, 9] }, checked: 'subagent' }, // land and natural resources
		{ year: 2023, q: '29(b)', verb: 'Assess', essay: { same: [[4, 2]], similar: [[0, 2], [4, 0]] }, short: { similar: [5] }, checked: 'subagent' }, // the United Nations and courts
		{ year: 2024, q: '28(a)', verb: 'Analyse', essay: { similar: [[4, 2]] }, short: { same: [6] }, checked: 'subagent' }, // Australia's federal structure
		{ year: 2024, q: '28(b)', verb: 'To what extent', essay: { same: [[4, 3], [4, 6]], similar: [[3, 3], [3, 6]] }, short: { similar: [7, 10] }, checked: 'subagent' }, // intellectual property and cultural rights
		{ year: 2025, q: '28(a)', verb: 'To what extent', essay: { same: [[1, 0]], similar: [[0, 0], [1, 2], [1, 7], [4, 0]] }, checked: 'subagent' }, // non-compliance
		{ year: 2025, q: '28(b)', verb: 'Assess', essay: { same: [[2, 0], [2, 7]], similar: [[3, 7], [4, 7]] }, checked: 'subagent' } // changing values and just outcomes, a contemporary issue
	],
	shelter: [
		{ year: 2015, q: '29(a)', verb: 'To what extent', essay: { same: [[0, 0], [0, 2]], similar: [[4, 2]] }, short: { similar: [5] }, checked: 'subagent' }, // dispute resolution mechanisms
		{ year: 2015, q: '29(b)', verb: 'To what extent', essay: { same: [[4, 2]], similar: [[4, 0]] }, short: { similar: [4, 5, 6] }, checked: 'subagent' }, // purchasing and selling shelter
		{ year: 2016, q: '29(a)', verb: 'To what extent', essay: { same: [[0, 0]], similar: [[0, 2], [0, 7]] }, short: { similar: [5] }, checked: 'subagent' }, // cooperation to resolve conflict
		{ year: 2016, q: '29(b)', verb: 'Evaluate', essay: { same: [[4, 6]], similar: [[3, 6], [4, 0]] }, short: { same: [10], similar: [2] }, checked: 'subagent' }, // social housing
		{ year: 2017, q: '29(a)', verb: 'Evaluate', essay: { same: [[3, 7]], similar: [[2, 7], [3, 0], [4, 7]] }, checked: 'subagent' }, // a changing legal system, a contemporary issue
		{ year: 2017, q: '29(b)', verb: 'Assess', essay: { same: [[4, 0]], similar: [[4, 7]] }, short: { same: [6], similar: [5] }, checked: 'subagent' }, // legal and non-legal measures
		{ year: 2018, q: '30(a)', verb: 'Evaluate', essay: { same: [[2, 0]], similar: [[2, 7], [3, 0]] }, checked: 'subagent' }, // changes reflecting values
		{ year: 2018, q: '30(b)', verb: 'To what extent', essay: { same: [[4, 2]], similar: [[3, 2], [4, 0]] }, short: { same: [5], similar: [6] }, checked: 'subagent' }, // protecting those securing and providing shelter
		{ year: 2019, q: '29(a)', verb: 'Evaluate', essay: { same: [[4, 2]], similar: [[3, 2]] }, short: { same: [5], similar: [4, 6] }, checked: 'subagent' }, // legal protection and remedies
		{ year: 2019, q: '29(b)', verb: 'Assess', essay: { same: [[3, 0], [3, 7]], similar: [[2, 0], [2, 7]] }, checked: 'subagent' }, // law reform, a contemporary issue
		{ year: 2020, q: '29(a)', verb: 'Evaluate', essay: { same: [[4, 3]], similar: [[3, 3], [4, 6]] }, short: { same: [7], similar: [10] }, checked: 'subagent' }, // affordability
		{ year: 2020, q: '29(b)', verb: 'To what extent', essay: { same: [[1, 0]], similar: [[1, 2], [1, 7]] }, checked: 'subagent' }, // compliance
		{ year: 2021, q: '30(a)', verb: 'To what extent', essay: { same: [[4, 2]], similar: [[0, 2], [4, 0]] }, short: { similar: [5, 6] }, checked: 'subagent' }, // courts and tribunals
		{ year: 2021, q: '30(b)', verb: 'Assess', essay: { same: [[2, 0], [3, 0]], similar: [[2, 7], [3, 7]] }, checked: 'subagent' }, // failing to respond to change
		{ year: 2022, q: '30(a)', verb: 'To what extent', essay: { same: [[4, 0]], similar: [[4, 7]] }, short: { same: [6] }, checked: 'subagent' }, // legal versus non-legal responses
		{ year: 2022, q: '30(b)', verb: 'Evaluate', essay: { same: [[0, 0], [0, 7]], similar: [[0, 2]] }, checked: 'subagent' }, // cooperation, at least one issue
		{ year: 2023, q: '30(a)', verb: 'To what extent', essay: { same: [[4, 4], [4, 5]] }, short: { similar: [8, 9] }, checked: 'subagent' }, // discrimination and homelessness
		{ year: 2023, q: '30(b)', verb: 'Assess', essay: { same: [[0, 2], [4, 2]], similar: [[0, 0]] }, short: { same: [5], similar: [6] }, checked: 'subagent' }, // dispute resolution mechanisms
		{ year: 2024, q: '29(a)', verb: 'Analyse', essay: { similar: [[3, 1], [4, 1], [4, 6]] }, short: { same: [2], similar: [1] }, checked: 'subagent' }, // state and federal governments
		{ year: 2024, q: '29(b)', verb: 'To what extent', essay: { same: [[4, 3], [4, 6]] }, short: { similar: [7, 10] }, checked: 'subagent' }, // affordability and social housing
		{ year: 2025, q: '29(a)', verb: 'To what extent', essay: { same: [[1, 0]], similar: [[1, 2], [1, 7], [4, 0]] }, checked: 'subagent' }, // non-compliance
		{ year: 2025, q: '29(b)', verb: 'Assess', essay: { same: [[2, 7]], similar: [[2, 0], [3, 7], [4, 7]] }, checked: 'subagent' } // changing values and just outcomes, a contemporary issue
	],
	workplace: [
		{ year: 2015, q: '30(a)', verb: 'To what extent', essay: { same: [[3, 3]], similar: [[2, 3], [3, 0], [4, 3]] }, short: { similar: [8] }, checked: 'subagent' }, // law reform and discrimination
		{ year: 2015, q: '30(b)', verb: 'Assess', essay: { similar: [[0, 2], [4, 2]] }, short: { similar: [7] }, checked: 'subagent' }, // trade unions
		{ year: 2016, q: '30(a)', verb: 'To what extent', essay: { same: [[0, 0]], similar: [[0, 2], [0, 7]] }, short: { similar: [4] }, checked: 'subagent' }, // cooperation to resolve conflict
		{ year: 2016, q: '30(b)', verb: 'Evaluate', essay: { same: [[4, 5]], similar: [[0, 5], [1, 5], [3, 5]] }, short: { same: [10] }, checked: 'subagent' }, // termination of employment
		{ year: 2017, q: '30(a)', verb: 'Evaluate', essay: { same: [[3, 7]], similar: [[2, 7], [3, 0], [4, 7]] }, checked: 'subagent' }, // a changing legal system, a contemporary issue
		{ year: 2017, q: '30(b)', verb: 'Assess', essay: { same: [[4, 0]], similar: [[4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7]] }, short: { similar: [7] }, checked: 'subagent' }, // legal and non-legal measures
		{ year: 2018, q: '31(a)', verb: 'Evaluate', essay: { same: [[2, 0]], similar: [[2, 1], [2, 3], [2, 7], [3, 0]] }, short: { similar: [0] }, checked: 'subagent' }, // changes reflecting values
		{ year: 2018, q: '31(b)', verb: 'To what extent', essay: { same: [[0, 0], [0, 2]], similar: [[0, 7]] }, short: { same: [4] }, checked: 'subagent' }, // resolving disputes
		{ year: 2019, q: '30(a)', verb: 'Evaluate', essay: { same: [[4, 2]], similar: [[3, 2], [4, 0]] }, short: { same: [7], similar: [3, 5] }, checked: 'subagent' }, // regulation of the workplace
		{ year: 2019, q: '30(b)', verb: 'Assess', essay: { same: [[3, 0], [3, 7]], similar: [[2, 7], [3, 3], [3, 5]] }, checked: 'subagent' }, // law reform, a contemporary issue
		{ year: 2020, q: '30(a)', verb: 'Evaluate', essay: { same: [[4, 4]], similar: [[0, 4], [1, 4], [3, 4]] }, short: { same: [9] }, checked: 'subagent' }, // workplace safety
		{ year: 2020, q: '30(b)', verb: 'To what extent', essay: { same: [[1, 0]], similar: [[1, 2], [1, 3], [1, 4], [1, 7]] }, short: { similar: [5] }, checked: 'subagent' }, // compliance
		{ year: 2021, q: '31(a)', verb: 'To what extent', essay: { similar: [[0, 2], [4, 0], [4, 2]] }, short: { similar: [4, 5] }, checked: 'subagent' }, // courts and tribunals
		{ year: 2021, q: '31(b)', verb: 'Assess', essay: { same: [[2, 0], [3, 0]], similar: [[2, 1], [2, 7], [3, 7]] }, short: { similar: [0] }, checked: 'subagent' }, // failing to respond to change
		{ year: 2022, q: '31(a)', verb: 'To what extent', essay: { same: [[4, 0]], similar: [[4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7]] }, short: { similar: [7] }, checked: 'subagent' }, // legal versus non-legal responses
		{ year: 2022, q: '31(b)', verb: 'Evaluate', essay: { same: [[0, 0], [0, 7]], similar: [[0, 2], [0, 3], [0, 4], [0, 5]] }, short: { similar: [4] }, checked: 'subagent' }, // cooperation, at least one issue
		{ year: 2023, q: '31(a)', verb: 'To what extent', essay: { same: [[4, 3]], similar: [[0, 3], [1, 3], [2, 3], [3, 3]] }, short: { same: [8] }, checked: 'subagent' }, // discrimination
		{ year: 2023, q: '31(b)', verb: 'Assess', essay: { same: [[0, 0], [0, 2]], similar: [[4, 0], [4, 2]] }, short: { same: [4] }, checked: 'subagent' }, // dispute resolution mechanisms
		{ year: 2024, q: '30(a)', verb: 'Analyse', essay: { similar: [[3, 2], [4, 2]] }, short: { similar: [1, 3, 5, 7] }, checked: 'subagent' }, // state and federal governments
		{ year: 2024, q: '30(b)', verb: 'To what extent', essay: { similar: [[4, 5], [4, 6]] }, short: { similar: [10, 11] }, checked: 'subagent' }, // leave and termination of employment
		{ year: 2025, q: '30(a)', verb: 'To what extent', essay: { same: [[1, 0]], similar: [[1, 2], [1, 3], [1, 4], [1, 7]] }, checked: 'subagent' }, // non-compliance
		{ year: 2025, q: '30(b)', verb: 'Assess', essay: { same: [[2, 7]], similar: [[2, 0], [3, 7], [4, 7]] }, checked: 'subagent' } // changing values and just outcomes, a contemporary issue
	],
	worldorder: [
		{ year: 2015, q: '31(a)', verb: 'To what extent', essay: { same: [[4, 2]], similar: [[0, 2], [4, 0]] }, short: { similar: [6] }, checked: 'subagent' }, // political negotiation and force
		{ year: 2015, q: '31(b)', verb: 'Assess', essay: { same: [[4, 2]], similar: [[0, 2], [4, 0], [4, 5]] }, short: { similar: [6, 9] }, checked: 'subagent' }, // the United Nations
		{ year: 2016, q: '31(a)', verb: 'To what extent', essay: { same: [[0, 0]], similar: [[0, 2], [0, 5], [1, 0]] }, short: { similar: [9] }, checked: 'subagent' }, // cooperation to achieve world order
		{ year: 2016, q: '31(b)', verb: 'Evaluate', essay: { same: [[4, 3]], similar: [[2, 3], [3, 3]] }, short: { same: [7], similar: [4] }, checked: 'subagent' }, // state sovereignty and the responsibility to protect
		{ year: 2017, q: '31(a)', verb: 'Evaluate', essay: { same: [[3, 7]], similar: [[2, 7], [3, 0]] }, short: { similar: [1] }, checked: 'subagent' }, // a changing legal system, a contemporary issue
		{ year: 2017, q: '31(b)', verb: 'Assess', essay: { same: [[4, 0], [4, 2]], similar: [[0, 0], [4, 5]] }, short: { same: [6] }, checked: 'subagent' }, // legal and non-legal measures
		{ year: 2018, q: '32(a)', verb: 'Evaluate', essay: { same: [[2, 0]], similar: [[0, 0], [2, 3], [2, 4], [2, 7]] }, checked: 'subagent' }, // changing values
		{ year: 2018, q: '32(b)', verb: 'Analyse', essay: { same: [[1, 0]], similar: [[1, 2], [1, 4], [1, 6]] }, short: { similar: [4] }, checked: 'subagent' }, // compliance and non-compliance
		{ year: 2019, q: '31(a)', verb: 'Evaluate', essay: { same: [[4, 0], [4, 2]], similar: [[0, 2], [4, 4]] }, short: { same: [6], similar: [8, 9] }, checked: 'subagent' }, // international responses
		{ year: 2019, q: '31(b)', verb: 'Assess', essay: { same: [[3, 0], [3, 7]], similar: [[2, 0], [3, 2], [3, 3]] }, checked: 'subagent' }, // law reform, a contemporary issue
		{ year: 2020, q: '31(a)', verb: 'Evaluate', essay: { same: [[4, 6]], similar: [[1, 6], [2, 6], [3, 6]] }, short: { same: [10] }, checked: 'subagent' }, // conduct of hostilities
		{ year: 2020, q: '31(b)', verb: 'To what extent', essay: { same: [[0, 0], [1, 0]], similar: [[0, 5], [1, 2]] }, short: { similar: [4, 9] }, checked: 'subagent' }, // cooperation with the law
		{ year: 2021, q: '32(a)', verb: 'To what extent', essay: { similar: [[1, 0], [4, 0], [4, 2], [4, 6]] }, short: { similar: [6] }, checked: 'subagent' }, // courts and tribunals
		{ year: 2021, q: '32(b)', verb: 'Assess', essay: { same: [[2, 0], [3, 0]], similar: [[0, 0], [2, 7], [3, 7]] }, short: { similar: [1] }, checked: 'subagent' }, // failing to respond to change
		{ year: 2022, q: '32(a)', verb: 'To what extent', essay: { same: [[4, 0], [4, 2]], similar: [[4, 4]] }, short: { similar: [6] }, checked: 'subagent' }, // legal versus non-legal responses
		{ year: 2022, q: '32(b)', verb: 'Evaluate', essay: { same: [[0, 0], [0, 7]], similar: [[0, 4], [0, 5], [4, 7]] }, short: { similar: [9] }, checked: 'subagent' }, // cooperation, at least one issue
		{ year: 2023, q: '32(a)', verb: 'How effective', essay: { same: [[4, 4]], similar: [[0, 4], [1, 4], [3, 4], [4, 2]] }, short: { same: [8] }, checked: 'subagent' }, // regional and global situations
		{ year: 2023, q: '32(b)', verb: 'Assess', essay: { same: [[0, 2]], similar: [[0, 0], [0, 5], [4, 2]] }, short: { similar: [6, 9] }, checked: 'subagent' }, // the United Nations
		{ year: 2024, q: '31(a)', verb: 'Analyse', essay: { similar: [[0, 2], [4, 2]] }, short: { same: [5] }, checked: 'subagent' }, // Australia's federal government
		{ year: 2024, q: '31(b)', verb: 'To what extent', essay: { similar: [[4, 3], [4, 6]] }, short: { similar: [7, 10] }, checked: 'subagent' }, // responsibility to protect and conduct of hostilities
		{ year: 2025, q: '31(a)', verb: 'To what extent', essay: { same: [[1, 0]], similar: [[1, 2], [1, 4], [1, 6], [4, 0]] }, short: { similar: [4] }, checked: 'subagent' }, // non-compliance
		{ year: 2025, q: '31(b)', verb: 'Assess', essay: { same: [[2, 0], [2, 7]], similar: [[2, 3], [2, 4], [3, 7]] }, checked: 'subagent' } // changing values and just outcomes, a contemporary issue
	]
};

const questionCache = new Map();

function capitalise(text) {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

function essayQuestion(verb, theme, topic) {
	switch (verb) {
		case 'To what extent':
			return 'In relation to ' + topic + ', to what extent is the law effective, considering ' + theme + '?';
		case 'How effective':
			return 'In relation to ' + topic + ', how effective is the law, considering ' + theme + '?';
		case 'How well':
			return 'In relation to ' + topic + ', how well does the law achieve justice, considering ' + theme + '?';
		default:
			return verb + ' ' + theme + ' in relation to ' + topic + '.';
	}
}

function shortQuestion(verb, point) {
	if (verb === 'Why') {
		return 'Why is it important to understand ' + point + '?';
	}
	return verb + ' ' + point + '.';
}

// Which past HSC questions a generated question repeats. `judge` returns 'seen', 'similar' or nothing for each past question.
function pastMatches(bankKey, judge) {
	const found = { seen: [], similar: [] };
	for (const past of pastPapers[bankKey] || []) {
		const kind = judge(past);
		if (kind) {
			found[kind].push(past);
		}
	}
	return found;
}

function hasPair(pairs, theme, topic) {
	return (pairs || []).some((pair) => pair[0] === theme && pair[1] === topic);
}

function judgeEssay(past, verb, theme, topic) {
	const essay = past.essay || {};
	if (hasPair(essay.same, theme, topic)) {
		return past.verb === verb ? 'seen' : 'similar';
	}
	return hasPair(essay.similar, theme, topic) ? 'similar' : null;
}

function judgeShort(past, point) {
	const short = past.short || {};
	if ((short.same || []).includes(point)) {
		return 'seen';
	}
	return (short.similar || []).includes(point) ? 'similar' : null;
}

// Lists past questions by year, such as "2019 Q22, Q23, 2022 Q24". pastPapers is in year order, so the years come out in order.
function pastLabels(list) {
	const byYear = new Map();
	for (const past of list) {
		byYear.set(past.year, (byYear.get(past.year) || []).concat('Q' + past.q));
	}
	return Array.from(byYear, ([year, numbers]) => year + ' ' + numbers.join(', ')).join(', ');
}

// Built once per syllabus, bank and question type, then reused for every click.
// Each question is { text, seen, similar }, where seen and similar list past HSC questions (2009 syllabus only).
function questions(syllabusKey, bankKey, type) {
	const cacheKey = syllabusKey + '/' + bankKey + '/' + type;
	let list = questionCache.get(cacheKey);
	if (list) {
		return list;
	}
	const syllabus = syllabuses[syllabusKey];
	const bank = syllabus.banks[bankKey];
	const pastBank = syllabusKey === '2009' ? bankKey : null;
	list = [];
	if (type === 'essay') {
		const themes = bank.themes || syllabus.themes;
		const topics = [bank.area].concat(bank.topics);
		for (const verb of essayVerbs) {
			themes.forEach((theme, t) => {
				topics.forEach((topic, p) => {
					const found = pastMatches(pastBank, (past) => judgeEssay(past, verb, t, p));
					list.push({ text: essayQuestion(verb, theme, topic), ...found });
				});
			});
		}
	} else if (bank.learnto) {
		bank.learnto.forEach((point, i) => {
			const found = pastMatches(pastBank, (past) => judgeShort(past, i));
			list.push({ text: capitalise(point) + '.', ...found });
		});
	} else {
		for (const verb of shortVerbs) {
			for (const point of bank.dotpoints) {
				list.push({ text: shortQuestion(verb, point), seen: [], similar: [] });
			}
		}
	}
	questionCache.set(cacheKey, list);
	return list;
}

// Marks for where a question has come up before, to append after the question text. Empty if it hasn't.
// "Similar" (same theme and topic, or same syllabus point, but another verb) is a small icon whose text shows on hover or focus.
// "Seen" (same verb too) is a step stronger: a visible line under the question.
// In the one-question view the icon is a button so keyboard and touch users can open it; in the long list it is not, to save hundreds of tab stops.
function pastNotes(question, focusable) {
	const notes = [];
	if (question.similar.length) {
		const icon = document.createElement(focusable ? 'button' : 'span');
		if (focusable) {
			icon.type = 'button';
		}
		icon.className = 'similar-icon';
		icon.dataset.tip = 'Similar to HSC ' + pastLabels(question.similar);
		const glyph = document.createElement('span');
		glyph.setAttribute('aria-hidden', 'true');
		glyph.textContent = '\u2248';
		const label = document.createElement('span');
		label.className = 'visually-hidden';
		label.textContent = icon.dataset.tip;
		icon.append(glyph, label);
		notes.push('\u00a0', icon); // a no-break space keeps the icon on the line with the last word
	}
	if (question.seen.length) {
		const seen = document.createElement('span');
		seen.className = 'seen';
		seen.textContent = 'Seen in HSC ' + pastLabels(question.seen);
		notes.push(seen);
	}
	return notes;
}

function checkedValue(name) {
	return document.querySelector('input[name="' + name + '"]:checked').value;
}

function selectedBanks() {
	return Array.from(document.querySelectorAll('input[name="bank"]:checked'), (box) => box.value);
}

function renderBanks() {
	const syllabusKey = checkedValue('syllabus');
	const previous = new Set(selectedBanks());
	const banks = syllabuses[syllabusKey].banks;
	const groups = { core: document.getElementById('core'), options: document.getElementById('options') };
	groups.core.textContent = '';
	groups.options.textContent = '';
	for (const key of Object.keys(banks)) {
		const label = document.createElement('label');
		const box = document.createElement('input');
		box.type = 'checkbox';
		box.name = 'bank';
		box.value = key;
		box.checked = previous.size ? previous.has(key) : key === 'crime';
		label.append(box, ' ' + banks[key].name);
		(banks[key].core ? groups.core : groups.options).append(label);
	}
}

function setAll(checked) {
	for (const box of document.querySelectorAll('input[name="bank"]')) {
		box.checked = checked;
	}
}

// #status is a live region, so screen readers read it out; #output is not, so a long list is never read aloud in full.
function showMessage(text) {
	document.getElementById('status').textContent = text;
	document.getElementById('output').replaceChildren();
}

function generate() {
	const banks = selectedBanks();
	if (!banks.length) {
		showMessage('Tick at least one topic.');
		return;
	}
	const syllabusKey = checkedValue('syllabus');
	// Pick the topic first so a small bank is as likely to come up as a large one.
	const bankKey = banks[Math.floor(Math.random() * banks.length)];
	const list = questions(syllabusKey, bankKey, checkedValue('type'));
	const question = list[Math.floor(Math.random() * list.length)];
	showMessage(syllabuses[syllabusKey].banks[bankKey].name + ': ' + question.text);
	document.getElementById('status').append(...pastNotes(question, true));
}

function samplespace() {
	const banks = selectedBanks();
	if (!banks.length) {
		showMessage('Tick at least one topic.');
		return;
	}
	const syllabusKey = checkedValue('syllabus');
	const type = checkedValue('type');
	const fragment = document.createDocumentFragment();
	let total = 0;
	for (const bankKey of banks) {
		const list = questions(syllabusKey, bankKey, type);
		const heading = document.createElement('h2');
		heading.textContent = syllabuses[syllabusKey].banks[bankKey].name + ' (' + list.length + ')';
		const ol = document.createElement('ol');
		for (const question of list) {
			const li = document.createElement('li');
			li.textContent = question.text;
			li.append(...pastNotes(question, false));
			ol.append(li);
		}
		fragment.append(heading, ol);
		total += list.length;
	}
	document.getElementById('status').textContent = total + ' questions';
	document.getElementById('output').replaceChildren(fragment);
}

document.getElementById('generate').addEventListener('click', generate);
document.getElementById('samplespace').addEventListener('click', samplespace);
document.getElementById('all').addEventListener('click', () => setAll(true));
document.getElementById('none').addEventListener('click', () => setAll(false));
for (const radio of document.querySelectorAll('input[name="syllabus"]')) {
	radio.addEventListener('change', renderBanks);
}
renderBanks();