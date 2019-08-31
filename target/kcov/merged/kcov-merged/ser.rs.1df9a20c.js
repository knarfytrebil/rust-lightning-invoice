var data = {lines:[
{"lineNum":"    1","line":"use std::fmt;"},
{"lineNum":"    2","line":"use std::fmt::{Display, Formatter};"},
{"lineNum":"    3","line":"use bech32::{Bech32, ToBase32, u5};"},
{"lineNum":"    4","line":""},
{"lineNum":"    5","line":"use ::*;"},
{"lineNum":"    6","line":""},
{"lineNum":"    7","line":"impl Display for Invoice {"},
{"lineNum":"    8","line":"\tfn fmt(&self, f: &mut Formatter) -> Result<(), fmt::Error> {"},
{"lineNum":"    9","line":"\t\tself.signed_invoice.fmt(f)"},
{"lineNum":"   10","line":"\t}"},
{"lineNum":"   11","line":"}"},
{"lineNum":"   12","line":""},
{"lineNum":"   13","line":"impl Display for SignedRawInvoice {"},
{"lineNum":"   14","line":"\tfn fmt(&self, f: &mut Formatter) -> Result<(), fmt::Error> {","class":"lineCov","hits":"1","order":"1075",},
{"lineNum":"   15","line":"\t\tlet hrp = self.raw_invoice.hrp.to_string();","class":"lineCov","hits":"1","order":"1076",},
{"lineNum":"   16","line":"\t\tlet mut data  = self.raw_invoice.data.to_base32();","class":"lineCov","hits":"1","order":"1077",},
{"lineNum":"   17","line":"\t\tdata.extend_from_slice(&self.signature.to_base32());","class":"lineCov","hits":"1","order":"1078",},
{"lineNum":"   18","line":""},
{"lineNum":"   19","line":"\t\tBech32::new(hrp, data).expect(\"hrp len > 0\").fmt(f)","class":"lineCov","hits":"1","order":"1074",},
{"lineNum":"   20","line":"\t}","class":"lineNoCov","hits":"0",},
{"lineNum":"   21","line":"}"},
{"lineNum":"   22","line":""},
{"lineNum":"   23","line":"impl Display for RawHrp {"},
{"lineNum":"   24","line":"\tfn fmt(&self, f: &mut Formatter) -> Result<(), fmt::Error> {","class":"lineCov","hits":"1","order":"102",},
{"lineNum":"   25","line":"\t\tlet amount = match self.raw_amount {","class":"lineCov","hits":"1","order":"125",},
{"lineNum":"   26","line":"\t\t\tSome(ref amt) => amt.to_string(),","class":"lineCov","hits":"1","order":"113",},
{"lineNum":"   27","line":"\t\t\tNone => String::new(),","class":"lineCov","hits":"1","order":"95",},
{"lineNum":"   28","line":"\t\t};"},
{"lineNum":"   29","line":""},
{"lineNum":"   30","line":"\t\tlet si_prefix = match self.si_prefix {","class":"lineCov","hits":"1","order":"97",},
{"lineNum":"   31","line":"\t\t\tSome(ref si) => si.to_string(),","class":"lineCov","hits":"1","order":"75",},
{"lineNum":"   32","line":"\t\t\tNone => String::new(),","class":"lineCov","hits":"1","order":"90",},
{"lineNum":"   33","line":"\t\t};"},
{"lineNum":"   34","line":""},
{"lineNum":"   35","line":"\t\twrite!(","class":"lineCov","hits":"1","order":"159",},
{"lineNum":"   36","line":"\t\t\tf,","class":"lineCov","hits":"1","order":"72",},
{"lineNum":"   37","line":"\t\t\t\"ln{}{}{}\","},
{"lineNum":"   38","line":"\t\t\tself.currency,","class":"lineCov","hits":"1","order":"100",},
{"lineNum":"   39","line":"\t\t\tamount,"},
{"lineNum":"   40","line":"\t\t\tsi_prefix"},
{"lineNum":"   41","line":"\t\t)"},
{"lineNum":"   42","line":"\t}","class":"lineCov","hits":"1","order":"123",},
{"lineNum":"   43","line":"}"},
{"lineNum":"   44","line":""},
{"lineNum":"   45","line":"impl Display for Currency {"},
{"lineNum":"   46","line":"\tfn fmt(&self, f: &mut Formatter) -> Result<(), fmt::Error> {","class":"lineCov","hits":"1","order":"117",},
{"lineNum":"   47","line":"\t\tlet currency_code = match *self {","class":"lineCov","hits":"1","order":"112",},
{"lineNum":"   48","line":"\t\t\tCurrency::Bitcoin => \"bc\",","class":"lineCov","hits":"1","order":"65",},
{"lineNum":"   49","line":"\t\t\tCurrency::BitcoinTestnet => \"tb\",","class":"lineCov","hits":"1","order":"119",},
{"lineNum":"   50","line":"\t\t\tCurrency::Regtest => \"bcrt\",","class":"lineCov","hits":"1","order":"105",},
{"lineNum":"   51","line":"\t\t};"},
{"lineNum":"   52","line":"\t\twrite!(f, \"{}\", currency_code)","class":"lineCov","hits":"1","order":"67",},
{"lineNum":"   53","line":"\t}","class":"lineCov","hits":"1","order":"99",},
{"lineNum":"   54","line":"}"},
{"lineNum":"   55","line":""},
{"lineNum":"   56","line":"impl Display for SiPrefix {"},
{"lineNum":"   57","line":"\tfn fmt(&self, f: &mut Formatter) -> Result<(), fmt::Error> {","class":"lineCov","hits":"1","order":"130",},
{"lineNum":"   58","line":"\t\twrite!(f, \"{}\",","class":"lineCov","hits":"1","order":"85",},
{"lineNum":"   59","line":"\t\t\tmatch *self {","class":"lineCov","hits":"1","order":"89",},
{"lineNum":"   60","line":"\t\t\t\tSiPrefix::Milli => \"m\",","class":"lineCov","hits":"1","order":"133",},
{"lineNum":"   61","line":"\t\t\t\tSiPrefix::Micro => \"u\",","class":"lineCov","hits":"1","order":"86",},
{"lineNum":"   62","line":"\t\t\t\tSiPrefix::Nano => \"n\",","class":"lineNoCov","hits":"0",},
{"lineNum":"   63","line":"\t\t\t\tSiPrefix::Pico => \"p\",","class":"lineCov","hits":"1","order":"80",},
{"lineNum":"   64","line":"\t\t\t}"},
{"lineNum":"   65","line":"\t\t)"},
{"lineNum":"   66","line":"\t}","class":"lineCov","hits":"1","order":"135",},
{"lineNum":"   67","line":"}"},
{"lineNum":"   68","line":""},
{"lineNum":"   69","line":"fn encode_int_be_base32(int: u64) -> Vec<u5> {","class":"lineCov","hits":"1","order":"52",},
{"lineNum":"   70","line":"\tlet base = 32u64;","class":"lineCov","hits":"1","order":"11",},
{"lineNum":"   71","line":""},
{"lineNum":"   72","line":"\tlet mut out_vec = Vec::<u5>::new();","class":"lineCov","hits":"1","order":"10",},
{"lineNum":"   73","line":""},
{"lineNum":"   74","line":"\tlet mut rem_int = int;","class":"lineCov","hits":"1","order":"9",},
{"lineNum":"   75","line":"\twhile rem_int != 0 {","class":"lineCov","hits":"1","order":"49",},
{"lineNum":"   76","line":"\t\tout_vec.push(u5::try_from_u8((rem_int % base) as u8).expect(\"always <32\"));","class":"lineCov","hits":"1","order":"47",},
{"lineNum":"   77","line":"\t\trem_int /= base;","class":"lineCov","hits":"1","order":"41",},
{"lineNum":"   78","line":"\t}"},
{"lineNum":"   79","line":""},
{"lineNum":"   80","line":"\tout_vec.reverse();","class":"lineCov","hits":"1","order":"8",},
{"lineNum":"   81","line":"\tout_vec","class":"lineCov","hits":"1","order":"7",},
{"lineNum":"   82","line":"}","class":"lineCov","hits":"1","order":"43",},
{"lineNum":"   83","line":""},
{"lineNum":"   84","line":"fn encode_int_be_base256<T: Into<u64>>(int: T) -> Vec<u8> {","class":"lineCov","hits":"1","order":"29",},
{"lineNum":"   85","line":"\tlet base = 256u64;","class":"lineCov","hits":"1","order":"38",},
{"lineNum":"   86","line":""},
{"lineNum":"   87","line":"\tlet mut out_vec = Vec::<u8>::new();","class":"lineCov","hits":"1","order":"28",},
{"lineNum":"   88","line":""},
{"lineNum":"   89","line":"\tlet mut rem_int: u64 = int.into();","class":"lineCov","hits":"1","order":"27",},
{"lineNum":"   90","line":"\twhile rem_int != 0 {","class":"lineCov","hits":"1","order":"25",},
{"lineNum":"   91","line":"\t\tout_vec.push((rem_int % base) as u8);","class":"lineCov","hits":"1","order":"23",},
{"lineNum":"   92","line":"\t\trem_int /= base;","class":"lineCov","hits":"1","order":"22",},
{"lineNum":"   93","line":"\t}"},
{"lineNum":"   94","line":""},
{"lineNum":"   95","line":"\tout_vec.reverse();","class":"lineCov","hits":"1","order":"24",},
{"lineNum":"   96","line":"\tout_vec","class":"lineCov","hits":"1","order":"21",},
{"lineNum":"   97","line":"}","class":"lineCov","hits":"1","order":"26",},
{"lineNum":"   98","line":""},
{"lineNum":"   99","line":"/// Appends the default value of `T` to the front of the `in_vec` till it reaches the length"},
{"lineNum":"  100","line":"/// `target_length`. If `in_vec` already is too lang `None` is returned."},
{"lineNum":"  101","line":"fn try_stretch<T>(mut in_vec: Vec<T>, target_len: usize) -> Option<Vec<T>>","class":"lineCov","hits":"1","order":"20",},
{"lineNum":"  102","line":"\twhere T: Default + Copy"},
{"lineNum":"  103","line":"{"},
{"lineNum":"  104","line":"\tif in_vec.len() > target_len {","class":"lineCov","hits":"1","order":"19",},
{"lineNum":"  105","line":"\t\tNone","class":"lineNoCov","hits":"0",},
{"lineNum":"  106","line":"\t} else if in_vec.len() == target_len {","class":"lineCov","hits":"1","order":"18",},
{"lineNum":"  107","line":"\t\tSome(in_vec)","class":"lineCov","hits":"1","order":"17",},
{"lineNum":"  108","line":"\t} else {"},
{"lineNum":"  109","line":"\t\tlet mut out_vec = Vec::<T>::with_capacity(target_len);","class":"lineCov","hits":"1","order":"16",},
{"lineNum":"  110","line":"\t\tout_vec.append(&mut vec![T::default(); target_len - in_vec.len()]);","class":"lineCov","hits":"1","order":"14",},
{"lineNum":"  111","line":"\t\tout_vec.append(&mut in_vec);","class":"lineCov","hits":"1","order":"35",},
{"lineNum":"  112","line":"\t\tSome(out_vec)","class":"lineCov","hits":"1","order":"12",},
{"lineNum":"  113","line":"\t}","class":"lineNoCov","hits":"0",},
{"lineNum":"  114","line":"}","class":"lineCov","hits":"1","order":"33",},
{"lineNum":"  115","line":""},
{"lineNum":"  116","line":"impl ToBase32<Vec<u5>> for RawDataPart {"},
{"lineNum":"  117","line":"\tfn to_base32(&self) -> Vec<u5> {","class":"lineCov","hits":"1","order":"77",},
{"lineNum":"  118","line":"\t\tlet mut encoded = Vec::<u5>::new();","class":"lineCov","hits":"1","order":"107",},
{"lineNum":"  119","line":""},
{"lineNum":"  120","line":"\t\t// encode timestamp"},
{"lineNum":"  121","line":"\t\tencoded.extend(self.timestamp.to_base32());","class":"lineCov","hits":"1","order":"101",},
{"lineNum":"  122","line":""},
{"lineNum":"  123","line":"\t\t// encode tagged fields"},
{"lineNum":"  124","line":"\t\tfor tagged_field in self.tagged_fields.iter() {","class":"lineCov","hits":"1","order":"93",},
{"lineNum":"  125","line":"\t\t\tencoded.extend_from_slice(&tagged_field.to_base32());","class":"lineCov","hits":"1","order":"121",},
{"lineNum":"  126","line":"\t\t}"},
{"lineNum":"  127","line":""},
{"lineNum":"  128","line":"\t\tencoded","class":"lineCov","hits":"1","order":"73",},
{"lineNum":"  129","line":"\t}","class":"lineCov","hits":"1","order":"91",},
{"lineNum":"  130","line":"}"},
{"lineNum":"  131","line":""},
{"lineNum":"  132","line":"impl ToBase32<Vec<u5>> for PositiveTimestamp {"},
{"lineNum":"  133","line":"\tfn to_base32(&self) -> Vec<u5> {","class":"lineCov","hits":"1","order":"71",},
{"lineNum":"  134","line":"\t\ttry_stretch(encode_int_be_base32(self.as_unix_timestamp()), 7)","class":"lineCov","hits":"1","order":"69",},
{"lineNum":"  135","line":"\t\t\t.expect(\"Can\'t be longer due than 7 u5s due to timestamp bounds\")"},
{"lineNum":"  136","line":"\t}","class":"lineCov","hits":"1","order":"122",},
{"lineNum":"  137","line":"}"},
{"lineNum":"  138","line":""},
{"lineNum":"  139","line":"impl ToBase32<Vec<u5>> for RawTaggedField {"},
{"lineNum":"  140","line":"\tfn to_base32(&self) -> Vec<u5> {","class":"lineCov","hits":"1","order":"128",},
{"lineNum":"  141","line":"\t\tmatch *self {","class":"lineCov","hits":"1","order":"110",},
{"lineNum":"  142","line":"\t\t\tRawTaggedField::UnknownSemantics(ref content) => {","class":"lineCov","hits":"1","order":"126",},
{"lineNum":"  143","line":"\t\t\t\tcontent.clone()","class":"lineNoCov","hits":"0",},
{"lineNum":"  144","line":"\t\t\t},"},
{"lineNum":"  145","line":"\t\t\tRawTaggedField::KnownSemantics(ref tagged_field) => {","class":"lineCov","hits":"1","order":"63",},
{"lineNum":"  146","line":"\t\t\t\ttagged_field.to_base32()","class":"lineCov","hits":"1","order":"120",},
{"lineNum":"  147","line":"\t\t\t}"},
{"lineNum":"  148","line":"\t\t}"},
{"lineNum":"  149","line":"\t}","class":"lineCov","hits":"1","order":"66",},
{"lineNum":"  150","line":"}"},
{"lineNum":"  151","line":""},
{"lineNum":"  152","line":"impl ToBase32<Vec<u5>> for Sha256 {"},
{"lineNum":"  153","line":"\tfn to_base32(&self) -> Vec<u5> {","class":"lineCov","hits":"1","order":"87",},
{"lineNum":"  154","line":"\t\t(&self.0[..]).to_base32()","class":"lineCov","hits":"1","order":"131",},
{"lineNum":"  155","line":"\t}","class":"lineCov","hits":"1","order":"84",},
{"lineNum":"  156","line":"}"},
{"lineNum":"  157","line":""},
{"lineNum":"  158","line":"impl ToBase32<Vec<u5>> for Description {"},
{"lineNum":"  159","line":"\tfn to_base32(&self) -> Vec<u5> {","class":"lineCov","hits":"1","order":"83",},
{"lineNum":"  160","line":"\t\tself.as_bytes().to_base32()","class":"lineCov","hits":"1","order":"81",},
{"lineNum":"  161","line":"\t}","class":"lineCov","hits":"1","order":"136",},
{"lineNum":"  162","line":"}"},
{"lineNum":"  163","line":""},
{"lineNum":"  164","line":"impl ToBase32<Vec<u5>> for PayeePubKey {"},
{"lineNum":"  165","line":"\tfn to_base32(&self) -> Vec<u5> {","class":"lineCov","hits":"1","order":"137",},
{"lineNum":"  166","line":"\t\t(&self.serialize()[..]).to_base32()","class":"lineCov","hits":"1","order":"138",},
{"lineNum":"  167","line":"\t}","class":"lineCov","hits":"1","order":"139",},
{"lineNum":"  168","line":"}"},
{"lineNum":"  169","line":""},
{"lineNum":"  170","line":"impl ToBase32<Vec<u5>> for ExpiryTime {"},
{"lineNum":"  171","line":"\tfn to_base32(&self) -> Vec<u5> {","class":"lineCov","hits":"1","order":"140",},
{"lineNum":"  172","line":"\t\tencode_int_be_base32(self.as_seconds())","class":"lineCov","hits":"1","order":"141",},
{"lineNum":"  173","line":"\t}","class":"lineCov","hits":"1","order":"142",},
{"lineNum":"  174","line":"}"},
{"lineNum":"  175","line":""},
{"lineNum":"  176","line":"impl ToBase32<Vec<u5>> for MinFinalCltvExpiry {"},
{"lineNum":"  177","line":"\tfn to_base32(&self) -> Vec<u5> {","class":"lineCov","hits":"1","order":"143",},
{"lineNum":"  178","line":"\t\tencode_int_be_base32(self.0)","class":"lineCov","hits":"1","order":"144",},
{"lineNum":"  179","line":"\t}","class":"lineCov","hits":"1","order":"145",},
{"lineNum":"  180","line":"}"},
{"lineNum":"  181","line":""},
{"lineNum":"  182","line":"impl ToBase32<Vec<u5>> for Fallback {"},
{"lineNum":"  183","line":"\tfn to_base32(&self) -> Vec<u5> {","class":"lineCov","hits":"1","order":"146",},
{"lineNum":"  184","line":"\t\tmatch *self {","class":"lineCov","hits":"1","order":"149",},
{"lineNum":"  185","line":"\t\t\tFallback::SegWitProgram {version: v, program: ref p} => {","class":"lineCov","hits":"1","order":"147",},
{"lineNum":"  186","line":"\t\t\t\tlet mut data = Vec::<u5>::with_capacity(1);","class":"lineNoCov","hits":"0",},
{"lineNum":"  187","line":"\t\t\t\tdata.push(v);","class":"lineNoCov","hits":"0",},
{"lineNum":"  188","line":"\t\t\t\tdata.extend_from_slice(&p.to_base32());","class":"lineNoCov","hits":"0",},
{"lineNum":"  189","line":"\t\t\t\tdata","class":"lineNoCov","hits":"0",},
{"lineNum":"  190","line":"\t\t\t},","class":"lineNoCov","hits":"0",},
{"lineNum":"  191","line":"\t\t\tFallback::PubKeyHash(ref hash) => {","class":"lineCov","hits":"1","order":"150",},
{"lineNum":"  192","line":"\t\t\t\tlet mut data = Vec::<u5>::with_capacity(1 + 32);","class":"lineCov","hits":"1","order":"151",},
{"lineNum":"  193","line":"\t\t\t\tdata.push(u5::try_from_u8(17).unwrap());","class":"lineCov","hits":"1","order":"152",},
{"lineNum":"  194","line":"\t\t\t\tdata.extend_from_slice(&hash.to_base32());","class":"lineCov","hits":"1","order":"153",},
{"lineNum":"  195","line":"\t\t\t\tdata","class":"lineCov","hits":"1","order":"154",},
{"lineNum":"  196","line":"\t\t\t},","class":"lineNoCov","hits":"0",},
{"lineNum":"  197","line":"\t\t\tFallback::ScriptHash(ref hash) => {","class":"lineNoCov","hits":"0",},
{"lineNum":"  198","line":"\t\t\t\tlet mut data = Vec::<u5>::with_capacity(1 + 32);","class":"lineNoCov","hits":"0",},
{"lineNum":"  199","line":"\t\t\t\tdata.push(u5::try_from_u8(18).unwrap());","class":"lineNoCov","hits":"0",},
{"lineNum":"  200","line":"\t\t\t\tdata.extend_from_slice(&hash.to_base32());","class":"lineNoCov","hits":"0",},
{"lineNum":"  201","line":"\t\t\t\tdata","class":"lineNoCov","hits":"0",},
{"lineNum":"  202","line":"\t\t\t}","class":"lineNoCov","hits":"0",},
{"lineNum":"  203","line":"\t\t}"},
{"lineNum":"  204","line":"\t}","class":"lineCov","hits":"1","order":"148",},
{"lineNum":"  205","line":"}"},
{"lineNum":"  206","line":""},
{"lineNum":"  207","line":"impl ToBase32<Vec<u5>> for Route {"},
{"lineNum":"  208","line":"\tfn to_base32(&self) -> Vec<u5> {","class":"lineCov","hits":"1","order":"155",},
{"lineNum":"  209","line":"\t\tlet mut bytes = Vec::<u8>::new();","class":"lineCov","hits":"1","order":"156",},
{"lineNum":"  210","line":"\t\tfor hop in self.iter() {","class":"lineCov","hits":"1","order":"157",},
{"lineNum":"  211","line":"\t\t\tbytes.extend_from_slice(&hop.pubkey.serialize()[..]);","class":"lineCov","hits":"1","order":"158",},
{"lineNum":"  212","line":"\t\t\tbytes.extend_from_slice(&hop.short_channel_id[..]);","class":"lineCov","hits":"1","order":"161",},
{"lineNum":"  213","line":""},
{"lineNum":"  214","line":"\t\t\tlet fee_base_msat = try_stretch(","class":"lineCov","hits":"1","order":"78",},
{"lineNum":"  215","line":"\t\t\t\tencode_int_be_base256(hop.fee_base_msat),","class":"lineCov","hits":"1","order":"108",},
{"lineNum":"  216","line":"\t\t\t\t4"},
{"lineNum":"  217","line":"\t\t\t).expect(\"sizeof(u32) == 4\");"},
{"lineNum":"  218","line":"\t\t\tbytes.extend_from_slice(&fee_base_msat);","class":"lineCov","hits":"1","order":"103",},
{"lineNum":"  219","line":""},
{"lineNum":"  220","line":"\t\t\tlet fee_proportional_millionths = try_stretch(","class":"lineCov","hits":"1","order":"114",},
{"lineNum":"  221","line":"\t\t\t\tencode_int_be_base256(hop.fee_proportional_millionths),","class":"lineCov","hits":"1","order":"96",},
{"lineNum":"  222","line":"\t\t\t\t4"},
{"lineNum":"  223","line":"\t\t\t).expect(\"sizeof(u32) == 4\");"},
{"lineNum":"  224","line":"\t\t\tbytes.extend_from_slice(&fee_proportional_millionths);","class":"lineCov","hits":"1","order":"124",},
{"lineNum":"  225","line":""},
{"lineNum":"  226","line":"\t\t\tlet cltv_expiry_delta = try_stretch(","class":"lineCov","hits":"1","order":"94",},
{"lineNum":"  227","line":"\t\t\t\tencode_int_be_base256(hop.cltv_expiry_delta),","class":"lineCov","hits":"1","order":"162",},
{"lineNum":"  228","line":"\t\t\t\t2"},
{"lineNum":"  229","line":"\t\t\t).expect(\"sizeof(u16) == 2\");"},
{"lineNum":"  230","line":"\t\t\tbytes.extend_from_slice(&cltv_expiry_delta);","class":"lineCov","hits":"1","order":"74",},
{"lineNum":"  231","line":"\t\t}","class":"lineNoCov","hits":"0",},
{"lineNum":"  232","line":""},
{"lineNum":"  233","line":"\t\tassert_eq!(","class":"lineCov","hits":"1","order":"62",},
{"lineNum":"  234","line":"\t\t\tbytes.len() % 51,","class":"lineCov","hits":"1","order":"160",},
{"lineNum":"  235","line":"\t\t\t0,"},
{"lineNum":"  236","line":"\t\t\t\"One hop is 51 bytes long, so all hops should be a multiple of that long.\""},
{"lineNum":"  237","line":"\t\t);"},
{"lineNum":"  238","line":""},
{"lineNum":"  239","line":"\t\tbytes.to_base32()","class":"lineCov","hits":"1","order":"61",},
{"lineNum":"  240","line":"\t}","class":"lineCov","hits":"1","order":"118",},
{"lineNum":"  241","line":"}"},
{"lineNum":"  242","line":""},
{"lineNum":"  243","line":"impl ToBase32<Vec<u5>> for TaggedField {"},
{"lineNum":"  244","line":"\tfn to_base32(&self) -> Vec<u5> {","class":"lineCov","hits":"1","order":"60",},
{"lineNum":"  245","line":"\t\tlet (tag, data) = match *self {","class":"lineCov","hits":"1","order":"116",},
{"lineNum":"  246","line":"\t\t\tTaggedField::PaymentHash(ref hash) => {","class":"lineCov","hits":"1","order":"111",},
{"lineNum":"  247","line":"\t\t\t\t(constants::TAG_PAYMENT_HASH, hash.to_base32())","class":"lineCov","hits":"1","order":"64",},
{"lineNum":"  248","line":"\t\t\t},"},
{"lineNum":"  249","line":"\t\t\tTaggedField::Description(ref description) => {","class":"lineCov","hits":"1","order":"104",},
{"lineNum":"  250","line":"\t\t\t\t(constants::TAG_DESCRIPTION, description.to_base32())","class":"lineCov","hits":"1","order":"58",},
{"lineNum":"  251","line":"\t\t\t},"},
{"lineNum":"  252","line":"\t\t\tTaggedField::PayeePubKey(ref pub_key) => {","class":"lineCov","hits":"1","order":"98",},
{"lineNum":"  253","line":"\t\t\t\t(constants::TAG_PAYEE_PUB_KEY, pub_key.to_base32())","class":"lineCov","hits":"1","order":"57",},
{"lineNum":"  254","line":"\t\t\t},"},
{"lineNum":"  255","line":"\t\t\tTaggedField::DescriptionHash(ref hash) => {","class":"lineCov","hits":"1","order":"56",},
{"lineNum":"  256","line":"\t\t\t\t(constants::TAG_DESCRIPTION_HASH, hash.to_base32())","class":"lineCov","hits":"1","order":"129",},
{"lineNum":"  257","line":"\t\t\t},"},
{"lineNum":"  258","line":"\t\t\tTaggedField::ExpiryTime(ref duration) => {","class":"lineCov","hits":"1","order":"88",},
{"lineNum":"  259","line":"\t\t\t\t(constants::TAG_EXPIRY_TIME, duration.to_base32())","class":"lineCov","hits":"1","order":"132",},
{"lineNum":"  260","line":"\t\t\t},"},
{"lineNum":"  261","line":"\t\t\tTaggedField::MinFinalCltvExpiry(ref expiry) => {","class":"lineCov","hits":"1","order":"82",},
{"lineNum":"  262","line":"\t\t\t\t(constants::TAG_MIN_FINAL_CLTV_EXPIRY, expiry.to_base32())","class":"lineCov","hits":"1","order":"79",},
{"lineNum":"  263","line":"\t\t\t},"},
{"lineNum":"  264","line":"\t\t\tTaggedField::Fallback(ref fallback_address) => {","class":"lineCov","hits":"1","order":"55",},
{"lineNum":"  265","line":"\t\t\t\t(constants::TAG_FALLBACK, fallback_address.to_base32())","class":"lineCov","hits":"1","order":"134",},
{"lineNum":"  266","line":"\t\t\t},"},
{"lineNum":"  267","line":"\t\t\tTaggedField::Route(ref route_hops) => {","class":"lineCov","hits":"1","order":"54",},
{"lineNum":"  268","line":"\t\t\t\t(constants::TAG_ROUTE, route_hops.to_base32())","class":"lineCov","hits":"1","order":"53",},
{"lineNum":"  269","line":"\t\t\t},"},
{"lineNum":"  270","line":"\t\t};"},
{"lineNum":"  271","line":""},
{"lineNum":"  272","line":"\t\tassert!(data.len() < 1024, \"Every tagged field data can be at most 1023 bytes long.\");","class":"lineCov","hits":"1","order":"51",},
{"lineNum":"  273","line":""},
{"lineNum":"  274","line":"\t\tlet mut sized_data = Vec::<u5>::with_capacity(data.len() + 3);","class":"lineCov","hits":"1","order":"50",},
{"lineNum":"  275","line":"\t\tsized_data.push(u5::try_from_u8(tag).expect(\"Tags should be <32.\"));","class":"lineCov","hits":"1","order":"48",},
{"lineNum":"  276","line":"\t\tsized_data.extend_from_slice(","class":"lineCov","hits":"1","order":"42",},
{"lineNum":"  277","line":"\t\t\t&try_stretch(","class":"lineCov","hits":"1","order":"45",},
{"lineNum":"  278","line":"\t\t\t\tencode_int_be_base32(data.len() as u64),","class":"lineCov","hits":"1","order":"46",},
{"lineNum":"  279","line":"\t\t\t\t2"},
{"lineNum":"  280","line":"\t\t\t).expect(\"Can\'t be longer than 2, see assert above.\")"},
{"lineNum":"  281","line":"\t\t);","class":"lineCov","hits":"1","order":"44",},
{"lineNum":"  282","line":"\t\tsized_data.extend_from_slice(&data);","class":"lineCov","hits":"1","order":"40",},
{"lineNum":"  283","line":""},
{"lineNum":"  284","line":"\t\tsized_data","class":"lineCov","hits":"1","order":"39",},
{"lineNum":"  285","line":"\t}","class":"lineCov","hits":"1","order":"59",},
{"lineNum":"  286","line":"}"},
{"lineNum":"  287","line":""},
{"lineNum":"  288","line":"impl ToBase32<Vec<u5>> for Signature {"},
{"lineNum":"  289","line":"\tfn to_base32(&self) -> Vec<u5> {","class":"lineCov","hits":"1","order":"1073",},
{"lineNum":"  290","line":"\t\tlet (recovery_id, signature) = self.serialize_compact();","class":"lineCov","hits":"1","order":"1072",},
{"lineNum":"  291","line":"\t\tlet mut signature_bytes = Vec::<u8>::with_capacity(65);","class":"lineCov","hits":"1","order":"1071",},
{"lineNum":"  292","line":"\t\tsignature_bytes.extend_from_slice(&signature[..]);","class":"lineCov","hits":"1","order":"1070",},
{"lineNum":"  293","line":"\t\tsignature_bytes.push(recovery_id.to_i32() as u8); // can only be in range 0..4","class":"lineCov","hits":"1","order":"1068",},
{"lineNum":"  294","line":""},
{"lineNum":"  295","line":"\t\tsignature_bytes.to_base32()","class":"lineCov","hits":"1","order":"1067",},
{"lineNum":"  296","line":"\t}","class":"lineCov","hits":"1","order":"1069",},
{"lineNum":"  297","line":"}"},
{"lineNum":"  298","line":""},
{"lineNum":"  299","line":"#[cfg(test)]"},
{"lineNum":"  300","line":"mod test {"},
{"lineNum":"  301","line":"\tuse bech32::CheckBase32;"},
{"lineNum":"  302","line":""},
{"lineNum":"  303","line":"\t#[test]"},
{"lineNum":"  304","line":"\tfn test_currency_code() {","class":"lineCov","hits":"1","order":"37",},
{"lineNum":"  305","line":"\t\tuse Currency;"},
{"lineNum":"  306","line":""},
{"lineNum":"  307","line":"\t\tassert_eq!(\"bc\", Currency::Bitcoin.to_string());","class":"lineCov","hits":"1","order":"6",},
{"lineNum":"  308","line":"\t\tassert_eq!(\"tb\", Currency::BitcoinTestnet.to_string());","class":"lineCov","hits":"1","order":"15",},
{"lineNum":"  309","line":"\t\tassert_eq!(\"bcrt\", Currency::Regtest.to_string());","class":"lineCov","hits":"1","order":"13",},
{"lineNum":"  310","line":"\t}","class":"lineCov","hits":"1","order":"36",},
{"lineNum":"  311","line":""},
{"lineNum":"  312","line":"\t#[test]"},
{"lineNum":"  313","line":"\tfn test_raw_hrp() {","class":"lineCov","hits":"1","order":"34",},
{"lineNum":"  314","line":"\t\tuse ::{Currency, RawHrp, SiPrefix};"},
{"lineNum":"  315","line":""},
{"lineNum":"  316","line":"\t\tlet hrp = RawHrp {","class":"lineCov","hits":"1","order":"76",},
{"lineNum":"  317","line":"\t\t\tcurrency: Currency::Bitcoin,","class":"lineCov","hits":"1","order":"106",},
{"lineNum":"  318","line":"\t\t\traw_amount: Some(100),","class":"lineCov","hits":"1","order":"5",},
{"lineNum":"  319","line":"\t\t\tsi_prefix: Some(SiPrefix::Micro),","class":"lineCov","hits":"1","order":"4",},
{"lineNum":"  320","line":"\t\t};"},
{"lineNum":"  321","line":""},
{"lineNum":"  322","line":"\t\tassert_eq!(hrp.to_string(), \"lnbc100u\");","class":"lineCov","hits":"1","order":"3",},
{"lineNum":"  323","line":"\t}","class":"lineCov","hits":"1","order":"92",},
{"lineNum":"  324","line":""},
{"lineNum":"  325","line":"\t#[test]"},
{"lineNum":"  326","line":"\tfn test_encode_int_be_base32() {","class":"lineCov","hits":"1","order":"32",},
{"lineNum":"  327","line":"\t\tuse ser::encode_int_be_base32;"},
{"lineNum":"  328","line":""},
{"lineNum":"  329","line":"\t\tlet input: u64 = 33764;","class":"lineCov","hits":"1","order":"2",},
{"lineNum":"  330","line":"\t\tlet expected_out = CheckBase32::check_base32(&[1, 0, 31, 4]).unwrap();","class":"lineCov","hits":"1","order":"1",},
{"lineNum":"  331","line":""},
{"lineNum":"  332","line":"\t\tassert_eq!(expected_out, encode_int_be_base32(input));","class":"lineCov","hits":"1","order":"70",},
{"lineNum":"  333","line":"\t}","class":"lineCov","hits":"1","order":"68",},
{"lineNum":"  334","line":""},
{"lineNum":"  335","line":"\t#[test]"},
{"lineNum":"  336","line":"\tfn test_encode_int_be_base256() {","class":"lineCov","hits":"1","order":"31",},
{"lineNum":"  337","line":"\t\tuse ser::encode_int_be_base256;"},
{"lineNum":"  338","line":""},
{"lineNum":"  339","line":"\t\tlet input: u64 = 16842530;","class":"lineCov","hits":"1","order":"127",},
{"lineNum":"  340","line":"\t\tlet expected_out = vec![1, 0, 255, 34];","class":"lineCov","hits":"1","order":"109",},
{"lineNum":"  341","line":""},
{"lineNum":"  342","line":"\t\tassert_eq!(expected_out, encode_int_be_base256(input));","class":"lineCov","hits":"1","order":"115",},
{"lineNum":"  343","line":"\t}","class":"lineCov","hits":"1","order":"30",},
{"lineNum":"  344","line":"}"},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "", "date" : "2019-08-31 07:54:50", "instrumented" : 192, "covered" : 174,};
var merged_data = [];
