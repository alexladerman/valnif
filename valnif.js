  var unicode = {};
  var CharacterTypes = {};
  // Upper case.
  unicode.Lu = /\u0041\u0042\u0043\u0044\u0045\u0046\u0047\u0048\u0049\u004A\u004B\u004C\u004D\u004E\u004F\u0050\u0051\u0052\u0053\u0054\u0055\u0056\u0057\u0058\u0059\u005A\u00C0\u00C1\u00C2\u00C3\u00C4\u00C5\u00C6\u00C7\u00C8\u00C9\u00CA\u00CB\u00CC\u00CD\u00CE\u00CF\u00D0\u00D1\u00D2\u00D3\u00D4\u00D5\u00D6\u00D8\u00D9\u00DA\u00DB\u00DC\u00DD\u00DE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189\u018A\u018B\u018E\u018F\u0190\u0191\u0193\u0194\u0196\u0197\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1\u01B2\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6\u01F7\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243\u0244\u0245\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u0386\u0388\u0389\u038A\u038C\u038E\u038F\u0391\u0392\u0393\u0394\u0395\u0396\u0397\u0398\u0399\u039A\u039B\u039C\u039D\u039E\u039F\u03A0\u03A1\u03A3\u03A4\u03A5\u03A6\u03A7\u03A8\u03A9\u03AA\u03AB\u03CF\u03D2\u03D3\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD\u03FE\u03FF\u0400\u0401\u0402\u0403\u0404\u0405\u0406\u0407\u0408\u0409\u040A\u040B\u040C\u040D\u040E\u040F\u0410\u0411\u0412\u0413\u0414\u0415\u0416\u0417\u0418\u0419\u041A\u041B\u041C\u041D\u041E\u041F\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042A\u042B\u042C\u042D\u042E\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0531\u0532\u0533\u0534\u0535\u0536\u0537\u0538\u0539\u053A\u053B\u053C\u053D\u053E\u053F\u0540\u0541\u0542\u0543\u0544\u0545\u0546\u0547\u0548\u0549\u054A\u054B\u054C\u054D\u054E\u054F\u0550\u0551\u0552\u0553\u0554\u0555\u0556\u10A0\u10A1\u10A2\u10A3\u10A4\u10A5\u10A6\u10A7\u10A8\u10A9\u10AA\u10AB\u10AC\u10AD\u10AE\u10AF\u10B0\u10B1\u10B2\u10B3\u10B4\u10B5\u10B6\u10B7\u10B8\u10B9\u10BA\u10BB\u10BC\u10BD\u10BE\u10BF\u10C0\u10C1\u10C2\u10C3\u10C4\u10C5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08\u1F09\u1F0A\u1F0B\u1F0C\u1F0D\u1F0E\u1F0F\u1F18\u1F19\u1F1A\u1F1B\u1F1C\u1F1D\u1F28\u1F29\u1F2A\u1F2B\u1F2C\u1F2D\u1F2E\u1F2F\u1F38\u1F39\u1F3A\u1F3B\u1F3C\u1F3D\u1F3E\u1F3F\u1F48\u1F49\u1F4A\u1F4B\u1F4C\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68\u1F69\u1F6A\u1F6B\u1F6C\u1F6D\u1F6E\u1F6F\u1FB8\u1FB9\u1FBA\u1FBB\u1FC8\u1FC9\u1FCA\u1FCB\u1FD8\u1FD9\u1FDA\u1FDB\u1FE8\u1FE9\u1FEA\u1FEB\u1FEC\u1FF8\u1FF9\u1FFA\u1FFB\u2102\u2107\u210B\u210C\u210D\u2110\u2111\u2112\u2115\u2119\u211A\u211B\u211C\u211D\u2124\u2126\u2128\u212A\u212B\u212C\u212D\u2130\u2131\u2132\u2133\u213E\u213F\u2145\u2183\u2C00\u2C01\u2C02\u2C03\u2C04\u2C05\u2C06\u2C07\u2C08\u2C09\u2C0A\u2C0B\u2C0C\u2C0D\u2C0E\u2C0F\u2C10\u2C11\u2C12\u2C13\u2C14\u2C15\u2C16\u2C17\u2C18\u2C19\u2C1A\u2C1B\u2C1C\u2C1D\u2C1E\u2C1F\u2C20\u2C21\u2C22\u2C23\u2C24\u2C25\u2C26\u2C27\u2C28\u2C29\u2C2A\u2C2B\u2C2C\u2C2D\u2C2E\u2C60\u2C62\u2C63\u2C64\u2C67\u2C69\u2C6B\u2C6D\u2C6E\u2C6F\u2C72\u2C75\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uFF21\uFF22\uFF23\uFF24\uFF25\uFF26\uFF27\uFF28\uFF29\uFF2A\uFF2B\uFF2C\uFF2D\uFF2E\uFF2F\uFF30\uFF31\uFF32\uFF33\uFF34\uFF35\uFF36\uFF37\uFF38\uFF39\uFF3A/;
  // Decimal number.
  unicode.Nd = /\u0030\u0031\u0032\u0033\u0034\u0035\u0036\u0037\u0038\u0039\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9\u07C0\u07C1\u07C2\u07C3\u07C4\u07C5\u07C6\u07C7\u07C8\u07C9\u0966\u0967\u0968\u0969\u096A\u096B\u096C\u096D\u096E\u096F\u09E6\u09E7\u09E8\u09E9\u09EA\u09EB\u09EC\u09ED\u09EE\u09EF\u0A66\u0A67\u0A68\u0A69\u0A6A\u0A6B\u0A6C\u0A6D\u0A6E\u0A6F\u0AE6\u0AE7\u0AE8\u0AE9\u0AEA\u0AEB\u0AEC\u0AED\u0AEE\u0AEF\u0B66\u0B67\u0B68\u0B69\u0B6A\u0B6B\u0B6C\u0B6D\u0B6E\u0B6F\u0BE6\u0BE7\u0BE8\u0BE9\u0BEA\u0BEB\u0BEC\u0BED\u0BEE\u0BEF\u0C66\u0C67\u0C68\u0C69\u0C6A\u0C6B\u0C6C\u0C6D\u0C6E\u0C6F\u0CE6\u0CE7\u0CE8\u0CE9\u0CEA\u0CEB\u0CEC\u0CED\u0CEE\u0CEF\u0D66\u0D67\u0D68\u0D69\u0D6A\u0D6B\u0D6C\u0D6D\u0D6E\u0D6F\u0E50\u0E51\u0E52\u0E53\u0E54\u0E55\u0E56\u0E57\u0E58\u0E59\u0ED0\u0ED1\u0ED2\u0ED3\u0ED4\u0ED5\u0ED6\u0ED7\u0ED8\u0ED9\u0F20\u0F21\u0F22\u0F23\u0F24\u0F25\u0F26\u0F27\u0F28\u0F29\u1040\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1090\u1091\u1092\u1093\u1094\u1095\u1096\u1097\u1098\u1099\u17E0\u17E1\u17E2\u17E3\u17E4\u17E5\u17E6\u17E7\u17E8\u17E9\u1810\u1811\u1812\u1813\u1814\u1815\u1816\u1817\u1818\u1819\u1946\u1947\u1948\u1949\u194A\u194B\u194C\u194D\u194E\u194F\u19D0\u19D1\u19D2\u19D3\u19D4\u19D5\u19D6\u19D7\u19D8\u19D9\u1B50\u1B51\u1B52\u1B53\u1B54\u1B55\u1B56\u1B57\u1B58\u1B59\u1BB0\u1BB1\u1BB2\u1BB3\u1BB4\u1BB5\u1BB6\u1BB7\u1BB8\u1BB9\u1C40\u1C41\u1C42\u1C43\u1C44\u1C45\u1C46\u1C47\u1C48\u1C49\u1C50\u1C51\u1C52\u1C53\u1C54\u1C55\u1C56\u1C57\u1C58\u1C59\uA620\uA621\uA622\uA623\uA624\uA625\uA626\uA627\uA628\uA629\uA8D0\uA8D1\uA8D2\uA8D3\uA8D4\uA8D5\uA8D6\uA8D7\uA8D8\uA8D9\uA900\uA901\uA902\uA903\uA904\uA905\uA906\uA907\uA908\uA909\uAA50\uAA51\uAA52\uAA53\uAA54\uAA55\uAA56\uAA57\uAA58\uAA59\uFF10\uFF11\uFF12\uFF13\uFF14\uFF15\uFF16\uFF17\uFF18\uFF19/;

  CharacterTypes['Lu'] = new RegExp('[' + unicode.Lu + ']');
  CharacterTypes['Nd'] = new RegExp('[' + unicode.Nd + ']');

  function checkNif(paramString)
  { 
    paramString = paramString.toUpperCase();
    var TAM_NIF = 9;
    var NIF_ERROR = -1;
    var NIF_ERROR_TAMANO = -2;
    var NIF_ERROR_BLANCOS = -3;
    var NIF_ERROR_CARACTERES = -4;
    var NIF_ERROR_3LETRAS = -5;
    var NIF_ERROR_DATOSENTRADA = -6;
    var CIF_ERROR_DC = -10;
    var NIF_ERROR_DC = -11;
    var NIF_ERROR_NUM = -12;
    var NIF_ERROR_DOSNUM = -13;
    var DNI_ERROR_MAX = -20;
    var DNI_ERROR_VALOR = -21;
    var DNI_OK = 0;
    var NIF_OK = 1;
    var NIF_NORESIDENTES = 2;
    var NIF_MENORES14ANOS = 3;
    var NIF_EXTRANJEROS = 4;
    var CIF_OK = 20;
    var CIF_EXTRANJERO_OK = 21;
    var CIF_ORGANIZACION_OK = 22;
    var CIF_NORESIDENTES_OK = 23;
    var Numeros = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
    var Letras = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z' ];
    var LetrasNIF = [ 'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E' ];
    var Letras2CIF = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' ];
    var LetrasCIF = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'U', 'V' ];
    var LetrasCIFORG_Y_EXTR = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'P', 'Q', 'S', 'N', 'W', 'R' ];
    var LetrasREGATRIBRENTAS = [ 'E', 'G', 'H', 'J', 'U', 'V' ];
    var LetrasCIFEXT = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'N', 'W' ];
    var LetrasNIFEXT = [ 'X', 'Y', 'Z' ];

    if ((paramString == null) || (paramString.length != 9)) {
      return -1;
    }

    var str = null;
    var j = 0;
    var k = 0;
    var l1 = 0;
    var l2 = 0;
    paramString = paramString.replace(/^\s+|\s+$/g, '');
    if (paramString.length != 9) {
      return -2;
    }
    var m = 0;
    var n = 0;
    var i1 = 0;
    var i2 = 0;
    var i3 = 0;
    var arrayOfChar = paramString.split('');
    for (var i = 0; i < 9; i++)
    {
      var c = arrayOfChar[i];
      
      if (CharacterTypes.Lu.test(c) && (i1 == 0))
      {
        i1++;
        m = c;
        i2 = i;
      }
      else if (CharacterTypes.Lu.test(c) && (i1 == 1))
      {
        i1++;
        n = c;
        i3 = i;
      }
      else
      {
        if (CharacterTypes.Lu.test(c) && (i1 == 2)) {
          return -5;
        }
        if (!CharacterTypes.Nd.test(c)) {
          return -4;
        }
      }
    }
    var localObject;
    if (i1 == 0)
    {
      if (arrayOfChar[0] != '0') {
        return -20;
      }
      localObject = paramString.substring(1);
      if (localObject == "11111111" || localObject == "22222222" || localObject == "33333333" || localObject == "44444444" || localObject == "55555555" || localObject == "66666666" || localObject == "77777777" || localObject == "88888888" || localObject == "99999999" || localObject == "00000000") {
        return -21;
      }
      return 0;
    }
    if ((i1 == 1) && (caracEnCad(LetrasCIF, arrayOfChar[i2])) && (i2 == 0) && !isNaN(parseInt(arrayOfChar[8])))
    {
      for (i = 1; i < 8; i++) {
        if ((i == 2) || (i == 4) || (i == 6))
        {
          k += arrayOfChar[i] - '0';
        }
        else
        {
          j = (arrayOfChar[i] - '0') * 2;
          if (j > 9) {
            j -= 9;
          }
          k += j;
        }
      }
      k = 10 - k % 10;
      if (k == 10) {
        k = 0;
      }
      if (k == arrayOfChar[i] - '0')
      {
        if (caracEnCad(LetrasREGATRIBRENTAS, arrayOfChar[i2])) {
          return 23;
        }
        return 20;
      }
      return -10;
    }
    if ((i1 == 2) && (caracEnCad(LetrasCIFORG_Y_EXTR, arrayOfChar[i2])) && (i2 == 0) && (i3 == 8) && (caracEnCad(Letras2CIF, arrayOfChar[i3])))
    {
      for (i = 1; i < 8; i++) {
        if ((i == 2) || (i == 4) || (i == 6))
        {
          k += arrayOfChar[i] - '0';
        }
        else
        {
          j = (arrayOfChar[i] - '0') * 2;
          if (j > 9) {
            j -= 9;
          }
          k += j;
        }
      }
      k = 10 - k % 10;
      if (Letras2CIF[(k - 1)] == arrayOfChar[i3])
      {
        if (caracEnCad(LetrasCIFEXT, arrayOfChar[i2])) {
          return 21;
        }
        return 22;
      }
      return -10;
    }
    if ((i1 == 1) && (caracEnCad(Letras, arrayOfChar[8])) && (caracEnCad(LetrasNIF, arrayOfChar[i2])) && (i2 == 8))
    {
      localObject = paramString.substring(0, i2);
      l1 = parseInt(localObject.toString());
      l2 = l1 % 23;
      if (l2 + 1 > 23) {
        return -12;
      }
      if (m == LetrasNIF[l2])
      {
        if ( paramString == "00000001R" || paramString == "00000000T" || paramString == "99999999R") {
          return -1;
        }
        return 1;
      }
      return -11;
    }
    if ((i1 == 2) && ((arrayOfChar[0] == 'K') || (arrayOfChar[0] == 'L') || (arrayOfChar[0] == 'M')) && (caracEnCad(LetrasNIF, arrayOfChar[i3])) && (i3 == 8))
    {
      str = paramString.substring(1, 3);
      if ((!caracEnCad(Numeros, str.charAt(0))) || (!caracEnCad(Numeros, str.charAt(1)))) {
        return -13;
      }
      i = Integer.parseInt(str);
      if ((i < 1) || (i > 56)) {
        return -1;
      }
      str = paramString.substring(1, i3);
      l1 = parseInt(str);
      l2 = l1 % 23;
      l2 += 1;
      if (l2 > 23) {
        return -12;
      }
      if (n == LetrasNIF[((int)(l2 - 1))]) {
        return 2;
      }
      return -11;
    }
    if (paramString == "X0000000T") {
      return -1;
    }
    if ((i1 == 2) && (caracEnCad(LetrasNIFEXT, arrayOfChar[0])) && (caracEnCad(LetrasNIF, arrayOfChar[i3])) && (i3 == 8))
    {
      str = paramString.substring(1, i3);
      l1 = parseInt(str);
      if (arrayOfChar[0] == 'Y') {
        l1 += 10000000;
      } else if (arrayOfChar[0] == 'Z') {
        l1 += 20000000;
      }
      l2 = l1 % 23;
      l2 += 1;
      if (l2 > 23) {
        return -12;
      }
      if (n == LetrasNIF[(l2 - 1)]) {
        return 4;
      }
      return -11;
    }
    return -1;
  }
  
  function caracEnCad(paramArrayOfChar, paramChar)
  {
    var bool = false;
    i = paramArrayOfChar.length;
    for (j = 0; j < i; j++) {
      if (paramArrayOfChar[j] == paramChar)
      {
        bool = true;
        break;
      }
    }
    return bool;
  }