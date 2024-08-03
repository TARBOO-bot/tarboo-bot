const _0x29ee74 = function () {
  let _0x24ff19 = true;
  return function (_0x4a1dcc, _0x5ab5b6) {
    const _0x4cdb71 = _0x24ff19 ? function () {
      if (_0x5ab5b6) {
        const _0x5495f7 = _0x5ab5b6.apply(_0x4a1dcc, arguments);
        _0x5ab5b6 = null;
        return _0x5495f7;
      }
    } : function () {};
    _0x24ff19 = false;
    return _0x4cdb71;
  };
}();
const _0x1b5b7b = _0x29ee74(this, function () {
  return _0x1b5b7b.toString().search('(((.+)+)+)+$').toString().constructor(_0x1b5b7b).search("(((.+)+)+)+$");
});
_0x1b5b7b();
const _0x14f053 = function () {
  let _0x4072ca = true;
  return function (_0x2072ea, _0x20e8fb) {
    const _0x286d23 = _0x4072ca ? function () {
      if (_0x20e8fb) {
        const _0x469ba8 = _0x20e8fb.apply(_0x2072ea, arguments);
        _0x20e8fb = null;
        return _0x469ba8;
      }
    } : function () {};
    _0x4072ca = false;
    return _0x286d23;
  };
}();
const _0x3ecf4f = _0x14f053(this, function () {
  const _0x28de5e = function () {
    let _0x35983e;
    try {
      _0x35983e = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x39fa7c) {
      _0x35983e = window;
    }
    return _0x35983e;
  };
  const _0x3a9104 = _0x28de5e();
  const _0x2e1297 = _0x3a9104.console = _0x3a9104.console || {};
  const _0x2b84ff = ["log", "warn", 'info', 'error', "exception", "table", "trace"];
  for (let _0x1160de = 0x0; _0x1160de < _0x2b84ff.length; _0x1160de++) {
    const _0x31626b = _0x14f053.constructor.prototype.bind(_0x14f053);
    const _0x98c515 = _0x2b84ff[_0x1160de];
    const _0x556bac = _0x2e1297[_0x98c515] || _0x31626b;
    _0x31626b.__proto__ = _0x14f053.bind(_0x14f053);
    _0x31626b.toString = _0x556bac.toString.bind(_0x556bac);
    _0x2e1297[_0x98c515] = _0x31626b;
  }
});
_0x3ecf4f();
import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';
import { pinterest } from '@bochilteam/scraper';
const handler = async (_0x453300, {
  conn: _0x5874ea,
  text: _0x4cd215,
  usedPrefix: _0x144f21
}) => {
  const _0x30997f = await getDevice(_0x453300.key.id);
  const _0x279199 = ['caca', "سكس", 'اباحي', "مايا خليفه", 'نيك', "شاذ", "شذوذ", "polla", "porno", "porn", "gore", "cum", 'semen', "puta", "puto", "culo", "putita", "putito", "pussy", 'hentai', 'pene', "coño", "asesinato", "zoofilia", "mia khalifa", "desnudo", 'desnuda', "cuca", "chocha", "muertos", 'pornhub', 'xnxx', "xvideos", "teta", "vagina", "marsha may", "misha cross", 'sexmex', "furry", 'furro', "furra", 'xxx', "rule34", "panocha", "pedofilia", 'necrofilia', "pinga", "horny", "ass", "nude", "popo", "nsfw", "femdom", "futanari", "erofeet", "sexo", 'sex', "yuri", "ero", 'ecchi', "blowjob", "anal", 'ahegao', 'pija', 'verga', 'trasero', "violation", 'violacion', 'bdsm', "cachonda", '+18', 'cp', "mia marin", "lana rhoades", "cepesito", "hot", 'buceta', "xxx"];
  if (_0x279199.some(_0x179f5f => _0x453300.text.toLowerCase().includes(_0x179f5f))) {
    return _0x5874ea.reply(_0x453300.chat, " *استغفر ربك احسن* 😒", _0x453300);
  }
  if (!_0x4cd215) {
    throw "استخدم أمر بنترست عن طريق 🔎\n.بنترست eren";
  }
  if (_0x30997f !== "desktop" || _0x30997f !== "web") {
    const _0x1318a3 = await pinterest(_0x4cd215);
    var _0x45f0ef = await prepareWAMessageMedia({
      'image': {
        'url': _0x1318a3.getRandom()
      }
    }, {
      'upload': _0x5874ea.waUploadToServer
    });
    const _0x14132b = {
      'body': {
        'text': ("- الـصـوره الـمـراد الــبحث عـنـها : " + _0x4cd215).trim()
      },
      'footer': {
        'text': ("❯ ⏐ " + global.wm).trim()
      },
      'header': {
        'title': "* *الـتـحـميل مـن مـوقـع بـنـترست 📍*",
        'subtitle': '',
        'hasMediaAttachment': true,
        'imageMessage': _0x45f0ef.imageMessage
      },
      'nativeFlowMessage': {
        'buttons': [{
          'name': 'quick_reply',
          'buttonParamsJson': JSON.stringify({
            'display_text': "جيب صوره تاني",
            'id': ".pin0 " + _0x4cd215
          })
        }],
        'messageParamsJson': ''
      }
    };
    let _0x58b5db = generateWAMessageFromContent(_0x453300.chat, {
      'viewOnceMessage': {
        'message': {
          'interactiveMessage': _0x14132b
        }
      }
    }, {
      'userJid': _0x5874ea.user.jid,
      'quoted': _0x453300
    });
    _0x5874ea.relayMessage(_0x453300.chat, _0x58b5db.message, {
      'messageId': _0x58b5db.key.id
    });
  } else {
    _0x5874ea.sendFile(_0x453300.chat, "JoAnimi•Error.jpg", _0x453300);
  }
};
handler.help = ['pin'];
handler.tags = ["For Test"];
handler.command = /^(pin0|بنترست)$/i;
export default handler;