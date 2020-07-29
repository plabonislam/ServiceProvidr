var cityIps = require("../../datas/city_ip.js");
var servicePosts = require("../../datas/service_posts.js");
var review_feedback = require("../../datas/review_feedback.js");

module.exports = {
  friendlyName: "View testing",

  description: 'Display "testing" page.',

  inputs: {
    step: {
      description: "step",
      type: "number"
    }
  },
  exits: {
    success: {
      viewTemplatePath: "migration/testing"
    }
  },

  fn: async function(inputs) {
    if (inputs.step == 1) {
      await Country.destroy({});
      // create country code
      var ITEMS_COUNTRY = [
        {
          id: "1",
          city_id: "0",
          name: "Bangladesh (\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6)",
          active: "0",
          phone_code: "+880"
        },
        {
          id: "2",
          city_id: "0",
          name: "India (\u0907\u0902\u0921\u093f\u092f\u093e)",
          active: "0",
          phone_code: "+91"
        },
        {
          id: "7",
          city_id: "0",
          name: "Australia",
          active: "0",
          phone_code: "+61"
        },
        {
          id: "8",
          city_id: "0",
          name: "Japan (\u306b\u3063\u307d\u3093)",
          active: "0",
          phone_code: "+81"
        },
        {
          id: "9",
          city_id: "0",
          name: "United States ",
          active: "1",
          phone_code: "+1"
        },
        {
          id: "10",
          city_id: "0",
          name: "Canada",
          active: "0",
          phone_code: "+1"
        },
        {
          id: "12",
          city_id: "0",
          name: "Abkhazia",
          active: "0",
          phone_code: "+7 840"
        },
        {
          id: "13",
          city_id: "0",
          name: "Afghanistan",
          active: "0",
          phone_code: "+93"
        },
        {
          id: "14",
          city_id: "0",
          name: "Albania",
          active: "0",
          phone_code: "+355"
        },
        {
          id: "15",
          city_id: "0",
          name: "Algeria",
          active: "0",
          phone_code: "+213"
        },
        {
          id: "16",
          city_id: "0",
          name: "American Samoa",
          active: "0",
          phone_code: "+1 684"
        },
        {
          id: "17",
          city_id: "0",
          name: "Andorra",
          active: "0",
          phone_code: "+376"
        },
        {
          id: "18",
          city_id: "0",
          name: "Angola",
          active: "0",
          phone_code: "+244"
        },
        {
          id: "19",
          city_id: "0",
          name: "Anguilla",
          active: "0",
          phone_code: "+1 264"
        },
        {
          id: "20",
          city_id: "0",
          name: "Antigua and Barbuda",
          active: "0",
          phone_code: "+1 268"
        },
        {
          id: "21",
          city_id: "0",
          name: "Argentina",
          active: "0",
          phone_code: "+54"
        },
        {
          id: "22",
          city_id: "0",
          name: "Armenia",
          active: "0",
          phone_code: "+374"
        },
        {
          id: "23",
          city_id: "0",
          name: "Aruba",
          active: "0",
          phone_code: "+297"
        },
        {
          id: "24",
          city_id: "0",
          name: "Ascension",
          active: "0",
          phone_code: "+247"
        },
        {
          id: "26",
          city_id: "0",
          name: "Australian External Territories",
          active: "0",
          phone_code: "+672"
        },
        {
          id: "27",
          city_id: "0",
          name: "Austria",
          active: "0",
          phone_code: "+43"
        },
        {
          id: "28",
          city_id: "0",
          name: "Azerbaijan",
          active: "0",
          phone_code: "+994"
        },
        {
          id: "29",
          city_id: "0",
          name: "Bahamas",
          active: "0",
          phone_code: "+1 242"
        },
        {
          id: "30",
          city_id: "0",
          name: "Bahrain",
          active: "0",
          phone_code: "+973"
        },
        {
          id: "32",
          city_id: "0",
          name: "Barbados",
          active: "0",
          phone_code: "+1 246"
        },
        {
          id: "33",
          city_id: "0",
          name: "Barbuda",
          active: "0",
          phone_code: "+1 268"
        },
        {
          id: "34",
          city_id: "0",
          name: "Belarus",
          active: "0",
          phone_code: "+375"
        },
        {
          id: "35",
          city_id: "0",
          name: "Belgium",
          active: "0",
          phone_code: "+32"
        },
        {
          id: "36",
          city_id: "0",
          name: "Belize",
          active: "0",
          phone_code: "+501"
        },
        {
          id: "37",
          city_id: "0",
          name: "Benin",
          active: "0",
          phone_code: "+229"
        },
        {
          id: "38",
          city_id: "0",
          name: "Bermuda",
          active: "0",
          phone_code: "+1 441"
        },
        {
          id: "39",
          city_id: "0",
          name: "Bhutan",
          active: "0",
          phone_code: "+975"
        },
        {
          id: "40",
          city_id: "0",
          name: "Bolivia",
          active: "0",
          phone_code: "+591"
        },
        {
          id: "41",
          city_id: "0",
          name: "Bosnia and Herzegovina",
          active: "0",
          phone_code: "+387"
        },
        {
          id: "42",
          city_id: "0",
          name: "Botswana",
          active: "0",
          phone_code: "+267"
        },
        {
          id: "43",
          city_id: "0",
          name: "Brazil",
          active: "0",
          phone_code: "+55"
        },
        {
          id: "44",
          city_id: "0",
          name: "British Indian Ocean Territory",
          active: "0",
          phone_code: "+246"
        },
        {
          id: "45",
          city_id: "0",
          name: "British Virgin Islands",
          active: "0",
          phone_code: "+1 284"
        },
        {
          id: "46",
          city_id: "0",
          name: "Brunei",
          active: "0",
          phone_code: "+673"
        },
        {
          id: "47",
          city_id: "0",
          name: "Bulgaria",
          active: "0",
          phone_code: "+359"
        },
        {
          id: "48",
          city_id: "0",
          name: "Burkina Faso",
          active: "0",
          phone_code: "+226"
        },
        {
          id: "49",
          city_id: "0",
          name: "Burundi",
          active: "0",
          phone_code: "+257"
        },
        {
          id: "50",
          city_id: "0",
          name: "Cambodia",
          active: "0",
          phone_code: "+855"
        },
        {
          id: "51",
          city_id: "0",
          name: "Cameroon",
          active: "0",
          phone_code: "+237"
        },
        {
          id: "53",
          city_id: "0",
          name: "Cape Verde",
          active: "0",
          phone_code: "+238"
        },
        {
          id: "54",
          city_id: "0",
          name: "Cayman Islands",
          active: "0",
          phone_code: "+ 345"
        },
        {
          id: "55",
          city_id: "0",
          name: "Central African Republic",
          active: "0",
          phone_code: "+236"
        },
        {
          id: "56",
          city_id: "0",
          name: "Chad",
          active: "0",
          phone_code: "+235"
        },
        {
          id: "57",
          city_id: "0",
          name: "Chile",
          active: "0",
          phone_code: "+56"
        },
        {
          id: "58",
          city_id: "0",
          name: "China",
          active: "0",
          phone_code: "+86"
        },
        {
          id: "59",
          city_id: "0",
          name: "Christmas Island",
          active: "0",
          phone_code: "+61"
        },
        {
          id: "60",
          city_id: "0",
          name: "Cocos-Keeling Islands",
          active: "0",
          phone_code: "+61"
        },
        {
          id: "61",
          city_id: "0",
          name: "Colombia",
          active: "0",
          phone_code: "+57"
        },
        {
          id: "62",
          city_id: "0",
          name: "Comoros",
          active: "0",
          phone_code: "+269"
        },
        {
          id: "63",
          city_id: "0",
          name: "Congo",
          active: "0",
          phone_code: "+242"
        },
        {
          id: "64",
          city_id: "0",
          name: "Congo, Dem. Rep. of (Zaire)",
          active: "0",
          phone_code: "+243"
        },
        {
          id: "65",
          city_id: "0",
          name: "Cook Islands",
          active: "0",
          phone_code: "+682"
        },
        {
          id: "66",
          city_id: "0",
          name: "Costa Rica",
          active: "0",
          phone_code: "+506"
        },
        {
          id: "67",
          city_id: "0",
          name: "Croatia",
          active: "0",
          phone_code: "+385"
        },
        {
          id: "68",
          city_id: "0",
          name: "Cuba",
          active: "0",
          phone_code: "+53"
        },
        {
          id: "69",
          city_id: "0",
          name: "Curacao",
          active: "0",
          phone_code: "+599"
        },
        {
          id: "70",
          city_id: "0",
          name: "Cyprus",
          active: "0",
          phone_code: "+537"
        },
        {
          id: "71",
          city_id: "0",
          name: "Czech Republic",
          active: "0",
          phone_code: "+420"
        },
        {
          id: "72",
          city_id: "0",
          name: "Denmark",
          active: "0",
          phone_code: "+45"
        },
        {
          id: "73",
          city_id: "0",
          name: "Diego Garcia",
          active: "0",
          phone_code: "+246"
        },
        {
          id: "74",
          city_id: "0",
          name: "Djibouti",
          active: "0",
          phone_code: "+253"
        },
        {
          id: "75",
          city_id: "0",
          name: "Dominica",
          active: "0",
          phone_code: "+1 767"
        },
        {
          id: "76",
          city_id: "0",
          name: "Dominican Republic",
          active: "0",
          phone_code: "+1 809"
        },
        {
          id: "77",
          city_id: "0",
          name: "East Timor",
          active: "0",
          phone_code: "+670"
        },
        {
          id: "78",
          city_id: "0",
          name: "Easter Island",
          active: "0",
          phone_code: "+56"
        },
        {
          id: "79",
          city_id: "0",
          name: "Ecuador",
          active: "0",
          phone_code: "+593"
        },
        {
          id: "80",
          city_id: "0",
          name: "Egypt",
          active: "0",
          phone_code: "+20"
        },
        {
          id: "81",
          city_id: "0",
          name: "El Salvador",
          active: "0",
          phone_code: "+503"
        },
        {
          id: "82",
          city_id: "0",
          name: "Equatorial Guinea",
          active: "0",
          phone_code: "+240"
        },
        {
          id: "83",
          city_id: "0",
          name: "Eritrea",
          active: "0",
          phone_code: "+291"
        },
        {
          id: "84",
          city_id: "0",
          name: "Estonia",
          active: "0",
          phone_code: "+372"
        },
        {
          id: "85",
          city_id: "0",
          name: "Ethiopia",
          active: "0",
          phone_code: "+251"
        },
        {
          id: "86",
          city_id: "0",
          name: "Falkland Islands",
          active: "0",
          phone_code: "+500"
        },
        {
          id: "87",
          city_id: "0",
          name: "Faroe Islands",
          active: "0",
          phone_code: "+298"
        },
        {
          id: "88",
          city_id: "0",
          name: "Fiji",
          active: "0",
          phone_code: "+679"
        },
        {
          id: "89",
          city_id: "0",
          name: "Finland",
          active: "0",
          phone_code: "+358"
        },
        {
          id: "90",
          city_id: "0",
          name: "France",
          active: "0",
          phone_code: "+33"
        },
        {
          id: "91",
          city_id: "0",
          name: "French Antilles",
          active: "0",
          phone_code: "+596"
        },
        {
          id: "92",
          city_id: "0",
          name: "French Guiana",
          active: "0",
          phone_code: "+594"
        },
        {
          id: "93",
          city_id: "0",
          name: "French Polynesia",
          active: "0",
          phone_code: "+689"
        },
        {
          id: "94",
          city_id: "0",
          name: "Gabon",
          active: "0",
          phone_code: "+241"
        },
        {
          id: "95",
          city_id: "0",
          name: "Gambia",
          active: "0",
          phone_code: "+220"
        },
        {
          id: "96",
          city_id: "0",
          name: "Georgia",
          active: "0",
          phone_code: "+995"
        },
        {
          id: "97",
          city_id: "0",
          name: "Germany",
          active: "0",
          phone_code: "+49"
        },
        {
          id: "98",
          city_id: "0",
          name: "Ghana",
          active: "0",
          phone_code: "+233"
        },
        {
          id: "99",
          city_id: "0",
          name: "Gibraltar",
          active: "0",
          phone_code: "+350"
        },
        {
          id: "100",
          city_id: "0",
          name: "Greece",
          active: "0",
          phone_code: "+30"
        },
        {
          id: "101",
          city_id: "0",
          name: "Greenland",
          active: "0",
          phone_code: "+299"
        },
        {
          id: "102",
          city_id: "0",
          name: "Grenada",
          active: "0",
          phone_code: "+1 473"
        },
        {
          id: "103",
          city_id: "0",
          name: "Guadeloupe",
          active: "0",
          phone_code: "+590"
        },
        {
          id: "104",
          city_id: "0",
          name: "Guam",
          active: "0",
          phone_code: "+1 671"
        },
        {
          id: "105",
          city_id: "0",
          name: "Guatemala",
          active: "0",
          phone_code: "+502"
        },
        {
          id: "106",
          city_id: "0",
          name: "Guinea",
          active: "0",
          phone_code: "+224"
        },
        {
          id: "107",
          city_id: "0",
          name: "Guinea-Bissau",
          active: "0",
          phone_code: "+245"
        },
        {
          id: "108",
          city_id: "0",
          name: "Guyana",
          active: "0",
          phone_code: "+595"
        },
        {
          id: "109",
          city_id: "0",
          name: "Haiti",
          active: "0",
          phone_code: "+509"
        },
        {
          id: "110",
          city_id: "0",
          name: "Honduras",
          active: "0",
          phone_code: "+504"
        },
        {
          id: "111",
          city_id: "0",
          name: "Hong Kong SAR China",
          active: "0",
          phone_code: "+852"
        },
        {
          id: "112",
          city_id: "0",
          name: "Hungary",
          active: "0",
          phone_code: "+36"
        },
        {
          id: "113",
          city_id: "0",
          name: "Iceland",
          active: "0",
          phone_code: "+354"
        },
        {
          id: "115",
          city_id: "0",
          name: "Indonesia",
          active: "0",
          phone_code: "+62"
        },
        {
          id: "116",
          city_id: "0",
          name: "Iran",
          active: "0",
          phone_code: "+98"
        },
        {
          id: "117",
          city_id: "0",
          name: "Iraq",
          active: "0",
          phone_code: "+964"
        },
        {
          id: "118",
          city_id: "0",
          name: "Ireland",
          active: "0",
          phone_code: "+353"
        },
        {
          id: "119",
          city_id: "0",
          name: "Israel",
          active: "0",
          phone_code: "+972"
        },
        {
          id: "120",
          city_id: "0",
          name: "Italy",
          active: "0",
          phone_code: "+39"
        },
        {
          id: "121",
          city_id: "0",
          name: "Ivory Coast",
          active: "0",
          phone_code: "+225"
        },
        {
          id: "122",
          city_id: "0",
          name: "Jamaica",
          active: "0",
          phone_code: "+1 876"
        },
        {
          id: "124",
          city_id: "0",
          name: "Jordan",
          active: "0",
          phone_code: "+962"
        },
        {
          id: "125",
          city_id: "0",
          name: "Kazakhstan",
          active: "0",
          phone_code: "+7 7"
        },
        {
          id: "126",
          city_id: "0",
          name: "Kenya",
          active: "0",
          phone_code: "+254"
        },
        {
          id: "127",
          city_id: "0",
          name: "Kiribati",
          active: "0",
          phone_code: "+686"
        },
        {
          id: "128",
          city_id: "0",
          name: "Kuwait",
          active: "0",
          phone_code: "+965"
        },
        {
          id: "129",
          city_id: "0",
          name: "Kyrgyzstan",
          active: "0",
          phone_code: "+996"
        },
        {
          id: "130",
          city_id: "0",
          name: "Laos",
          active: "0",
          phone_code: "+856"
        },
        {
          id: "131",
          city_id: "0",
          name: "Latvia",
          active: "0",
          phone_code: "+371"
        },
        {
          id: "132",
          city_id: "0",
          name: "Lebanon",
          active: "0",
          phone_code: "+961"
        },
        {
          id: "133",
          city_id: "0",
          name: "Lesotho",
          active: "0",
          phone_code: "+266"
        },
        {
          id: "134",
          city_id: "0",
          name: "Liberia",
          active: "0",
          phone_code: "+231"
        },
        {
          id: "135",
          city_id: "0",
          name: "Libya",
          active: "0",
          phone_code: "+218"
        },
        {
          id: "136",
          city_id: "0",
          name: "Liechtenstein",
          active: "0",
          phone_code: "+423"
        },
        {
          id: "137",
          city_id: "0",
          name: "Lithuania",
          active: "0",
          phone_code: "+370"
        },
        {
          id: "138",
          city_id: "0",
          name: "Luxembourg",
          active: "0",
          phone_code: "+352"
        },
        {
          id: "139",
          city_id: "0",
          name: "Macau SAR China",
          active: "0",
          phone_code: "+853"
        },
        {
          id: "140",
          city_id: "0",
          name: "Macedonia",
          active: "0",
          phone_code: "+389"
        },
        {
          id: "141",
          city_id: "0",
          name: "Madagascar",
          active: "0",
          phone_code: "+261"
        },
        {
          id: "142",
          city_id: "0",
          name: "Malawi",
          active: "0",
          phone_code: "+265"
        },
        {
          id: "143",
          city_id: "0",
          name: "Malaysia",
          active: "0",
          phone_code: "+60"
        },
        {
          id: "144",
          city_id: "0",
          name: "Maldives",
          active: "0",
          phone_code: "+960"
        },
        {
          id: "145",
          city_id: "0",
          name: "Mali",
          active: "0",
          phone_code: "+223"
        },
        {
          id: "146",
          city_id: "0",
          name: "Malta",
          active: "0",
          phone_code: "+356"
        },
        {
          id: "147",
          city_id: "0",
          name: "Marshall Islands",
          active: "0",
          phone_code: "+692"
        },
        {
          id: "148",
          city_id: "0",
          name: "Martinique",
          active: "0",
          phone_code: "+596"
        },
        {
          id: "149",
          city_id: "0",
          name: "Mauritania",
          active: "0",
          phone_code: "+222"
        },
        {
          id: "150",
          city_id: "0",
          name: "Mauritius",
          active: "0",
          phone_code: "+230"
        },
        {
          id: "151",
          city_id: "0",
          name: "Mayotte",
          active: "0",
          phone_code: "+262"
        },
        {
          id: "152",
          city_id: "0",
          name: "Mexico",
          active: "0",
          phone_code: "+52"
        },
        {
          id: "153",
          city_id: "0",
          name: "Micronesia",
          active: "0",
          phone_code: "+691"
        },
        {
          id: "154",
          city_id: "0",
          name: "Midway Island",
          active: "0",
          phone_code: "+1 808"
        },
        {
          id: "155",
          city_id: "0",
          name: "Moldova",
          active: "0",
          phone_code: "+373"
        },
        {
          id: "156",
          city_id: "0",
          name: "Monaco",
          active: "0",
          phone_code: "+377"
        },
        {
          id: "157",
          city_id: "0",
          name: "Mongolia",
          active: "0",
          phone_code: "+976"
        },
        {
          id: "158",
          city_id: "0",
          name: "Montenegro",
          active: "0",
          phone_code: "+382"
        },
        {
          id: "159",
          city_id: "0",
          name: "Montserrat",
          active: "0",
          phone_code: "+1664"
        },
        {
          id: "160",
          city_id: "0",
          name: "Morocco",
          active: "0",
          phone_code: "+212"
        },
        {
          id: "161",
          city_id: "0",
          name: "Myanmar",
          active: "0",
          phone_code: "+95"
        },
        {
          id: "162",
          city_id: "0",
          name: "Namibia",
          active: "0",
          phone_code: "+264"
        },
        {
          id: "163",
          city_id: "0",
          name: "Nauru",
          active: "0",
          phone_code: "+674"
        },
        {
          id: "164",
          city_id: "0",
          name: "Nepal",
          active: "0",
          phone_code: "+977"
        },
        {
          id: "165",
          city_id: "0",
          name: "Netherlands",
          active: "0",
          phone_code: "+31"
        },
        {
          id: "166",
          city_id: "0",
          name: "Netherlands Antilles",
          active: "0",
          phone_code: "+599"
        },
        {
          id: "167",
          city_id: "0",
          name: "Nevis",
          active: "0",
          phone_code: "+1 869"
        },
        {
          id: "168",
          city_id: "0",
          name: "New Caledonia",
          active: "0",
          phone_code: "+687"
        },
        {
          id: "169",
          city_id: "0",
          name: "New Zealand",
          active: "0",
          phone_code: "+64"
        },
        {
          id: "170",
          city_id: "0",
          name: "Nicaragua",
          active: "0",
          phone_code: "+505"
        },
        {
          id: "171",
          city_id: "0",
          name: "Niger",
          active: "0",
          phone_code: "+227"
        },
        {
          id: "172",
          city_id: "0",
          name: "Nigeria",
          active: "0",
          phone_code: "+234"
        },
        {
          id: "173",
          city_id: "0",
          name: "Niue",
          active: "0",
          phone_code: "+683"
        },
        {
          id: "174",
          city_id: "0",
          name: "Norfolk Island",
          active: "0",
          phone_code: "+672"
        },
        {
          id: "175",
          city_id: "0",
          name: "North Korea",
          active: "0",
          phone_code: "+850"
        },
        {
          id: "176",
          city_id: "0",
          name: "Northern Mariana Islands",
          active: "0",
          phone_code: "+1 670"
        },
        {
          id: "177",
          city_id: "0",
          name: "Norway",
          active: "0",
          phone_code: "+47"
        },
        {
          id: "178",
          city_id: "0",
          name: "Oman",
          active: "0",
          phone_code: "+968"
        },
        {
          id: "179",
          city_id: "0",
          name: "Pakistan",
          active: "0",
          phone_code: "+92"
        },
        {
          id: "180",
          city_id: "0",
          name: "Palau",
          active: "0",
          phone_code: "+680"
        },
        {
          id: "181",
          city_id: "0",
          name: "Palestinian Territory",
          active: "0",
          phone_code: "+970"
        },
        {
          id: "182",
          city_id: "0",
          name: "Panama",
          active: "0",
          phone_code: "+507"
        },
        {
          id: "183",
          city_id: "0",
          name: "Papua New Guinea",
          active: "0",
          phone_code: "+675"
        },
        {
          id: "184",
          city_id: "0",
          name: "Paraguay",
          active: "0",
          phone_code: "+595"
        },
        {
          id: "185",
          city_id: "0",
          name: "Peru",
          active: "0",
          phone_code: "+51"
        },
        {
          id: "186",
          city_id: "0",
          name: "Philippines",
          active: "0",
          phone_code: "+63"
        },
        {
          id: "187",
          city_id: "0",
          name: "Poland",
          active: "0",
          phone_code: "+48"
        },
        {
          id: "188",
          city_id: "0",
          name: "Portugal",
          active: "0",
          phone_code: "+351"
        },
        {
          id: "189",
          city_id: "0",
          name: "Puerto Rico",
          active: "0",
          phone_code: "+1 787"
        },
        {
          id: "190",
          city_id: "0",
          name: "Qatar",
          active: "0",
          phone_code: "+974"
        },
        {
          id: "191",
          city_id: "0",
          name: "Reunion",
          active: "0",
          phone_code: "+262"
        },
        {
          id: "192",
          city_id: "0",
          name: "Romania",
          active: "0",
          phone_code: "+40"
        },
        {
          id: "193",
          city_id: "0",
          name: "Russia",
          active: "0",
          phone_code: "+7"
        },
        {
          id: "194",
          city_id: "0",
          name: "Rwanda",
          active: "0",
          phone_code: "+250"
        },
        {
          id: "195",
          city_id: "0",
          name: "Samoa",
          active: "0",
          phone_code: "+685"
        },
        {
          id: "196",
          city_id: "0",
          name: "San Marino",
          active: "0",
          phone_code: "+378"
        },
        {
          id: "197",
          city_id: "0",
          name: "Saudi Arabia",
          active: "0",
          phone_code: "+966"
        },
        {
          id: "198",
          city_id: "0",
          name: "Senegal",
          active: "0",
          phone_code: "+221"
        },
        {
          id: "199",
          city_id: "0",
          name: "Serbia",
          active: "0",
          phone_code: "+381"
        },
        {
          id: "200",
          city_id: "0",
          name: "Seychelles",
          active: "0",
          phone_code: "+248"
        },
        {
          id: "201",
          city_id: "0",
          name: "Sierra Leone",
          active: "0",
          phone_code: "+232"
        },
        {
          id: "202",
          city_id: "0",
          name: "Singapore",
          active: "0",
          phone_code: "+65"
        },
        {
          id: "203",
          city_id: "0",
          name: "Slovakia",
          active: "0",
          phone_code: "+421"
        },
        {
          id: "204",
          city_id: "0",
          name: "Slovenia",
          active: "0",
          phone_code: "+386"
        },
        {
          id: "205",
          city_id: "0",
          name: "Solomon Islands",
          active: "0",
          phone_code: "+677"
        },
        {
          id: "206",
          city_id: "0",
          name: "South Africa",
          active: "0",
          phone_code: "+27"
        },
        {
          id: "207",
          city_id: "0",
          name: "South Georgia and the South Sandwich Isl",
          active: "0",
          phone_code: "+500"
        },
        {
          id: "208",
          city_id: "0",
          name: "South Korea",
          active: "0",
          phone_code: "+82"
        },
        {
          id: "209",
          city_id: "0",
          name: "Spain",
          active: "0",
          phone_code: "+34"
        },
        {
          id: "210",
          city_id: "0",
          name: "Sri Lanka",
          active: "0",
          phone_code: "+94"
        },
        {
          id: "211",
          city_id: "0",
          name: "Sudan",
          active: "0",
          phone_code: "+249"
        },
        {
          id: "212",
          city_id: "0",
          name: "Suriname",
          active: "0",
          phone_code: "+597"
        },
        {
          id: "213",
          city_id: "0",
          name: "Swaziland",
          active: "0",
          phone_code: "+268"
        },
        {
          id: "214",
          city_id: "0",
          name: "Sweden",
          active: "0",
          phone_code: "+46"
        },
        {
          id: "215",
          city_id: "0",
          name: "Switzerland",
          active: "0",
          phone_code: "+41"
        },
        {
          id: "216",
          city_id: "0",
          name: "Syria",
          active: "0",
          phone_code: "+963"
        },
        {
          id: "217",
          city_id: "0",
          name: "Taiwan",
          active: "0",
          phone_code: "+886"
        },
        {
          id: "218",
          city_id: "0",
          name: "Tajikistan",
          active: "0",
          phone_code: "+992"
        },
        {
          id: "219",
          city_id: "0",
          name: "Tanzania",
          active: "0",
          phone_code: "+255"
        },
        {
          id: "220",
          city_id: "0",
          name: "Thailand",
          active: "0",
          phone_code: "+66"
        },
        {
          id: "221",
          city_id: "0",
          name: "Timor Leste",
          active: "0",
          phone_code: "+670"
        },
        {
          id: "222",
          city_id: "0",
          name: "Togo",
          active: "0",
          phone_code: "+228"
        },
        {
          id: "223",
          city_id: "0",
          name: "Tokelau",
          active: "0",
          phone_code: "+690"
        },
        {
          id: "224",
          city_id: "0",
          name: "Tonga",
          active: "0",
          phone_code: "+676"
        },
        {
          id: "225",
          city_id: "0",
          name: "Trinidad and Tobago",
          active: "0",
          phone_code: "+1 868"
        },
        {
          id: "226",
          city_id: "0",
          name: "Tunisia",
          active: "0",
          phone_code: "+216"
        },
        {
          id: "227",
          city_id: "0",
          name: "Turkey",
          active: "0",
          phone_code: "+90"
        },
        {
          id: "228",
          city_id: "0",
          name: "Turkmenistan",
          active: "0",
          phone_code: "+993"
        },
        {
          id: "229",
          city_id: "0",
          name: "Turks and Caicos Islands",
          active: "0",
          phone_code: "+1 649"
        },
        {
          id: "230",
          city_id: "0",
          name: "Tuvalu",
          active: "0",
          phone_code: "+688"
        },
        {
          id: "231",
          city_id: "0",
          name: "U.S. Virgin Islands",
          active: "0",
          phone_code: "+1 340"
        },
        {
          id: "232",
          city_id: "0",
          name: "Uganda",
          active: "0",
          phone_code: "+256"
        },
        {
          id: "233",
          city_id: "0",
          name: "Ukraine",
          active: "0",
          phone_code: "+380"
        },
        {
          id: "234",
          city_id: "0",
          name: "United Arab Emirates",
          active: "0",
          phone_code: "+971"
        },
        {
          id: "235",
          city_id: "0",
          name: "United Kingdom",
          active: "0",
          phone_code: "+44"
        },
        {
          id: "237",
          city_id: "0",
          name: "Uruguay",
          active: "0",
          phone_code: "+598"
        },
        {
          id: "238",
          city_id: "0",
          name: "Uzbekistan",
          active: "0",
          phone_code: "+998"
        },
        {
          id: "239",
          city_id: "0",
          name: "Vanuatu",
          active: "0",
          phone_code: "+678"
        },
        {
          id: "240",
          city_id: "0",
          name: "Venezuela",
          active: "0",
          phone_code: "+58"
        },
        {
          id: "241",
          city_id: "0",
          name: "Vietnam",
          active: "0",
          phone_code: "+84"
        },
        {
          id: "242",
          city_id: "0",
          name: "Wake Island",
          active: "0",
          phone_code: "+1 808"
        },
        {
          id: "243",
          city_id: "0",
          name: "Wallis and Futuna",
          active: "0",
          phone_code: "+681"
        },
        {
          id: "244",
          city_id: "0",
          name: "Yemen",
          active: "0",
          phone_code: "+967"
        },
        {
          id: "245",
          city_id: "0",
          name: "Zambia",
          active: "0",
          phone_code: "+260"
        },
        {
          id: "246",
          city_id: "0",
          name: "Zanzibar",
          active: "0",
          phone_code: "+255"
        },
        {
          id: "247",
          city_id: "0",
          name: "Zimbabwe",
          active: "0",
          phone_code: "+263"
        }
      ];
      // ITEMS_COUNTRY.forEach((item) => {
      //   return createCountry(item);
      // });

      ITEMS_COUNTRY.map(item => createCountry(item));
    } else if (inputs.step == 2) {
      await State.destroy({});
      // create states code
      var ITEMS_STATES = [
        {
          id: "1",
          country_id: "1",
          city_id: "0",
          name: "Dhaka (\u09a2\u09be\u0995\u09be)",
          active: "1"
        },
        {
          id: "2",
          country_id: "1",
          city_id: "0",
          name:
            "Chittagong (\u099a\u099f\u09cd\u099f\u0997\u09cd\u09b0\u09be\u09ae)",
          active: "1"
        },
        {
          id: "3",
          country_id: "1",
          city_id: "0",
          name: "Comilla (\u0995\u09c1\u09ae\u09bf\u09b2\u09cd\u09b2\u09be)",
          active: "1"
        },
        {
          id: "4",
          country_id: "1",
          city_id: "0",
          name: "Rangpur (\u09b0\u0982\u09aa\u09c1\u09b0)",
          active: "1"
        },
        {
          id: "5",
          country_id: "2",
          city_id: "0",
          name: "Andhra Pradesh",
          active: "1"
        },
        { id: "6", country_id: "2", city_id: "0", name: "Assam", active: "1" },
        { id: "7", country_id: "2", city_id: "0", name: "Bihar", active: "1" },
        {
          id: "8",
          country_id: "2",
          city_id: "0",
          name: "Chandigarh",
          active: "1"
        },
        { id: "9", country_id: "2", city_id: "0", name: "Delhi", active: "1" },
        {
          id: "10",
          country_id: "2",
          city_id: "0",
          name: "Gujarat",
          active: "1"
        },
        { id: "11", country_id: "8", city_id: "0", name: "Hyogo", active: "1" },
        {
          id: "12",
          country_id: "8",
          city_id: "0",
          name: "Fukuoko",
          active: "1"
        },
        {
          id: "13",
          country_id: "8",
          city_id: "0",
          name: "Hiroshima",
          active: "1"
        },
        {
          id: "14",
          country_id: "8",
          city_id: "0",
          name: "Saitama",
          active: "1"
        },
        { id: "15", country_id: "9", city_id: "0", name: "Texas", active: "1" },
        {
          id: "16",
          country_id: "9",
          city_id: "0",
          name: "California",
          active: "0"
        },
        {
          id: "17",
          country_id: "9",
          city_id: "0",
          name: "Washington",
          active: "0"
        },
        {
          id: "18",
          country_id: "9",
          city_id: "0",
          name: "Alabama",
          active: "0"
        },
        {
          id: "19",
          country_id: "9",
          city_id: "0",
          name: "Oklahoma",
          active: "0"
        },
        { id: "20", country_id: "9", city_id: "0", name: "Maine", active: "0" },
        {
          id: "21",
          country_id: "9",
          city_id: "0",
          name: "Alaska",
          active: "0"
        },
        {
          id: "22",
          country_id: "9",
          city_id: "0",
          name: "Arizona ",
          active: "0"
        },
        {
          id: "23",
          country_id: "9",
          city_id: "0",
          name: "Arkansas",
          active: "0"
        },
        {
          id: "24",
          country_id: "9",
          city_id: "0",
          name: "Colorado",
          active: "0"
        },
        {
          id: "25",
          country_id: "9",
          city_id: "0",
          name: "Connecticut",
          active: "0"
        },
        {
          id: "26",
          country_id: "9",
          city_id: "0",
          name: "Delaware ",
          active: "0"
        },
        {
          id: "27",
          country_id: "9",
          city_id: "0",
          name: "Florida",
          active: "0"
        },
        {
          id: "28",
          country_id: "9",
          city_id: "0",
          name: "Georgia ",
          active: "0"
        },
        {
          id: "29",
          country_id: "9",
          city_id: "0",
          name: "Hawaii ",
          active: "0"
        },
        {
          id: "30",
          country_id: "9",
          city_id: "0",
          name: "Idaho ",
          active: "0"
        },
        {
          id: "31",
          country_id: "9",
          city_id: "0",
          name: "Illinois ",
          active: "0"
        },
        {
          id: "32",
          country_id: "9",
          city_id: "0",
          name: "Indiana ",
          active: "0"
        },
        { id: "33", country_id: "9", city_id: "0", name: "Iowa", active: "0" },
        {
          id: "34",
          country_id: "9",
          city_id: "0",
          name: "Kansas ",
          active: "0"
        },
        {
          id: "35",
          country_id: "9",
          city_id: "0",
          name: "Kentucky ",
          active: "0"
        },
        {
          id: "36",
          country_id: "9",
          city_id: "0",
          name: "Louisiana ",
          active: "0"
        },
        {
          id: "37",
          country_id: "9",
          city_id: "0",
          name: "Maryland",
          active: "0"
        },
        {
          id: "38",
          country_id: "9",
          city_id: "0",
          name: "Massachusetts",
          active: "0"
        },
        {
          id: "39",
          country_id: "9",
          city_id: "0",
          name: "Michigan",
          active: "0"
        },
        {
          id: "40",
          country_id: "9",
          city_id: "0",
          name: "Minnesota ",
          active: "0"
        },
        {
          id: "41",
          country_id: "9",
          city_id: "0",
          name: "Mississippi",
          active: "0"
        },
        {
          id: "42",
          country_id: "9",
          city_id: "0",
          name: "Missouri",
          active: "0"
        },
        {
          id: "43",
          country_id: "9",
          city_id: "0",
          name: "Montana ",
          active: "0"
        },
        {
          id: "44",
          country_id: "9",
          city_id: "0",
          name: "Nebraska ",
          active: "0"
        },
        {
          id: "45",
          country_id: "9",
          city_id: "0",
          name: "Nevada ",
          active: "0"
        },
        {
          id: "46",
          country_id: "9",
          city_id: "0",
          name: "New Hampshire",
          active: "0"
        },
        {
          id: "47",
          country_id: "9",
          city_id: "0",
          name: "New Jersey ",
          active: "0"
        },
        {
          id: "48",
          country_id: "9",
          city_id: "0",
          name: "New Mexico ",
          active: "0"
        },
        {
          id: "49",
          country_id: "9",
          city_id: "0",
          name: "New York ",
          active: "0"
        },
        {
          id: "50",
          country_id: "9",
          city_id: "0",
          name: "North Carolina ",
          active: "0"
        },
        {
          id: "51",
          country_id: "9",
          city_id: "0",
          name: "North Dakota ",
          active: "0"
        },
        { id: "52", country_id: "9", city_id: "0", name: "Ohio ", active: "0" },
        {
          id: "54",
          country_id: "9",
          city_id: "0",
          name: "Oregon ",
          active: "0"
        },
        {
          id: "55",
          country_id: "9",
          city_id: "0",
          name: "Pennsylvania",
          active: "0"
        },
        {
          id: "56",
          country_id: "9",
          city_id: "0",
          name: "Rhode Island",
          active: "0"
        },
        {
          id: "57",
          country_id: "9",
          city_id: "0",
          name: "South Carolina",
          active: "0"
        },
        {
          id: "58",
          country_id: "9",
          city_id: "0",
          name: "South Dakota ",
          active: "0"
        },
        {
          id: "59",
          country_id: "9",
          city_id: "0",
          name: "Tennessee",
          active: "0"
        },
        { id: "60", country_id: "9", city_id: "0", name: "Utah", active: "0" },
        {
          id: "61",
          country_id: "9",
          city_id: "0",
          name: "Vermont",
          active: "0"
        },
        {
          id: "62",
          country_id: "9",
          city_id: "0",
          name: "Virginia ",
          active: "0"
        },
        {
          id: "63",
          country_id: "9",
          city_id: "0",
          name: "West Virginia ",
          active: "0"
        },
        {
          id: "64",
          country_id: "9",
          city_id: "0",
          name: "Wisconsin ",
          active: "0"
        },
        {
          id: "65",
          country_id: "9",
          city_id: "0",
          name: "Wyoming ",
          active: "0"
        },
        {
          id: "66",
          country_id: "1",
          city_id: "0",
          name: "Rajshahi ",
          active: "1"
        },
        {
          id: "67",
          country_id: "1",
          city_id: "0",
          name: "Sylhet ",
          active: "1"
        },
        { id: "68", country_id: "1", city_id: "0", name: "Khulna", active: "1" }
      ];
      // ITEMS_STATES.forEach((item, index) => {
      //   return createState(item);
      // });
      ITEMS_STATES.map(item => createState(item));
    } else if (inputs.step == 3) {
      await City.destroy({});
      // create city code
      var ITEMS_CITY = [
        {
          id: "1",
          name: "Dhanmondi (\u09a7\u09be\u09a8\u09ae\u09a8\u09cd\u09a1\u09bf)",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "2",
          name: "Kalabagan (\u0995\u09b2\u09be\u09ac\u09be\u0997\u09be\u09a8)",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "4",
          name:
            "Hatirpool/Paribagh (\u09b9\u09be\u09a4\u09bf\u09b0\u09aa\u09c1\u09b2/\u09aa\u09b0\u09bf\u09ac\u09be\u0997)",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "5",
          name: "Chittagong",
          active: "0",
          state_id: "2",
          country_id: "1"
        },
        {
          id: "6",
          name: "Cox's Bazar",
          active: "0",
          state_id: "2",
          country_id: "1"
        },
        {
          id: "7",
          name: "Maghbazar (\u09ae\u0997\u09ac\u09be\u099c\u09be\u09b0)",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "8",
          name: "Austin",
          active: "1",
          state_id: "15",
          country_id: "9"
        },
        {
          id: "9",
          name: "Houston",
          active: "1",
          state_id: "15",
          country_id: "9"
        },
        {
          id: "10",
          name: "San Antonio",
          active: "1",
          state_id: "15",
          country_id: "9"
        },
        {
          id: "11",
          name: "Dallas/Fort Worth",
          active: "1",
          state_id: "15",
          country_id: "9"
        },
        {
          id: "13",
          name: "Los Angeles",
          active: "0",
          state_id: "16",
          country_id: "9"
        },
        {
          id: "15",
          name: "San Jose",
          active: "0",
          state_id: "16",
          country_id: "9"
        },
        {
          id: "16",
          name: "Abilene ",
          active: "0",
          state_id: "15",
          country_id: "9"
        },
        {
          id: "17",
          name: "Amarillo ",
          active: "0",
          state_id: "15",
          country_id: "9"
        },
        {
          id: "18",
          name: "Lubbock",
          active: "0",
          state_id: "15",
          country_id: "9"
        },
        {
          id: "19",
          name: "San Angelo ",
          active: "0",
          state_id: "15",
          country_id: "9"
        },
        {
          id: "20",
          name: "Wichita Falls ",
          active: "0",
          state_id: "15",
          country_id: "9"
        },
        {
          id: "21",
          name: "Corpus Christi ",
          active: "0",
          state_id: "15",
          country_id: "9"
        },
        {
          id: "22",
          name: "Beaumont",
          active: "0",
          state_id: "15",
          country_id: "9"
        },
        {
          id: "23",
          name: "Waco",
          active: "0",
          state_id: "15",
          country_id: "9"
        },
        {
          id: "24",
          name: "Temple/Killeen",
          active: "1",
          state_id: "15",
          country_id: "9"
        },
        {
          id: "25",
          name: "Tyler",
          active: "0",
          state_id: "15",
          country_id: "9"
        },
        {
          id: "26",
          name: "Midland/Odessa",
          active: "0",
          state_id: "15",
          country_id: "9"
        },
        {
          id: "27",
          name: "El paso ",
          active: "0",
          state_id: "15",
          country_id: "9"
        },
        {
          id: "28",
          name: "Texarkana",
          active: "1",
          state_id: "15",
          country_id: "9"
        },
        {
          id: "29",
          name: "Laredo",
          active: "0",
          state_id: "15",
          country_id: "9"
        },
        {
          id: "30",
          name: "McAllen",
          active: "0",
          state_id: "15",
          country_id: "9"
        },
        {
          id: "31",
          name: "Galveston",
          active: "0",
          state_id: "15",
          country_id: "9"
        },
        {
          id: "32",
          name: "College Station",
          active: "0",
          state_id: "15",
          country_id: "9"
        },
        {
          id: "33",
          name: "Motijheel (\u09ae\u09a4\u09bf\u099d\u09bf\u09b2)",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "34",
          name: "Rampura (\u09b0\u09be\u09ae\u09aa\u09c1\u09b0\u09be)",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "35",
          name: "Badda (\u09ac\u09be\u09a1\u09cd\u09a1\u09be)",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "36",
          name: "Mohakhali (\u09ae\u09b9\u09be\u0996\u09be\u09b2\u09c0)",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "37",
          name: "Baridhara (\u09ac\u09be\u09b0\u09bf\u09a7\u09be\u09b0\u09be)",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "38",
          name: "Basundhara (\u09ac\u09b8\u09c1\u09a8\u09cd\u09a7\u09b0\u09be)",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "39",
          name: "Uttara (\u0989\u09a4\u09cd\u09a4\u09b0\u09be)",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "40",
          name:
            "Mirpur 12, Pallabi (\u09ae\u09bf\u09b0\u09aa\u09c1\u09b0 \u09e7\u09e8, \u09aa\u09b2\u09cd\u09b2\u09ac\u09c0)",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "41",
          name:
            "Mirpur 13, 14 (\u09ae\u09bf\u09b0\u09aa\u09c1\u09b0 \u09e7\u09e9, \u09e7\u09ea)",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "42",
          name:
            "Mirpur 1, 2 (\u09ae\u09bf\u09b0\u09aa\u09c1\u09b0 \u09e7, \u09e8)",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "43",
          name:
            "Agargaon, Taltola (\u0986\u0997\u09be\u09b0\u0997\u09be\u0993, \u09a4\u09be\u09b2\u09a4\u09b2\u09be)",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "44",
          name:
            "Kallyanpur (\u0995\u09b2\u09cd\u09af\u09be\u09a8\u09aa\u09c1\u09b0)",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "45",
          name: "Gabtoli (\u0997\u09be\u09ac\u09a4\u09b2\u09c0)",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "46",
          name:
            "Mohammadpur (\u09ae\u09cb\u09b9\u09be\u09ae\u09cd\u09ae\u09a6\u09aa\u09c1\u09b0)",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "47",
          name:
            "Lalmatia (\u09b2\u09be\u09b2\u09ae\u09be\u099f\u09bf\u09df\u09be)",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "48",
          name: "Boshila (\u09ac\u09b8\u09bf\u09b2\u09be)",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "49",
          name: "Azimpur (\u0986\u099c\u09bf\u09ae\u09aa\u09c1\u09b0)",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "50",
          name:
            "Rayer Bazar, Hazaribag (\u09b0\u09be\u09df\u09c7\u09b0\u09ac\u09be\u099c\u09be\u09b0, \u09b9\u09be\u099c\u09be\u09b0\u09c0\u09ac\u09be\u0997)",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "51",
          name:
            "Jatrabari (\u09af\u09be\u09a4\u09cd\u09b0\u09be\u09ac\u09be\u09dc\u09bf)",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "52",
          name: "Keraniganj",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "53",
          name: "Rupnagar (\u09b0\u09c2\u09aa\u09a8\u0997\u09b0)",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "54",
          name: "Savar",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "55",
          name: "Lalbagh",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "56",
          name: "Tongi",
          active: "1",
          state_id: "1",
          country_id: "1"
        },
        {
          id: "57",
          name:
            "Mirpur 10, 11 (\u09ae\u09bf\u09b0\u09aa\u09c1\u09b0 \u09e7\u09e6, \u09e7\u09e7)",
          active: "1",
          state_id: "1",
          country_id: "1"
        }
      ];
      // ITEMS_CITY.forEach((item, index) => {
      //   return createCity(item);
      // });
      ITEMS_CITY.map(item => createCity(item));
    } else if (inputs.step == 4) {
      await City_location.destroy({});
      // create city code
      var ITEMS_CITY_LOCATION = [
        {
          id: "76",
          city_id: "1",
          city_name: "Dhaka",
          latitude: "23.7",
          longitude: "90.375"
        },
        {
          id: "77",
          city_id: "2",
          city_name: "Manikganj",
          latitude: "23.7",
          longitude: "90.375"
        },
        {
          id: "78",
          city_id: "4",
          city_name: "Mymensingh",
          latitude: "23.7",
          longitude: "90.375"
        },
        {
          id: "79",
          city_id: "5",
          city_name: "Chittagong",
          latitude: "23.7",
          longitude: "90.375"
        },
        {
          id: "80",
          city_id: "6",
          city_name: "Cox's Bazar",
          latitude: "23.7",
          longitude: "90.375"
        },
        {
          id: "81",
          city_id: "7",
          city_name: "Gazipur",
          latitude: "23.7",
          longitude: "90.375"
        },
        {
          id: "82",
          city_id: "8",
          city_name: "Austin",
          latitude: "30.25",
          longitude: "-97.75"
        },
        {
          id: "83",
          city_id: "9",
          city_name: "Houston",
          latitude: "29.7628",
          longitude: "-95.3831"
        },
        {
          id: "84",
          city_id: "10",
          city_name: "San Antonio",
          latitude: "29.4167",
          longitude: "-98.5"
        },
        {
          id: "85",
          city_id: "11",
          city_name: "Dallas",
          latitude: "32.7758",
          longitude: "-96.7967"
        },
        {
          id: "86",
          city_id: "12",
          city_name: "Fort Worth",
          latitude: "32.7574",
          longitude: "-97.3332"
        },
        {
          id: "87",
          city_id: "13",
          city_name: "Los Angeles",
          latitude: "34.05",
          longitude: "-118.25"
        },
        {
          id: "88",
          city_id: "15",
          city_name: "San Jose",
          latitude: "37.3333",
          longitude: "-121.9"
        },
        {
          id: "89",
          city_id: "24",
          city_name: "Temple/Killeen",
          latitude: "31.1056",
          longitude: "-97.7267"
        }
      ];

      ITEMS_CITY_LOCATION.map(item => createCity_location(item));
      // ITEMS_CITY_LOCATION.forEach((item, index) => {
      //   return createCity_location(item);
      // });
    } else if (inputs.step == 5) {
      await City_ip.destroy({});
      //create city code

      console.log("cityIps", cityIps.data);
      var ITEMS_CITY_IP = cityIps.data;

      ITEMS_CITY_IP.map(item => createCity_ip(item));
      //   ITEMS_CITY_IP.forEach((item, index) => {
      //    return createCity_ip(item);
      //  //console.log('cityIps',item);
      //   });
    } else if (inputs.step == 6) {
      await Category.destroy({});
      // create city code
      var ITEMS_CATEGORIES = [
        { id: "1", name: "Computer & Tech" },
        { id: "2", name: "Household & Labor" },
        { id: "3", name: "Moving" },
        { id: "4", name: "Housing" },
        { id: "5", name: "Sale" },
        { id: "6", name: "Automative" },
        { id: "7", name: "Pet services" },
        { id: "8", name: "Health & Beauty" },
        { id: "9", name: "Lessons" },
        { id: "10", name: "Real Estate" },
        { id: "11", name: "Event" },
        { id: "13", name: "Business " },
        { id: "14", name: "Creative & Skill" },
        { id: "15", name: "Travel" },
        {
          id: "18",
          name: "Car/MotorCycle/Bi-Cycle"
        },
        {
          id: "19",
          name:
            "Household & Labor (\u09ac\u09be\u09b8\u09be\u09ac\u09be\u09dc\u09bf \u0993 \u09ae\u09bf\u09b8\u09cd\u09a4\u09cd\u09b0\u09c0)"
        },
        {
          id: "20",
          name:
            "Lessons (\u09ac\u09be\u09b8\u09be\u09df \u09aa\u09dc\u09be\u09a8\u09cb, \u09b6\u09c7\u0996\u09be\u09a8\u09cb)"
        },
        {
          id: "21",
          name:
            "Moving (\u09ac\u09be\u09b8\u09be\u09ac\u09a6\u09b2, \u09ae\u09be\u09b2\u09ac\u09b9\u09a8) "
        },
        { id: "22", name: "Computer & Technical" },
        { id: "23", name: "Event Management" },
        {
          id: "24",
          name: "Travel (\u09ad\u09cd\u09b0\u09ae\u09a3) "
        },
        {
          id: "25",
          name:
            "Health Beauty (\u09b8\u09cd\u09ac\u09be\u09b8\u09cd\u09a5\u09cd\u09af, \u09b0\u09c2\u09aa\u09b8\u099c\u09cd\u099c\u09be)"
        },
        { id: "26", name: "Business " },
        { id: "27", name: "Service Wanted" }
      ];
      for (item of ITEMS_CATEGORIES) {
        await createCategory(item);
      }
      //  ITEMS_CATEGORIES.forEach((item, index) => {

      //  });
    } else if (inputs.step == 7) {
      // await ITEMS_CATEGORY_COUNTRY.destroy({});
      // create city code
      var ITEMS_CATEGORY_COUNTRY = [
        { id: "1", country_id: "1", category_id: "16" },
        { id: "2", country_id: "2", category_id: "16" },
        { id: "3", country_id: "7", category_id: "16" },
        { id: "4", country_id: "1", category_id: "17" },
        { id: "5", country_id: "1", category_id: "6" },
        { id: "6", country_id: "1", category_id: "19" },
        { id: "7", country_id: "1", category_id: "20" },
        { id: "8", country_id: "1", category_id: "21" },
        { id: "9", country_id: "1", category_id: "22" },
        { id: "10", country_id: "1", category_id: "23" },
        { id: "11", country_id: "1", category_id: "24" },
        { id: "12", country_id: "1", category_id: "25" },
        { id: "13", country_id: "1", category_id: "13" },
        { id: "14", country_id: "1", category_id: "18" }
      ];
      ITEMS_CATEGORY_COUNTRY.forEach((item, index) => {
        return updateCategoryCountry(item);
      });
    } else if (inputs.step == 8) {
      var ITEMS_SUB_CATEGORY = [
        {
          id: "2",
          category_id: "3",
          name: "Local moving service ",
          tags:
            "Local moving service, moving, moving truck rental, moving boxes, moving checklist, moving companies, moving tips, mover, movers "
        },
        {
          id: "4",
          category_id: "2",
          name: "Painting",
          tags:
            "Painting, house painters, painter, painters, Drywall, Sheet rock, drywall repairs, ceiling repairs "
        },
        {
          id: "5",
          category_id: "2",
          name: "Locksmith",
          tags:
            "Locksmith, locksmiths, lock smith, locksmith near me, key maker, key maker near me, rekey locks, change locks, kwikset locks, door lock, baldwin locks, master lock, padlock, cheap locksmith, high security locks, master locks, combination locks, schlage locks, deadlbolt locks, keyless entry, Multi Lock, Keyless door locks, Auto Locksmith, Car Key Locksmith, Locked Out of Car, Lost Car Keys, Car Key Replacement, Unlock Car Door, Car Lockout, Emergency locksmith, local locksmith, mobile locksmith, Lock smith, 24 hour car locksmith"
        },
        {
          id: "6",
          category_id: "2",
          name: "Cleaning Service",
          tags:
            "Cleaning Service, housecleaning, housecleaner, house cleaning, house cleaner, maids, maids near me, maids near you, maid service, office cleaning, officecleaning, office cleaning services, move out cleaning, move in cleaning, move out clean, move in clean, clean house, house clean, house clean up, house clean out, house cleanout service, Stripping, Waxing, Buffing"
        },
        {
          id: "7",
          category_id: "2",
          name: "Lawn service",
          tags:
            "Lawn service, Lawn maintenance, Leaf clean up, Mulch turning, Mowing, Mulching"
        },
        {
          id: "8",
          category_id: "2",
          name: "Electrician",
          tags: "Electrician, Home Theater, TV Mounting "
        },
        {
          id: "9",
          category_id: "2",
          name: "Carpet cleaning",
          tags: "Carpet cleaning, Steam Cleaning, Steam Vacuum"
        },
        {
          id: "10",
          category_id: "2",
          name: "Garage",
          tags:
            "Garage, install garage door, repair garage door, garage door, garage door service"
        },
        {
          id: "11",
          category_id: "2",
          name: "Handyman",
          tags: "Handyman, Carpenter, Home Repair, Renovations, Home repairs "
        },
        {
          id: "12",
          category_id: "1",
          name: "Computer Service",
          tags:
            "Computer Service, Troubleshooting, Computer Repair, Networking, WiFi Repair, Apple Mac Repair, computer virus removal, Network setup, wireless, OS upgrades, OS reinstalls, Blue screens"
        },
        {
          id: "13",
          category_id: "2",
          name: "Appliance",
          tags:
            "Appliance, Refrigerator, Refrigerator repair, Appliance repair "
        },
        {
          id: "14",
          category_id: "2",
          name: "Junk Removal ",
          tags:
            "Trash Removal, Junk Removal, Debris Removal, Lot cleaning, Pressure Washing, Land clearing, Dirt Spreading "
        },
        {
          id: "15",
          category_id: "2",
          name: "Roofing",
          tags:
            "Roofing, Residential Roofing, Metal Roofing, Commercial Roofing, Roof Repairs, Siding, Gutters "
        },
        {
          id: "16",
          category_id: "2",
          name: "Interior Design & Remodelling",
          tags:
            "Interior Design & Remodelling, Interior Design, Remodelling, Remodel"
        },
        {
          id: "17",
          category_id: "2",
          name: "Security System",
          tags: "Security System"
        },
        {
          id: "18",
          category_id: "2",
          name: "Flooring ",
          tags:
            "Flooring, Tile Setting, Tile, Hardwood Floor, Carpet Installation, Carpet Repair, Carpet Stretching, Carpet Patching, Concrete Staining, Overlay"
        },
        { id: "19", category_id: "2", name: "Fence ", tags: "Fence, Gate  " },
        {
          id: "20",
          category_id: "6",
          name: "Repair & Service ",
          tags:
            "Repair & Service, mobile mechanic, Brake service, Brake, Oil change, engine light on, over heating, no start, brake noise, starters, alternators, radiators, water pumps, fuel pumps, struts, shocks, belts, timing belts, hoses, check engine light, Brake jobs, replace rotors, tune ups, complete A/C, computer diagnostics, Cooling Systems, Batteries, Charging Systems, OBD Systems, diesel repair, airstream restoration, polishing airstream, vintage trailers, tire, tire services, Flat tire, Spare tire        "
        },
        {
          id: "21",
          category_id: "6",
          name: "Body Work",
          tags:
            "Body Work, Auto Body Repair, Polishing, Body Polishing, Dent Masters, Mobile AutoBody, Dents Scratches, Dings Paints, Paints Touch Ups"
        },
        {
          id: "22",
          category_id: "6",
          name: "Towing ",
          tags:
            "Towing, Roadside Assistance, Battery Jump, Jump-start cable, Tire Change"
        },
        {
          id: "23",
          category_id: "6",
          name: "Sell Junk Car",
          tags: "Sell Junk Car"
        },
        {
          id: "24",
          category_id: "2",
          name: "Pest Control",
          tags: "Pest Control"
        },
        { id: "25", category_id: "7", name: "Pet sitter", tags: "Pet sitter" },
        { id: "26", category_id: "7", name: "Pet care", tags: "Pet care" },
        { id: "27", category_id: "7", name: "Pet mate", tags: "Pet mate" },
        {
          id: "28",
          category_id: "2",
          name: "A/C Service ",
          tags:
            "A/C Service, ac service, ac maintenance, Air Condition, ac freon"
        },
        { id: "29", category_id: "9", name: "Children", tags: "Children" },
        {
          id: "30",
          category_id: "7",
          name: "Pet Waste Cleanup ",
          tags: "Pet Waste Cleanup "
        },
        {
          id: "31",
          category_id: "6",
          name: "Auto Sound",
          tags: "Auto Sound, Car Audio, Car Video, Car Secutiry, Car GPS"
        },
        {
          id: "32",
          category_id: "3",
          name: "Long-distance moving",
          tags: "Long-distance moving"
        },
        {
          id: "33",
          category_id: "3",
          name: "Auto transport ",
          tags: "Auto transport "
        },
        {
          id: "34",
          category_id: "6",
          name: "Auto Glass ",
          tags: "Auto Glass, Windshield Repair, Windshield Replacement "
        },
        {
          id: "35",
          category_id: "8",
          name: "Hair Spa Salon",
          tags:
            "Hair, Haircut, Hair Shaping, Hair Shading, Hair Therapy, Salon, Hair Stylist, Highlights, Hair Color, Braid, Hair Extension, Hair Weave, Mobile Stylist, Sew-ins, Versatile sew-ins, Lace closure sew-in, Spa, Makeup, Bridal, Keratin Treatment   "
        },
        {
          id: "36",
          category_id: "8",
          name: "Gym Trainer",
          tags: "Gym Trainer, Yoga, Personal Trainer "
        },
        {
          id: "37",
          category_id: "11",
          name: "Photography",
          tags:
            "Photography, Event photography, portrait, portraits, Wedding Protography"
        },
        { id: "38", category_id: "11", name: "Video", tags: "Video" },
        {
          id: "39",
          category_id: "11",
          name: "Event Planner",
          tags: "Event Planner, Personal Assistant "
        },
        {
          id: "40",
          category_id: "11",
          name: "Event Rental",
          tags:
            "Event Rental, Table, Chair, Dish, Table Cloth, Tent, Tents, Gas Heaters, Art Work, Moonwalk, Inflatables, dunk Tanks, Water Slides, Big Dry Slides, Bounce House, Venue Rental"
        },
        {
          id: "41",
          category_id: "2",
          name: "Landscape ",
          tags:
            "Landscape, Lawn Care, Tree Services, Tree planting, Concrete, Masonry, Sprinkler System, Sprinkler Repair, Sprinkler, Irrigation Repair "
        },
        {
          id: "42",
          category_id: "2",
          name: "Granite & Marble",
          tags:
            "Granite & Marble, Granite, Marble, Concrete, Cement, Demolition "
        },
        {
          id: "43",
          category_id: "10",
          name: "Property Management",
          tags: "Property Management"
        },
        {
          id: "44",
          category_id: "1",
          name: "Phone Repair",
          tags: "iPhone broken screen, charging port repair, iPhone repair "
        },
        {
          id: "45",
          category_id: "6",
          name: "Car Wash & Detailing ",
          tags:
            "Car Wash, Mobile Car Wash, Auto Detailing, Full Detail Service, Clean car, Wash my car,  Exterior wash, Clean Wheel, Vehicle Detailing, Wash and Wax, Hand Car Wash "
        },
        {
          id: "46",
          category_id: "8",
          name: "Tattoo",
          tags: "Tattoo, Face painting "
        },
        {
          id: "47",
          category_id: "11",
          name: "DJ",
          tags: "DJ, Music, Party DJ, MC, Wedding Planner, Clown, Entertainer "
        },
        {
          id: "48",
          category_id: "11",
          name: "Event Services ",
          tags:
            "Event Service, Event Services, Bartender, Bartenders, Party Service, Party Services, Party Cleaning, Party Rental, Party Bus Rental"
        },
        {
          id: "49",
          category_id: "9",
          name: "Tutors ",
          tags:
            "Tutor, Tutors, Instructor, Math, Physics, Chemistry, Science, ESL, English, Writing, Spanish, Language, GED, ASVAB, SAT, ACT, Progamming"
        },
        {
          id: "50",
          category_id: "9",
          name: "Music",
          tags: "Music, Piano, Guitar, Drum, Violin"
        },
        {
          id: "51",
          category_id: "9",
          name: "Dance",
          tags: "Dance, Classical "
        },
        {
          id: "52",
          category_id: "9",
          name: "Horse Riding",
          tags: "Horse Riding"
        },
        {
          id: "53",
          category_id: "9",
          name: "Driving",
          tags: "Driving, Teen Lessons "
        },
        {
          id: "54",
          category_id: "9",
          name: "Sports",
          tags: "Tennis, Soccer, Golf "
        },
        {
          id: "55",
          category_id: "8",
          name: "Massage Theray",
          tags: "Massage, Theray, Therapist, Therapists, Spa "
        },
        {
          id: "56",
          category_id: "2",
          name: "Tree Services ",
          tags:
            "Tree Services, Tree Service, Tree Trimming, Tree Removal, Lot cleaning, Roof cleaning, Wilt removal, Stump removal"
        },
        { id: "57", category_id: "12", name: "Fence ", tags: "Fence, Gate" },
        { id: "58", category_id: "13", name: "Notary", tags: "Notary" },
        {
          id: "59",
          category_id: "13",
          name: "Attorney ",
          tags:
            "Attorney, Lawyer, Divorce Attorney, Family Law Attorney, Criminal Attorney"
        },
        {
          id: "60",
          category_id: "10",
          name: "Realtor",
          tags: "realtor, real estate agent, realtors "
        },
        {
          id: "61",
          category_id: "10",
          name: "Appraiser",
          tags: "appraiser, appraisers, home appraisal"
        },
        {
          id: "62",
          category_id: "2",
          name: "Window cleaning/Pressure Washing ",
          tags:
            "Window cleaning, Pressure washing, Gutter cleaning, Window Screen Repair, Window Screen "
        },
        {
          id: "63",
          category_id: "14",
          name: "Artists",
          tags: "Artist, Artists, Portrait drawing"
        },
        {
          id: "64",
          category_id: "14",
          name: "Tailor",
          tags:
            "Tailor, Tailors, Seamstress, Alterations, Sewing, Quilting, Embroidery"
        },
        {
          id: "65",
          category_id: "14",
          name: "Screen Print",
          tags: "Screen Print, T-shirt print, Print apparel"
        },
        {
          id: "66",
          category_id: "14",
          name: "Psychic",
          tags: "psychic, psychic reading, tarot, tarot reading "
        },
        {
          id: "67",
          category_id: "1",
          name: "Web/Logo Design",
          tags:
            "Web Design, Creative Design, Graphic Design, Logo Design, Web Illustration"
        },
        {
          id: "68",
          category_id: "13",
          name: "Counselling ",
          tags: "Counselling, Marriage therapy, Family therapy"
        },
        {
          id: "69",
          category_id: "2",
          name: "Plumbing ",
          tags: "Plumbing, Plumber "
        },
        { id: "70", category_id: "10", name: "Inspection", tags: "Inspection" },
        {
          id: "71",
          category_id: "2",
          name: "Personal Assistant",
          tags:
            "Kitchen Guru, Home Chef, Baby Sitter, Grocery Shopping, Gift Shopping, Pick up, Delivery, Organizing home, Event planning, Garage organization"
        },
        {
          id: "72",
          category_id: "2",
          name: "Swimming Pool",
          tags:
            "Pool, Pool repairs, concrete works, Swimming pool, Swimming pool repairs, plasters, Remodel, Pool Remodel, Swimming pool remodel"
        },
        {
          id: "73",
          category_id: "15",
          name: "Travel Agent",
          tags: "Travel Agent "
        },
        {
          id: "74",
          category_id: "15",
          name: "Taxi/Ride ",
          tags: "Taxi, Ride, Yellow cab, Blue Cab, Cab, Super Shuttle "
        },
        {
          id: "78",
          category_id: "19",
          name:
            "Painting (\u09b0\u0982\u09ae\u09bf\u09b8\u09cd\u09a4\u09cd\u09b0\u09c0)",
          tags:
            "Painting, \u09b0\u0982\u09ae\u09bf\u09b8\u09cd\u09a4\u09cd\u09b0\u09c0, house painters, painter, painters"
        },
        {
          id: "79",
          category_id: "19",
          name:
            "Locksmith (\u09a4\u09be\u09b2\u09be\u099a\u09be\u09ac\u09bf\u0993\u09df\u09be\u09b2\u09be)",
          tags:
            "Locksmith, \u09a4\u09be\u09b2\u09be\u099a\u09be\u09ac\u09bf\u0993\u09df\u09be\u09b2\u09be "
        },
        {
          id: "80",
          category_id: "19",
          name:
            "Electrician (\u0987\u09b2\u09c7\u0995\u099f\u09cd\u09b0\u09bf\u09b8\u09bf\u09df\u09be\u09a8)",
          tags:
            "Electrician, \u0987\u09b2\u09c7\u0995\u099f\u09cd\u09b0\u09bf\u09b8\u09bf\u09df\u09be\u09a8"
        },
        {
          id: "81",
          category_id: "19",
          name:
            "Shutter Mistry (\u09b6\u09be\u099f\u09be\u09b0 \u09ae\u09bf\u09b8\u09cd\u09a4\u09cd\u09b0\u09c0)",
          tags:
            "Shutter Mistry, \u09b6\u09be\u099f\u09be\u09b0 \u09ae\u09bf\u09b8\u09cd\u09a4\u09cd\u09b0\u09c0"
        },
        {
          id: "82",
          category_id: "19",
          name:
            "Refrigeration (\u09b0\u09c7\u09ab\u09cd\u09b0\u09bf\u099c\u09be\u09b0\u09c7\u09b6\u09be\u09a8)",
          tags:
            "\u09b0\u09c7\u09ab\u09cd\u09b0\u09bf\u099c\u09be\u09b0\u09c7\u09b6\u09be\u09a8, Refrigeration"
        },
        {
          id: "83",
          category_id: "19",
          name:
            "Flooring (\u0995\u09be\u09b0\u09cd\u09aa\u09c7\u099f, \u099f\u09be\u0987\u09b2\u09b8)",
          tags:
            "Flooring, Carpet, Tiles, \u0995\u09be\u09b0\u09cd\u09aa\u09c7\u099f, \u099f\u09be\u0987\u09b2\u09b8"
        },
        {
          id: "84",
          category_id: "19",
          name:
            "A/C Service (\u098f\u09b8\u09bf \u09b8\u09be\u09b0\u09cd\u09ad\u09bf\u09b8)",
          tags:
            "A/C Service, \u098f\u09b8\u09bf \u09b8\u09be\u09b0\u09cd\u09ad\u09bf\u09b8"
        },
        {
          id: "85",
          category_id: "11",
          name: "Photography",
          tags:
            "Photography, Event photography, Portrait, Portraits, Wedding Protography, Passport Size Photo"
        },
        {
          id: "86",
          category_id: "20",
          name:
            "Tutors (\u0997\u09c3\u09b9\u09b6\u09bf\u0995\u09cd\u09b7\u0995)",
          tags:
            "Tutors, \u0997\u09c3\u09b9\u09b6\u09bf\u0995\u09cd\u09b7\u0995, \u099f\u09bf\u0989\u099f\u09b0\u09b8, Physics, Chemistry, Math, O-Level, A-Level"
        },
        {
          id: "87",
          category_id: "20",
          name:
            "Music Teacher (\u0997\u09be\u09a8\u09c7\u09b0 \u099f\u09bf\u099a\u09be\u09b0)",
          tags:
            "Music Teacher, Music, Piano, Guitar, Drum, Violin, \u0997\u09be\u09a8\u09c7\u09b0 \u099f\u09bf\u099a\u09be\u09b0, \u09aa\u09bf\u09df\u09be\u09a8\u09cb, \u0997\u09bf\u099f\u09be\u09b0"
        },
        {
          id: "88",
          category_id: "20",
          name: "Dance (\u09a8\u09be\u099a \u09b6\u09c7\u0996\u09be)",
          tags:
            "Dance, \u09a8\u09be\u099a \u09b6\u09c7\u0996\u09be, \u0995\u09a5\u09cd\u09a5\u0995, Fusion "
        },
        {
          id: "89",
          category_id: "20",
          name: "Arabic (\u0986\u09b0\u09ac\u09bf \u09b6\u09c7\u0996\u09be)",
          tags:
            "Arabic, \u0986\u09b0\u09ac\u09bf \u09b6\u09c7\u0996\u09be, \u0995\u09cb\u09b0\u09be\u09a8\u09c7 \u09b9\u09be\u09ab\u09bf\u099c, \u0995\u09cb\u09b0\u09be\u09a8 \u0996\u09a4\u09ae"
        },
        {
          id: "90",
          category_id: "18",
          name:
            "Car workshop (\u0995\u09be\u09b0 \u0993\u09df\u09be\u09b0\u09cd\u0995\u09b6\u09aa)",
          tags:
            "\u0995\u09be\u09b0 \u0993\u09df\u09be\u09b0\u09cd\u0995\u09b6\u09aa, Car Workshop, Repair & Service, mobile mechanic, Brake service, Brake, Oil change, engine light on, over heating, no start, brake noise, starters, alternators, radiators, water pumps, fuel pumps, struts, shocks, belts, timing belts, hoses, check engine light, Brake jobs, replace rotors, tune ups, complete A/C, computer diagnostics, Cooling Systems, Batteries, Charging Systems, OBD Systems, diesel repair, airstream restoration, polishing airstream, vintage trailers, tire, tire services, Flat tire, Spare tire"
        },
        {
          id: "91",
          category_id: "18",
          name:
            "Cycle Mistry (\u09b8\u09be\u0987\u0995\u09c7\u09b2 \u09ae\u09bf\u09b8\u09cd\u09a4\u09cd\u09b0\u09c0)",
          tags:
            "Bi-cycle Mistry, \u09b8\u09be\u0987\u0995\u09c7\u09b2 \u09ae\u09bf\u09b8\u09cd\u09a4\u09cd\u09b0\u09c0, \u09b8\u09be\u0987\u0995\u09c7\u09b2 \u09b8\u09be\u09b0\u09be\u0987"
        },
        {
          id: "92",
          category_id: "18",
          name: "Motor Cycle Mechanic",
          tags: "Motor Cycle Mechanic"
        },
        {
          id: "93",
          category_id: "21",
          name:
            "Home, Office Move (\u09ac\u09be\u09b8\u09be, \u0985\u09ab\u09bf\u09b8 \u09ac\u09a6\u09b2) ",
          tags:
            "Home, Office Move, \u09ac\u09be\u09b8\u09be, \u0985\u09ab\u09bf\u09b8 \u09ac\u09a6\u09b2, \u09b8\u09cd\u09a5\u09be\u09a8\u09be\u09a8\u09cd\u09a4\u09b0"
        },
        {
          id: "94",
          category_id: "21",
          name: "Transport (\u09ae\u09be\u09b2\u09ac\u09b9\u09a8)",
          tags:
            "\u09ae\u09be\u09b2\u09ac\u09b9\u09a8, \u09b8\u09cd\u09ac\u09b2\u09cd\u09aa \u09a6\u09c2\u09b0\u09a4\u09cd\u09ac\u09c7 \u09ae\u09be\u09b2 \u09ac\u09b9\u09a8, \u09b6\u09b9\u09b0\u09c7\u09b0 \u09ae\u09be\u099d\u09c7 \u09ae\u09be\u09b2\u09ac\u09b9\u09a8"
        },
        {
          id: "95",
          category_id: "2",
          name: "Foundations",
          tags:
            "Foundation, Foundation repair, Pier Beam, Concrete Slab, House Leveling, Concrete work"
        },
        {
          id: "96",
          category_id: "27",
          name: "Automative",
          tags: "Auto Glass, Auto Sound, Body Work"
        }
      ];
      for (let item of ITEMS_SUB_CATEGORY) {
        await createSubCategory(item);
      }
      // ITEMS_SUB_CATEGORY.forEach((item, index) => {
      //   return createSubCategory(item);
      // });
    } else if (inputs.step == 9) {
      var ITEMS_SUB_CATEGORY_COUNTRY = [
        { id: "2", country_id: "9", subcategory_id: "4" },
        { id: "3", country_id: "9", subcategory_id: "5" },
        { id: "4", country_id: "9", subcategory_id: "6" },
        { id: "5", country_id: "9", subcategory_id: "7" },
        { id: "6", country_id: "9", subcategory_id: "8" },
        { id: "7", country_id: "9", subcategory_id: "9" },
        { id: "8", country_id: "9", subcategory_id: "10" },
        { id: "9", country_id: "9", subcategory_id: "11" },
        { id: "11", country_id: "9", subcategory_id: "13" },
        { id: "12", country_id: "9", subcategory_id: "14" },
        { id: "13", country_id: "9", subcategory_id: "15" },
        { id: "14", country_id: "9", subcategory_id: "16" },
        { id: "15", country_id: "9", subcategory_id: "17" },
        { id: "17", country_id: "9", subcategory_id: "19" },
        { id: "18", country_id: "9", subcategory_id: "20" },
        { id: "19", country_id: "9", subcategory_id: "21" },
        { id: "20", country_id: "9", subcategory_id: "22" },
        { id: "21", country_id: "9", subcategory_id: "23" },
        { id: "22", country_id: "9", subcategory_id: "24" },
        { id: "23", country_id: "9", subcategory_id: "25" },
        { id: "24", country_id: "9", subcategory_id: "26" },
        { id: "25", country_id: "9", subcategory_id: "27" },
        { id: "26", country_id: "9", subcategory_id: "28" },
        { id: "27", country_id: "9", subcategory_id: "29" },
        { id: "28", country_id: "9", subcategory_id: "30" },
        { id: "29", country_id: "9", subcategory_id: "31" },
        { id: "30", country_id: "9", subcategory_id: "32" },
        { id: "31", country_id: "9", subcategory_id: "33" },
        { id: "32", country_id: "9", subcategory_id: "34" },
        { id: "33", country_id: "9", subcategory_id: "35" },
        { id: "34", country_id: "9", subcategory_id: "36" },
        { id: "35", country_id: "9", subcategory_id: "37" },
        { id: "37", country_id: "9", subcategory_id: "39" },
        { id: "38", country_id: "9", subcategory_id: "40" },
        { id: "39", country_id: "9", subcategory_id: "41" },
        { id: "40", country_id: "9", subcategory_id: "42" },
        { id: "41", country_id: "9", subcategory_id: "43" },
        { id: "42", country_id: "9", subcategory_id: "44" },
        { id: "43", country_id: "9", subcategory_id: "45" },
        { id: "45", country_id: "9", subcategory_id: "47" },
        { id: "47", country_id: "9", subcategory_id: "49" },
        { id: "48", country_id: "9", subcategory_id: "50" },
        { id: "49", country_id: "9", subcategory_id: "51" },
        { id: "50", country_id: "9", subcategory_id: "52" },
        { id: "51", country_id: "9", subcategory_id: "53" },
        { id: "52", country_id: "9", subcategory_id: "54" },
        { id: "53", country_id: "9", subcategory_id: "55" },
        { id: "54", country_id: "9", subcategory_id: "56" },
        { id: "55", country_id: "9", subcategory_id: "57" },
        { id: "56", country_id: "9", subcategory_id: "58" },
        { id: "57", country_id: "9", subcategory_id: "59" },
        { id: "58", country_id: "9", subcategory_id: "60" },
        { id: "59", country_id: "9", subcategory_id: "61" },
        { id: "61", country_id: "9", subcategory_id: "63" },
        { id: "62", country_id: "9", subcategory_id: "64" },
        { id: "63", country_id: "9", subcategory_id: "65" },
        { id: "64", country_id: "9", subcategory_id: "66" },
        { id: "65", country_id: "9", subcategory_id: "67" },
        { id: "66", country_id: "9", subcategory_id: "68" },
        { id: "67", country_id: "9", subcategory_id: "69" },
        { id: "68", country_id: "9", subcategory_id: "70" },
        { id: "69", country_id: "9", subcategory_id: "71" },
        { id: "70", country_id: "9", subcategory_id: "72" },
        { id: "71", country_id: "9", subcategory_id: "73" },
        { id: "72", country_id: "9", subcategory_id: "74" },
        { id: "78", country_id: "1", subcategory_id: "78" },
        { id: "79", country_id: "1", subcategory_id: "79" },
        { id: "80", country_id: "1", subcategory_id: "80" },
        { id: "82", country_id: "1", subcategory_id: "82" },
        { id: "83", country_id: "1", subcategory_id: "83" },
        { id: "84", country_id: "1", subcategory_id: "84" },
        { id: "85", country_id: "1", subcategory_id: "37" },
        { id: "86", country_id: "1", subcategory_id: "38" },
        { id: "87", country_id: "9", subcategory_id: "38" },
        { id: "88", country_id: "1", subcategory_id: "12" },
        { id: "89", country_id: "9", subcategory_id: "12" },
        { id: "90", country_id: "1", subcategory_id: "86" },
        { id: "92", country_id: "1", subcategory_id: "87" },
        { id: "93", country_id: "1", subcategory_id: "88" },
        { id: "94", country_id: "1", subcategory_id: "89" },
        { id: "95", country_id: "1", subcategory_id: "90" },
        { id: "96", country_id: "1", subcategory_id: "91" },
        { id: "97", country_id: "1", subcategory_id: "92" },
        { id: "98", country_id: "1", subcategory_id: "81" },
        { id: "99", country_id: "1", subcategory_id: "93" },
        { id: "100", country_id: "1", subcategory_id: "94" },
        { id: "101", country_id: "9", subcategory_id: "48" },
        { id: "102", country_id: "9", subcategory_id: "46" },
        { id: "103", country_id: "9", subcategory_id: "18" },
        { id: "104", country_id: "9", subcategory_id: "62" },
        { id: "105", country_id: "9", subcategory_id: "95" },
        { id: "106", country_id: "9", subcategory_id: "2" }
      ];

      ITEMS_SUB_CATEGORY_COUNTRY.forEach((item, index) => {
        return updateSubCategoryCountry(item);
      });
    } else if (inputs.step == 10) {
      await User.destroy({});
      var ITEMS_USERS = [
        {
          id: "5",
          filename: "",
          filepath: "",
          user_id: "5",
          active: "1",
          email: "ahsan_kabeer@yahoo.com",
          password: "97c3ed02c7afbdb31fe79da095b52db915772287",
          tokenhash: "335ba27e2391e48e0c5fd42aba2b4b18b85cb333",
          activate: "1",
          firstname: "Ahsan",
          lastname: "Kabeer",
          user_type: "Admin",
          phone: "(512) 772-6875",
          address: "Texas, USA",
          city: "Austin",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.333566619596123",
          longitude: "-97.9595846682787",
          state: "Texus",
          zip: "78738",
          country: "USA",
          username: "ahsan",
          url: null
        },
        {
          id: "6",
          filename: "pharmacy-building-street-view.jpg",
          filepath: "uploads/usR4bXnPFgv9U2x2014_11_16_00_05_36.jpg",
          user_id: "6",
          active: "1",
          email: "shadek07@yahoo.com",
          password: "f8b383ae14bbd7be322b1bb1e4b386a99f55fd97",
          tokenhash: "50edf5e24b487979513c745e25658e2c9f8097d1",
          activate: "1",
          firstname: "shadekur",
          lastname: "rahman",
          user_type: "Site User",
          phone: "5129999934",
          address: "dghmg",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.354884431796933",
          longitude: "-97.91579506055905",
          state: "",
          zip: "1008",
          country: "",
          username: "shadek",
          url: null
        },
        {
          id: "12",
          filename: "7.jpg",
          filepath: "uploads/kr1iPZEzpglRySu2014_10_15_06_50_23.jpg",
          user_id: "12",
          active: "1",
          email: "palash4003@yahoo.com",
          password: "97c3ed02c7afbdb31fe79da095b52db915772287",
          tokenhash:
            "3a5e440593ae723abdac3ae68ecd96c07afceffb8e6d989a2d5d91431171f897fa73f0de4a2bf4ddf1d436e49fb5f061fc70c790bf5be66dd486a39f3b586917",
          activate: "1",
          firstname: "Moha",
          lastname: "Palash",
          user_type: "Service Provider",
          phone: "4086054414",
          address: "112 Sebastians Run, Lakeway, TX 78738 ",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.33357847079756",
          longitude: "-97.9595726347656",
          state: "",
          zip: "78738",
          country: "",
          username: "palash4003",
          url: null
        },
        {
          id: "17",
          filename: "",
          filepath: "",
          user_id: "17",
          active: "1",
          email: "nayeem@vpcsbd.com",
          password: "9c583e6838401bf82f17ad905fe0c43ef0967bff",
          tokenhash: "d54243c9c21aa777ebcf531238bfca86cf84145b",
          activate: "1",
          firstname: "Nayeem",
          lastname: "Ahmad",
          user_type: "Service Provider",
          phone: "8801714111977",
          address: "",
          city: "",
          state_id: "1",
          country_id: "1",
          city_id: "1",
          default_city: "1",
          latitude: "0",
          longitude: "0",
          state: "",
          zip: "1216",
          country: "",
          username: "nayeem1",
          url: null
        },
        {
          id: "20",
          filename: "Chrysanthemum.jpg",
          filepath: "uploads/YaITXOdeNBFuPVg2016_03_19_00_49_42.jpg",
          user_id: "20",
          active: "1",
          email: "lemonoapps@gmail.com",
          password: "ef2a56e0a20468ca1dde96a758f7d60d79ffd2db",
          tokenhash: "5123a02e78d6141f8096f67346b3197179ef5a8b",
          activate: "1",
          firstname: "Lemono",
          lastname: "Apps",
          user_type: "Service Provider ",
          phone: "6543421234",
          address: "",
          city: "",
          state_id: "1",
          country_id: "1",
          city_id: "8",
          default_city: "8",
          latitude: "30.2714992896924",
          longitude: "-97.84613037109375",
          state: "",
          zip: "1207",
          country: "",
          username: "lemono",
          url: "www.google.com"
        },
        {
          id: "42",
          filename: "",
          filepath: "",
          user_id: "42",
          active: "1",
          email: "powertoscour@gmail.com",
          password: "fb1e11e44c1e0bdde17c583343794e68d59e3613",
          tokenhash: "325fa036b8804c115221bd3a9baa1bb56ca51624",
          activate: "1",
          firstname: "Power",
          lastname: "Scour",
          user_type: "Service Provider",
          phone: "5124619090",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "0",
          longitude: "0",
          state: "",
          zip: "78701",
          country: "",
          username: "powertoscour ",
          url: null
        },
        {
          id: "43",
          filename: "",
          filepath: "",
          user_id: "43",
          active: "1",
          email: "samspaint@gmail.com",
          password: "fb1e11e44c1e0bdde17c583343794e68d59e3613",
          tokenhash: "",
          activate: "1",
          firstname: "Sam",
          lastname: "Weatherford",
          user_type: "Service Provider",
          phone: "5126633037",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "0",
          longitude: "0",
          state: "",
          zip: "78704",
          country: "",
          username: "samspaint",
          url: null
        },
        {
          id: "45",
          filename: "",
          filepath: "",
          user_id: "45",
          active: "1",
          email: "nvaldez@austinsva.com",
          password: "fb1e11e44c1e0bdde17c583343794e68d59e3613",
          tokenhash: "",
          activate: "1",
          firstname: "Nancy",
          lastname: "Valdez",
          user_type: "Service Provider",
          phone: "5126302581",
          address: "Austin",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "0",
          longitude: "0",
          state: "",
          zip: "78704",
          country: "",
          username: "nvaldez",
          url: null
        },
        {
          id: "48",
          filename: "",
          filepath: "",
          user_id: "48",
          active: "0",
          email: "mdtaqimusharraf@gmail.com",
          password: "f94a755e88355fbfa42a74f0eee1e4a91a2e61ee",
          tokenhash: "5236ce18352ac586cced02df9fa31de5f1ec1e79",
          activate: "1",
          firstname: "Taqi",
          lastname: "Musharraf",
          user_type: "Service Provider",
          phone: "0171593819",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "0",
          longitude: "0",
          state: "",
          zip: "1234",
          country: "",
          username: "taqi",
          url: null
        },
        {
          id: "49",
          filename: "",
          filepath: "",
          user_id: "49",
          active: "1",
          email: "altamera3@hotmail.com",
          password: "fb1e11e44c1e0bdde17c583343794e68d59e3613",
          tokenhash: "",
          activate: "1",
          firstname: "Isabel",
          lastname: "Isabel",
          user_type: "Service Provider",
          phone: "6155062525",
          address: "Austin & Surrounding area",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "0",
          longitude: "0",
          state: "",
          zip: "78704",
          country: "",
          username: "altamera3",
          url: null
        },
        {
          id: "50",
          filename: "",
          filepath: "",
          user_id: "50",
          active: "1",
          email: "austinroofingservices@yahoo.com",
          password: "fb1e11e44c1e0bdde17c583343794e68d59e3613",
          tokenhash: "",
          activate: "1",
          firstname: "Austin",
          lastname: "Roofing ",
          user_type: "Service Provider",
          phone: "5125652952",
          address: "1525 Cypress Creek Rd, suite H #145 Cedar Park, Tx 78613",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "0",
          longitude: "0",
          state: "",
          zip: "78613",
          country: "",
          username: "austinroogingservices ",
          url: null
        },
        {
          id: "51",
          filename: "",
          filepath: "",
          user_id: "51",
          active: "1",
          email: "PerfectlyMaidInTexas@gmail.com",
          password: "fb1e11e44c1e0bdde17c583343794e68d59e3613",
          tokenhash: "f32316bc65d27770f4a70ed67ead76bb50799bde",
          activate: "1",
          firstname: "Wanda",
          lastname: "Wallace",
          user_type: "Service Provider",
          phone: "5127629063",
          address: "Austin, TX ",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "0",
          longitude: "0",
          state: "",
          zip: "78704",
          country: "",
          username: "PerfectlyMaidInTexas",
          url: null
        },
        {
          id: "52",
          filename: "",
          filepath: "",
          user_id: "52",
          active: "1",
          email: "david@fernalld.com",
          password: "2895773068017509e59c3c0b1df245821185b8e8",
          tokenhash: "",
          activate: "1",
          firstname: "David",
          lastname: "Fernalld",
          user_type: "Service Provider",
          phone: "5129344219",
          address: "PO Box 202403\r\nAustin, TX  78720",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "0",
          longitude: "0",
          state: "",
          zip: "78720",
          country: "",
          username: "david",
          url: null
        },
        {
          id: "53",
          filename: "",
          filepath: "",
          user_id: "53",
          active: "1",
          email: "seguar1024@yahoo.com",
          password: "2895773068017509e59c3c0b1df245821185b8e8",
          tokenhash: "",
          activate: "1",
          firstname: "RAFAEL",
          lastname: "SEGURA",
          user_type: "Service Provider",
          phone: "5125843274",
          address: "Austin, TX ",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "0",
          longitude: "0",
          state: "",
          zip: "78704",
          country: "",
          username: "segura1024",
          url: null
        },
        {
          id: "54",
          filename: "",
          filepath: "",
          user_id: "54",
          active: "1",
          email: "theaustinpainter@gmail.com",
          password: "2895773068017509e59c3c0b1df245821185b8e8",
          tokenhash: "",
          activate: "1",
          firstname: "Austin",
          lastname: "Painter",
          user_type: "Service Provider",
          phone: "5126893755",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "0",
          longitude: "0",
          state: "",
          zip: "78704",
          country: "",
          username: "theaustinpainter",
          url: null
        },
        {
          id: "55",
          filename: "",
          filepath: "",
          user_id: "55",
          active: "1",
          email: "davidreeder@texasjunkboys.com",
          password: "936de49434c84f42af8e8048f07b327ddd77e63d",
          tokenhash: "",
          activate: "1",
          firstname: "David",
          lastname: "Reeder",
          user_type: "Service Provider",
          phone: "5127439849",
          address: "Austin",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "0",
          longitude: "0",
          state: "",
          zip: "78704",
          country: "",
          username: "davidreeder ",
          url: null
        },
        {
          id: "56",
          filename: "",
          filepath: "",
          user_id: "56",
          active: "1",
          email: "info@itsmytreatpetcare.com",
          password: "fb1e11e44c1e0bdde17c583343794e68d59e3613",
          tokenhash: "",
          activate: "1",
          firstname: "Itsmytreat",
          lastname: "Petcare",
          user_type: "Service Provider",
          phone: "5126779738",
          address:
            "900 E. Pecan Street, Suite 300-261\r\nPflugersville, TX 78660",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "0",
          longitude: "0",
          state: "",
          zip: "78660",
          country: "",
          username: "itsmytreatpetcare",
          url: null
        },
        {
          id: "57",
          filename: "",
          filepath: "",
          user_id: "57",
          active: "1",
          email: "janae.price23@gmail.com",
          password: "fb1e11e44c1e0bdde17c583343794e68d59e3613",
          tokenhash: "",
          activate: "1",
          firstname: "Ja'Nae ",
          lastname: "Price",
          user_type: "Service Provider",
          phone: "5128888276",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "0",
          longitude: "0",
          state: "",
          zip: "78758",
          country: "",
          username: "janae.price23",
          url: null
        },
        {
          id: "58",
          filename: "",
          filepath: "",
          user_id: "58",
          active: "1",
          email: "AlohaLawnService@yahoo.com",
          password: "fb1e11e44c1e0bdde17c583343794e68d59e3613",
          tokenhash: "",
          activate: "1",
          firstname: "Aloha",
          lastname: "Lawn",
          user_type: "Service Provider",
          phone: "5129861966",
          address: "Austin, TX ",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.268074405540332",
          longitude: "-97.74718523025513",
          state: "",
          zip: "78704",
          country: "",
          username: "alohalawnservice",
          url: null
        },
        {
          id: "59",
          filename: "",
          filepath: "",
          user_id: "59",
          active: "1",
          email: "paws@paws2paws.com",
          password: "fb1e11e44c1e0bdde17c583343794e68d59e3613",
          tokenhash: "",
          activate: "1",
          firstname: "Mama",
          lastname: "Lori",
          user_type: "Service Provider",
          phone: "5126199679",
          address: "Austin, TX ",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.276321016332105",
          longitude: "-97.7501893043518",
          state: "",
          zip: "78704",
          country: "",
          username: "paws2paws",
          url: null
        },
        {
          id: "60",
          filename: "",
          filepath: "",
          user_id: "60",
          active: "1",
          email: "leadingedge5150@gmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "",
          activate: "1",
          firstname: "Ronald ",
          lastname: "Rodriguez",
          user_type: "Service Provider",
          phone: "5126298933",
          address: "197 Jack Rabbit Ln, Buda, TX 78610",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.044268461243295",
          longitude: "-97.81241088308104",
          state: "",
          zip: "78610",
          country: "",
          username: "leadingedge5150",
          url: null
        },
        {
          id: "61",
          filename: "",
          filepath: "",
          user_id: "61",
          active: "1",
          email: "austinautosound@gmail.com",
          password: "2ff433f7f8f2fb174d50f53f30912a54d9fd705f",
          tokenhash: "",
          activate: "1",
          firstname: "Eric",
          lastname: "Ray",
          user_type: "Service Provider",
          phone: "5122973003",
          address: "1014 Castile Rd. Austin TX",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.335443",
          longitude: "-97.86906099999999",
          state: "",
          zip: "78733",
          country: "",
          username: "AustinAutoSound ",
          url: null
        },
        {
          id: "62",
          filename: "",
          filepath: "",
          user_id: "62",
          active: "1",
          email: "ProFleetAuto@gmail.com",
          password: "fb1e11e44c1e0bdde17c583343794e68d59e3613",
          tokenhash: "",
          activate: "1",
          firstname: "James",
          lastname: "Marques ",
          user_type: "Service Provider",
          phone: "5126961250",
          address: "Round Rock",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.510120792823432",
          longitude: "-97.66839952905275",
          state: "",
          zip: "78664",
          country: "",
          username: "ProFleetAuto",
          url: null
        },
        {
          id: "63",
          filename: "",
          filepath: "",
          user_id: "63",
          active: "1",
          email: "aaaustinautoglass@gmail.com",
          password: "fb1e11e44c1e0bdde17c583343794e68d59e3613",
          tokenhash: "",
          activate: "1",
          firstname: "All Around Austin",
          lastname: "Auto Glass ",
          user_type: "Service Provider",
          phone: "5124220553",
          address: "Austin ",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.265915346940048",
          longitude: "-97.74736225605011",
          state: "",
          zip: "78704",
          country: "",
          username: "aaaustinautoglass",
          url: null
        },
        {
          id: "64",
          filename: "",
          filepath: "",
          user_id: "64",
          active: "1",
          email: "info@s-aautobody.com",
          password: "fb1e11e44c1e0bdde17c583343794e68d59e3613",
          tokenhash: "",
          activate: "1",
          firstname: "Saul",
          lastname: "AutoBody",
          user_type: "Service Provider",
          phone: "5129342290",
          address: "1114 Regal Row\r\n",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.14684124702481",
          longitude: "-97.83057644963264",
          state: "",
          zip: "78748",
          country: "",
          username: "s-aautobody",
          url: null
        },
        {
          id: "65",
          filename: "",
          filepath: "",
          user_id: "65",
          active: "1",
          email: "info@shreveauto.com",
          password: "fb1e11e44c1e0bdde17c583343794e68d59e3613",
          tokenhash: "",
          activate: "1",
          firstname: "TD",
          lastname: "Harris ",
          user_type: "Service Provider",
          phone: "5128340708",
          address: "1812 Rutland Dr.",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.37097762062343",
          longitude: "-97.70719349384308",
          state: "",
          zip: "78758",
          country: "",
          username: "shreveauto",
          url: null
        },
        {
          id: "66",
          filename: "amy.jpg",
          filepath: "uploads/Yq6UFj29JcPROnr2015_02_07_13_03_35.jpg",
          user_id: "66",
          active: "0",
          email: "amywolfphoto@gmail.com",
          password: "fb1e11e44c1e0bdde17c583343794e68d59e3613",
          tokenhash: "",
          activate: "1",
          firstname: "Amy",
          lastname: "Wolf",
          user_type: "Service Provider",
          phone: "5127716001",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.255091539397014",
          longitude: "-97.7137166261673",
          state: "",
          zip: "78704",
          country: "",
          username: "amywolfphoto",
          url: null
        },
        {
          id: "68",
          filename: "038a514bc31420cbff45bac3303672a9_large.jpeg",
          filepath: "uploads/hz6JcWm7DZ183Vu2014_12_30_05_50_39.jpeg",
          user_id: "68",
          active: "0",
          email: "nayeem.ahmad@gmail.com",
          password: "93477851451f6583c7efd383e715cb6f8accb804",
          tokenhash: "b6b962369efca9f9acacdc87ce9a31b801143b0e",
          activate: "1",
          firstname: "Nayeem",
          lastname: "Ahmad",
          user_type: "Site User",
          phone: "0124578901",
          address: "82, West Agargaon, Dhaka",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "1216",
          country: "",
          username: "Nayeem",
          url: null
        },
        {
          id: "72",
          filename: "",
          filepath: "",
          user_id: "72",
          active: "1",
          email: "laura@leluxespa.com",
          password: "fb1e11e44c1e0bdde17c583343794e68d59e3613",
          tokenhash: "",
          activate: "1",
          firstname: "Laura",
          lastname: "Caum",
          user_type: "Service Provider",
          phone: "5129542475",
          address: "9725 Anderson Mill Rd.\r\nAustin, TX 78750",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.44706778199646",
          longitude: "-97.79462948441505",
          state: "",
          zip: "78750",
          country: "",
          username: "laura",
          url: null
        },
        {
          id: "73",
          filename: "",
          filepath: "",
          user_id: "73",
          active: "1",
          email: "juanorgado@yahoo.com",
          password: "fb1e11e44c1e0bdde17c583343794e68d59e3613",
          tokenhash: "",
          activate: "1",
          firstname: "Juan",
          lastname: "Orgado",
          user_type: "Service Provider",
          phone: "5126509421",
          address: "Austin, TX",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.269473598418873",
          longitude: "-97.7495938539505",
          state: "",
          zip: "78704",
          country: "",
          username: "juanorgado",
          url: null
        },
        {
          id: "76",
          filename: "",
          filepath: "",
          user_id: "76",
          active: "1",
          email: "ahsan.kabeer@broadcom.com",
          password: "fb1e11e44c1e0bdde17c583343794e68d59e3613",
          tokenhash: "059e1f81e82a34e9a9576aaf07e1bf2ac8ce9e01",
          activate: "1",
          firstname: "Ahsan",
          lastname: "Kabeer",
          user_type: "Site User",
          phone: "5126524541",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78738",
          country: "",
          username: "ahsan.kabeer",
          url: null
        },
        {
          id: "77",
          filename: "",
          filepath: "",
          user_id: "77",
          active: "1",
          email: "masum@bahok.com",
          password: "2895773068017509e59c3c0b1df245821185b8e8",
          tokenhash: "79b84db6bba08b0cd6ab04b69973ee5ee40b1f15",
          activate: "1",
          firstname: "Masum",
          lastname: "Kabir",
          user_type: "Site User",
          phone: "5125351310",
          address: "Austin, TX",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.27372581739761",
          longitude: "-97.74474487246096",
          state: "",
          zip: "78704",
          country: "",
          username: "masum",
          url: null
        },
        {
          id: "80",
          filename: "",
          filepath: "",
          user_id: "80",
          active: "1",
          email: "mishadavidson1@gmail.com",
          password: "fb1e11e44c1e0bdde17c583343794e68d59e3613",
          tokenhash: "",
          activate: "1",
          firstname: "Misha",
          lastname: "Davidson",
          user_type: "Service Provider",
          phone: "5123874327",
          address: "Austin, TX",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.265982644342508",
          longitude: "-97.73939303862312",
          state: "",
          zip: "78704",
          country: "",
          username: "mishadavidson1",
          url: null
        },
        {
          id: "81",
          filename: "",
          filepath: "",
          user_id: "81",
          active: "1",
          email: "macman@poormansfortune.com",
          password: "fb1e11e44c1e0bdde17c583343794e68d59e3613",
          tokenhash: "",
          activate: "1",
          firstname: "Larry",
          lastname: "Rone",
          user_type: "Service Provider",
          phone: "5126894584",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.26991837078589",
          longitude: "-97.74204075336456",
          state: "",
          zip: "78701",
          country: "",
          username: "macman",
          url: null
        },
        {
          id: "82",
          filename: "",
          filepath: "",
          user_id: "82",
          active: "1",
          email: "service@computerproaustin.com",
          password: "fb1e11e44c1e0bdde17c583343794e68d59e3613",
          tokenhash: "",
          activate: "1",
          firstname: "Jonathan",
          lastname: "DeMayo",
          user_type: "Service Provider",
          phone: "5124534948",
          address: "P.O. Box 1388 Austin, TX 78767-1388",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.27",
          longitude: "-97.74000000000001",
          state: "",
          zip: "78767",
          country: "",
          username: "computerproaustin",
          url: null
        },
        {
          id: "83",
          filename: "",
          filepath: "",
          user_id: "83",
          active: "1",
          email: "Hwofirecomputers@gmail.com",
          password: "fb1e11e44c1e0bdde17c583343794e68d59e3613",
          tokenhash: "",
          activate: "1",
          firstname: "Hwofire",
          lastname: "Computers",
          user_type: "Service Provider",
          phone: "5122718909",
          address:
            "13419 East Highway 290, Building 9 Unit A, Manor, Texas 78653",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.347415",
          longitude: "-97.51548100000002",
          state: "",
          zip: "78653",
          country: "",
          username: "Hwofirecomputers",
          url: null
        },
        {
          id: "84",
          filename: "",
          filepath: "",
          user_id: "84",
          active: "1",
          email: "peteatx02@gmail.com",
          password: "fb1e11e44c1e0bdde17c583343794e68d59e3613",
          tokenhash: "",
          activate: "1",
          firstname: "Peter",
          lastname: "Saldana",
          user_type: "Site User",
          phone: "(512) 535-8966",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.1797094",
          longitude: "-97.6141149",
          state: "",
          zip: "78617",
          country: "",
          username: "peteatx02",
          url: null
        },
        {
          id: "86",
          filename: "",
          filepath: "",
          user_id: "86",
          active: "1",
          email: "autorepair655@hotmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "",
          activate: "1",
          firstname: "John",
          lastname: "Aki",
          user_type: "Service Provider",
          phone: "5128083565",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.5082551",
          longitude: "-97.67889600000001",
          state: "",
          zip: "78664",
          country: "",
          username: "autorepair655",
          url: null
        },
        {
          id: "87",
          filename: "",
          filepath: "",
          user_id: "87",
          active: "1",
          email: "info@amazingautorepair.net",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "",
          activate: "1",
          firstname: "Amazing",
          lastname: "Auto",
          user_type: "Service Provider",
          phone: "5123838000",
          address: "1601 Hydro Dr",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.4281801",
          longitude: "-97.6760731",
          state: "",
          zip: "78728",
          country: "",
          username: "amazingautorepair",
          url: null
        },
        {
          id: "88",
          filename: "",
          filepath: "",
          user_id: "88",
          active: "1",
          email: "captkirkslawn@hotmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "",
          activate: "1",
          firstname: "Kirk",
          lastname: "Kendrick",
          user_type: "Service Provider",
          phone: "5126507720",
          address: "P.O. Box 153004\r\nAustin, TX 78715",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.21",
          longitude: "-97.80000000000001",
          state: "",
          zip: "78715",
          country: "",
          username: "captkirkslawn",
          url: null
        },
        {
          id: "89",
          filename: "habib.png",
          filepath: "uploads/58Q17daWjpczRJv2014_12_30_04_32_59.png",
          user_id: "89",
          active: "1",
          email: "dayeebanda@gmail.com",
          password: "ac5794a0373561678416700db12af1cece456465",
          tokenhash: "",
          activate: "1",
          firstname: "habib",
          lastname: "rahman",
          user_type: "Site User",
          phone: "0165875245",
          address: "",
          city: "",
          state_id: "16",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "34.0522342",
          longitude: "-118.2436849",
          state: "",
          zip: "12007",
          country: "",
          username: "habib",
          url: null
        },
        {
          id: "90",
          filename: "",
          filepath: "",
          user_id: "90",
          active: "1",
          email: "paul.paul.thomson@gmail.com",
          password: "97c3ed02c7afbdb31fe79da095b52db915772287",
          tokenhash: "9ee3cfd94d461e84911c36becdeb0044affe6224",
          activate: "1",
          firstname: "Paul",
          lastname: "Thomson",
          user_type: "Site User",
          phone: "4086054414",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.2979843",
          longitude: "-97.80195149999997",
          state: "",
          zip: "78746",
          country: "",
          username: "Paul.Thomson",
          url: null
        },
        {
          id: "91",
          filename: "ben.jpg",
          filepath: "uploads/CNyI1zmrTxeO34l2015_01_04_19_33_36.jpg",
          user_id: "91",
          active: "1",
          email: "benmettin@gmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "",
          activate: "1",
          firstname: "Ben",
          lastname: "Mettin",
          user_type: "Service Provider",
          phone: "5128502701",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.246284732067675",
          longitude: "-97.76290029287338",
          state: "",
          zip: "78704",
          country: "",
          username: "benmettin",
          url: null
        },
        {
          id: "92",
          filename: "",
          filepath: "",
          user_id: "92",
          active: "1",
          email: "strikingphotographyatx@gmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "",
          activate: "1",
          firstname: "Nick",
          lastname: "Milazzo",
          user_type: "Service Provider",
          phone: "5126383733",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.267153",
          longitude: "-97.74306079999997",
          state: "",
          zip: "78704",
          country: "",
          username: "strikingphotographyatx",
          url: null
        },
        {
          id: "93",
          filename: "",
          filepath: "",
          user_id: "93",
          active: "1",
          email: "Lsandi@hotmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "",
          activate: "1",
          firstname: "Sandy",
          lastname: "Sandy",
          user_type: "Service Provider",
          phone: "5128098561",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.51481322861403",
          longitude: "-97.6627055131836",
          state: "",
          zip: "78664",
          country: "",
          username: "Lsandi",
          url: null
        },
        {
          id: "94",
          filename: "",
          filepath: "",
          user_id: "94",
          active: "1",
          email: "charles@charlesamusic.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "",
          activate: "1",
          firstname: "Charles",
          lastname: "Anastasiou",
          user_type: "Service Provider",
          phone: "6176500285",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.267153",
          longitude: "-97.74306079999997",
          state: "",
          zip: "78704",
          country: "",
          username: "charles",
          url: null
        },
        {
          id: "95",
          filename: "",
          filepath: "",
          user_id: "95",
          active: "1",
          email: "jeff_denning@hotmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "",
          activate: "1",
          firstname: "Jeff",
          lastname: "Denning",
          user_type: "Service Provider",
          phone: "5125694489",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.267153",
          longitude: "-97.74306079999997",
          state: "",
          zip: "78704",
          country: "",
          username: "jeff_denning",
          url: null
        },
        {
          id: "96",
          filename: "",
          filepath: "",
          user_id: "96",
          active: "1",
          email: "keith.romel@gmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "",
          activate: "1",
          firstname: "Keith",
          lastname: "Romel",
          user_type: "Service Provider",
          phone: "5127733131",
          address: "2900 Manor Road, #3163\r\nAustin, Texas 78722",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.286438",
          longitude: "-97.71047699999997",
          state: "",
          zip: "78722",
          country: "",
          username: "keith.romel",
          url: null
        },
        {
          id: "98",
          filename: "",
          filepath: "",
          user_id: "98",
          active: "0",
          email: "shadek@lemonoapps.com",
          password: "3b98344ac9a0b4d9dc2aa27d55b80825d575a0dc",
          tokenhash: "80abe98740293470409de95680e5fefcb35fa3a4",
          activate: "0",
          firstname: "shadekur",
          lastname: "lemono",
          user_type: "Site User",
          phone: "5123333444",
          address: "austin",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.249851712695815",
          longitude: "-97.74776840209961",
          state: "",
          zip: "1212",
          country: "",
          username: "shadekLemono",
          url: null
        },
        {
          id: "99",
          filename: "erin.jpg",
          filepath: "uploads/lx9yidKFQ3ZzbA12015_02_11_18_31_43.jpg",
          user_id: "99",
          active: "1",
          email: "info@etaylorphotography.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "eae8c5b272812cc24640ad1906fc6f716253320f",
          activate: "0",
          firstname: "Erin",
          lastname: "Taylor",
          user_type: "Site User",
          phone: "3409981681",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78741",
          country: "",
          username: "etaylorphotography",
          url: null
        },
        {
          id: "102",
          filename: "",
          filepath: "",
          user_id: "102",
          active: "1",
          email: "trxcustomcar89@gmail.com",
          password: "f86fb96952fa46cb4f7fe3a6ebf4367d0aa1ab69",
          tokenhash: "cca84d824099bf5643c2acabe39741a950db5dd1",
          activate: "1",
          firstname: "Txr ",
          lastname: "customcar",
          user_type: "Site User",
          phone: "5124522170",
          address: "6546 Burnet Road",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78757",
          country: "",
          username: "txrcustomcaraudio",
          url: null
        },
        {
          id: "103",
          filename: "",
          filepath: "",
          user_id: "103",
          active: "1",
          email: "joe.nathan.soriano@gmail.com",
          password: "ef4f020d058c9084b8ee2f9f2f37ded8a1b0317a",
          tokenhash: "5109df8a6fc9c0aa32a6975442a3fb29d5c855eb",
          activate: "1",
          firstname: "Nathan",
          lastname: "XD",
          user_type: "Site User",
          phone: "9279231179",
          address:
            "(305) 467-5523(305) 467-5523(305) 467-5523(305) 467-5523(305) 467-5523",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "32771",
          country: "",
          username: "jzeroe",
          url: null
        },
        {
          id: "104",
          filename: "",
          filepath: "",
          user_id: "104",
          active: "1",
          email: "austinroofingservice@gmail.com",
          password: "6b29e1851883343dc84ce8147a481c10bf82dd63",
          tokenhash: "8ff6325a0f836a5716ffaefc8258166fac3a96d2",
          activate: "0",
          firstname: "brad",
          lastname: "davidson",
          user_type: "Service Provider",
          phone: "5129983000",
          address: "21401 lonesome ct leander tx 78641",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78641",
          country: "",
          username: "atxroofingservices",
          url: null
        },
        {
          id: "105",
          filename: "",
          filepath: "",
          user_id: "105",
          active: "1",
          email: "subadmin@gmail.com",
          password: "7be6a291d44b6ce9ccc2b247fc95940cb3bf69b1",
          tokenhash: "44451ddbd1c39770f0ea481d0bb28dab82787d6e",
          activate: "1",
          firstname: "sub",
          lastname: "admin",
          user_type: "Site User",
          phone: "1234567890",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "1243",
          country: "",
          username: "subadmin",
          url: null
        },
        {
          id: "106",
          filename: "",
          filepath: "",
          user_id: "106",
          active: "1",
          email: "ctr@gmail.com",
          password: "d78cd3bfcb3a831f2fac74c3974bd5246029668f",
          tokenhash: "06a4e73423616c8a71553a0dd54e151ec7b00860",
          activate: "1",
          firstname: "ctr",
          lastname: "_user",
          user_type: "Site User",
          phone: "1234567890",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "10",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "1216",
          country: "",
          username: "ctr_user",
          url: null
        },
        {
          id: "107",
          filename: "",
          filepath: "",
          user_id: "107",
          active: "1",
          email: "user_ctr@gmail.com",
          password: "d78cd3bfcb3a831f2fac74c3974bd5246029668f",
          tokenhash: "1426ace04c73ae5804656a20cad8ede9205a7cb6",
          activate: "1",
          firstname: "user",
          lastname: "ctr",
          user_type: "Site User",
          phone: "1234567890",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "3456",
          country: "",
          username: "ctr_user",
          url: null
        },
        {
          id: "108",
          filename: "",
          filepath: "",
          user_id: "108",
          active: "1",
          email: "jeslyn92013@icloud.com",
          password: "97cc1f1b8364c647c8744017ad94bab7009dae10",
          tokenhash: "3eff4795d760d5ee70045ac2c5d5def800fb320a",
          activate: "1",
          firstname: "Tony ",
          lastname: "Rios",
          user_type: "Site User",
          phone: "5125143748",
          address: "2302 e William cannon",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78744",
          country: "",
          username: "Tonyrios",
          url: null
        },
        {
          id: "109",
          filename: "",
          filepath: "",
          user_id: "109",
          active: "1",
          email: "ahsan@catchthereview.com",
          password: "97c3ed02c7afbdb31fe79da095b52db915772287",
          tokenhash: "22eff7a2b8a522ac5eb2e661d147ad46d464b4cd",
          activate: "1",
          firstname: "Ahsan",
          lastname: "Kabeer",
          user_type: "Site User",
          phone: "5122032465",
          address: "112 Sebastians Run",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78738",
          country: "",
          username: "ahsanctr",
          url: null
        },
        {
          id: "111",
          filename: "",
          filepath: "",
          user_id: "111",
          active: "1",
          email: "abel062855@aol.com",
          password: "d10c908235b33938f059e42bf3d0e0ee68a814f8",
          tokenhash: "e93c1125f0915e43be5a86f63bf6d4696f453c52",
          activate: "1",
          firstname: "Albert",
          lastname: "Bellard",
          user_type: "Site User",
          phone: "5124699550",
          address: "1901 Edgeware Drive\r\n",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78704",
          country: "",
          username: "JAB",
          url: null
        },
        {
          id: "112",
          filename: "",
          filepath: "",
          user_id: "112",
          active: "1",
          email: "reinkeadriana@gmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "254a9dc3331523587dc47304775df64e4d6c6608",
          activate: "0",
          firstname: "Adriana",
          lastname: "Reinke",
          user_type: "Site User",
          phone: "5127699267",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78704",
          country: "",
          username: "reinkeadriana",
          url: null
        },
        {
          id: "113",
          filename: "",
          filepath: "",
          user_id: "113",
          active: "1",
          email: "deltahomeandc@gmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "d9198585ddd7b64442ad35c283c077614016d7ab",
          activate: "0",
          firstname: "Ryan",
          lastname: "Ryan",
          user_type: "Service Provider",
          phone: "5128080342",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78704",
          country: "",
          username: "deltahomeandc",
          url: null
        },
        {
          id: "114",
          filename: "",
          filepath: "",
          user_id: "114",
          active: "1",
          email: "nafiul.cse08@gmail.com",
          password: "273a37475aca2b547a409e8a032a758dd12d6644",
          tokenhash: "b9959181bae88eec5a08ca66b173c922c80b5fbe",
          activate: "1",
          firstname: "nafiul",
          lastname: "cse",
          user_type: "Service Provider",
          phone: "1234567890",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.253024872029773",
          longitude: "-97.75530695915222",
          state: "",
          zip: "1234",
          country: "",
          username: "nafiul",
          url: null
        },
        {
          id: "115",
          filename: "",
          filepath: "",
          user_id: "115",
          active: "1",
          email: "nazmul0050@gmail.com",
          password: "4b7393b3511e7b70221fcba1b35a3b20dc57154b",
          tokenhash: "246dd90452b9eed2553c9e577b972e7d0711958d",
          activate: "1",
          firstname: "hasan",
          lastname: "lemono",
          user_type: "Service Provider",
          phone: "1234567890",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "1234",
          country: "",
          username: "hasan",
          url: null
        },
        {
          id: "116",
          filename: "",
          filepath: "",
          user_id: "116",
          active: "1",
          email: "info@aceroofingtexas.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "3e2b2270030ffc12323a4fde4bfd8c5621567e84",
          activate: "0",
          firstname: "Ace",
          lastname: "Roofing ",
          user_type: "Service Provider",
          phone: "5128367663",
          address: "9705 Burnet Road\r\nSuite 415\r\nAustin, TX 78758",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.3805358",
          longitude: "-97.72425069999997",
          state: "",
          zip: "78758",
          country: "",
          username: "aceroofingtexas",
          url: null
        },
        {
          id: "117",
          filename: "IMG_0507.jpg",
          filepath: "uploads/6wDfLsKi95VB3GX2016_05_18_16_01_18.jpg",
          user_id: "117",
          active: "1",
          email: "sandra@elegantchoicerealty.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash:
            "4b6792ada471d0b16f256e598fbb321dd22d9be5c21c28be703a7829bbdd4ef99efe34405d6d5f3c00a842b15387d8de5e27d2a88bb3c8f5efde021ba9e33478",
          activate: "1",
          firstname: "Sandra",
          lastname: "Riojas",
          user_type: "Service Provider",
          phone: "5126320591",
          address: "10200 Salida Dr.\r\nAustin TX 78749",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78749",
          country: "",
          username: "Sandra Riojas",
          url: null
        },
        {
          id: "119",
          filename: "",
          filepath: "",
          user_id: "119",
          active: "0",
          email: "bhills_9172@mailinator.com",
          password: "0c4a515c5ff4266603884d0c82c6ebd04603ec17",
          tokenhash: "a66df261120b6c2311c6ef0b1bab4e583afcbcc0",
          activate: "0",
          firstname: "test",
          lastname: "test",
          user_type: "Service Provider",
          phone: "3105559172",
          address:
            "Kfefrc lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          city: "",
          state_id: "35",
          country_id: "9",
          city_id: "10",
          default_city: "0",
          latitude: "30.250772803825555",
          longitude: "-97.73890525102615",
          state: "",
          zip: "78906",
          country: "",
          username: "test",
          url: null
        },
        {
          id: "120",
          filename: "",
          filepath: "",
          user_id: "120",
          active: "1",
          email: "tuhin.islam16@yahoo.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "2c7c76fe692366ba93a56d4da5ccbad3fbbd2826",
          activate: "0",
          firstname: "Tuhin",
          lastname: "Islam",
          user_type: "Service Provider",
          phone: "5125351310",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78735",
          country: "",
          username: "tuhin.islam16",
          url: null
        },
        {
          id: "121",
          filename: "",
          filepath: "",
          user_id: "121",
          active: "0",
          email: "google@testgoogle.com",
          password: "a39777b9eab4620dcea72c574c5f17341a639c9f",
          tokenhash: "42f468d67110bb86a94bbc1681ea3934785e5f9e",
          activate: "0",
          firstname: "Google",
          lastname: "Google",
          user_type: "Site User",
          phone: "5688976543",
          address: "This is a google test for Adwords Conversion tracking.",
          city: "",
          state_id: "35",
          country_id: "9",
          city_id: "10",
          default_city: "0",
          latitude: "30.247065583237724",
          longitude: "-97.76507824659348",
          state: "",
          zip: "40150",
          country: "",
          username: "Google",
          url: null
        },
        {
          id: "122",
          filename: "",
          filepath: "",
          user_id: "122",
          active: "0",
          email: "njviebrock@yahoo.com",
          password: "8ce6868ee27beb5264063be2b566c8e2a9721aea",
          tokenhash: "241197b4e0647ea698999ab9b329396b536fde19",
          activate: "0",
          firstname: "Nick",
          lastname: "Viebrock",
          user_type: "Site User",
          phone: "9083421822",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78704",
          country: "",
          username: "Nick1991",
          url: null
        },
        {
          id: "126",
          filename: "",
          filepath: "",
          user_id: "126",
          active: "0",
          email: "nafiul@lemonoapps.com",
          password: "89a7fbeda4aeee8df32cec81e5d0a5105df43c3e",
          tokenhash: "",
          activate: "0",
          firstname: "na",
          lastname: "fi",
          user_type: "Site User",
          phone: "1234567890",
          address: "",
          city: "",
          state_id: "1",
          country_id: "1",
          city_id: "1",
          default_city: "0",
          latitude: "23.810332",
          longitude: "90.41251809999994",
          state: "",
          zip: "1207",
          country: "",
          username: "nafiul",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "129",
          active: "1",
          email: "shaznush@yahoo.com",
          password: "b72907603df5943d4cdb503d54a718bf11b78b4f",
          tokenhash: "04386e3a379c8293bb1d37c4ad5d6bb95dd1c6fc",
          activate: "1",
          firstname: "shaznush",
          lastname: "wali",
          user_type: "Service Provider",
          phone: "1234567890",
          address: "mirpur pallabi",
          city: "",
          state_id: "1",
          country_id: "1",
          city_id: "1",
          default_city: "1",
          latitude: "23.8231074",
          longitude: "90.35894890000009",
          state: "",
          zip: "1216",
          country: "",
          username: "shaznush",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "130",
          active: "0",
          email: "dentmagic25@gmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "2052638673e4050f0a0e3dc3d473fabfb02e9d33",
          activate: "0",
          firstname: "Zeke",
          lastname: "Zeke",
          user_type: "Site User",
          phone: "5125933371",
          address: "12900 Coriander Dr",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "0",
          latitude: "30.450939",
          longitude: "-97.768261",
          state: "",
          zip: "78729",
          country: "",
          username: "dentmagic25",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "131",
          active: "1",
          email: "ranabd36@gmail.com",
          password: "ac79263fabb30a491b40bf364d2caf34d78de7a5",
          tokenhash: "5f81f91e9053f4f82cc2569c327790c0efa82b48",
          activate: "1",
          firstname: "Moh. Ibrahim Al Naz ",
          lastname: "Rana",
          user_type: "Site User",
          phone: "1715418050",
          address: "Dhaka, Bangladesh",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.269307428114956",
          longitude: "-97.74575614719652",
          state: "",
          zip: "45656",
          country: "",
          username: "Ibrahim",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "132",
          active: "0",
          email: "Salvador.Ramirezz@gmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "a0119de16a028661aac742db09befb56e8414cdb",
          activate: "0",
          firstname: "Salvador",
          lastname: "Ramirez",
          user_type: "Service Provider",
          phone: "5122940711",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78704",
          country: "",
          username: "Salvador.Ramirezz",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "133",
          active: "0",
          email: "paezman45@gmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "adf631b47fbfc890699062deea88d29b41230247",
          activate: "0",
          firstname: "Paez",
          lastname: "Man",
          user_type: "Service Provider",
          phone: "5122992703",
          address: "12013 Hwy 290, W-3 ",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.2106375",
          longitude: "-97.96937109999999",
          state: "",
          zip: "78737",
          country: "",
          username: "paezman45",
          url: null
        },
        {
          id: null,
          filename: "362180.jpg",
          filepath: "uploads/u9rIy1jcMxYh4iw2015_09_21_16_33_40.jpg",
          user_id: "134",
          active: "0",
          email: "COLLEGECLEANER@GMAIL.COM",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "83fe9d89ac35ebc5f26eee484fb98245dd39bbbd",
          activate: "0",
          firstname: "College ",
          lastname: "Cleaner ",
          user_type: "Service Provider",
          phone: "5127744174",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78704",
          country: "",
          username: "COLLEGECLEANER",
          url: null
        },
        {
          id: null,
          filename: "DSC_5016.jpg",
          filepath: "uploads/AdbtG9Kh3R7zF4g2015_09_23_15_31_02.jpg",
          user_id: "135",
          active: "1",
          email: "chhangscleaningservices@gmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "1da40e221344d9dbdd53702551ad7faa7ec5189d",
          activate: "1",
          firstname: "Chhang",
          lastname: "Chhang",
          user_type: "Service Provider",
          phone: "5126882414",
          address:
            "12233 RR 620 N STE 106, RM 21 , Austin Texas United States 78750",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.3954913",
          longitude: "-97.92331409999997",
          state: "",
          zip: "78750",
          country: "",
          username: "chhangscleaningservices",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "136",
          active: "0",
          email: "nickcbillman@yahoo.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "284d5a87d57d54ad524c9edc3855de54e13d75e9",
          activate: "0",
          firstname: "Nick",
          lastname: "Billman",
          user_type: "Service Provider",
          phone: "9569006137",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.099494495002695",
          longitude: "-97.4965100581665",
          state: "",
          zip: "78612",
          country: "",
          username: "nickcbillman",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "137",
          active: "0",
          email: "junkstarsaustin@gmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "090ce2aa837942f74c418413ba3849bf29cdd464",
          activate: "0",
          firstname: "JunkStars",
          lastname: "Austin",
          user_type: "Service Provider",
          phone: "5125899127",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78704",
          country: "",
          username: "junkstarsaustin",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "138",
          active: "0",
          email: "WEIRDFLOORS@gmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "bb44d84e2016fe520bf07ede0977846c2c6a6984",
          activate: "1",
          firstname: "Ryan",
          lastname: "WEIRDFLOORS",
          user_type: "Service Provider",
          phone: "5129096082",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78704",
          country: "",
          username: "WEIRDFLOORS",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "139",
          active: "1",
          email: "segura1024@yahoo.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "c4b67f52c1faa443839899b81a71d7deaac1c673",
          activate: "1",
          firstname: "Rafael",
          lastname: "Segura",
          user_type: "Service Provider",
          phone: "5125843274",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78744",
          country: "",
          username: "segura1024",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "140",
          active: "1",
          email: "Dbdavebee@gmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "a745859e442e6641ccf26829b3fba90d57a59a9c",
          activate: "1",
          firstname: "DB",
          lastname: "Dave",
          user_type: "Service Provider",
          phone: "3477856992",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78732",
          country: "",
          username: "Dbdavebee",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "141",
          active: "0",
          email: "lando_shepard@yahoo.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "8a43e13819f7129d81a3c4fff86632fb701bed01",
          activate: "0",
          firstname: "Lando",
          lastname: "Shepard",
          user_type: "Service Provider",
          phone: "5123174846",
          address: "11900 Metric Boulevard, Austin, TX, United States 78758",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.4002355",
          longitude: "-97.70417299999997",
          state: "",
          zip: "78758",
          country: "",
          username: "lando_shepard",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "142",
          active: "1",
          email: "homesolutions78613@gmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "085a08d704aae98cf28687017002a815024159d2",
          activate: "1",
          firstname: "Austin",
          lastname: "Handyman",
          user_type: "Service Provider",
          phone: "5127014610",
          address: "202 Walton Way Ste. 192-171\r\nCedar Park Tx, 78613",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.521498",
          longitude: "-97.83216299999998",
          state: "",
          zip: "78613",
          country: "",
          username: "homesolutions78613",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "143",
          active: "0",
          email: "misskpaine@gmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "2168103ae1a75a403649bf08196dba10c00ac9dc",
          activate: "0",
          firstname: "Kathryn",
          lastname: "Paine ",
          user_type: "Service Provider",
          phone: "5127172245",
          address: "51 Jan Lane, Georgetown, TX, United States",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.629551",
          longitude: "-97.65535190000003",
          state: "",
          zip: "78626",
          country: "",
          username: "misskpaine",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "144",
          active: "0",
          email: "arielscleaningservice@yahoo.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "b98eeae28ab97c2278f4e76655e3488f8df5ea36",
          activate: "0",
          firstname: "Ariel ",
          lastname: "Ariel ",
          user_type: "Service Provider",
          phone: "5125880387",
          address: "13187 RESEARCH BLVD, AUSTIN, TX, 78729",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.4420953",
          longitude: "-97.78241259999999",
          state: "",
          zip: "78729",
          country: "",
          username: "arielscleaningservice",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "145",
          active: "0",
          email: "sunrisecontructiontx@yahoo.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "812e492c9523a040129dfeb9b6e788e284a79bed",
          activate: "0",
          firstname: "James ",
          lastname: "Hart ",
          user_type: "Service Provider",
          phone: "5124972547",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.346943445489195",
          longitude: "-97.76092777406615",
          state: "",
          zip: "78731",
          country: "",
          username: "sunrisecontructiontx",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "146",
          active: "0",
          email: "austinrockpools@gmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "511e68f87d36b22a49e5728c2a5e8af55191a4aa",
          activate: "0",
          firstname: "Michael ",
          lastname: "Ray",
          user_type: "Service Provider",
          phone: "5129451626",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78704",
          country: "",
          username: "austinrockpools",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "147",
          active: "0",
          email: "austintreeteam@gmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "70b32033bea721e2fd5111338af6c9e87ef19e1b",
          activate: "0",
          firstname: "Tree",
          lastname: "Team",
          user_type: "Service Provider",
          phone: "5129030182",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78704",
          country: "",
          username: "austintreeteam",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "148",
          active: "0",
          email: "Jlanders8@Gmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "12884ebfb1388cb34965bd5a3a016fe8a6e97e81",
          activate: "0",
          firstname: "Joe",
          lastname: "Landers",
          user_type: "Service Provider",
          phone: "5127751500",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78704",
          country: "",
          username: "Jlanders8",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "149",
          active: "0",
          email: "jlandservice@gmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "d4ffaf5ce6bc78acfef531aef66e1705bc240c3e",
          activate: "0",
          firstname: "Juan",
          lastname: "Aviles ",
          user_type: "Service Provider",
          phone: "5125914122",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78664",
          country: "",
          username: "jlandservice",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "150",
          active: "1",
          email: "Heather@justrightcleaningaustin.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "0eded0872cbbf5f725ff67d039f2624efc69f219",
          activate: "0",
          firstname: "Heather ",
          lastname: "Heather ",
          user_type: "Site User",
          phone: "(512) 705-0727",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78717",
          country: "",
          username: "Heather",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "151",
          active: "1",
          email: "annur@solarbd.com",
          password: "a3272d330b16c0346cbcca5d4f58f9f4259143c9",
          tokenhash: "b5d444ad19973a579d231d01f07791dba7884a14",
          activate: "1",
          firstname: "Annur ",
          lastname: "Rahman",
          user_type: "Admin",
          phone: "1819282014",
          address: "",
          city: "",
          state_id: "1",
          country_id: "1",
          city_id: "1",
          default_city: "1",
          latitude: "23.7",
          longitude: "90.375",
          state: "",
          zip: "1205",
          country: "",
          username: "annur",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "152",
          active: "1",
          email: "asad@solarbd.com",
          password: "a3272d330b16c0346cbcca5d4f58f9f4259143c9",
          tokenhash: "a245ac4e8d8cc4a04baf5d669440bbfa046c9861",
          activate: "1",
          firstname: "Asad",
          lastname: "Uzzaman",
          user_type: "Admin",
          phone: "1819282014",
          address: "",
          city: "",
          state_id: "1",
          country_id: "1",
          city_id: "1",
          default_city: "8",
          latitude: "23.7",
          longitude: "90.375",
          state: "",
          zip: "1205",
          country: "",
          username: "asad",
          url: null
        },
        {
          id: null,
          filename: "IMG_0003.jpg",
          filepath: "uploads/BJ21zj3wlFNOZmS2015_10_13_08_01_28.jpg",
          user_id: "153",
          active: "0",
          email: "porosh036@gmail.com",
          password: "3948b2dca1613bea88fdd29faf38cd5dac3e904e",
          tokenhash: "3a815debc7d15f70f48481d3046ee8bb1f8933ff",
          activate: "1",
          firstname: "Ashraf",
          lastname: "Porosh",
          user_type: "Site User",
          phone: "1711065958",
          address: "Agargaon",
          city: "",
          state_id: "1",
          country_id: "1",
          city_id: "43",
          default_city: "8",
          latitude: "23.7750654",
          longitude: "90.37391330000003",
          state: "",
          zip: "1207",
          country: "",
          username: "Ashraf",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "155",
          active: "0",
          email: "jakir44.du@gmail.com",
          password: "2532ba9cebad8fee5bc039bf9c3b829e0989203d",
          tokenhash: "26526ca7d9b7a859df086cb987aa96ab59f45031",
          activate: "0",
          firstname: "Jakir",
          lastname: "Hossain",
          user_type: "Site User",
          phone: "1712467547",
          address: "fasdf ",
          city: "",
          state_id: "1",
          country_id: "1",
          city_id: "43",
          default_city: "0",
          latitude: "30.248813695299727",
          longitude: "-97.76253128051758",
          state: "",
          zip: "1207",
          country: "",
          username: "jakir",
          url: "www.facebook.com"
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "156",
          active: "1",
          email: "marc@buenavistaproperties.net",
          password: "89a688d5e3fb319550cc4641164abbd5b87016a5",
          tokenhash: "",
          activate: "1",
          firstname: "Marc",
          lastname: "Contreras",
          user_type: "Service Provider",
          phone: "5127892779",
          address: "223 W. Anderson Lane Ste. A140",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.34410069999999",
          longitude: "-97.7072038",
          state: "",
          zip: "78752",
          country: "",
          username: "marc",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "157",
          active: "0",
          email: "info@aladdindoorsaustin.com",
          password: "7bfe3067f253cda7400f6119cd2db1f8708b96d0",
          tokenhash: "a1a23118d8e14be0455993c7ee9b59f68218e1c4",
          activate: "1",
          firstname: "Chris",
          lastname: "Henningsen",
          user_type: "Service Provider",
          phone: "5129314298",
          address: "13740 N Highway 183, Ste N2-D",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78750",
          country: "",
          username: "cjhenningsen",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "158",
          active: "1",
          email: "asd@asd.com",
          password: "fec4d00842b5376cc36c392739dcb7c2606ce96b",
          tokenhash: "6f006abffadcb036aa6a7a97209bfb6605135308",
          activate: "0",
          firstname: "asd",
          lastname: "asd",
          user_type: "Site User",
          phone: "1233246556",
          address: "asd",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "24",
          default_city: "0",
          latitude: "30.268713774296828",
          longitude: "-97.7555564045906",
          state: "",
          zip: "12343",
          country: "",
          username: "asd",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "159",
          active: "1",
          email: "syed.kutubahmed@yahoo.com",
          password: "02fda7cb4fef49f9bf759c552645c065ea62bc0f",
          tokenhash: "7bb8d9e60130e39f6941939972877be8d5fe7500",
          activate: "1",
          firstname: "Syed",
          lastname: "Ahmed",
          user_type: "Site User",
          phone: "7012000056",
          address: "1602 Newton St, Austin, TX 78704, USA",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.248353",
          longitude: "-97.75284899999997",
          state: "",
          zip: "78624",
          country: "",
          username: "Amaya",
          url: null
        },
        {
          id: null,
          filename: "LBjbqhEJ4gnR3Kz1512061259fl.jpg",
          filepath: "uploads/LBjbqhEJ4gnR3Kz1512061259fl.jpg",
          user_id: "166",
          active: "1",
          email: "ahsan.kabeer@mediatek.com",
          password: "f7296accfa80d3bb2e6d2b6a5ffa34d53297c080",
          tokenhash: "c54856aadebd4e913dd28acc6b9a73bd1eaf2788",
          activate: "1",
          firstname: "Ahsan",
          lastname: "Kabeer",
          user_type: "Service Provider",
          phone: "5125723073",
          address: "5914 W Courtyard Dr, Austin, TX, United States",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.353668",
          longitude: "-97.79693279999998",
          state: "",
          zip: "78730",
          country: "",
          username: "Ahsan.Kabeer",
          url: null
        },
        {
          id: null,
          filename: "IBzpGJijkRwUD971517255089480_alamp.jpg",
          filepath: "uploads/IBzpGJijkRwUD971517255089480_alamp.jpg",
          user_id: "167",
          active: "1",
          email: "ctrtest@yahoo.com",
          password: "a9fe3e50ce0968dadd112846295badf61ea66588",
          tokenhash: "06c87f587c866ae2e2e771f92b18c9fcb9ef7768",
          activate: "1",
          firstname: "ctr",
          lastname: "test",
          user_type: "Site User",
          phone: "5127726875",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78730",
          country: "",
          username: "ctrtest",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "168",
          active: "1",
          email: "gmcantu50@gmail.com",
          password: "f0a3e103e5778522d6fdbfc2f54c684d35cb31aa",
          tokenhash: "eb3cfee4474928f45eeca53c26ca3b28125324ea",
          activate: "0",
          firstname: "Margarita",
          lastname: "Rentals",
          user_type: "Site User",
          phone: "5128441948",
          address: "101 Edison Dr",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.5345404",
          longitude: "-97.55358619999998",
          state: "",
          zip: "78634",
          country: "",
          username: "margaritarentals ",
          url: null
        },
        {
          id: null,
          filename: "T3SBYXV5rzEJ1p81520233274Logo.png",
          filepath: "uploads/T3SBYXV5rzEJ1p81520233274Logo.png",
          user_id: "169",
          active: "1",
          email: "southlaketxroofingpro@gmail.com",
          password: "10d01bcf0acd75a54ced709b45026d035a4c2258",
          tokenhash: "23aa05f54f84f4cc4bfd47e876082555ff655ea2",
          activate: "1",
          firstname: "Adam",
          lastname: "Hughes",
          user_type: "Service Provider",
          phone: "9729791070",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "11",
          default_city: "11",
          latitude: "32.7758",
          longitude: "-96.7967",
          state: "",
          zip: "76092",
          country: "",
          username: "AdamHughes",
          url: null
        },
        {
          id: null,
          filename: "twpfvOYah2jyAgJ1520930393CollVille.png",
          filepath: "uploads/twpfvOYah2jyAgJ1520930393CollVille.png",
          user_id: "170",
          active: "1",
          email: "colleyvilleblvd@gmail.com",
          password: "10d01bcf0acd75a54ced709b45026d035a4c2258",
          tokenhash: "53a64c18ce480660c7c7e85159dc5b4b30376e48",
          activate: "1",
          firstname: "Kelvin",
          lastname: "Peter",
          user_type: "Service Provider",
          phone: "9032418640",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "11",
          default_city: "11",
          latitude: "32.7758",
          longitude: "-96.7967",
          state: "",
          zip: "76034",
          country: "",
          username: "ColleyvilleRoofingPro",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "171",
          active: "1",
          email: "amiashraf@gmail.com",
          password: "5e4932b4a9d0655242c97924df6378a18662c93b",
          tokenhash: "c7443cc85688925093aac0e12d8940272be54623",
          activate: "1",
          firstname: "Ashraf",
          lastname: "Zaman",
          user_type: "Admin",
          phone: "1777515669",
          address: "mohammadpur, dhaka",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "12089",
          country: "",
          username: "amiashraf",
          url: null
        },
        {
          id: null,
          filename: "jon.jpg",
          filepath: "uploads/hEH1ptPq9a5WSxb2018_08_09_00_32_27.jpg",
          user_id: "172",
          active: "1",
          email: "armyguysmoving512@gmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "",
          activate: "1",
          firstname: "Jon",
          lastname: "Martinez",
          user_type: "Service Provider",
          phone: "(512) 413-5246",
          address: "124 DESERT PRIMROSE DR \r\nAUSTIN, TX   7874",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.1461114",
          longitude: "-97.80565380000002",
          state: "",
          zip: "78748",
          country: "",
          username: "armyguysmoving",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "173",
          active: "1",
          email: "rosscophs@gmail.com",
          password: "bad40bb0b9a96a00701449ed24d5c1415cb5fc5c",
          tokenhash: "",
          activate: "1",
          firstname: "Ron",
          lastname: "Ross",
          user_type: "Service Provider",
          phone: "(512) 796-3767",
          address: "Cedar Park, TX 78726",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.51015254198189",
          longitude: "-97.82320704340822",
          state: "",
          zip: "78726",
          country: "",
          username: "ronross",
          url: null
        },
        {
          id: null,
          filename: "dan_o.jpg",
          filepath: "uploads/aMtnWTwcbOAvRJY2018_08_09_21_11_03.jpg",
          user_id: "174",
          active: "1",
          email: "support@easywaymaids.com",
          password: "bad40bb0b9a96a00701449ed24d5c1415cb5fc5c",
          tokenhash: "",
          activate: "1",
          firstname: "Daniel",
          lastname: "Olin",
          user_type: "Site User",
          phone: "(512) 793-7861",
          address: "1016 Camino La Costa Apt 1604\r\nAustin, TX 78752",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.3267578",
          longitude: "-97.70125919999998",
          state: "",
          zip: "78752",
          country: "",
          username: "easywaymaids",
          url: null
        },
        {
          id: null,
          filename: "profile_1515456069967.jpg",
          filepath: "uploads/h27GERzukTjX6nt2018_09_02_22_31_56.jpg",
          user_id: "175",
          active: "1",
          email: "baca.maria@gmail.com",
          password: "a9fe3e50ce0968dadd112846295badf61ea66588",
          tokenhash: "",
          activate: "1",
          firstname: "Maria",
          lastname: "Baca",
          user_type: "Service Provider",
          phone: "(512) 915-6680",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.209017376559874",
          longitude: "-97.60161182539059",
          state: "",
          zip: "78617",
          country: "",
          username: "baca.maria",
          url: null
        },
        {
          id: null,
          filename: "753mplgUOkHVNyr1541236443RockWall images.jpg",
          filepath: "uploads/753mplgUOkHVNyr1541236443RockWall images.jpg",
          user_id: "176",
          active: "1",
          email: "rockwallroofingpro@gmail.com",
          password: "10d01bcf0acd75a54ced709b45026d035a4c2258",
          tokenhash: "e920b3f84a09c58f965f80ee21322c07f5e5b25c",
          activate: "1",
          firstname: "Devin",
          lastname: "Samuel",
          user_type: "Site User",
          phone: "9032418641",
          address: "519 E. I-30 #256",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "11",
          default_city: "11",
          latitude: "32.7758",
          longitude: "-96.7967",
          state: "",
          zip: "75087",
          country: "",
          username: "DevinSamuel",
          url: null
        },
        {
          id: null,
          filename: "tpc6lZDfhRe8sya1542373052Capture.PNG",
          filepath: "uploads/tpc6lZDfhRe8sya1542373052Capture.PNG",
          user_id: "177",
          active: "1",
          email: "info@mandrgutters.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "",
          activate: "1",
          firstname: "Marcos",
          lastname: "Rosario",
          user_type: "Service Provider",
          phone: "5122004307",
          address: "48-B Country Oaks Dr, Buda, TX, 78610",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.333566619596123",
          longitude: "-97.9595846682787",
          state: "",
          zip: "78610",
          country: "",
          username: "mandrguttters",
          url: null
        },
        {
          id: "178",
          filename: "94cm87RwjlpgZEX1542372011rebecca.jpg",
          filepath: "uploads/94cm87RwjlpgZEX1542372011rebecca.jpg",
          user_id: "178",
          active: "1",
          email: "rebeccalwootenrealtor@gmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "",
          activate: "1",
          firstname: "Rebecca",
          lastname: "wooten",
          user_type: "Service Provider",
          phone: "5126624020",
          address: "Cedar Park, TX, 78613",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.505198",
          longitude: "-97.82028880000001",
          state: "",
          zip: "78613",
          country: "",
          username: "rebeccalwootenrealtor",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "179",
          active: "1",
          email: "dpavelka78664@yahoo.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "",
          activate: "1",
          firstname: "DERRICK",
          lastname: "Pavelka",
          user_type: "Service Provider",
          phone: "(512) 587-0676",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.514327669886054",
          longitude: "-97.66811181497064",
          state: "",
          zip: "78664",
          country: "",
          username: "dpavelka78664",
          url: null
        },
        {
          id: null,
          filename: "iGkCDRN8KZV3z161542405799weston.jpg",
          filepath: "uploads/iGkCDRN8KZV3z161542405799weston.jpg",
          user_id: "180",
          active: "1",
          email: "WESTON@WESTONLIPSCOMB.COM",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "",
          activate: "1",
          firstname: "Weston",
          lastname: "Lipscomb",
          user_type: "Service Provider",
          phone: "5128263773",
          address: "801 Barton Springs Rd, 6th Floor Austin, TX 78704 ",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.2587226",
          longitude: "-97.75272239999998",
          state: "",
          zip: "78704",
          country: "",
          username: "WESTONLIPSCOMB",
          url: null
        },
        {
          id: null,
          filename: "qTvr9uP5kdCbBKA1542408088selina.jpg",
          filepath: "uploads/qTvr9uP5kdCbBKA1542408088selina.jpg",
          user_id: "181",
          active: "1",
          email: "selina.atx@gmail.com",
          password: "b3e4219b8910fb4dc84ad7e2c47f1f55ba1c6d56",
          tokenhash: "",
          activate: "1",
          firstname: "Selina",
          lastname: "Rahman",
          user_type: "Service Provider",
          phone: "5123006832",
          address: "12515-8 Research Blvd. Suite 100\r\nAustin, TX 78759",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.4360312",
          longitude: "-97.75154479999998",
          state: "",
          zip: "78759",
          country: "",
          username: "selina.atx",
          url: null
        },
        {
          id: null,
          filename: "9x3aHnfm1BJKtUh1544050213s0.jpg",
          filepath: "uploads/9x3aHnfm1BJKtUh1544050213s0.jpg",
          user_id: "182",
          active: "1",
          email: "shannonperrylmt@gmail.com",
          password: "2895773068017509e59c3c0b1df245821185b8e8",
          tokenhash: "",
          activate: "1",
          firstname: "Shannon",
          lastname: "Perry",
          user_type: "Service Provider",
          phone: "5123509122",
          address: "2525 Wallingwood Drive, STE 1500, Austin TX, 78704",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.263622",
          longitude: "-97.7841611",
          state: "",
          zip: "78704",
          country: "",
          username: "sweetescapes ",
          url: null
        },
        {
          id: null,
          filename: "QPxyMZkDuIBLwCh1544133374erin.PNG",
          filepath: "uploads/QPxyMZkDuIBLwCh1544133374erin.PNG",
          user_id: "183",
          active: "1",
          email: "erinelizabeth.arnold@gmail.com",
          password: "2895773068017509e59c3c0b1df245821185b8e8",
          tokenhash: "",
          activate: "1",
          firstname: "Erin",
          lastname: "Arnold",
          user_type: "Service Provider",
          phone: "5125765798",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.4548451",
          longitude: "-97.62226650000002",
          state: "",
          zip: "78660",
          country: "",
          username: "erinelizabeth.arnold",
          url: null
        },
        {
          id: null,
          filename: "qwWyguSsDA1UBXt1544143415eh.jpg",
          filepath: "uploads/qwWyguSsDA1UBXt1544143415eh.jpg",
          user_id: "184",
          active: "1",
          email: "erinhyattphotography@gmail.com",
          password: "2895773068017509e59c3c0b1df245821185b8e8",
          tokenhash: "",
          activate: "1",
          firstname: "Erin",
          lastname: "Hyatt",
          user_type: "Service Provider",
          phone: "5128102414",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.505198",
          longitude: "-97.82028880000001",
          state: "",
          zip: "78613",
          country: "",
          username: "erinhyattphotography",
          url: null
        },
        {
          id: null,
          filename: "eZqu5x2kXW6FUSH1544806528nelly.PNG",
          filepath: "uploads/eZqu5x2kXW6FUSH1544806528nelly.PNG",
          user_id: "185",
          active: "1",
          email: "info@NellyGreenCleaningTx.com",
          password: "2895773068017509e59c3c0b1df245821185b8e8",
          tokenhash: "",
          activate: "1",
          firstname: "Nelly",
          lastname: "Green",
          user_type: "Site User",
          phone: "(512) 945-4351",
          address: "605 Masterson Pass\r\nAustin, TX 78753",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.3693854",
          longitude: "-97.6908919",
          state: "",
          zip: "78753",
          country: "",
          username: "NellyGreenCleaningTx",
          url: null
        },
        {
          id: null,
          filename: "BeQCUaPJ3f27wkd1544808942cq.PNG",
          filepath: "uploads/BeQCUaPJ3f27wkd1544808942cq.PNG",
          user_id: "186",
          active: "1",
          email: "thecleaningqueens@gmail.com",
          password: "2895773068017509e59c3c0b1df245821185b8e8",
          tokenhash: "",
          activate: "1",
          firstname: "Samantha",
          lastname: "Stevens",
          user_type: "Service Provider",
          phone: "5127893120",
          address: "3351 Killingsworth Ln\r\nPflugerville, TX 78660",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.41199359999999",
          longitude: "-97.6059664",
          state: "",
          zip: "78660",
          country: "",
          username: "thecleaningqueens",
          url: null
        },
        {
          id: null,
          filename: "remuqM7LGD23vRb1544812585alma_p1.png",
          filepath: "uploads/remuqM7LGD23vRb1544812585alma_p1.png",
          user_id: "187",
          active: "1",
          email: "almascleaningservice@hotmail.com",
          password: "2895773068017509e59c3c0b1df245821185b8e8",
          tokenhash: "",
          activate: "1",
          firstname: "Alma",
          lastname: "Alma",
          user_type: "Service Provider",
          phone: "5125523672",
          address: "Austin, TX 78744",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.267153",
          longitude: "-97.74306079999997",
          state: "",
          zip: "78744",
          country: "",
          username: "almascleaningservice",
          url: null
        },
        {
          id: null,
          filename: "L8BfZkq5TjCygpA1548787254piano.PNG",
          filepath: "uploads/L8BfZkq5TjCygpA1548787254piano.PNG",
          user_id: "188",
          active: "1",
          email: "pdolan@suddenlink.net",
          password: "6046b60618d0b125d48daceaeecf1896afa2581d",
          tokenhash: "80b8c041a695c425cc03e6cde0993a3e84b0a3d1",
          activate: "1",
          firstname: "Patricia",
          lastname: "Dolan",
          user_type: "Service Provider",
          phone: "5128189522",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78626",
          country: "",
          username: "nonnobis",
          url: null
        },
        {
          id: null,
          filename: "",
          filepath: "",
          user_id: "189",
          active: "1",
          email: "chrisdehoyos@gmail.com",
          password: "05c947a9cde69491a834e0b822fd3dc075aed1df",
          tokenhash: "7e072ce74fceb86e4554cd1d39b0a3c881879a92",
          activate: "1",
          firstname: "Chris",
          lastname: "De Hoyos",
          user_type: "Site User",
          phone: "5127741933",
          address: "",
          city: "",
          state_id: "15",
          country_id: "9",
          city_id: "8",
          default_city: "8",
          latitude: "30.25",
          longitude: "-97.75",
          state: "",
          zip: "78748",
          country: "",
          username: "chrisdehoyos",
          url: null
        }
      ];
      ITEMS_USERS.forEach((item, index) => {
        return createUser(item);
      });
    } else if (inputs.step == 17) {
      await Service_post.destroy({});
      var ITEMS_SERVICE_POSTS = servicePosts.data;
      for (item of ITEMS_SERVICE_POSTS) {
        await createServicePost(item);
      }
      // ITEMS_SERVICE_POSTS.forEach( async (item) => {
      //   await createServicePost(item);
      // });
    } else if (inputs.step == 12) {
      // var ITEMS_SERVICE_POSTS = [];
      // ITEMS_SERVICE_POSTS.forEach((item, index) => {
      //   return updateServiceUser(item);
      // });
    } else if (inputs.step == 13) {
      await Review.destroy({});
      var ITEMS_REVIEW = [
        {
          id: "1",
          active: "1",
          user_id: "5",
          title: "Great Service",
          review_time: "2014-03-30 20:46:23",
          service_post_id: "3",
          description:
            "I've found them great. Response was quick. They are so sincere. Did it professionally. Will definitely consider them next time I need the same service.",
          received: "1",
          overall: "5",
          skill: "5",
          ontime: "5",
          price: "5",
          communicate: "5",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "2",
          active: "1",
          user_id: "5",
          title: "Review Title",
          review_time: "2014-04-10 05:41:48",
          service_post_id: "3",
          description: "Review Description",
          received: "1",
          overall: "4",
          skill: "5",
          ontime: "3",
          price: "3",
          communicate: "4",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "3",
          active: "1",
          user_id: "5",
          title: "Review",
          review_time: "2014-04-15 11:20:40",
          service_post_id: "3",
          description: "Review",
          received: "1",
          overall: "3",
          skill: "3",
          ontime: "5",
          price: "4",
          communicate: "4",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "4",
          active: "1",
          user_id: "5",
          title: "Review",
          review_time: "2014-04-15 11:21:14",
          service_post_id: "3",
          description: "Review",
          received: "1",
          overall: "3",
          skill: "3",
          ontime: "5",
          price: "4",
          communicate: "4",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "5",
          active: "1",
          user_id: "12",
          title: "Great Cleaning Service ",
          review_time: "2014-04-17 23:26:24",
          service_post_id: "7",
          description:
            "Gina provides great cleaning service. Same day schedule, attention to details, all appliances, windows, carpets, floors look like new after cleaning. ",
          received: "1",
          overall: "5",
          skill: "5",
          ontime: "3",
          price: "5",
          communicate: "4",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "6",
          active: "1",
          user_id: "12",
          title: "Great Cleaning Service ",
          review_time: "2014-04-17 23:26:56",
          service_post_id: "7",
          description:
            "Gina provides great cleaning service. Same day schedule, attention to details, all appliances, windows, carpets, floors look like new after cleaning. ",
          received: "1",
          overall: "5",
          skill: "5",
          ontime: "5",
          price: "5",
          communicate: "4",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "7",
          active: "1",
          user_id: "12",
          title: "Great Cleaning Service ",
          review_time: "2014-04-17 23:27:27",
          service_post_id: "7",
          description:
            "Gina provides great cleaning service. Same day schedule, attention to details, all appliances, windows, carpets, floors look like new after cleaning. ",
          received: "1",
          overall: "5",
          skill: "5",
          ontime: "3",
          price: "5",
          communicate: "4",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "8",
          active: "1",
          user_id: "12",
          title: "Great Cleaning Service ",
          review_time: "2014-04-17 23:27:58",
          service_post_id: "7",
          description:
            "Gina provides great cleaning service. Same day schedule, attention to details, all appliances, windows, carpets, floors look like new after cleaning. ",
          received: "1",
          overall: "5",
          skill: "5",
          ontime: "5",
          price: "5",
          communicate: "4",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "14",
          active: "1",
          user_id: "6",
          title: "test review",
          review_time: "2014-05-07 01:12:46",
          service_post_id: "3",
          description: "test description",
          received: "1",
          overall: "3",
          skill: "3",
          ontime: "3",
          price: "3",
          communicate: "3",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "15",
          active: "1",
          user_id: "6",
          title: "fine",
          review_time: "2014-05-09 23:46:38",
          service_post_id: "3",
          description: "ff",
          received: "1",
          overall: "3",
          skill: "3",
          ontime: "3",
          price: "3",
          communicate: "3",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "16",
          active: "1",
          user_id: "6",
          title: "new review",
          review_time: "2014-05-10 00:15:24",
          service_post_id: "3",
          description: "new review desc",
          received: "1",
          overall: "3",
          skill: "3",
          ontime: "3",
          price: "3",
          communicate: "3",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "17",
          active: "1",
          user_id: "5",
          title: "Very Satisfied Service ",
          review_time: "2014-05-12 16:46:24",
          service_post_id: "34",
          description:
            "Isabel and her team cleaned my house 2nd time. I texted her once I need every couple months. She is very prompt to reply, schedule and communicate. She always come on-time with her team and provides the best service. Price is highly reasonable with her best service. I strongly recommend her service for your house cleaning service. ",
          received: "1",
          overall: "5",
          skill: "5",
          ontime: "5",
          price: "5",
          communicate: "5",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "1"
        },
        {
          id: "20",
          active: "1",
          user_id: "6",
          title: "Good",
          review_time: "2014-10-25 01:58:19",
          service_post_id: "37",
          description: "Good service",
          received: "1",
          overall: "3",
          skill: "3",
          ontime: "3",
          price: "5",
          communicate: "5",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "22",
          active: "1",
          user_id: "12",
          title: "One of the best experience with Isabel!",
          review_time: "2014-11-14 06:48:28",
          service_post_id: "34",
          description:
            "Isabel is simply awesome. She did fantastic job with very detailed and make my home like new every time. ",
          received: "1",
          overall: "5",
          skill: "5",
          ontime: "3",
          price: "5",
          communicate: "5",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "23",
          active: "1",
          user_id: "6",
          title: "new review",
          review_time: "2014-11-17 03:28:37",
          service_post_id: "81",
          description: "fine service",
          received: "1",
          overall: "3",
          skill: "3",
          ontime: "3",
          price: "3",
          communicate: "3",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "24",
          active: "0",
          user_id: "11",
          title: "my review",
          review_time: "2014-11-17 03:31:29",
          service_post_id: "81",
          description: "desc",
          received: "1",
          overall: "3",
          skill: "3",
          ontime: "3",
          price: "3",
          communicate: "3",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "25",
          active: "1",
          user_id: "6",
          title: "fine",
          review_time: "2014-11-20 05:41:57",
          service_post_id: "81",
          description: "desc",
          received: "1",
          overall: "3",
          skill: "3",
          ontime: "3",
          price: "3",
          communicate: "3",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "26",
          active: "1",
          user_id: "6",
          title: "fine",
          review_time: "2014-12-04 02:40:50",
          service_post_id: "44",
          description: "fine service",
          received: "1",
          overall: "5",
          skill: "3",
          ontime: "3",
          price: "3",
          communicate: "3",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "1"
        },
        {
          id: "27",
          active: "1",
          user_id: "6",
          title: "good service",
          review_time: "2014-12-07 00:10:03",
          service_post_id: "43",
          description: "I like it",
          received: "1",
          overall: "3",
          skill: "3",
          ontime: "3",
          price: "3",
          communicate: "3",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "28",
          active: "1",
          user_id: "6",
          title: "good",
          review_time: "2014-12-07 00:11:46",
          service_post_id: "43",
          description: "fine",
          received: "1",
          overall: "1",
          skill: "3",
          ontime: "3",
          price: "3",
          communicate: "3",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "29",
          active: "0",
          user_id: "12",
          title: "I am satisfied with the service",
          review_time: "2014-12-28 00:17:16",
          service_post_id: "34",
          description:
            "I got a chance to have a service from them. They are really good. The people are proactive, helpful and communicative. I must call them again, if I need the service.",
          received: "1",
          overall: "5",
          skill: "5",
          ontime: "5",
          price: "4",
          communicate: "5",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "30",
          active: "1",
          user_id: "90",
          title: "Peter did great job to clean my new lots ",
          review_time: "2015-01-02 19:56:21",
          service_post_id: "177",
          description:
            "After having bad experiences with 2 random guys from local classified sites, I found Peter here. He is professional, reliable, skillful to do the job. He completed the job as per contract, with taking a few days extra due to bad weather. Overall, I was very happy with Peter, and now he is my first choice as a handyman to do a lot of household works. I would like to recommend him. He will do decent job with very reasonable price. ",
          received: "1",
          overall: "5",
          skill: "5",
          ontime: "4",
          price: "5",
          communicate: "4",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "31",
          active: "1",
          user_id: "12",
          title: "Best Lawn Mowing Service in town!! ",
          review_time: "2015-02-17 22:22:42",
          service_post_id: "415",
          description:
            "I got a flyer from Just-A-Mow, and just sent an email to schedule their service. The team cam and estimate a barely $27 for my over average size lot and did great job during my service. As I was trying that year, I continued their service and this is my straight 3rd year. Highly professional, on-time, great service with extra care, online statement to email and online bill payment. Can't ask anything more. Best lawn mowing service, highly recommend. ",
          received: "1",
          overall: "5",
          skill: "5",
          ontime: "5",
          price: "5",
          communicate: "5",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "32",
          active: "1",
          user_id: "20",
          title: "Test",
          review_time: "2015-02-24 03:23:33",
          service_post_id: "44",
          description: "test",
          received: "1",
          overall: "4",
          skill: "3",
          ontime: "2",
          price: "1",
          communicate: "5",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "33",
          active: "1",
          user_id: "159",
          title: "this is test title by rono",
          review_time: "2017-11-15 22:56:24",
          service_post_id: "609",
          description: "this is test ",
          received: "1",
          overall: "3",
          skill: "3",
          ontime: "3",
          price: "3",
          communicate: "3",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "34",
          active: "1",
          user_id: "167",
          title: "Great DJ JD ! ",
          review_time: "2018-01-29 14:26:40",
          service_post_id: "850",
          description:
            "I can't express my recommendations for Jeff, as great DJ JD. The event was joyful, everybody enjoyed the fullest, it was a burst fun filled night. Hire him, won't disappointed. ",
          received: "1",
          overall: "5",
          skill: "5",
          ontime: "5",
          price: "5",
          communicate: "5",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "35",
          active: "1",
          user_id: "171",
          title: "Khub bhalo service",
          review_time: "2018-06-11 23:38:55",
          service_post_id: "866",
          description:
            "Jodio ami test korchi, tai ei review ta ke apnara seriously niben na asha kori",
          received: "1",
          overall: "5",
          skill: "4",
          ontime: "4",
          price: "3",
          communicate: "3",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        },
        {
          id: "36",
          active: "1",
          user_id: "12",
          title: "Great realtor, willing to do more!! ",
          review_time: "2018-11-16 22:55:23",
          service_post_id: "1784",
          description:
            "Selina is a great realtor, passionate for her job, listens to our needs, creates a great search model and personally communicate with the matching property. She is local and knows entire great Austin area. She helps and guides for each property with all aspects. Highly recommend her for your next buy or sell! ",
          received: "1",
          overall: "5",
          skill: "5",
          ontime: "5",
          price: "5",
          communicate: "5",
          helpful_count: "0",
          helpful_yes: "0",
          verify: "0"
        }
      ];
      ITEMS_REVIEW.forEach((item, index) => {
        return createReviewUser(item);
      });
    }
    // else if(inputs.step == 13){
    //   await Review.destroy({});
    //   var ITEMS_REVIEW =  [{"id":"1","active":"1","user_id":"5","title":"Great Service","review_time":"2014-03-30 20:46:23","service_post_id":"3","description":"I've found them great. Response was quick. They are so sincere. Did it professionally. Will definitely consider them next time I need the same service.","received":"1","overall":"5","skill":"5","ontime":"5","price":"5","communicate":"5","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"2","active":"1","user_id":"5","title":"Review Title","review_time":"2014-04-10 05:41:48","service_post_id":"3","description":"Review Description","received":"1","overall":"4","skill":"5","ontime":"3","price":"3","communicate":"4","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"3","active":"1","user_id":"5","title":"Review","review_time":"2014-04-15 11:20:40","service_post_id":"3","description":"Review","received":"1","overall":"3","skill":"3","ontime":"5","price":"4","communicate":"4","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"4","active":"1","user_id":"5","title":"Review","review_time":"2014-04-15 11:21:14","service_post_id":"3","description":"Review","received":"1","overall":"3","skill":"3","ontime":"5","price":"4","communicate":"4","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"5","active":"1","user_id":"12","title":"Great Cleaning Service ","review_time":"2014-04-17 23:26:24","service_post_id":"7","description":"Gina provides great cleaning service. Same day schedule, attention to details, all appliances, windows, carpets, floors look like new after cleaning. ","received":"1","overall":"5","skill":"5","ontime":"3","price":"5","communicate":"4","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"6","active":"1","user_id":"12","title":"Great Cleaning Service ","review_time":"2014-04-17 23:26:56","service_post_id":"7","description":"Gina provides great cleaning service. Same day schedule, attention to details, all appliances, windows, carpets, floors look like new after cleaning. ","received":"1","overall":"5","skill":"5","ontime":"5","price":"5","communicate":"4","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"7","active":"1","user_id":"12","title":"Great Cleaning Service ","review_time":"2014-04-17 23:27:27","service_post_id":"7","description":"Gina provides great cleaning service. Same day schedule, attention to details, all appliances, windows, carpets, floors look like new after cleaning. ","received":"1","overall":"5","skill":"5","ontime":"3","price":"5","communicate":"4","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"8","active":"1","user_id":"12","title":"Great Cleaning Service ","review_time":"2014-04-17 23:27:58","service_post_id":"7","description":"Gina provides great cleaning service. Same day schedule, attention to details, all appliances, windows, carpets, floors look like new after cleaning. ","received":"1","overall":"5","skill":"5","ontime":"5","price":"5","communicate":"4","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"14","active":"1","user_id":"6","title":"test review","review_time":"2014-05-07 01:12:46","service_post_id":"3","description":"test description","received":"1","overall":"3","skill":"3","ontime":"3","price":"3","communicate":"3","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"15","active":"1","user_id":"6","title":"fine","review_time":"2014-05-09 23:46:38","service_post_id":"3","description":"ff","received":"1","overall":"3","skill":"3","ontime":"3","price":"3","communicate":"3","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"16","active":"1","user_id":"6","title":"new review","review_time":"2014-05-10 00:15:24","service_post_id":"3","description":"new review desc","received":"1","overall":"3","skill":"3","ontime":"3","price":"3","communicate":"3","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"17","active":"1","user_id":"5","title":"Very Satisfied Service ","review_time":"2014-05-12 16:46:24","service_post_id":"34","description":"Isabel and her team cleaned my house 2nd time. I texted her once I need every couple months. She is very prompt to reply, schedule and communicate. She always come on-time with her team and provides the best service. Price is highly reasonable with her best service. I strongly recommend her service for your house cleaning service. ","received":"1","overall":"5","skill":"5","ontime":"5","price":"5","communicate":"5","helpful_count":"0","helpful_yes":"0","verify":"1"}, {"id":"20","active":"1","user_id":"6","title":"Good","review_time":"2014-10-25 01:58:19","service_post_id":"37","description":"Good service","received":"1","overall":"3","skill":"3","ontime":"3","price":"5","communicate":"5","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"22","active":"1","user_id":"12","title":"One of the best experience with Isabel!","review_time":"2014-11-14 06:48:28","service_post_id":"34","description":"Isabel is simply awesome. She did fantastic job with very detailed and make my home like new every time. ","received":"1","overall":"5","skill":"5","ontime":"3","price":"5","communicate":"5","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"23","active":"1","user_id":"6","title":"new review","review_time":"2014-11-17 03:28:37","service_post_id":"81","description":"fine service","received":"1","overall":"3","skill":"3","ontime":"3","price":"3","communicate":"3","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"24","active":"0","user_id":"11","title":"my review","review_time":"2014-11-17 03:31:29","service_post_id":"81","description":"desc","received":"1","overall":"3","skill":"3","ontime":"3","price":"3","communicate":"3","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"25","active":"1","user_id":"6","title":"fine","review_time":"2014-11-20 05:41:57","service_post_id":"81","description":"desc","received":"1","overall":"3","skill":"3","ontime":"3","price":"3","communicate":"3","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"26","active":"1","user_id":"6","title":"fine","review_time":"2014-12-04 02:40:50","service_post_id":"44","description":"fine service","received":"1","overall":"5","skill":"3","ontime":"3","price":"3","communicate":"3","helpful_count":"0","helpful_yes":"0","verify":"1"}, {"id":"27","active":"1","user_id":"6","title":"good service","review_time":"2014-12-07 00:10:03","service_post_id":"43","description":"I like it","received":"1","overall":"3","skill":"3","ontime":"3","price":"3","communicate":"3","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"28","active":"1","user_id":"6","title":"good","review_time":"2014-12-07 00:11:46","service_post_id":"43","description":"fine","received":"1","overall":"1","skill":"3","ontime":"3","price":"3","communicate":"3","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"29","active":"0","user_id":"12","title":"I am satisfied with the service","review_time":"2014-12-28 00:17:16","service_post_id":"34","description":"I got a chance to have a service from them. They are really good. The people are proactive, helpful and communicative. I must call them again, if I need the service.","received":"1","overall":"5","skill":"5","ontime":"5","price":"4","communicate":"5","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"30","active":"1","user_id":"90","title":"Peter did great job to clean my new lots ","review_time":"2015-01-02 19:56:21","service_post_id":"177","description":"After having bad experiences with 2 random guys from local classified sites, I found Peter here. He is professional, reliable, skillful to do the job. He completed the job as per contract, with taking a few days extra due to bad weather. Overall, I was very happy with Peter, and now he is my first choice as a handyman to do a lot of household works. I would like to recommend him. He will do decent job with very reasonable price. ","received":"1","overall":"5","skill":"5","ontime":"4","price":"5","communicate":"4","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"31","active":"1","user_id":"12","title":"Best Lawn Mowing Service in town!! ","review_time":"2015-02-17 22:22:42","service_post_id":"415","description":"I got a flyer from Just-A-Mow, and just sent an email to schedule their service. The team cam and estimate a barely $27 for my over average size lot and did great job during my service. As I was trying that year, I continued their service and this is my straight 3rd year. Highly professional, on-time, great service with extra care, online statement to email and online bill payment. Can't ask anything more. Best lawn mowing service, highly recommend. ","received":"1","overall":"5","skill":"5","ontime":"5","price":"5","communicate":"5","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"32","active":"1","user_id":"20","title":"Test","review_time":"2015-02-24 03:23:33","service_post_id":"44","description":"test","received":"1","overall":"4","skill":"3","ontime":"2","price":"1","communicate":"5","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"33","active":"1","user_id":"159","title":"this is test title by rono","review_time":"2017-11-15 22:56:24","service_post_id":"609","description":"this is test ","received":"1","overall":"3","skill":"3","ontime":"3","price":"3","communicate":"3","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"34","active":"1","user_id":"167","title":"Great DJ JD ! ","review_time":"2018-01-29 14:26:40","service_post_id":"850","description":"I can't express my recommendations for Jeff, as great DJ JD. The event was joyful, everybody enjoyed the fullest, it was a burst fun filled night. Hire him, won't disappointed. ","received":"1","overall":"5","skill":"5","ontime":"5","price":"5","communicate":"5","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"35","active":"1","user_id":"171","title":"Khub bhalo service","review_time":"2018-06-11 23:38:55","service_post_id":"866","description":"Jodio ami test korchi, tai ei review ta ke apnara seriously niben na asha kori","received":"1","overall":"5","skill":"4","ontime":"4","price":"3","communicate":"3","helpful_count":"0","helpful_yes":"0","verify":"0"}, {"id":"36","active":"1","user_id":"12","title":"Great realtor, willing to do more!! ","review_time":"2018-11-16 22:55:23","service_post_id":"1784","description":"Selina is a great realtor, passionate for her job, listens to our needs, creates a great search model and personally communicate with the matching property. She is local and knows entire great Austin area. She helps and guides for each property with all aspects. Highly recommend her for your next buy or sell! ","received":"1","overall":"5","skill":"5","ontime":"5","price":"5","communicate":"5","helpful_count":"0","helpful_yes":"0","verify":"0"}]
    //   ITEMS_REVIEW.forEach((item, index) => {
    //     return createReviewUser(item);
    //   });
    // }
    else if (inputs.step == 14) {
      await Reviewfeedback.destroy({});
      //await User.destroy({});
      var ITEMS_REVIEW_Feedback = review_feedback.data;
      ITEMS_REVIEW_Feedback.forEach((item, index) => {
        return createfeedReviewUser(item);
      });
    }

    if (!inputs.step) {
      console.log(
        inputs.step,
        "ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp"
      );
      return {
        steps: inputs.step,
        data: [],
        me: this.req.me
      };
    }

    // if (this.req.me) {
    //   throw {redirect:'/welcome'};
    // }

    var categories = ""; //await Category.find({});
    var services = ""; //await Service_post.find({});
    var data = {
      category: categories,
      service: services
    };

    return {
      steps: inputs.step,
      data: data,
      me: this.req.me
    };
  }
};

async function generateServiceSlug(Text) {
  // const a =
  //   "àáäâãåăæąçćčđďèéěėëêęǵḧìíïîįłḿǹńňñòóöôœøṕŕřßśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;";
  // const b =
  //   "aaaaaaaaacccddeeeeeeeghiiiiilmnnnnooooooprrssssttuuuuuuuuuwxyyzzz------";
  // const p = new RegExp(a.split("").join("|"), "g");

  // return string
  //   .toString()
  //   .toLowerCase()
  //   .replace(/\s+/g, "-") // Replace spaces with -
  //   .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
  //   .replace(/&/g, "-and-") // Replace & with 'and'
  //   .replace(/[^\w\-]+/g, "") // Remove all non-word characters
  //   .replace(/\-\-+/g, "-") // Replace multiple - with single -
  //   .replace(/^-+/, "") // Trim - from start of text
  //   .replace(/-+$/, ""); // Trim - from end of text

  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

async function createServicePost(item) {
  if (item.sub_category_id == 0 && item.category_id == 0) {
    var categoryRecord = null;
  } else if (item.sub_category_id != 0) {
    var categoryRecords = await Category.find({
      idOriginalSub: item.sub_category_id
    });
    let categoryRecord = categoryRecords[0];
  } else {
    var categoryRecord = await Category.findOne({
      idOriginal: item.category_id
    });
  }

  var countryRecord = await Country.findOne({
    idOriginal: item.country_id
  });

  var stateRecord = await State.findOne({
    idOriginal: item.state_id
  });

  var cityRecord = await City.findOne({
    idOriginal: item.city_id
  });

  var userRecord = await User.findOne({
    idOriginal: item.user_id
  });

  let slug = await generateServiceSlug(item.title);
  let time;
  time = await new Date().getTime();
  if (slug === "") {
    sails.log();
    slug = "service-" + item.idOriginal + time;
    console.log("Slug not found " + item.id + ":" + item.title + time);
  }
  let check = [];
  check = await Service_post.find({
    slug: slug
  });
  if (check.length > 0) {
    slug = slug + time;
  }

  // console.log('slug: ' + slug);

  var files = [
    "/images/service/" + item.filename1,
    "/images/service/" + item.filename2,
    "/images/service/" + item.filename3,
    "/images/service/" + item.filename4,
    "/images/service/" + item.filename5
  ];

  var newRecord = await Service_post.create({
    idOriginal: item.id,
    title: item.title ? item.title : null,
    slug: slug,
    description: item.description,
    images: files,
    phone: item.phone,
    email: item.email,
    ranking: item.ranking,
    website: item.website,
    latitude: item.latitude,
    longitude: item.longitude,
    tags: item.tags,
    compensation: item.compensation,
    sponsor: item.sponsor,
    active_upto: item.active_upto,
    post_date: item.post_date,
    mark_as_inactive: item.mark_as_inactive,
    can_flag: item.can_flag,
    active: item.active,

    no_email: item.no_email,
    area_offered: item.area_offered,
    user: userRecord ? userRecord.id : null,
    category: categoryRecord ? categoryRecord.id : null,
    country: typeof countryRecord == "object" ? countryRecord.id : null,
    state: typeof stateRecord == "object" ? stateRecord.id : null,
    city: typeof cityRecord == "object" ? cityRecord.id : null
  })
    .fetch()
    .catch(e => {
      console.error("Error: " + e.message);
      return;
    });

  // console.log('added: service post slug: ' + newRecord.slug);
}

async function generateSubcategorySlug(Text) {
  const a =
    "àáäâãåăæąçćčđďèéěėëêęǵḧìíïîįłḿǹńňñòóöôœøṕŕřßśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;";
  const b =
    "aaaaaaaaacccddeeeeeeeghiiiiilmnnnnooooooprrssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");

  return Text.toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text

  // return Text.toLowerCase()
  //   .replace(/ /g, "-")
  //   .replace(/[^\w-]+/g, "");
}

async function createSubCategory(item) {
  var categoryRecord = await Category.findOne({
    idOriginal: item.category_id
  });
  console.log(categoryRecord);
  if (categoryRecord === undefined) {
    console.log("sub cat title not defineddddddd");
    return "not found";
  } else {
    if (item.name) {
      let slug = await generateSubcategorySlug(item.name);
      let time = new Date().getTime();
      if (slug == "") {
        // sails.log();
        slug = "category-" + item.idOriginal;
        console.log("Slug not found " + item.id + ":" + item.name);
      }

      let check = [];

      check = await Category.find({ slug: slug });
      console.log(check);
      if (check.length > 0) {
        slug = slug + time.toString();
      }

      console.log("slug: " + slug);
      var newRecord = await Category.create({
        idOriginalSub: item.id,
        name: item.name,
        tags: item.tags,
        slug: slug,
        isPublish: true,
        parent_category:
          categoryRecord && categoryRecord.id ? categoryRecord.id : ""
      }).fetch();
    }
  }
}
// async function updateServiceUser(item){
//   var userRecord = await User.findOne({
//     idOriginal: item.user_id,
//   });

//   var updateRecord = await Service_post.updateOne({ idOriginal: item.id })
//       .set({
//         user: userRecord.id
//       })

//   console.log('added:' + userRecord.id);
// }

async function updateSubCategoryCountry(item) {
  var countryRecord = await Country.findOne({
    idOriginal: item.country_id
  });

  var updateRecord = await Category.updateOne({
    idOriginalSub: item.subcategory_id
  }).set({
    country: countryRecord.id
  });

  // console.log('added:' + countryRecord.id);
}

async function updateCategoryCountry(item) {
  var countryRecord = await Country.findOne({
    idOriginal: item.country_id
  });

  var updateRecord = await Category.updateOne({
    idOriginal: item.category_id
  }).set({
    country: countryRecord.id
  });

  // console.log('added:' + countryRecord.id);
}

async function createUser(item) {
  var countryRecord = await Country.findOne({
    idOriginal: item.country_id
  });

  var stateRecord = await State.findOne({
    idOriginal: item.state_id
  });

  var cityRecord = await City.findOne({
    idOriginal: item.city_id
  });

  var tmpUser = {
    idOriginal: item.user_id,
    emailAddress: item.email,
    emailActivateStatus: true,
    password: item.password,
    fullName: item.firstname + " " + item.lastname,
    firstname: item.firstname,
    lastname: item.lastname,
    user_type: item.user_type,
    phone: item.phone,
    address: item.address,
    latitude: item.latitude,
    longitude: item.longitude,
    zip: item.zip,
    url: item.url ? item.url : "",
    filename: item.filename,
    filepath: item.filepath,

    state: stateRecord.id,
    country: countryRecord.id,
    city: cityRecord.id
  };
  console.log(tmpUser);
  var newRecord = await User.create(tmpUser)
    .fetch()
    .catch(e => {
      console.log(e);
    });

  // console.log('added:' + newRecord.fullName);
}

async function generateCategorySlug(Text) {
  const a =
    "àáäâãåăæąçćčđďèéěėëêęǵḧìíïîįłḿǹńňñòóöôœøṕŕřßśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;";
  const b =
    "aaaaaaaaacccddeeeeeeeghiiiiilmnnnnooooooprrssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");
  return Text.toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text

  // return Text.toLowerCase()
  //   .replace(/ /g, "-")
  //   .replace(/[^\w-]+/g, "");
}

async function createCategory(item) {
  if (item.name) {
    let slug = await generateCategorySlug(item.name);
    let time = new Date().getTime();
    if (slug == "") {
      // sails.log();
      slug = "category-" + item.idOriginal;
      console.log("Slug not found " + item.id + ":" + item.name);
    }

    let check = [];

    check = await Category.find({ slug: slug });

    console.log(check);
    if (check.length > 0) {
      slug = slug + time.toString();
    }

    var newRecord = await Category.create({
      idOriginal: item.id,
      name: item.name,
      isPublish: true,
      slug: slug
    }).fetch();

    // console.log('added: category slug' + newRecord.name);
  }
}
async function createCity_ip(item) {
  var cityRecord = await City.findOne({
    idOriginal: item.city_id
  });

  // console.log(cityRecord);
  var newRecord = await City_ip.create({
    idOriginal: item.id,
    ip: item.ip,
    city: cityRecord.id
  }).fetch();

  //console.log('added:' + newRecord.ip);
  // console.log('added:' + newRecord.city);
}

async function createCity_location(item) {
  var cityRecord = await City.findOne({
    idOriginal: item.city_id
  });

  // console.log(cityRecord);
  var newRecord = await City_location.create({
    idOriginal: item.id,
    name: item.city_name,
    latitude: item.latitude,
    longitude: item.longitude,
    city: cityRecord.id
  }).fetch();

  // console.log('added:' + newRecord.name);
  // console.log('added:' + newRecord.city);
}

async function createCity(item) {
  var countryRecord = await Country.findOne({
    idOriginal: item.country_id
  });

  var stateRecord = await State.findOne({
    idOriginal: item.state_id
  });

  var newRecord = await City.create({
    idOriginal: item.id,
    name: item.name,
    active: item.active,
    country: countryRecord.id,
    state: stateRecord.id
  }).fetch();

  // console.log('added:' + newRecord.name);
  //  console.log('added:' + newRecord.country);
  // console.log('added:' + newRecord.state);
}

async function createState(item) {
  var countryRecord = await Country.findOne({
    idOriginal: item.country_id
  });

  var newRecord = await State.create({
    idOriginal: item.id,
    name: item.name,
    active: item.active,
    country: countryRecord.id
  }).fetch();

  // console.log('added:' + newRecord.name);
  //console.log('added:' + newRecord.country);
}

async function createReviewUser(item) {
  var service_id = await Service_post.findOne({
    idOriginal: item.service_post_id
  });
  var user_id = await User.findOne({
    idOriginal: item.user_id
  });

  var newRecord = await Review.create({
    idOriginal: item.id,
    active: item.active,
    service: service_id,
    user: user_id,
    helpful: {}
  }).fetch();

  // console.log('added:' + newRecord.name);
}

async function createCountry(item) {
  var newRecord = await Country.create({
    idOriginal: item.id,
    name: item.name,
    active: item.active,
    phone_code: item.phone_code
  }).fetch();

  // console.log('added:' + newRecord.name);
}

async function createReviewUser(item) {
  var service = await Service_post.findOne({
    idOriginal: item.service_post_id
  });
  var user = await User.findOne({
    idOriginal: item.user_id
  });

  //console.log(item.user_id);
  // console.log(user_id);
  if (!service.id) {
    return;
  }

  var newRecord = await Review.create({
    idOriginal: item.id,
    active: item.active,
    user_id: user.id,
    helpful: "",
    title: item.title,
    review_time: item.review_time,
    service_id: service.id,
    description: item.description,

    received: item.received,
    overall: item.overall,
    skill: item.skill,
    ontime: item.ontime,
    price: item.price,
    communicate: item.communicate,
    helpful_count: item.helpful_count,
    helpful_yes: item.helpful_yes,
    verify: item.verify
  }).fetch();

  // console.log('added:' + newRecord.title);
}

async function createfeedReviewUser(item) {
  var service = await Service_post.findOne({
    idOriginal: item.service_post_id
  });

  //  check post exist??
  if (service && service.hasOwnProperty("id")) {
    //if exist check review
    var review = await Review.find({
      idOriginal: item.review_id
    }).limit(1);

    var user = await User.find({
      idOriginal: item.user_id
    }).limit(1);
    //review is a array
    review.forEach(async function(resu) {
      //create and save

      user.forEach(async function(result) {
        var newRecord = await Reviewfeedback.create({
          idOriginal: item.id,
          is_helpful: item.is_helpful,
          service_post_id: service.id,
          user_id: result.id,
          review_id: resu.id
        }).fetch();

        // console.log('added:' + newRecord.id);
      });
    });
  }
}
