import type { DocumentNode } from 'graphql';
  export const typeDefs = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query","loc":{"start":5,"end":10}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"genericRules","loc":{"start":15,"end":27}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GenericRule","loc":{"start":30,"end":41}},"loc":{"start":30,"end":41}},"loc":{"start":29,"end":42}},"loc":{"start":29,"end":43}},"directives":[],"loc":{"start":15,"end":43}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"genericFeatures","loc":{"start":46,"end":61}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GenericFeature","loc":{"start":64,"end":78}},"loc":{"start":64,"end":78}},"loc":{"start":63,"end":79}},"loc":{"start":63,"end":80}},"directives":[],"loc":{"start":46,"end":80}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"lineages","loc":{"start":83,"end":91}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Lineage","loc":{"start":94,"end":101}},"loc":{"start":94,"end":101}},"loc":{"start":93,"end":102}},"loc":{"start":93,"end":103}},"directives":[],"loc":{"start":83,"end":103}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"cultures","loc":{"start":106,"end":114}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Culture","loc":{"start":117,"end":124}},"loc":{"start":117,"end":124}},"loc":{"start":116,"end":125}},"loc":{"start":116,"end":126}},"directives":[],"loc":{"start":106,"end":126}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"characterClasses","loc":{"start":129,"end":145}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CharacterClass","loc":{"start":148,"end":162}},"loc":{"start":148,"end":162}},"loc":{"start":147,"end":163}},"loc":{"start":147,"end":164}},"directives":[],"loc":{"start":129,"end":164}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"searchAll","loc":{"start":167,"end":176}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"phrase","loc":{"start":177,"end":183}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":185,"end":191}},"loc":{"start":185,"end":191}},"loc":{"start":185,"end":192}},"directives":[],"loc":{"start":177,"end":192}}],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchResult","loc":{"start":196,"end":208}},"loc":{"start":196,"end":208}},"loc":{"start":195,"end":209}},"loc":{"start":195,"end":210}},"directives":[],"loc":{"start":167,"end":210}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"slugMap","loc":{"start":213,"end":220}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SlugDict","loc":{"start":223,"end":231}},"loc":{"start":223,"end":231}},"loc":{"start":222,"end":232}},"directives":[],"loc":{"start":213,"end":232}}],"loc":{"start":0,"end":234}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"SlugDict","loc":{"start":241,"end":249}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"slug","loc":{"start":254,"end":258}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":260,"end":266}},"loc":{"start":260,"end":266}},"loc":{"start":260,"end":267}},"directives":[],"loc":{"start":254,"end":267}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"url","loc":{"start":270,"end":273}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":275,"end":281}},"loc":{"start":275,"end":281}},"loc":{"start":275,"end":282}},"directives":[],"loc":{"start":270,"end":282}}],"loc":{"start":236,"end":284}},{"kind":"EnumTypeDefinition","name":{"kind":"Name","value":"Size","loc":{"start":291,"end":295}},"directives":[],"values":[{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"MINISCULE","loc":{"start":300,"end":309}},"directives":[],"loc":{"start":300,"end":309}},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"TINY","loc":{"start":312,"end":316}},"directives":[],"loc":{"start":312,"end":316}},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"SMALL","loc":{"start":319,"end":324}},"directives":[],"loc":{"start":319,"end":324}},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"MEDIUM","loc":{"start":327,"end":333}},"directives":[],"loc":{"start":327,"end":333}},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"LARGE","loc":{"start":336,"end":341}},"directives":[],"loc":{"start":336,"end":341}},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"GIGANTIC","loc":{"start":344,"end":352}},"directives":[],"loc":{"start":344,"end":352}},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"COLOSSAL","loc":{"start":355,"end":363}},"directives":[],"loc":{"start":355,"end":363}}],"loc":{"start":286,"end":365}},{"kind":"EnumTypeDefinition","name":{"kind":"Name","value":"RuleType","loc":{"start":372,"end":380}},"directives":[],"values":[{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"RULE","loc":{"start":385,"end":389}},"directives":[],"loc":{"start":385,"end":389}},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"FLAVOR","loc":{"start":392,"end":398}},"directives":[],"loc":{"start":392,"end":398}},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"EG","loc":{"start":401,"end":403}},"directives":[],"loc":{"start":401,"end":403}},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"LIST","loc":{"start":406,"end":410}},"directives":[],"loc":{"start":406,"end":410}},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"LISTCOMPACT","loc":{"start":413,"end":424}},"directives":[],"loc":{"start":413,"end":424}},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"CHOICE","loc":{"start":427,"end":433}},"directives":[],"loc":{"start":427,"end":433}},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"ATTACK","loc":{"start":436,"end":442}},"directives":[],"loc":{"start":436,"end":442}}],"loc":{"start":367,"end":444}},{"kind":"EnumTypeDefinition","name":{"kind":"Name","value":"Stat","loc":{"start":451,"end":455}},"directives":[],"values":[{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"METTLE","loc":{"start":460,"end":466}},"directives":[],"loc":{"start":460,"end":466}},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"AGILITY","loc":{"start":469,"end":476}},"directives":[],"loc":{"start":469,"end":476}},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"INTELLECT","loc":{"start":479,"end":488}},"directives":[],"loc":{"start":479,"end":488}},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"HEART","loc":{"start":491,"end":496}},"directives":[],"loc":{"start":491,"end":496}}],"loc":{"start":446,"end":498}},{"kind":"EnumTypeDefinition","name":{"kind":"Name","value":"Complexity","loc":{"start":505,"end":515}},"directives":[],"values":[{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"SIMPLE","loc":{"start":520,"end":526}},"directives":[],"loc":{"start":520,"end":526}},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"STANDARD","loc":{"start":529,"end":537}},"directives":[],"loc":{"start":529,"end":537}},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"COMPLEX","loc":{"start":540,"end":547}},"directives":[],"loc":{"start":540,"end":547}}],"loc":{"start":500,"end":549}},{"kind":"EnumTypeDefinition","name":{"kind":"Name","value":"Action","loc":{"start":556,"end":562}},"directives":[],"values":[{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"ACTION","loc":{"start":567,"end":573}},"directives":[],"loc":{"start":567,"end":573}},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"COUNTER","loc":{"start":576,"end":583}},"directives":[],"loc":{"start":576,"end":583}}],"loc":{"start":551,"end":585}},{"kind":"InterfaceTypeDefinition","name":{"kind":"Name","value":"Rule","loc":{"start":597,"end":601}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"title","loc":{"start":606,"end":611}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":613,"end":619}},"loc":{"start":613,"end":619}},"loc":{"start":613,"end":620}},"directives":[],"loc":{"start":606,"end":620}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"slug","loc":{"start":623,"end":627}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":629,"end":635}},"loc":{"start":629,"end":635}},"loc":{"start":629,"end":636}},"directives":[],"loc":{"start":623,"end":636}}],"loc":{"start":587,"end":638}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"SearchResult","loc":{"start":645,"end":657}},"interfaces":[{"kind":"NamedType","name":{"kind":"Name","value":"Rule","loc":{"start":669,"end":673}},"loc":{"start":669,"end":673}}],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"title","loc":{"start":678,"end":683}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":685,"end":691}},"loc":{"start":685,"end":691}},"loc":{"start":685,"end":692}},"directives":[],"loc":{"start":678,"end":692}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"slug","loc":{"start":695,"end":699}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":701,"end":707}},"loc":{"start":701,"end":707}},"loc":{"start":701,"end":708}},"directives":[],"loc":{"start":695,"end":708}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"text","loc":{"start":711,"end":715}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RuleText","loc":{"start":718,"end":726}},"loc":{"start":718,"end":726}},"loc":{"start":717,"end":727}},"directives":[],"loc":{"start":711,"end":727}}],"loc":{"start":640,"end":729}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"RuleText","loc":{"start":736,"end":744}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"text","loc":{"start":749,"end":753}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":755,"end":761}},"loc":{"start":755,"end":761}},"loc":{"start":755,"end":762}},"directives":[],"loc":{"start":749,"end":762}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"type","loc":{"start":765,"end":769}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":771,"end":777}},"loc":{"start":771,"end":777}},"directives":[],"loc":{"start":765,"end":777}}],"loc":{"start":731,"end":779}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"GenericRule","loc":{"start":786,"end":797}},"interfaces":[{"kind":"NamedType","name":{"kind":"Name","value":"Rule","loc":{"start":809,"end":813}},"loc":{"start":809,"end":813}}],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"title","loc":{"start":818,"end":823}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":825,"end":831}},"loc":{"start":825,"end":831}},"loc":{"start":825,"end":832}},"directives":[],"loc":{"start":818,"end":832}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"slug","loc":{"start":835,"end":839}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":841,"end":847}},"loc":{"start":841,"end":847}},"loc":{"start":841,"end":848}},"directives":[],"loc":{"start":835,"end":848}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"ruleType","loc":{"start":851,"end":859}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"RuleType","loc":{"start":861,"end":869}},"loc":{"start":861,"end":869}},"directives":[],"loc":{"start":851,"end":869}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"text","loc":{"start":872,"end":876}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RuleText","loc":{"start":879,"end":887}},"loc":{"start":879,"end":887}},"loc":{"start":878,"end":888}},"directives":[],"loc":{"start":872,"end":888}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"rules","loc":{"start":891,"end":896}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GenericRule","loc":{"start":899,"end":910}},"loc":{"start":899,"end":910}},"loc":{"start":898,"end":911}},"directives":[],"loc":{"start":891,"end":911}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"list","loc":{"start":914,"end":918}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":921,"end":927}},"loc":{"start":921,"end":927}},"loc":{"start":920,"end":928}},"directives":[],"loc":{"start":914,"end":928}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"shortText","loc":{"start":931,"end":940}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":942,"end":948}},"loc":{"start":942,"end":948}},"directives":[],"loc":{"start":931,"end":948}}],"loc":{"start":781,"end":950}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Culture","loc":{"start":957,"end":964}},"interfaces":[{"kind":"NamedType","name":{"kind":"Name","value":"Rule","loc":{"start":976,"end":980}},"loc":{"start":976,"end":980}}],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"title","loc":{"start":985,"end":990}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":992,"end":998}},"loc":{"start":992,"end":998}},"loc":{"start":992,"end":999}},"directives":[],"loc":{"start":985,"end":999}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"slug","loc":{"start":1002,"end":1006}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1008,"end":1014}},"loc":{"start":1008,"end":1014}},"loc":{"start":1008,"end":1015}},"directives":[],"loc":{"start":1002,"end":1015}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"description","loc":{"start":1018,"end":1029}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1032,"end":1038}},"loc":{"start":1032,"end":1038}},"loc":{"start":1031,"end":1039}},"directives":[],"loc":{"start":1018,"end":1039}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"stat","loc":{"start":1042,"end":1046}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1048,"end":1054}},"loc":{"start":1048,"end":1054}},"directives":[],"loc":{"start":1042,"end":1054}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"languages","loc":{"start":1057,"end":1066}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1068,"end":1074}},"loc":{"start":1068,"end":1074}},"directives":[],"loc":{"start":1057,"end":1074}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"traits","loc":{"start":1077,"end":1083}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GenericRule","loc":{"start":1086,"end":1097}},"loc":{"start":1086,"end":1097}},"loc":{"start":1085,"end":1098}},"directives":[],"loc":{"start":1077,"end":1098}}],"loc":{"start":952,"end":1100}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Lineage","loc":{"start":1107,"end":1114}},"interfaces":[{"kind":"NamedType","name":{"kind":"Name","value":"Rule","loc":{"start":1126,"end":1130}},"loc":{"start":1126,"end":1130}}],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"title","loc":{"start":1135,"end":1140}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1142,"end":1148}},"loc":{"start":1142,"end":1148}},"loc":{"start":1142,"end":1149}},"directives":[],"loc":{"start":1135,"end":1149}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"slug","loc":{"start":1152,"end":1156}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1158,"end":1164}},"loc":{"start":1158,"end":1164}},"loc":{"start":1158,"end":1165}},"directives":[],"loc":{"start":1152,"end":1165}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"description","loc":{"start":1168,"end":1179}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1182,"end":1188}},"loc":{"start":1182,"end":1188}},"loc":{"start":1181,"end":1189}},"directives":[],"loc":{"start":1168,"end":1189}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"size","loc":{"start":1192,"end":1196}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Size","loc":{"start":1199,"end":1203}},"loc":{"start":1199,"end":1203}},"loc":{"start":1198,"end":1204}},"directives":[],"loc":{"start":1192,"end":1204}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"speed","loc":{"start":1207,"end":1212}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":1214,"end":1217}},"loc":{"start":1214,"end":1217}},"directives":[],"loc":{"start":1207,"end":1217}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"stat","loc":{"start":1220,"end":1224}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1226,"end":1232}},"loc":{"start":1226,"end":1232}},"directives":[],"loc":{"start":1220,"end":1232}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"traits","loc":{"start":1235,"end":1241}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GenericRule","loc":{"start":1244,"end":1255}},"loc":{"start":1244,"end":1255}},"loc":{"start":1243,"end":1256}},"directives":[],"loc":{"start":1235,"end":1256}}],"loc":{"start":1102,"end":1258}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"GenericFeature","loc":{"start":1265,"end":1279}},"interfaces":[{"kind":"NamedType","name":{"kind":"Name","value":"Rule","loc":{"start":1291,"end":1295}},"loc":{"start":1291,"end":1295}}],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"title","loc":{"start":1300,"end":1305}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1307,"end":1313}},"loc":{"start":1307,"end":1313}},"loc":{"start":1307,"end":1314}},"directives":[],"loc":{"start":1300,"end":1314}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"slug","loc":{"start":1317,"end":1321}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1323,"end":1329}},"loc":{"start":1323,"end":1329}},"loc":{"start":1323,"end":1330}},"directives":[],"loc":{"start":1317,"end":1330}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"ruleType","loc":{"start":1333,"end":1341}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1343,"end":1349}},"loc":{"start":1343,"end":1349}},"directives":[],"loc":{"start":1333,"end":1349}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"text","loc":{"start":1352,"end":1356}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RuleText","loc":{"start":1359,"end":1367}},"loc":{"start":1359,"end":1367}},"loc":{"start":1358,"end":1368}},"directives":[],"loc":{"start":1352,"end":1368}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"shortText","loc":{"start":1371,"end":1380}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1382,"end":1388}},"loc":{"start":1382,"end":1388}},"directives":[],"loc":{"start":1371,"end":1388}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"multiSelect","loc":{"start":1391,"end":1402}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean","loc":{"start":1404,"end":1411}},"loc":{"start":1404,"end":1411}},"directives":[],"loc":{"start":1391,"end":1411}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"options","loc":{"start":1414,"end":1421}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1424,"end":1430}},"loc":{"start":1424,"end":1430}},"loc":{"start":1423,"end":1431}},"directives":[],"loc":{"start":1414,"end":1431}}],"loc":{"start":1260,"end":1433}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Options","loc":{"start":1440,"end":1447}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"pick","loc":{"start":1452,"end":1456}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":1458,"end":1461}},"loc":{"start":1458,"end":1461}},"directives":[],"loc":{"start":1452,"end":1461}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"options","loc":{"start":1464,"end":1471}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1474,"end":1480}},"loc":{"start":1474,"end":1480}},"loc":{"start":1474,"end":1481}},"loc":{"start":1473,"end":1482}},"loc":{"start":1473,"end":1483}},"directives":[],"loc":{"start":1464,"end":1483}}],"loc":{"start":1435,"end":1485}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Weapons","loc":{"start":1492,"end":1499}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"melee","loc":{"start":1504,"end":1509}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Options","loc":{"start":1511,"end":1518}},"loc":{"start":1511,"end":1518}},"directives":[],"loc":{"start":1504,"end":1518}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"ranged","loc":{"start":1521,"end":1527}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Options","loc":{"start":1529,"end":1536}},"loc":{"start":1529,"end":1536}},"directives":[],"loc":{"start":1521,"end":1536}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"special","loc":{"start":1539,"end":1546}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Options","loc":{"start":1548,"end":1555}},"loc":{"start":1548,"end":1555}},"directives":[],"loc":{"start":1539,"end":1555}}],"loc":{"start":1487,"end":1557}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Training","loc":{"start":1564,"end":1572}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"armor","loc":{"start":1577,"end":1582}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1585,"end":1591}},"loc":{"start":1585,"end":1591}},"loc":{"start":1584,"end":1592}},"directives":[],"loc":{"start":1577,"end":1592}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"shields","loc":{"start":1595,"end":1602}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1605,"end":1611}},"loc":{"start":1605,"end":1611}},"loc":{"start":1604,"end":1612}},"directives":[],"loc":{"start":1595,"end":1612}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"weapons","loc":{"start":1615,"end":1622}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Weapons","loc":{"start":1624,"end":1631}},"loc":{"start":1624,"end":1631}},"directives":[],"loc":{"start":1615,"end":1631}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"magic","loc":{"start":1634,"end":1639}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Options","loc":{"start":1641,"end":1648}},"loc":{"start":1641,"end":1648}},"directives":[],"loc":{"start":1634,"end":1648}}],"loc":{"start":1559,"end":1650}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Range","loc":{"start":1657,"end":1662}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"min","loc":{"start":1667,"end":1670}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":1672,"end":1675}},"loc":{"start":1672,"end":1675}},"loc":{"start":1672,"end":1676}},"directives":[],"loc":{"start":1667,"end":1676}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"max","loc":{"start":1679,"end":1682}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":1684,"end":1687}},"loc":{"start":1684,"end":1687}},"loc":{"start":1684,"end":1688}},"directives":[],"loc":{"start":1679,"end":1688}}],"loc":{"start":1652,"end":1690}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Damage","loc":{"start":1697,"end":1703}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"dice","loc":{"start":1708,"end":1712}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":1714,"end":1717}},"loc":{"start":1714,"end":1717}},"loc":{"start":1714,"end":1718}},"directives":[],"loc":{"start":1708,"end":1718}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"count","loc":{"start":1721,"end":1726}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":1728,"end":1731}},"loc":{"start":1728,"end":1731}},"loc":{"start":1728,"end":1732}},"directives":[],"loc":{"start":1721,"end":1732}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"stat","loc":{"start":1735,"end":1739}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Stat","loc":{"start":1741,"end":1745}},"loc":{"start":1741,"end":1745}},"directives":[],"loc":{"start":1735,"end":1745}}],"loc":{"start":1692,"end":1747}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"CharacterClassFeature","loc":{"start":1754,"end":1775}},"interfaces":[{"kind":"NamedType","name":{"kind":"Name","value":"Rule","loc":{"start":1787,"end":1791}},"loc":{"start":1787,"end":1791}}],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"title","loc":{"start":1796,"end":1801}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1803,"end":1809}},"loc":{"start":1803,"end":1809}},"loc":{"start":1803,"end":1810}},"directives":[],"loc":{"start":1796,"end":1810}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"slug","loc":{"start":1813,"end":1817}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1819,"end":1825}},"loc":{"start":1819,"end":1825}},"loc":{"start":1819,"end":1826}},"directives":[],"loc":{"start":1813,"end":1826}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"level","loc":{"start":1829,"end":1834}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":1836,"end":1839}},"loc":{"start":1836,"end":1839}},"loc":{"start":1836,"end":1840}},"directives":[],"loc":{"start":1829,"end":1840}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"staminaCost","loc":{"start":1843,"end":1854}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":1856,"end":1859}},"loc":{"start":1856,"end":1859}},"loc":{"start":1856,"end":1860}},"directives":[],"loc":{"start":1843,"end":1860}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"costsFortunesFavor","loc":{"start":1863,"end":1881}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean","loc":{"start":1883,"end":1890}},"loc":{"start":1883,"end":1890}},"loc":{"start":1883,"end":1891}},"directives":[],"loc":{"start":1863,"end":1891}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"ruleType","loc":{"start":1894,"end":1902}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"RuleType","loc":{"start":1904,"end":1912}},"loc":{"start":1904,"end":1912}},"directives":[],"loc":{"start":1894,"end":1912}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"actionType","loc":{"start":1915,"end":1925}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Action","loc":{"start":1927,"end":1933}},"loc":{"start":1927,"end":1933}},"directives":[],"loc":{"start":1915,"end":1933}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"rules","loc":{"start":1936,"end":1941}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RuleText","loc":{"start":1944,"end":1952}},"loc":{"start":1944,"end":1952}},"loc":{"start":1943,"end":1953}},"directives":[],"loc":{"start":1936,"end":1953}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"choices","loc":{"start":1956,"end":1963}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GenericFeature","loc":{"start":1966,"end":1980}},"loc":{"start":1966,"end":1980}},"loc":{"start":1965,"end":1981}},"directives":[],"loc":{"start":1956,"end":1981}}],"loc":{"start":1749,"end":1983}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"CharacterClass","loc":{"start":1990,"end":2004}},"interfaces":[{"kind":"NamedType","name":{"kind":"Name","value":"Rule","loc":{"start":2016,"end":2020}},"loc":{"start":2016,"end":2020}}],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"title","loc":{"start":2025,"end":2030}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":2032,"end":2038}},"loc":{"start":2032,"end":2038}},"loc":{"start":2032,"end":2039}},"directives":[],"loc":{"start":2025,"end":2039}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"slug","loc":{"start":2042,"end":2046}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":2048,"end":2054}},"loc":{"start":2048,"end":2054}},"loc":{"start":2048,"end":2055}},"directives":[],"loc":{"start":2042,"end":2055}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"complexity","loc":{"start":2058,"end":2068}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Complexity","loc":{"start":2070,"end":2080}},"loc":{"start":2070,"end":2080}},"directives":[],"loc":{"start":2058,"end":2080}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"description","loc":{"start":2083,"end":2094}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":2097,"end":2103}},"loc":{"start":2097,"end":2103}},"loc":{"start":2096,"end":2104}},"loc":{"start":2096,"end":2105}},"directives":[],"loc":{"start":2083,"end":2105}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"health","loc":{"start":2108,"end":2114}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":2116,"end":2119}},"loc":{"start":2116,"end":2119}},"loc":{"start":2116,"end":2120}},"directives":[],"loc":{"start":2108,"end":2120}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"healthOnLevel","loc":{"start":2123,"end":2136}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":2138,"end":2141}},"loc":{"start":2138,"end":2141}},"loc":{"start":2138,"end":2142}},"directives":[],"loc":{"start":2123,"end":2142}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"stamina","loc":{"start":2145,"end":2152}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":2154,"end":2157}},"loc":{"start":2154,"end":2157}},"loc":{"start":2154,"end":2158}},"directives":[],"loc":{"start":2145,"end":2158}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"staminaOnLevel","loc":{"start":2161,"end":2175}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":2177,"end":2180}},"loc":{"start":2177,"end":2180}},"loc":{"start":2177,"end":2181}},"directives":[],"loc":{"start":2161,"end":2181}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"staminaStat","loc":{"start":2184,"end":2195}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Stat","loc":{"start":2197,"end":2201}},"loc":{"start":2197,"end":2201}},"loc":{"start":2197,"end":2202}},"directives":[],"loc":{"start":2184,"end":2202}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"training","loc":{"start":2205,"end":2213}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Training","loc":{"start":2215,"end":2223}},"loc":{"start":2215,"end":2223}},"loc":{"start":2215,"end":2224}},"directives":[],"loc":{"start":2205,"end":2224}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"attackStat","loc":{"start":2227,"end":2237}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Stat","loc":{"start":2239,"end":2243}},"loc":{"start":2239,"end":2243}},"loc":{"start":2239,"end":2244}},"directives":[],"loc":{"start":2227,"end":2244}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"range","loc":{"start":2247,"end":2252}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Range","loc":{"start":2254,"end":2259}},"loc":{"start":2254,"end":2259}},"loc":{"start":2254,"end":2260}},"directives":[],"loc":{"start":2247,"end":2260}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"damage","loc":{"start":2263,"end":2269}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Damage","loc":{"start":2271,"end":2277}},"loc":{"start":2271,"end":2277}},"loc":{"start":2271,"end":2278}},"directives":[],"loc":{"start":2263,"end":2278}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"features","loc":{"start":2281,"end":2289}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CharacterClassFeature","loc":{"start":2292,"end":2313}},"loc":{"start":2292,"end":2313}},"loc":{"start":2291,"end":2314}},"loc":{"start":2291,"end":2315}},"directives":[],"loc":{"start":2281,"end":2315}}],"loc":{"start":1985,"end":2317}}],"loc":{"start":0,"end":2318}} as unknown as DocumentNode