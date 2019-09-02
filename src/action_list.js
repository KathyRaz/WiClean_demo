let rawItems = [
  "Action(Entity('Tom Naylor','soccer_player',0),'soccer_player+soccer_club',Entity('Portsmouth F.C.','soccer_club',0),1,Date(2018,6,11,'11','12'))",
  "Action(Entity('Tom Naylor','soccer_player',0),'soccer_player+sports_team_season',Entity('2016&#8211;17 Burton Albion F.C. season','sports_team_season',0),1,Date(2018,6,11,'11','12'))",
  "Action(Entity('Tom Naylor','soccer_player',0),'soccer_player+football club season',Entity('2017&#8211;18 Burton Albion F.C. season','football club season',1),1,Date(2018,6,11,'11','12'))",
  "Action(Entity('Tom Naylor','soccer_player',0),'soccer_player+football club season',Entity('2018&#8211;19 Portsmouth F.C. season','football club season',2),1,Date(2018,6,11,'11','12'))",
  "Action(Entity('Tom Naylor','soccer_player',0),'soccer_player+soccer_club',Entity('Burton Albion F.C.','soccer_club',1),0,Date(2018,6,11,'11','12'))",
  "Action(Entity('Charlie Wyke','soccer_player',1),'soccer_player+soccer_club',Entity('Sunderland A.F.C.','soccer_club',2),1,Date(2018,8,2,'10','19'))",
  "Action(Entity('Charlie Wyke','soccer_player',1),'soccer_player+soccer_club',Entity('Kettering Town F.C.','soccer_club',3),1,Date(2018,5,17,'00','33'))"
];

let parsedItems = [
  {
    type: "artist",
    id: "Tom",
    actions: [
      {
        actionContent: "died",
        timestamp: new Date(),
        destination: "www.google.com"
      },
      {
        actionContent: "born",
        timestamp: new Date(),
        destination: "www.ynet.co.il"
      }
    ]
  },
  {
    id: "Gila",
    type: "soccer_player",
    actions: [
      {
        actionContent: "died",
        timestamp: new Date(),
        destination: "www.google.com"
      },
      {
        actionContent: "born",
        timestamp: new Date(),
        destination: "www.ynet.co.il"
      }
    ]
  }
];

export default parsedItems;
