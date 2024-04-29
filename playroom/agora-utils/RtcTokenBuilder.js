console.log("Loading Agora's RtcTokenBuilder (fixed)"); 
var crypto = 'use strict';function _0x377d(){const _0x582fa7=['internal/errors','getRandomValues','pseudoRandomBytes','constants','internal/crypto/diffiehellman','internal/crypto/cipher','crypto.Hash\x20constructor\x20is\x20deprecated.','internal/crypto/util','2342190HWxwdl','--pending-deprecation','5poOHXT','rng','internal/worker','internal/crypto/scrypt','DEP0179','internal/crypto/keys','internal/crypto/pbkdf2','--force-fips','internal/options','763252rkfCyR','DEP0115','ownsProcessState','crypto','crypto.','--tls-cipher-list','defaultCipherList','internal/crypto/hkdf','\x20is\x20deprecated.','284GZyOOB','7939488gVuxoj','594090PVKcWy','194571xSEHyj','2433snsqzs','crypto.Hmac\x20constructor\x20is\x20deprecated.','1569360lLkfaM','prng','internal/crypto/certificate','subtle','codes'];_0x377d=function(){return _0x582fa7;};return _0x377d();}const _0x291edb=_0x26c9;(function(_0xbc5882,_0x1d9b4e){const _0x63ac6=_0x26c9,_0x3485f5=_0xbc5882();while(!![]){try{const _0x4aea5c=-parseInt(_0x63ac6(0x1b3))/0x1+parseInt(_0x63ac6(0x19b))/0x2+parseInt(_0x63ac6(0x199))/0x3*(parseInt(_0x63ac6(0x1bc))/0x4)+parseInt(_0x63ac6(0x1aa))/0x5*(-parseInt(_0x63ac6(0x1a8))/0x6)+-parseInt(_0x63ac6(0x1be))/0x7+parseInt(_0x63ac6(0x1bd))/0x8+-parseInt(_0x63ac6(0x198))/0x9;if(_0x4aea5c===_0x1d9b4e)break;else _0x3485f5['push'](_0x3485f5['shift']());}catch(_0x35ada4){_0x3485f5['push'](_0x3485f5['shift']());}}}(_0x377d,0x8c47f));const {ObjectDefineProperty,ObjectDefineProperties}=primordials,{assertCrypto,deprecate}=require('internal/util');assertCrypto();const {ERR_CRYPTO_FIPS_FORCED,ERR_WORKER_UNSUPPORTED_OPERATION}=require(_0x291edb(0x1a0))[_0x291edb(0x19f)],constants=internalBinding(_0x291edb(0x1a3))['crypto'],{getOptionValue}=require(_0x291edb(0x1b2)),{getFipsCrypto,setFipsCrypto,timingSafeEqual}=internalBinding(_0x291edb(0x1b6)),{checkPrime,checkPrimeSync,generatePrime,generatePrimeSync,randomBytes,randomFill,randomFillSync,randomInt,randomUUID}=require('internal/crypto/random'),{pbkdf2,pbkdf2Sync}=require(_0x291edb(0x1b0)),{scrypt,scryptSync}=require(_0x291edb(0x1ad)),{hkdf,hkdfSync}=require(_0x291edb(0x1ba)),{generateKeyPair,generateKeyPairSync,generateKey,generateKeySync}=require('internal/crypto/keygen'),{createSecretKey,createPublicKey,createPrivateKey,KeyObject}=require(_0x291edb(0x1af)),{DiffieHellman,DiffieHellmanGroup,ECDH,diffieHellman}=require(_0x291edb(0x1a4)),{Cipher,Cipheriv,Decipher,Decipheriv,privateDecrypt,privateEncrypt,publicDecrypt,publicEncrypt,getCipherInfo}=require(_0x291edb(0x1a5)),{Sign,signOneShot,Verify,verifyOneShot}=require('internal/crypto/sig'),{Hash,Hmac,hash}=require('internal/crypto/hash'),{X509Certificate}=require('internal/crypto/x509'),{getCiphers,getCurves,getHashes,setEngine,secureHeapUsed}=require(_0x291edb(0x1a7)),Certificate=require(_0x291edb(0x19d));let webcrypto;function lazyWebCrypto(){return webcrypto??=require('internal/crypto/webcrypto'),webcrypto;}let ownsProcessState;function lazyOwnsProcessState(){const _0x49ce90=_0x291edb;return ownsProcessState??=require(_0x49ce90(0x1ac))[_0x49ce90(0x1b5)],ownsProcessState;}function createHash(_0x56577c,_0x2610d4){return new Hash(_0x56577c,_0x2610d4);}function createCipheriv(_0x2c3e81,_0x57397c,_0x3f2604,_0x470f54){return new Cipheriv(_0x2c3e81,_0x57397c,_0x3f2604,_0x470f54);}function createDecipheriv(_0xf51981,_0x20bd47,_0x2a2909,_0x1de5ca){return new Decipheriv(_0xf51981,_0x20bd47,_0x2a2909,_0x1de5ca);}function createDiffieHellman(_0x53e6f4,_0x5a3b24,_0xa82e54,_0x382968){return new DiffieHellman(_0x53e6f4,_0x5a3b24,_0xa82e54,_0x382968);}function createDiffieHellmanGroup(_0x2ebd94){return new DiffieHellmanGroup(_0x2ebd94);}function createECDH(_0x22a37f){return new ECDH(_0x22a37f);}function createHmac(_0x479b0a,_0x4396b7,_0x32b240){return new Hmac(_0x479b0a,_0x4396b7,_0x32b240);}function createSign(_0x105e5b,_0x5f3aec){return new Sign(_0x105e5b,_0x5f3aec);}function createVerify(_0x2e0663,_0x5ec80d){return new Verify(_0x2e0663,_0x5ec80d);}module['exports']={'checkPrime':checkPrime,'checkPrimeSync':checkPrimeSync,'createCipheriv':createCipheriv,'createDecipheriv':createDecipheriv,'createDiffieHellman':createDiffieHellman,'createDiffieHellmanGroup':createDiffieHellmanGroup,'createECDH':createECDH,'createHash':createHash,'createHmac':createHmac,'createPrivateKey':createPrivateKey,'createPublicKey':createPublicKey,'createSecretKey':createSecretKey,'createSign':createSign,'createVerify':createVerify,'diffieHellman':diffieHellman,'generatePrime':generatePrime,'generatePrimeSync':generatePrimeSync,'getCiphers':getCiphers,'getCipherInfo':getCipherInfo,'getCurves':getCurves,'getDiffieHellman':createDiffieHellmanGroup,'getHashes':getHashes,'hkdf':hkdf,'hkdfSync':hkdfSync,'pbkdf2':pbkdf2,'pbkdf2Sync':pbkdf2Sync,'generateKeyPair':generateKeyPair,'generateKeyPairSync':generateKeyPairSync,'generateKey':generateKey,'generateKeySync':generateKeySync,'privateDecrypt':privateDecrypt,'privateEncrypt':privateEncrypt,'publicDecrypt':publicDecrypt,'publicEncrypt':publicEncrypt,'randomBytes':randomBytes,'randomFill':randomFill,'randomFillSync':randomFillSync,'randomInt':randomInt,'randomUUID':randomUUID,'scrypt':scrypt,'scryptSync':scryptSync,'sign':signOneShot,'setEngine':setEngine,'timingSafeEqual':timingSafeEqual,'getFips':getFips,'setFips':setFips,'verify':verifyOneShot,'hash':hash,'Certificate':Certificate,'Cipher':Cipher,'Cipheriv':Cipheriv,'Decipher':Decipher,'Decipheriv':Decipheriv,'DiffieHellman':DiffieHellman,'DiffieHellmanGroup':DiffieHellmanGroup,'ECDH':ECDH,'Hash':deprecate(Hash,_0x291edb(0x1a6),_0x291edb(0x1ae)),'Hmac':deprecate(Hmac,_0x291edb(0x19a),'DEP0181'),'KeyObject':KeyObject,'Sign':Sign,'Verify':Verify,'X509Certificate':X509Certificate,'secureHeapUsed':secureHeapUsed};function getFips(){const _0x3dab3e=_0x291edb;return getOptionValue(_0x3dab3e(0x1b1))?0x1:getFipsCrypto();}function setFips(_0x1a792b){if(getOptionValue('--force-fips')){if(_0x1a792b)return;throw new ERR_CRYPTO_FIPS_FORCED();}else{if(!lazyOwnsProcessState())throw new ERR_WORKER_UNSUPPORTED_OPERATION('Calling\x20crypto.setFips()');setFipsCrypto(_0x1a792b);}}function getRandomValues(_0x52ba24){const _0x30a59b=_0x291edb;return lazyWebCrypto()[_0x30a59b(0x1b6)][_0x30a59b(0x1a1)](_0x52ba24);}ObjectDefineProperty(constants,_0x291edb(0x1b9),{'__proto__':null,'get'(){const _0x329ecb=_0x291edb,_0x2e424b=getOptionValue(_0x329ecb(0x1b8));return ObjectDefineProperty(this,_0x329ecb(0x1b9),{'__proto__':null,'writable':!![],'configurable':!![],'enumerable':!![],'value':_0x2e424b}),_0x2e424b;},'set'(_0x3e5c2a){const _0x473276=_0x291edb;ObjectDefineProperty(this,_0x473276(0x1b9),{'__proto__':null,'writable':!![],'configurable':!![],'enumerable':!![],'value':_0x3e5c2a});},'configurable':!![],'enumerable':!![]});function getRandomBytesAlias(_0x1af4b1){return{'enumerable':![],'configurable':!![],'get'(){const _0xa9571c=_0x26c9;let _0x1252c7;return getOptionValue(_0xa9571c(0x1a9))?_0x1252c7=deprecate(randomBytes,_0xa9571c(0x1b7)+_0x1af4b1+_0xa9571c(0x1bb),_0xa9571c(0x1b4)):_0x1252c7=randomBytes,ObjectDefineProperty(this,_0x1af4b1,{'__proto__':null,'enumerable':![],'configurable':!![],'writable':!![],'value':_0x1252c7}),_0x1252c7;},'set'(_0x89150c){ObjectDefineProperty(this,_0x1af4b1,{'__proto__':null,'enumerable':!![],'configurable':!![],'writable':!![],'value':_0x89150c});}};}function _0x26c9(_0x455ea7,_0x2c48ae){const _0x377d8e=_0x377d();return _0x26c9=function(_0x26c9bb,_0x499142){_0x26c9bb=_0x26c9bb-0x198;let _0x53683e=_0x377d8e[_0x26c9bb];return _0x53683e;},_0x26c9(_0x455ea7,_0x2c48ae);}ObjectDefineProperties(module['exports'],{'fips':{'__proto__':null,'get':getFips,'set':setFips},'constants':{'__proto__':null,'configurable':![],'enumerable':!![],'value':constants},'webcrypto':{'__proto__':null,'configurable':![],'enumerable':!![],'get'(){return lazyWebCrypto()['crypto'];},'set':undefined},'subtle':{'__proto__':null,'configurable':![],'enumerable':!![],'get'(){const _0x1a966c=_0x291edb;return lazyWebCrypto()[_0x1a966c(0x1b6)][_0x1a966c(0x19e)];},'set':undefined},'getRandomValues':{'__proto__':null,'configurable':![],'enumerable':!![],'get':()=>getRandomValues,'set':undefined},'prng':getRandomBytesAlias(_0x291edb(0x19c)),'pseudoRandomBytes':getRandomBytesAlias(_0x291edb(0x1a2)),'rng':getRandomBytesAlias(_0x291edb(0x1ab))});
var crc32 = function _0x2c89(_0x2d77ab,_0x222ac1){var _0x37f4d5=_0x37f4();return _0x2c89=function(_0x2c892f,_0x232453){_0x2c892f=_0x2c892f-0x11f;var _0x46a40b=_0x37f4d5[_0x2c892f];return _0x46a40b;},_0x2c89(_0x2d77ab,_0x222ac1);}(function(_0x3b5610,_0x18089d){var _0x30dda7=_0x2c89,_0x2a023d=_0x3b5610();while(!![]){try{var _0x413392=parseInt(_0x30dda7(0x12f))/0x1+-parseInt(_0x30dda7(0x12d))/0x2+-parseInt(_0x30dda7(0x125))/0x3*(parseInt(_0x30dda7(0x11f))/0x4)+parseInt(_0x30dda7(0x132))/0x5*(parseInt(_0x30dda7(0x127))/0x6)+parseInt(_0x30dda7(0x128))/0x7+-parseInt(_0x30dda7(0x123))/0x8*(parseInt(_0x30dda7(0x126))/0x9)+-parseInt(_0x30dda7(0x12c))/0xa*(-parseInt(_0x30dda7(0x130))/0xb);if(_0x413392===_0x18089d)break;else _0x2a023d['push'](_0x2a023d['shift']());}catch(_0x3d7f74){_0x2a023d['push'](_0x2a023d['shift']());}}}(_0x37f4,0x500be));var CRC32;function _0x37f4(){var _0x4e6043=['40905lzblla','8371GWwYlK','undefined','5iWPUPx','function','159312aZOUib','charCodeAt','length','str','1515576PfSejr','bstr','24vSNxYT','9jFUnvJ','2556786gviYvp','3648155BXHjPo','buf','1.2.2','subarray','2190CLvGpc','637838FwnekU','object'];_0x37f4=function(){return _0x4e6043;};return _0x37f4();}(function(_0x167549){var _0x1bb663=_0x2c89;if(typeof DO_NOT_EXPORT_CRC===_0x1bb663(0x131)){if(_0x1bb663(0x12e)===typeof exports)_0x167549(exports);else _0x1bb663(0x133)===typeof define&&define['amd']?define(function(){var _0x264efa={};return _0x167549(_0x264efa),_0x264efa;}):_0x167549(CRC32={});}else _0x167549(CRC32={});}(function(_0x3820a6){var _0x3762a4=_0x2c89;_0x3820a6['version']=_0x3762a4(0x12a);function _0x49bad8(){var _0x46d7c0=_0x3762a4,_0x21be21=0x0,_0x4d2f9c=new Array(0x100);for(var _0x51f0eb=0x0;_0x51f0eb!=0x100;++_0x51f0eb){_0x21be21=_0x51f0eb,_0x21be21=_0x21be21&0x1?-0x12477ce0^_0x21be21>>>0x1:_0x21be21>>>0x1,_0x21be21=_0x21be21&0x1?-0x12477ce0^_0x21be21>>>0x1:_0x21be21>>>0x1,_0x21be21=_0x21be21&0x1?-0x12477ce0^_0x21be21>>>0x1:_0x21be21>>>0x1,_0x21be21=_0x21be21&0x1?-0x12477ce0^_0x21be21>>>0x1:_0x21be21>>>0x1,_0x21be21=_0x21be21&0x1?-0x12477ce0^_0x21be21>>>0x1:_0x21be21>>>0x1,_0x21be21=_0x21be21&0x1?-0x12477ce0^_0x21be21>>>0x1:_0x21be21>>>0x1,_0x21be21=_0x21be21&0x1?-0x12477ce0^_0x21be21>>>0x1:_0x21be21>>>0x1,_0x21be21=_0x21be21&0x1?-0x12477ce0^_0x21be21>>>0x1:_0x21be21>>>0x1,_0x4d2f9c[_0x51f0eb]=_0x21be21;}return typeof Int32Array!==_0x46d7c0(0x131)?new Int32Array(_0x4d2f9c):_0x4d2f9c;}var _0x5aa923=_0x49bad8();function _0x145f47(_0x23be66){var _0x27a3c0=_0x3762a4,_0x447a3d=0x0,_0x8c8922=0x0,_0x23ce8a=0x0,_0x9d5045=typeof Int32Array!==_0x27a3c0(0x131)?new Int32Array(0x1000):new Array(0x1000);for(_0x23ce8a=0x0;_0x23ce8a!=0x100;++_0x23ce8a)_0x9d5045[_0x23ce8a]=_0x23be66[_0x23ce8a];for(_0x23ce8a=0x0;_0x23ce8a!=0x100;++_0x23ce8a){_0x8c8922=_0x23be66[_0x23ce8a];for(_0x447a3d=0x100+_0x23ce8a;_0x447a3d<0x1000;_0x447a3d+=0x100)_0x8c8922=_0x9d5045[_0x447a3d]=_0x8c8922>>>0x8^_0x23be66[_0x8c8922&0xff];}var _0x18d83c=[];for(_0x23ce8a=0x1;_0x23ce8a!=0x10;++_0x23ce8a)_0x18d83c[_0x23ce8a-0x1]=typeof Int32Array!==_0x27a3c0(0x131)?_0x9d5045[_0x27a3c0(0x12b)](_0x23ce8a*0x100,_0x23ce8a*0x100+0x100):_0x9d5045['slice'](_0x23ce8a*0x100,_0x23ce8a*0x100+0x100);return _0x18d83c;}var _0x3dd71b=_0x145f47(_0x5aa923),_0x10c5ac=_0x3dd71b[0x0],_0x55ea4a=_0x3dd71b[0x1],_0x438188=_0x3dd71b[0x2],_0x1d0cbc=_0x3dd71b[0x3],_0x3c1828=_0x3dd71b[0x4],_0xf06f22=_0x3dd71b[0x5],_0x72f96c=_0x3dd71b[0x6],_0x346f46=_0x3dd71b[0x7],_0x1c3a05=_0x3dd71b[0x8],_0x3f2727=_0x3dd71b[0x9],_0x3438b9=_0x3dd71b[0xa],_0x327eef=_0x3dd71b[0xb],_0x578b9a=_0x3dd71b[0xc],_0x2180ac=_0x3dd71b[0xd],_0x3aa061=_0x3dd71b[0xe];function _0x16ac37(_0x45f392,_0x2ba456){var _0x29352b=_0x3762a4,_0x54792e=_0x2ba456^-0x1;for(var _0x42982d=0x0,_0x2be14c=_0x45f392[_0x29352b(0x121)];_0x42982d<_0x2be14c;)_0x54792e=_0x54792e>>>0x8^_0x5aa923[(_0x54792e^_0x45f392['charCodeAt'](_0x42982d++))&0xff];return~_0x54792e;}function _0x32cbaa(_0x3047d3,_0x5c8336){var _0x436532=_0x3762a4,_0x1ccd85=_0x5c8336^-0x1,_0x10db67=_0x3047d3[_0x436532(0x121)]-0xf,_0x279557=0x0;for(;_0x279557<_0x10db67;)_0x1ccd85=_0x3aa061[_0x3047d3[_0x279557++]^_0x1ccd85&0xff]^_0x2180ac[_0x3047d3[_0x279557++]^_0x1ccd85>>0x8&0xff]^_0x578b9a[_0x3047d3[_0x279557++]^_0x1ccd85>>0x10&0xff]^_0x327eef[_0x3047d3[_0x279557++]^_0x1ccd85>>>0x18]^_0x3438b9[_0x3047d3[_0x279557++]]^_0x3f2727[_0x3047d3[_0x279557++]]^_0x1c3a05[_0x3047d3[_0x279557++]]^_0x346f46[_0x3047d3[_0x279557++]]^_0x72f96c[_0x3047d3[_0x279557++]]^_0xf06f22[_0x3047d3[_0x279557++]]^_0x3c1828[_0x3047d3[_0x279557++]]^_0x1d0cbc[_0x3047d3[_0x279557++]]^_0x438188[_0x3047d3[_0x279557++]]^_0x55ea4a[_0x3047d3[_0x279557++]]^_0x10c5ac[_0x3047d3[_0x279557++]]^_0x5aa923[_0x3047d3[_0x279557++]];_0x10db67+=0xf;while(_0x279557<_0x10db67)_0x1ccd85=_0x1ccd85>>>0x8^_0x5aa923[(_0x1ccd85^_0x3047d3[_0x279557++])&0xff];return~_0x1ccd85;}function _0x3a377d(_0x562b32,_0xce332d){var _0x1036db=_0x3762a4,_0x4d8990=_0xce332d^-0x1;for(var _0x15a405=0x0,_0x4e8466=_0x562b32['length'],_0x597186=0x0,_0x2a0fd9=0x0;_0x15a405<_0x4e8466;){_0x597186=_0x562b32['charCodeAt'](_0x15a405++);if(_0x597186<0x80)_0x4d8990=_0x4d8990>>>0x8^_0x5aa923[(_0x4d8990^_0x597186)&0xff];else{if(_0x597186<0x800)_0x4d8990=_0x4d8990>>>0x8^_0x5aa923[(_0x4d8990^(0xc0|_0x597186>>0x6&0x1f))&0xff],_0x4d8990=_0x4d8990>>>0x8^_0x5aa923[(_0x4d8990^(0x80|_0x597186&0x3f))&0xff];else _0x597186>=0xd800&&_0x597186<0xe000?(_0x597186=(_0x597186&0x3ff)+0x40,_0x2a0fd9=_0x562b32[_0x1036db(0x120)](_0x15a405++)&0x3ff,_0x4d8990=_0x4d8990>>>0x8^_0x5aa923[(_0x4d8990^(0xf0|_0x597186>>0x8&0x7))&0xff],_0x4d8990=_0x4d8990>>>0x8^_0x5aa923[(_0x4d8990^(0x80|_0x597186>>0x2&0x3f))&0xff],_0x4d8990=_0x4d8990>>>0x8^_0x5aa923[(_0x4d8990^(0x80|_0x2a0fd9>>0x6&0xf|(_0x597186&0x3)<<0x4))&0xff],_0x4d8990=_0x4d8990>>>0x8^_0x5aa923[(_0x4d8990^(0x80|_0x2a0fd9&0x3f))&0xff]):(_0x4d8990=_0x4d8990>>>0x8^_0x5aa923[(_0x4d8990^(0xe0|_0x597186>>0xc&0xf))&0xff],_0x4d8990=_0x4d8990>>>0x8^_0x5aa923[(_0x4d8990^(0x80|_0x597186>>0x6&0x3f))&0xff],_0x4d8990=_0x4d8990>>>0x8^_0x5aa923[(_0x4d8990^(0x80|_0x597186&0x3f))&0xff]);}}return~_0x4d8990;}_0x3820a6['table']=_0x5aa923,_0x3820a6[_0x3762a4(0x124)]=_0x16ac37,_0x3820a6[_0x3762a4(0x129)]=_0x32cbaa,_0x3820a6[_0x3762a4(0x122)]=_0x3a377d;}));
var UINT32 = (function(_0x44d754,_0x4533d5){var _0x48d96c=_0x169d,_0x1c4653=_0x44d754();while(!![]){try{var _0x132260=-parseInt(_0x48d96c(0x13b))/0x1+parseInt(_0x48d96c(0x152))/0x2*(-parseInt(_0x48d96c(0x138))/0x3)+parseInt(_0x48d96c(0x146))/0x4*(parseInt(_0x48d96c(0x144))/0x5)+parseInt(_0x48d96c(0x14a))/0x6+parseInt(_0x48d96c(0x14f))/0x7+parseInt(_0x48d96c(0x13e))/0x8*(-parseInt(_0x48d96c(0x153))/0x9)+-parseInt(_0x48d96c(0x157))/0xa*(parseInt(_0x48d96c(0x14b))/0xb);if(_0x132260===_0x4533d5)break;else _0x1c4653['push'](_0x1c4653['shift']());}catch(_0x50822e){_0x1c4653['push'](_0x1c4653['shift']());}}}(_0x5aea,0xdeda5));;function _0x169d(_0x16d13c,_0x3c608a){var _0x5aeae9=_0x5aea();return _0x169d=function(_0x169d77,_0x100824){_0x169d77=_0x169d77-0x136;var _0x1b850d=_0x5aeae9[_0x169d77];return _0x1b850d;},_0x169d(_0x16d13c,_0x3c608a);}function _0x5aea(){var _0x1ed518=['1540191CFOISt','add','shiftLeft','8okvrgI','rotl','rotr','subtract','fromString','_high','3205sPfGgC','undefined','7436hGSaZh','_low','rotateRight','toString','8413860Panmwh','5900653sYGbCI','shiftl','amd','remainder','12322800pgkKgL','string','shiftRight','582ercmCn','2196441MCScSN','div','lessThan','fromBits','30ErTlOp','clone','UINT32','fromNumber','toNumber','call','pow','xor','exports','and','495VtEmYc','prototype','negate'];_0x5aea=function(){return _0x1ed518;};return _0x5aea();}(function(_0x247c56){var _0x5ae8ae=_0x169d,_0x4d417e={0x24:_0x16febb(Math['pow'](0x24,0x5)),0x10:_0x16febb(Math[_0x5ae8ae(0x15d)](0x10,0x7)),0xa:_0x16febb(Math[_0x5ae8ae(0x15d)](0xa,0x9)),0x2:_0x16febb(Math[_0x5ae8ae(0x15d)](0x2,0x1e))},_0xcd132b={0x24:_0x16febb(0x24),0x10:_0x16febb(0x10),0xa:_0x16febb(0xa),0x2:_0x16febb(0x2)};function _0x16febb(_0x2fa3dc,_0x3870b9){var _0x43fd8c=_0x5ae8ae;if(!(this instanceof _0x16febb))return new _0x16febb(_0x2fa3dc,_0x3870b9);this['_low']=0x0,this[_0x43fd8c(0x143)]=0x0,this[_0x43fd8c(0x14e)]=null;if(typeof _0x3870b9=='undefined')return _0x18a2d7[_0x43fd8c(0x15c)](this,_0x2fa3dc);if(typeof _0x2fa3dc==_0x43fd8c(0x150))return _0x1f90fa[_0x43fd8c(0x15c)](this,_0x2fa3dc,_0x3870b9);_0x1bff51['call'](this,_0x2fa3dc,_0x3870b9);}function _0x1bff51(_0xb9554c,_0x48d3f9){return this['_low']=_0xb9554c|0x0,this['_high']=_0x48d3f9|0x0,this;}_0x16febb[_0x5ae8ae(0x139)][_0x5ae8ae(0x156)]=_0x1bff51;function _0x18a2d7(_0x559e09){var _0x3e0b7f=_0x5ae8ae;return this[_0x3e0b7f(0x147)]=_0x559e09&0xffff,this[_0x3e0b7f(0x143)]=_0x559e09>>>0x10,this;}_0x16febb[_0x5ae8ae(0x139)][_0x5ae8ae(0x15a)]=_0x18a2d7;function _0x1f90fa(_0x4b3bc5,_0x3318e2){var _0x7e39cc=_0x5ae8ae,_0xec4b2d=parseInt(_0x4b3bc5,_0x3318e2||0xa);return this['_low']=_0xec4b2d&0xffff,this[_0x7e39cc(0x143)]=_0xec4b2d>>>0x10,this;}_0x16febb[_0x5ae8ae(0x139)][_0x5ae8ae(0x142)]=_0x1f90fa,_0x16febb[_0x5ae8ae(0x139)]['toNumber']=function(){var _0x332e3e=_0x5ae8ae;return this[_0x332e3e(0x143)]*0x10000+this['_low'];},_0x16febb[_0x5ae8ae(0x139)][_0x5ae8ae(0x149)]=function(_0x37e31e){var _0x5c2808=_0x5ae8ae;return this[_0x5c2808(0x15b)]()[_0x5c2808(0x149)](_0x37e31e||0xa);},_0x16febb[_0x5ae8ae(0x139)]['add']=function(_0xda235b){var _0x17aee6=_0x5ae8ae,_0x505624=this[_0x17aee6(0x147)]+_0xda235b[_0x17aee6(0x147)],_0x3d7ff7=_0x505624>>>0x10;return _0x3d7ff7+=this['_high']+_0xda235b[_0x17aee6(0x143)],this['_low']=_0x505624&0xffff,this[_0x17aee6(0x143)]=_0x3d7ff7&0xffff,this;},_0x16febb['prototype'][_0x5ae8ae(0x141)]=function(_0x1eaf04){var _0x37f917=_0x5ae8ae;return this[_0x37f917(0x13c)](_0x1eaf04[_0x37f917(0x158)]()[_0x37f917(0x13a)]());},_0x16febb[_0x5ae8ae(0x139)]['multiply']=function(_0x33f123){var _0x2da48b=_0x5ae8ae,_0x1833c4=this[_0x2da48b(0x143)],_0x18b191=this[_0x2da48b(0x147)],_0x1669a0=_0x33f123['_high'],_0x8e5b05=_0x33f123[_0x2da48b(0x147)],_0x52a355,_0x5b9e54;return _0x5b9e54=_0x18b191*_0x8e5b05,_0x52a355=_0x5b9e54>>>0x10,_0x52a355+=_0x1833c4*_0x8e5b05,_0x52a355&=0xffff,_0x52a355+=_0x18b191*_0x1669a0,this[_0x2da48b(0x147)]=_0x5b9e54&0xffff,this[_0x2da48b(0x143)]=_0x52a355&0xffff,this;},_0x16febb[_0x5ae8ae(0x139)][_0x5ae8ae(0x154)]=function(_0x16cb2b){var _0x8613d6=_0x5ae8ae;if(_0x16cb2b[_0x8613d6(0x147)]==0x0&&_0x16cb2b[_0x8613d6(0x143)]==0x0)throw Error('division\x20by\x20zero');if(_0x16cb2b[_0x8613d6(0x143)]==0x0&&_0x16cb2b['_low']==0x1)return this[_0x8613d6(0x14e)]=new _0x16febb(0x0),this;if(_0x16cb2b['gt'](this))return this[_0x8613d6(0x14e)]=this[_0x8613d6(0x158)](),this[_0x8613d6(0x147)]=0x0,this['_high']=0x0,this;if(this['eq'](_0x16cb2b))return this['remainder']=new _0x16febb(0x0),this['_low']=0x1,this[_0x8613d6(0x143)]=0x0,this;var _0xd45359=_0x16cb2b[_0x8613d6(0x158)](),_0x230d44=-0x1;while(!this['lt'](_0xd45359)){_0xd45359[_0x8613d6(0x13d)](0x1,!![]),_0x230d44++;}this[_0x8613d6(0x14e)]=this['clone'](),this['_low']=0x0,this['_high']=0x0;for(;_0x230d44>=0x0;_0x230d44--){_0xd45359[_0x8613d6(0x151)](0x1),!this[_0x8613d6(0x14e)]['lt'](_0xd45359)&&(this[_0x8613d6(0x14e)][_0x8613d6(0x141)](_0xd45359),_0x230d44>=0x10?this[_0x8613d6(0x143)]|=0x1<<_0x230d44-0x10:this[_0x8613d6(0x147)]|=0x1<<_0x230d44);}return this;},_0x16febb[_0x5ae8ae(0x139)][_0x5ae8ae(0x13a)]=function(){var _0xc13375=_0x5ae8ae,_0x58d300=(~this[_0xc13375(0x147)]&0xffff)+0x1;return this[_0xc13375(0x147)]=_0x58d300&0xffff,this['_high']=~this[_0xc13375(0x143)]+(_0x58d300>>>0x10)&0xffff,this;},_0x16febb[_0x5ae8ae(0x139)]['equals']=_0x16febb['prototype']['eq']=function(_0x5a6983){var _0x55ca00=_0x5ae8ae;return this[_0x55ca00(0x147)]==_0x5a6983[_0x55ca00(0x147)]&&this['_high']==_0x5a6983[_0x55ca00(0x143)];},_0x16febb[_0x5ae8ae(0x139)]['greaterThan']=_0x16febb[_0x5ae8ae(0x139)]['gt']=function(_0x18091d){var _0x72943b=_0x5ae8ae;if(this['_high']>_0x18091d['_high'])return!![];if(this['_high']<_0x18091d[_0x72943b(0x143)])return![];return this[_0x72943b(0x147)]>_0x18091d[_0x72943b(0x147)];},_0x16febb[_0x5ae8ae(0x139)][_0x5ae8ae(0x155)]=_0x16febb[_0x5ae8ae(0x139)]['lt']=function(_0x589edf){var _0x111233=_0x5ae8ae;if(this[_0x111233(0x143)]<_0x589edf['_high'])return!![];if(this[_0x111233(0x143)]>_0x589edf[_0x111233(0x143)])return![];return this[_0x111233(0x147)]<_0x589edf[_0x111233(0x147)];},_0x16febb[_0x5ae8ae(0x139)]['or']=function(_0x105af0){var _0x2a94de=_0x5ae8ae;return this['_low']|=_0x105af0[_0x2a94de(0x147)],this[_0x2a94de(0x143)]|=_0x105af0[_0x2a94de(0x143)],this;},_0x16febb['prototype'][_0x5ae8ae(0x137)]=function(_0x570f30){var _0x23f448=_0x5ae8ae;return this[_0x23f448(0x147)]&=_0x570f30['_low'],this[_0x23f448(0x143)]&=_0x570f30[_0x23f448(0x143)],this;},_0x16febb['prototype']['not']=function(){var _0x534956=_0x5ae8ae;return this[_0x534956(0x147)]=~this[_0x534956(0x147)]&0xffff,this[_0x534956(0x143)]=~this[_0x534956(0x143)]&0xffff,this;},_0x16febb['prototype'][_0x5ae8ae(0x15e)]=function(_0x3bb530){var _0x2aef34=_0x5ae8ae;return this['_low']^=_0x3bb530['_low'],this[_0x2aef34(0x143)]^=_0x3bb530[_0x2aef34(0x143)],this;},_0x16febb['prototype'][_0x5ae8ae(0x151)]=_0x16febb['prototype']['shiftr']=function(_0x1e97ed){var _0x2d664d=_0x5ae8ae;if(_0x1e97ed>0x10)this['_low']=this[_0x2d664d(0x143)]>>_0x1e97ed-0x10,this[_0x2d664d(0x143)]=0x0;else _0x1e97ed==0x10?(this[_0x2d664d(0x147)]=this[_0x2d664d(0x143)],this[_0x2d664d(0x143)]=0x0):(this[_0x2d664d(0x147)]=this[_0x2d664d(0x147)]>>_0x1e97ed|this[_0x2d664d(0x143)]<<0x10-_0x1e97ed&0xffff,this[_0x2d664d(0x143)]>>=_0x1e97ed);return this;},_0x16febb['prototype'][_0x5ae8ae(0x13d)]=_0x16febb[_0x5ae8ae(0x139)][_0x5ae8ae(0x14c)]=function(_0x175140,_0x35dea5){var _0x197bb7=_0x5ae8ae;if(_0x175140>0x10)this['_high']=this[_0x197bb7(0x147)]<<_0x175140-0x10,this[_0x197bb7(0x147)]=0x0,!_0x35dea5&&(this['_high']&=0xffff);else _0x175140==0x10?(this[_0x197bb7(0x143)]=this['_low'],this[_0x197bb7(0x147)]=0x0):(this[_0x197bb7(0x143)]=this[_0x197bb7(0x143)]<<_0x175140|this['_low']>>0x10-_0x175140,this[_0x197bb7(0x147)]=this['_low']<<_0x175140&0xffff,!_0x35dea5&&(this[_0x197bb7(0x143)]&=0xffff));return this;},_0x16febb[_0x5ae8ae(0x139)]['rotateLeft']=_0x16febb[_0x5ae8ae(0x139)][_0x5ae8ae(0x13f)]=function(_0x1d9485){var _0x4cdc48=_0x5ae8ae,_0x5dbe16=this[_0x4cdc48(0x143)]<<0x10|this[_0x4cdc48(0x147)];return _0x5dbe16=_0x5dbe16<<_0x1d9485|_0x5dbe16>>>0x20-_0x1d9485,this[_0x4cdc48(0x147)]=_0x5dbe16&0xffff,this[_0x4cdc48(0x143)]=_0x5dbe16>>>0x10,this;},_0x16febb[_0x5ae8ae(0x139)][_0x5ae8ae(0x148)]=_0x16febb['prototype'][_0x5ae8ae(0x140)]=function(_0x1a1b42){var _0x1766dc=_0x5ae8ae,_0x327427=this[_0x1766dc(0x143)]<<0x10|this[_0x1766dc(0x147)];return _0x327427=_0x327427>>>_0x1a1b42|_0x327427<<0x20-_0x1a1b42,this[_0x1766dc(0x147)]=_0x327427&0xffff,this[_0x1766dc(0x143)]=_0x327427>>>0x10,this;},_0x16febb[_0x5ae8ae(0x139)][_0x5ae8ae(0x158)]=function(){var _0x1b10c3=_0x5ae8ae;return new _0x16febb(this[_0x1b10c3(0x147)],this[_0x1b10c3(0x143)]);};if(typeof define!=_0x5ae8ae(0x145)&&define[_0x5ae8ae(0x14d)])define([],function(){return _0x16febb;});else typeof module!=_0x5ae8ae(0x145)&&module['exports']?module[_0x5ae8ae(0x136)]=_0x16febb:_0x247c56[_0x5ae8ae(0x159)]=_0x16febb;}(this));
var version = "006";
var randomInt = Math.floor(Math.random() * 0xffffffff);
VERSION_LENGTH = 3;
APP_ID_LENGTH = 32;

var AccessToken = function (appID, appCertificate, channelName, uid) {
    let token = this;
    this.appID = appID;
    this.appCertificate = appCertificate;
    this.channelName = channelName;
    this.messages = {};
    this.salt = randomInt;
    this.ts = Math.floor(new Date() / 1000) + 24 * 3600;
    if (uid === 0) {
        this.uid = "";
    } else {
        this.uid = `${uid}`;
    }

    this.build = function () {
        var m = Message({
            salt: token.salt,
            ts: token.ts,
            messages: token.messages
        }).pack();

        var toSign = Buffer.concat([Buffer.from(token.appID, "utf8"), Buffer.from(token.channelName, "utf8"), Buffer.from(token.uid, "utf8"), m]);

        var signature = encodeHMac(token.appCertificate, toSign);
        var crc_channel = UINT32(crc32.str(token.channelName)).and(UINT32(0xffffffff)).toNumber();
        var crc_uid = UINT32(crc32.str(token.uid)).and(UINT32(0xffffffff)).toNumber();
        var content = AccessTokenContent({
            signature: signature,
            crc_channel: crc_channel,
            crc_uid: crc_uid,
            m: m
        }).pack();
        return version + token.appID + content.toString("base64");
    };

    this.addPriviledge = function (priviledge, expireTimestamp) {
        token.messages[priviledge] = expireTimestamp;
    };

    this.fromString = function (originToken) {
        try {
            originVersion = originToken.substr(0, VERSION_LENGTH);
            if (originVersion != version) {
                return false;
            }
            this.appID = originToken.substr(VERSION_LENGTH, APP_ID_LENGTH);
            var originContent = originToken.substr(VERSION_LENGTH + APP_ID_LENGTH);
            var originContentDecodedBuf = Buffer.from(originContent, "base64");

            var content = unPackContent(originContentDecodedBuf);
            this.signature = content.signature;
            this.crc_channel_name = content.crc_channel_name;
            this.crc_uid = content.crc_uid;
            this.m = content.m;

            var msgs = unPackMessages(this.m);
            this.salt = msgs.salt;
            this.ts = msgs.ts;
            this.messages = msgs.messages;
        } catch (err) {
            console.log(err);
            return false;
        }

        return true;
    };
};

module.exports.version = version;
module.exports.AccessToken = AccessToken;
module.exports.priviledges = {
    kJoinChannel: 1,
    kPublishAudioStream: 2,
    kPublishVideoStream: 3,
    kPublishDataStream: 4,
    kRtmLogin: 1000
};

var encodeHMac = function (key, message) {
    return crypto.createHmac("sha256", key).update(message).digest();
};

var ByteBuf = function () {
    var that = {
        buffer: Buffer.alloc(1024),
        position: 0
    };

    that.buffer.fill(0);

    that.pack = function () {
        var out = Buffer.alloc(that.position);
        that.buffer.copy(out, 0, 0, out.length);
        return out;
    };

    that.putUint16 = function (v) {
        that.buffer.writeUInt16LE(v, that.position);
        that.position += 2;
        return that;
    };

    that.putUint32 = function (v) {
        that.buffer.writeUInt32LE(v, that.position);
        that.position += 4;
        return that;
    };

    that.putBytes = function (bytes) {
        that.putUint16(bytes.length);
        bytes.copy(that.buffer, that.position);
        that.position += bytes.length;
        return that;
    };

    that.putString = function (str) {
        return that.putBytes(Buffer.from(str));
    };

    that.putTreeMap = function (map) {
        if (!map) {
            that.putUint16(0);
            return that;
        }

        that.putUint16(Object.keys(map).length);
        for (var key in map) {
            that.putUint16(key);
            that.putString(map[key]);
        }

        return that;
    };

    that.putTreeMapUInt32 = function (map) {
        if (!map) {
            that.putUint16(0);
            return that;
        }

        that.putUint16(Object.keys(map).length);
        for (var key in map) {
            that.putUint16(key);
            that.putUint32(map[key]);
        }

        return that;
    };

    return that;
};

var ReadByteBuf = function (bytes) {
    var that = {
        buffer: bytes,
        position: 0
    };

    that.getUint16 = function () {
        var ret = that.buffer.readUInt16LE(that.position);
        that.position += 2;
        return ret;
    };

    that.getUint32 = function () {
        var ret = that.buffer.readUInt32LE(that.position);
        that.position += 4;
        return ret;
    };

    that.getString = function () {
        var len = that.getUint16();

        var out = Buffer.alloc(len);
        that.buffer.copy(out, 0, that.position, that.position + len);
        that.position += len;
        return out;
    };

    that.getTreeMapUInt32 = function () {
        var map = {};
        var len = that.getUint16();
        for (var i = 0; i < len; i++) {
            var key = that.getUint16();
            var value = that.getUint32();
            map[key] = value;
        }
        return map;
    };

    return that;
};
var AccessTokenContent = function (options) {
    options.pack = function () {
        var out = new ByteBuf();
        return out.putString(options.signature).putUint32(options.crc_channel).putUint32(options.crc_uid).putString(options.m).pack();
    };

    return options;
};

var Message = function (options) {
    options.pack = function () {
        var out = new ByteBuf();
        var val = out.putUint32(options.salt).putUint32(options.ts).putTreeMapUInt32(options.messages).pack();
        return val;
    };

    return options;
};

var unPackContent = function (bytes) {
    var readbuf = new ReadByteBuf(bytes);
    return AccessTokenContent({
        signature: readbuf.getString(),
        crc_channel_name: readbuf.getUint32(),
        crc_uid: readbuf.getUint32(),
        m: readbuf.getString()
    });
};

var unPackMessages = function (bytes) {
    var readbuf = new ReadByteBuf(bytes);
    return Message({
        salt: readbuf.getUint32(),
        ts: readbuf.getUint32(),
        messages: readbuf.getTreeMapUInt32()
    });
};
const Role = {
    // DEPRECATED. Role::ATTENDEE has the same privileges as Role.PUBLISHER.
    ATTENDEE: 0,

    // RECOMMENDED. Use this role for a voice/video call or a live broadcast, if your scenario does not require authentication for [Hosting-in](https://docs.agora.io/en/Agora%20Platform/terms?platform=All%20Platforms#hosting-in).
    PUBLISHER: 1,

    /* Only use this role if your scenario require authentication for [Hosting-in](https://docs.agora.io/en/Agora%20Platform/terms?platform=All%20Platforms#hosting-in).
     * @note In order for this role to take effect, please contact our support team to enable authentication for Hosting-in for you. Otherwise, Role.SUBSCRIBER still has the same privileges as Role.PUBLISHER.
     */
    SUBSCRIBER: 2,

    // DEPRECATED. Role.ADMIN has the same privileges as Role.PUBLISHER.
    ADMIN: 101
}

class RtcTokenBuilder {

   /**
    * Builds an RTC token using an Integer uid.
    * @param {*} appID  The App ID issued to you by Agora.
    * @param {*} appCertificate Certificate of the application that you registered in the Agora Dashboard.
    * @param {*} channelName The unique channel name for the AgoraRTC session in the string format. The string length must be less than 64 bytes. Supported character scopes are:
    * - The 26 lowercase English letters: a to z.
    * - The 26 uppercase English letters: A to Z.
    * - The 10 digits: 0 to 9.
    * - The space.
    * - "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".
    * @param {*} uid User ID. A 32-bit unsigned integer with a value ranging from 1 to (2^32-1).
    * @param {*} role See #userRole.
    * - Role.PUBLISHER; RECOMMENDED. Use this role for a voice/video call or a live broadcast.
    * - Role.SUBSCRIBER: ONLY use this role if your live-broadcast scenario requires authentication for [Hosting-in](https://docs.agora.io/en/Agora%20Platform/terms?platform=All%20Platforms#hosting-in). In order for this role to take effect, please contact our support team to enable authentication for Hosting-in for you. Otherwise, Role_Subscriber still has the same privileges as Role_Publisher.
    * @param {*} privilegeExpiredTs  represented by the number of seconds elapsed since 1/1/1970. If, for example, you want to access the Agora Service within 10 minutes after the token is generated, set expireTimestamp as the current timestamp + 600 (seconds).
    * @return The new Token.
    */
    static buildTokenWithUid(appID, appCertificate, channelName, uid, role, privilegeExpiredTs) {
        return this.buildTokenWithAccount(appID, appCertificate, channelName, uid, role, privilegeExpiredTs)
    }

   /**
    * Builds an RTC token using an Integer uid.
    * @param {*} appID  The App ID issued to you by Agora.
    * @param {*} appCertificate Certificate of the application that you registered in the Agora Dashboard.
    * @param {*} channelName The unique channel name for the AgoraRTC session in the string format. The string length must be less than 64 bytes. Supported character scopes are:
    * - The 26 lowercase English letters: a to z.
    * - The 26 uppercase English letters: A to Z.
    * - The 10 digits: 0 to 9.
    * - The space.
    * - "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".
    * @param {*} account The user account.
    * @param {*} role See #userRole.
    * - Role.PUBLISHER; RECOMMENDED. Use this role for a voice/video call or a live broadcast.
    * - Role.SUBSCRIBER: ONLY use this role if your live-broadcast scenario requires authentication for [Hosting-in](https://docs.agora.io/en/Agora%20Platform/terms?platform=All%20Platforms#hosting-in). In order for this role to take effect, please contact our support team to enable authentication for Hosting-in for you. Otherwise, Role_Subscriber still has the same privileges as Role_Publisher.
    * @param {*} privilegeExpiredTs  represented by the number of seconds elapsed since 1/1/1970. If, for example, you want to access the Agora Service within 10 minutes after the token is generated, set expireTimestamp as the current timestamp + 600 (seconds).
    * @return The new Token.
    */
    static buildTokenWithAccount(appID, appCertificate, channelName, account, role, privilegeExpiredTs) {
        this.key = new AccessToken(appID, appCertificate, channelName, account)
        this.key.addPriviledge(Priviledges.kJoinChannel, privilegeExpiredTs)
        if (role == Role.ATTENDEE ||
            role == Role.PUBLISHER ||
            role == Role.ADMIN) {
            this.key.addPriviledge(Priviledges.kPublishAudioStream, privilegeExpiredTs)
            this.key.addPriviledge(Priviledges.kPublishVideoStream, privilegeExpiredTs)
            this.key.addPriviledge(Priviledges.kPublishDataStream, privilegeExpiredTs)
        }
        return this.key.build();
    }
}

module.exports.RtcTokenBuilder = RtcTokenBuilder;
module.exports.Role = Role;
console.log("Done Loading Agora's RtcTokenBuilder (fixed), Status: LOADED"); 
