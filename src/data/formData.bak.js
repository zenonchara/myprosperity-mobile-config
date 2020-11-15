import dot from "dot-object";

const flatData = {
  "DashboardCtaInternal": "0",
  "Tools[0].MobileAppToolId": "18",
  "Tools[0].DisplayOrder": "1",
  "Tools[0].IsActive": "true",
  "Tools[0].PreferenceText": "Contact us",
  "Tools[1].MobileAppToolId": "17",
  "Tools[1].DisplayOrder": "2",
  "Tools[1].IsActive": "true",
  "Tools[1].PreferenceText": "Meet the team",
  "Tools[2].MobileAppToolId": "16",
  "Tools[2].DisplayOrder": "3",
  "Tools[2].IsActive": "true",
  "Tools[2].PreferenceText": "Our services",
  "Tools[3].MobileAppToolId": "21",
  "Tools[3].DisplayOrder": "7",
  "Tools[3].IsActive": "true",
  "Tools[3].PreferenceText": "ASX2",
  "Tools[4].MobileAppToolId": "22",
  "Tools[4].DisplayOrder": "8",
  "Tools[4].IsActive": "true",
  "Tools[4].PreferenceText": "Website",
  "Tools[5].MobileAppToolId": "28",
  "Tools[5].DisplayOrder": "15",
  "Tools[5].IsActive": "true",
  "Tools[5].PreferenceText": "Class Super",
  "Tools[6].MobileAppToolId": "26",
  "Tools[6].DisplayOrder": "16",
  "Tools[6].IsActive": "true",
  "Tools[6].PreferenceText": "ABN lookup",
  "Tools[7].MobileAppToolId": "27",
  "Tools[7].DisplayOrder": "17",
  "Tools[7].IsActive": "true",
  "Tools[7].PreferenceText": "ASIC",
  "Tools[8].MobileAppToolId": "25",
  "Tools[8].DisplayOrder": "18",
  "Tools[8].IsActive": "true",
  "Tools[8].PreferenceText": "MYOB",
  "Tools[9].MobileAppToolId": "14",
  "Tools[9].DisplayOrder": "19",
  "Tools[9].IsActive": "true",
  "Tools[9].PreferenceText": "Receipt bank",
  "Tools[10].MobileAppToolId": "24",
  "Tools[10].DisplayOrder": "20",
  "Tools[10].IsActive": "true",
  "Tools[10].PreferenceText": "Xero",
  "Tools[11].MobileAppToolId": "33",
  "Tools[11].DisplayOrder": "21",
  "Tools[11].IsActive": "true",
  "Tools[11].PreferenceText": "Reckon",
  "Tools[12].MobileAppToolId": "2",
  "Tools[12].DisplayOrder": "22",
  "Tools[12].IsActive": "true",
  "Tools[12].PreferenceText": "Company tax rates",
  "Tools[13].MobileAppToolId": "34",
  "Tools[13].DisplayOrder": "22",
  "Tools[13].IsActive": "true",
  "Tools[13].PreferenceText": "Quickbooks",
  "Tools[14].MobileAppToolId": "29",
  "Tools[14].DisplayOrder": "23",
  "Tools[14].IsActive": "true",
  "Tools[14].PreferenceText": "BGL",
  "Tools[15].MobileAppToolId": "56",
  "Tools[15].DisplayOrder": "24",
  "Tools[15].PreferenceText": "My docs",
  "Tools[16].MobileAppToolId": "57",
  "Tools[16].DisplayOrder": "200",
  "Tools[16].PreferenceText": "Custom",
  "Tools[16].PreferenceUrl": "",
  "Tools[17].MobileAppToolId": "58",
  "Tools[17].DisplayOrder": "201",
  "Tools[17].PreferenceText": "Custom",
  "Tools[17].PreferenceUrl": "",
  "Tools[18].MobileAppToolId": "59",
  "Tools[18].DisplayOrder": "202",
  "Tools[18].PreferenceText": "Custom",
  "Tools[18].PreferenceUrl": "",
  "Tools[19].MobileAppToolId": "60",
  "Tools[19].DisplayOrder": "203",
  "Tools[19].PreferenceText": "Custom",
  "Tools[19].PreferenceUrl": "",
  "Tools[20].MobileAppToolId": "61",
  "Tools[20].DisplayOrder": "204",
  "Tools[20].PreferenceText": "Custom",
  "Tools[20].PreferenceUrl": "",
  "Tools[21].MobileAppToolId": "62",
  "Tools[21].DisplayOrder": "205",
  "Tools[21].PreferenceText": "Custom",
  "Tools[21].PreferenceUrl": "",
  "Tools[22].MobileAppToolId": "63",
  "Tools[22].DisplayOrder": "206",
  "Tools[22].PreferenceText": "Custom",
  "Tools[22].PreferenceUrl": "",
  "Tools[23].MobileAppToolId": "64",
  "Tools[23].DisplayOrder": "207",
  "Tools[23].PreferenceText": "Custom",
  "Tools[23].PreferenceUrl": "",
  "Tools[24].MobileAppToolId": "65",
  "Tools[24].DisplayOrder": "208",
  "Tools[24].PreferenceText": "Custom",
  "Tools[24].PreferenceUrl": "",
  "Tools[25].MobileAppToolId": "66",
  "Tools[25].DisplayOrder": "209",
  "Tools[25].PreferenceText": "Custom",
  "Tools[25].PreferenceUrl": "",
  "Tools[26].MobileAppToolId": "193",
  "Tools[26].DisplayOrder": "300",
  "Tools[26].PreferenceText": "Twitter",
  "Tools[26].PreferenceUrl": "",
  "Tools[27].MobileAppToolId": "196",
  "Tools[27].DisplayOrder": "301",
  "Tools[27].PreferenceText": "Facebook",
  "Tools[27].PreferenceUrl": "",
  "Tools[28].MobileAppToolId": "199",
  "Tools[28].DisplayOrder": "302",
  "Tools[28].PreferenceText": "LinkedIn",
  "Tools[28].PreferenceUrl": "",
  "Calculators[0].MobileAppToolId": "1",
  "Calculators[0].DisplayOrder": "1",
  "Calculators[0].IsActive": "true",
  "Calculators[0].PreferenceText": "Income tax individual",
  "Calculators[1].MobileAppToolId": "35",
  "Calculators[1].DisplayOrder": "2",
  "Calculators[1].IsActive": "true",
  "Calculators[1].PreferenceText": "Compound interest",
  "Calculators[2].MobileAppToolId": "36",
  "Calculators[2].DisplayOrder": "3",
  "Calculators[2].IsActive": "true",
  "Calculators[2].PreferenceText": "Unclaimed money search",
  "Calculators[3].MobileAppToolId": "37",
  "Calculators[3].DisplayOrder": "4",
  "Calculators[3].IsActive": "true",
  "Calculators[3].PreferenceText": "Mortgage interest only",
  "Calculators[4].MobileAppToolId": "38",
  "Calculators[4].DisplayOrder": "5",
  "Calculators[4].IsActive": "true",
  "Calculators[4].PreferenceText": "Mortgage",
  "Calculators[5].MobileAppToolId": "39",
  "Calculators[5].DisplayOrder": "6",
  "Calculators[5].IsActive": "true",
  "Calculators[5].PreferenceText": "Reverse mortgage",
  "Calculators[6].MobileAppToolId": "40",
  "Calculators[6].DisplayOrder": "7",
  "Calculators[6].IsActive": "true",
  "Calculators[6].PreferenceText": "Super vs mortgage",
  "Calculators[7].MobileAppToolId": "41",
  "Calculators[7].DisplayOrder": "8",
  "Calculators[7].IsActive": "true",
  "Calculators[7].PreferenceText": "Rent vs buy calc",
  "Calculators[8].MobileAppToolId": "42",
  "Calculators[8].DisplayOrder": "9",
  "Calculators[8].IsActive": "true",
  "Calculators[8].PreferenceText": "Account-based pension",
  "Calculators[9].MobileAppToolId": "43",
  "Calculators[9].DisplayOrder": "10",
  "Calculators[9].IsActive": "true",
  "Calculators[9].PreferenceText": "Employer contributions",
  "Calculators[10].MobileAppToolId": "44",
  "Calculators[10].DisplayOrder": "11",
  "Calculators[10].IsActive": "true",
  "Calculators[10].PreferenceText": "Retirement planner",
  "Calculators[11].MobileAppToolId": "45",
  "Calculators[11].DisplayOrder": "12",
  "Calculators[11].IsActive": "true",
  "Calculators[11].PreferenceText": "Super & pension age calc",
  "Calculators[12].MobileAppToolId": "46",
  "Calculators[12].DisplayOrder": "13",
  "Calculators[12].IsActive": "true",
  "Calculators[12].PreferenceText": "Super calculator",
  "Calculators[13].MobileAppToolId": "47",
  "Calculators[13].DisplayOrder": "14",
  "Calculators[13].IsActive": "true",
  "Calculators[13].PreferenceText": "Super co-contribution calc",
  "Calculators[14].MobileAppToolId": "48",
  "Calculators[14].DisplayOrder": "15",
  "Calculators[14].IsActive": "true",
  "Calculators[14].PreferenceText": "Super contributions calc",
  "Calculators[15].MobileAppToolId": "49",
  "Calculators[15].DisplayOrder": "16",
  "Calculators[15].IsActive": "true",
  "Calculators[15].PreferenceText": "Super guarantee contributions calc",
  "Calculators[16].MobileAppToolId": "50",
  "Calculators[16].DisplayOrder": "17",
  "Calculators[16].IsActive": "true",
  "Calculators[16].PreferenceText": "FBT car calc",
  "Calculators[17].MobileAppToolId": "51",
  "Calculators[17].DisplayOrder": "18",
  "Calculators[17].IsActive": "true",
  "Calculators[17].PreferenceText": "HELP and TSL repay calc",
  "Calculators[18].MobileAppToolId": "52",
  "Calculators[18].DisplayOrder": "19",
  "Calculators[18].IsActive": "true",
  "Calculators[18].PreferenceText": "Individual tax rates",
  "Calculators[19].MobileAppToolId": "53",
  "Calculators[19].DisplayOrder": "20",
  "Calculators[19].IsActive": "true",
  "Calculators[19].PreferenceText": "Medicare levy calc",
  "Calculators[20].MobileAppToolId": "54",
  "Calculators[20].DisplayOrder": "21",
  "Calculators[20].IsActive": "true",
  "Calculators[20].PreferenceText": "Minor tax rates",
  "Calculators[21].MobileAppToolId": "55",
  "Calculators[21].DisplayOrder": "23",
  "Calculators[21].IsActive": "true",
  "Calculators[21].PreferenceText": "Tax withheld for individuals calc"
}

dot.object(flatData);

export default flatData;

console.log(JSON.stringify(flatData));
