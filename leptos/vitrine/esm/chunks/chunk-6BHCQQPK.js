/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{b as j}from"./chunk-4DG3OOJM.js";import{a as Ft,c as Pt,d as rt,j as Ct}from"./chunk-HAOEEKZP.js";import{i as Tt}from"./chunk-BTEG3GEC.js";import{O as kt,X as vt,_ as B,ba as wt,c as st,e as yt,o as i,p as _t,q as nt,z as bt}from"./chunk-JAZI474S.js";import{h as xt,k as Y,l as G,m as St,q as H}from"./chunk-SCKP2KTO.js";var $t=`/*
 * Packet captures: a summary, filters, the packet list, the opened packet with its layers
 * beside its bytes, conversations and host names. Protocols are written in words; colors
 * only repeat them.
 */
.pcap-body {
  display: grid;
  gap: var(--_space-3);
  padding: var(--_space-4);
  background: var(--_surface);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.pcap-body.dragging {
  outline: 2px dashed var(--_accent);
  outline-offset: -6px;
}

.pcap-muted {
  color: var(--_fg-muted);
}

.pcap-error {
  margin: 0;
  color: var(--_danger);
  font-weight: 600;
}

.pcap-label {
  margin: 0 0 var(--_space-1);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.pcap-zone {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1) var(--_space-2);
  padding: var(--_space-4) var(--_space-3);
  border: 1px dashed var(--_border-strong);
  border-radius: var(--_radius-sm);
  color: var(--_fg-muted);
}

.pcap-zone svg {
  flex: none;
  width: 18px;
  height: 18px;
}

.pcap-zone .text-btn,
.pcap-facts .text-btn,
.pcap-packet-head .text-btn {
  color: var(--_accent-fg);
}

.pcap-note {
  flex-basis: 100%;
  font-size: var(--_font-size-small);
}

.pcap-summary {
  display: grid;
  gap: var(--_space-2);
}

.pcap-facts {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--_space-1) var(--_space-3);
  margin: 0;
}

.pcap-file {
  overflow-wrap: anywhere;
}

.pcap-protocols {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1) var(--_space-3);
  margin: 0;
  padding: 0;
  list-style: none;
}

.pcap-proto {
  display: inline-block;
  padding: 0 6px;
  border-inline-start: 3px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  font-size: var(--_font-size-small);
  font-weight: 600;
  white-space: nowrap;
}

.pcap-proto.p-dns {
  border-inline-start-color: var(--_syntax-function);
}

.pcap-proto.p-tls {
  border-inline-start-color: var(--_success);
}

.pcap-proto.p-http {
  border-inline-start-color: var(--_warning);
}

.pcap-proto.p-tcp {
  border-inline-start-color: var(--_syntax-keyword);
}

.pcap-proto.p-udp {
  border-inline-start-color: var(--_syntax-type);
}

.pcap-proto.p-icmp {
  border-inline-start-color: var(--_syntax-string);
}

.pcap-proto.p-arp {
  border-inline-start-color: var(--_syntax-number);
}

.pcap-filters {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1);
}

.pcap-chip {
  padding: 2px var(--_space-2);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-full);
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: var(--_font-size-small);
  cursor: pointer;
}

.pcap-chip.on {
  border-color: var(--_accent);
  background: var(--_accent-soft);
  font-weight: 600;
}

.pcap-chip:focus-visible,
.pcap-open:focus-visible,
.pcap-field:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 1px;
}

.pcap-query {
  flex: 1 1 14em;
  min-width: 0;
  padding: 4px var(--_space-2);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  color: inherit;
  font: inherit;
}

.pcap-scroll {
  max-height: min(60vh, 520px);
  overflow: auto;
}

.pcap-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--_font-size-small);
}

.pcap-table th,
.pcap-table td {
  padding: 3px var(--_space-2);
  border-bottom: 1px solid var(--_border);
  text-align: start;
  vertical-align: top;
}

.pcap-table thead th {
  position: sticky;
  top: 0;
  z-index: 1;
  background: var(--_surface);
  color: var(--_fg-muted);
  font-weight: 500;
  white-space: nowrap;
}

.pcap-table tbody th {
  font-weight: 500;
}

.pcap-table code {
  font-family: var(--_font-mono);
  white-space: nowrap;
}

.pcap-num {
  font-variant-numeric: tabular-nums;
  text-align: end !important;
  white-space: nowrap;
}

.pcap-info {
  min-width: 16em;
  font-family: var(--_font-mono);
  overflow-wrap: anywhere;
}

.pcap-row.open > * {
  background: var(--_accent-soft);
}

.pcap-open {
  padding: 0 4px;
  border: 0;
  background: none;
  color: var(--_accent-fg);
  font: inherit;
  font-variant-numeric: tabular-nums;
  text-decoration: underline;
  cursor: pointer;
}

.pcap-more {
  margin-top: var(--_space-2);
}

.pcap-packet {
  display: grid;
  gap: var(--_space-2);
  padding: var(--_space-3);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.pcap-packet-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--_space-1) var(--_space-3);
}

.pcap-packet-head h3 {
  margin: 0;
  font-size: 1em;
}

.pcap-packet-head .text-btn {
  margin-inline-start: auto;
}

.pcap-split {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--_space-3);
  align-items: start;
}

@media (max-width: 760px) {
  .pcap-split {
    grid-template-columns: minmax(0, 1fr);
  }
}

.pcap-layers {
  display: grid;
  gap: var(--_space-1);
  min-width: 0;
}

.pcap-layer summary {
  cursor: pointer;
}

.pcap-layer-name {
  font-weight: 600;
}

.pcap-layer dl {
  display: grid;
  grid-template-columns: max-content minmax(0, 1fr);
  gap: 1px var(--_space-3);
  margin: var(--_space-1) 0 var(--_space-2);
  padding-inline-start: var(--_space-4);
}

.pcap-layer dd {
  margin: 0;
  overflow-wrap: anywhere;
}

.pcap-layer code {
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
}

.pcap-field {
  padding: 0 2px;
  border: 0;
  border-radius: var(--_radius-sm);
  background: none;
  color: var(--_fg-muted);
  font: inherit;
  text-align: start;
  cursor: pointer;
}

.pcap-field:hover {
  color: var(--_fg);
}

.pcap-field.on {
  background: var(--_accent-soft);
  color: var(--_fg);
  font-weight: 600;
}

.pcap-dump-box {
  min-width: 0;
}

.pcap-dump {
  max-height: 360px;
  padding: var(--_space-2);
  overflow: auto;
  border-radius: var(--_radius-sm);
  background: var(--_code-bg);
  color: var(--_code-fg);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  line-height: 1.5;
}

.pcap-dump-row {
  display: flex;
  gap: var(--_space-3);
  white-space: pre;
}

.pcap-offset {
  color: var(--_syntax-comment);
}

.pcap-hex {
  display: inline-grid;
  grid-template-columns: repeat(16, 2.5ch);
}

.pcap-hex .b:nth-child(8) {
  margin-inline-end: 0.5ch;
}

.pcap-ascii {
  display: inline-grid;
  grid-template-columns: repeat(16, 1ch);
}

.pcap-dump .b.mark {
  border-radius: 2px;
  background: var(--_accent);
  color: var(--_on-accent);
}

@media (forced-colors: active) {
  .pcap-dump .b.mark,
  .pcap-field.on {
    outline: 1px solid Highlight;
  }
}
`;var pt=Object.freeze({pcapTabs:"Capture views",pcapTabPackets:"Packets ({count})",pcapTabConversations:"Conversations ({count})",pcapTabNames:"Host names ({count})",pcapPackets:"{count} packets",pcapDuration:"over {time}",pcapStarted:"from {date}",pcapBytes:"{size} on the wire",pcapLink:"Link: {link}",pcapInterfaces:"Interfaces: {names}",pcapTruncated:"The file ends in the middle of a packet: it was cut.",pcapCapped:"Only the first {count} packets are read.",pcapEmpty:"No capture. Drop a .pcap or .pcapng file here.",pcapDrop:"Drop a .pcap or .pcapng file here, or",pcapDropNow:"Drop the file to read it",pcapChoose:"choose a file",pcapOpenOther:"Open another file",pcapFileNote:"Read in this page: the file is sent nowhere.",pcapTooLarge:"The file is too large ({size}, at most {limit}).",pcapReadFailed:"The file cannot be read.",pcapInvalidEmpty:"The capture is empty.",pcapInvalidFormat:"This is not a pcap or pcapng capture.",pcapInvalidTruncated:"The capture is cut before its first packet.",pcapInvalidText:"The text is neither base64 nor hex: {message}",pcapFilters:"Filters",pcapAll:"All",pcapFilterText:"Filter: address, port, name, text",pcapNone:"No packet matches the filters.",pcapShowMore:"Show {count} more",pcapNo:"No.",pcapTime:"Time",pcapSource:"Source",pcapDestination:"Destination",pcapProtocol:"Protocol",pcapLength:"Length",pcapInfo:"Info",pcapPacket:"Packet {index}",pcapPacketSummary:"{length} bytes on the wire, {captured} captured, at {time}",pcapLayers:"Layers",pcapBytesView:"Bytes",pcapFieldBytes:"bytes {from} to {to}",pcapClose:"Close the packet",pcapEndpointA:"Address A",pcapEndpointB:"Address B",pcapTransport:"Transport",pcapPacketsCol:"Packets",pcapBytesCol:"Bytes",pcapStart:"Start",pcapDurationCol:"Duration",pcapName:"Name",pcapSeenIn:"Seen in",pcapResolves:"Resolves to",pcapInPackets:"Packets",pcapSeen_dns:"DNS",pcapSeen_sni:"TLS server name",pcapSeen_http:"HTTP Host",pcapNoNames:"No host name in this capture.",pcapCopyCsv:"CSV",pcapCopyNames:"Copy the names",pcapF_ethDst:"Destination",pcapF_ethSrc:"Source",pcapF_etherType:"Type",pcapF_vlanId:"VLAN",pcapF_ifIndex:"Interface index",pcapF_family:"Address family",pcapF_arpOp:"Operation",pcapF_arpSenderMac:"Sender MAC",pcapF_arpSenderIp:"Sender IP",pcapF_arpTargetMac:"Target MAC",pcapF_arpTargetIp:"Target IP",pcapF_ipVersion:"Version",pcapF_ipHeaderLength:"Header length",pcapF_ipTotalLength:"Total length",pcapF_ipId:"Identification",pcapF_ipFlags:"Flags",pcapF_ipFragment:"Fragment offset",pcapF_ipTtl:"Time to live",pcapF_ipProtocol:"Protocol",pcapF_ipChecksum:"Checksum",pcapF_ipSrc:"Source",pcapF_ipDst:"Destination",pcapF_ipFlow:"Flow label",pcapF_ipPayloadLength:"Payload length",pcapF_ipNextHeader:"Next header",pcapF_ipHopLimit:"Hop limit",pcapF_icmpType:"Type",pcapF_icmpCode:"Code",pcapF_icmpId:"Identifier",pcapF_icmpSeq:"Sequence",pcapF_srcPort:"Source port",pcapF_dstPort:"Destination port",pcapF_tcpSeq:"Sequence (relative)",pcapF_tcpAck:"Acknowledgment (relative)",pcapF_tcpHeaderLength:"Header length",pcapF_tcpFlags:"Flags",pcapF_tcpWindow:"Window",pcapF_tcpChecksum:"Checksum",pcapF_udpLength:"Length",pcapF_udpChecksum:"Checksum",pcapF_dnsId:"Transaction ID",pcapF_dnsKind:"Message",pcapF_dnsRcode:"Reply code",pcapF_dnsQuestions:"Questions",pcapF_dnsAnswers:"Answers",pcapF_dnsQuestion:"Question",pcapF_dnsAnswer:"Answer",pcapF_httpLine:"Request or status line",pcapF_httpHeader:"Header",pcapF_tlsRecord:"Record",pcapF_tlsHandshake:"Handshake",pcapF_tlsVersion:"Version",pcapF_tlsCipherSuites:"Cipher suites offered",pcapF_tlsCipherSuite:"Cipher suite",pcapF_tlsSni:"Server name (SNI)",pcapF_tlsAlpn:"Application protocols (ALPN)",pcapF_tlsSupportedVersions:"Supported versions"}),At={pcapTabs:"Vues de la capture",pcapTabPackets:"Paquets ({count})",pcapTabConversations:"Conversations ({count})",pcapTabNames:"Noms d\u2019h\xF4te ({count})",pcapPackets:"{count} paquets",pcapDuration:"sur {time}",pcapStarted:"depuis {date}",pcapBytes:"{size} sur le r\xE9seau",pcapLink:"Liaison : {link}",pcapInterfaces:"Interfaces : {names}",pcapTruncated:"Le fichier s\u2019arr\xEAte au milieu d\u2019un paquet : il a \xE9t\xE9 coup\xE9.",pcapCapped:"Seuls les {count} premiers paquets sont lus.",pcapEmpty:"Aucune capture. D\xE9posez un fichier .pcap ou .pcapng ici.",pcapDrop:"D\xE9posez un fichier .pcap ou .pcapng ici, ou",pcapDropNow:"D\xE9posez le fichier pour le lire",pcapChoose:"choisissez un fichier",pcapOpenOther:"Ouvrir un autre fichier",pcapFileNote:"Lu dans cette page : le fichier n\u2019est envoy\xE9 nulle part.",pcapTooLarge:"Le fichier est trop gros ({size}, au plus {limit}).",pcapReadFailed:"Le fichier est illisible.",pcapInvalidEmpty:"La capture est vide.",pcapInvalidFormat:"Ce n\u2019est pas une capture pcap ou pcapng.",pcapInvalidTruncated:"La capture est coup\xE9e avant son premier paquet.",pcapInvalidText:"Le texte n\u2019est ni du base64 ni de l\u2019hexad\xE9cimal : {message}",pcapFilters:"Filtres",pcapAll:"Tous",pcapFilterText:"Filtrer : adresse, port, nom, texte",pcapNone:"Aucun paquet ne correspond aux filtres.",pcapShowMore:"Afficher {count} de plus",pcapNo:"N\xB0",pcapTime:"Temps",pcapSource:"Source",pcapDestination:"Destination",pcapProtocol:"Protocole",pcapLength:"Longueur",pcapInfo:"Infos",pcapPacket:"Paquet {index}",pcapPacketSummary:"{length} octets sur le r\xE9seau, {captured} captur\xE9s, \xE0 {time}",pcapLayers:"Couches",pcapBytesView:"Octets",pcapFieldBytes:"octets {from} \xE0 {to}",pcapClose:"Fermer le paquet",pcapEndpointA:"Adresse A",pcapEndpointB:"Adresse B",pcapTransport:"Transport",pcapPacketsCol:"Paquets",pcapBytesCol:"Octets",pcapStart:"D\xE9but",pcapDurationCol:"Dur\xE9e",pcapName:"Nom",pcapSeenIn:"Vu dans",pcapResolves:"R\xE9sout vers",pcapInPackets:"Paquets",pcapSeen_dns:"DNS",pcapSeen_sni:"Nom de serveur TLS",pcapSeen_http:"Host HTTP",pcapNoNames:"Aucun nom d\u2019h\xF4te dans cette capture.",pcapCopyCsv:"CSV",pcapCopyNames:"Copier les noms",pcapF_ethDst:"Destination",pcapF_ethSrc:"Source",pcapF_etherType:"Type",pcapF_vlanId:"VLAN",pcapF_ifIndex:"Num\xE9ro d\u2019interface",pcapF_family:"Famille d\u2019adresses",pcapF_arpOp:"Op\xE9ration",pcapF_arpSenderMac:"MAC de l\u2019\xE9metteur",pcapF_arpSenderIp:"IP de l\u2019\xE9metteur",pcapF_arpTargetMac:"MAC de la cible",pcapF_arpTargetIp:"IP de la cible",pcapF_ipVersion:"Version",pcapF_ipHeaderLength:"Longueur de l\u2019en-t\xEAte",pcapF_ipTotalLength:"Longueur totale",pcapF_ipId:"Identification",pcapF_ipFlags:"Drapeaux",pcapF_ipFragment:"Position du fragment",pcapF_ipTtl:"Dur\xE9e de vie (TTL)",pcapF_ipProtocol:"Protocole",pcapF_ipChecksum:"Somme de contr\xF4le",pcapF_ipSrc:"Source",pcapF_ipDst:"Destination",pcapF_ipFlow:"\xC9tiquette de flux",pcapF_ipPayloadLength:"Longueur des donn\xE9es",pcapF_ipNextHeader:"En-t\xEAte suivant",pcapF_ipHopLimit:"Limite de sauts",pcapF_icmpType:"Type",pcapF_icmpCode:"Code",pcapF_icmpId:"Identifiant",pcapF_icmpSeq:"S\xE9quence",pcapF_srcPort:"Port source",pcapF_dstPort:"Port de destination",pcapF_tcpSeq:"S\xE9quence (relative)",pcapF_tcpAck:"Acquittement (relatif)",pcapF_tcpHeaderLength:"Longueur de l\u2019en-t\xEAte",pcapF_tcpFlags:"Drapeaux",pcapF_tcpWindow:"Fen\xEAtre",pcapF_tcpChecksum:"Somme de contr\xF4le",pcapF_udpLength:"Longueur",pcapF_udpChecksum:"Somme de contr\xF4le",pcapF_dnsId:"Identifiant de transaction",pcapF_dnsKind:"Message",pcapF_dnsRcode:"Code de r\xE9ponse",pcapF_dnsQuestions:"Questions",pcapF_dnsAnswers:"R\xE9ponses",pcapF_dnsQuestion:"Question",pcapF_dnsAnswer:"R\xE9ponse",pcapF_httpLine:"Ligne de requ\xEAte ou de statut",pcapF_httpHeader:"En-t\xEAte",pcapF_tlsRecord:"Enregistrement",pcapF_tlsHandshake:"N\xE9gociation",pcapF_tlsVersion:"Version",pcapF_tlsCipherSuites:"Suites de chiffrement propos\xE9es",pcapF_tlsCipherSuite:"Suite de chiffrement",pcapF_tlsSni:"Nom du serveur (SNI)",pcapF_tlsAlpn:"Protocoles applicatifs (ALPN)",pcapF_tlsSupportedVersions:"Versions prises en charge"};var lt=Object.freeze({0:"Loopback",1:"Ethernet",12:"Raw IP",14:"Raw IP",101:"Raw IP",113:"Linux cooked",228:"Raw IPv4",229:"Raw IPv6",276:"Linux cooked v2"}),W={2048:"IPv4",2054:"ARP",34525:"IPv6",33024:"802.1Q",34984:"802.1ad",34887:"MPLS",34958:"EAPOL",35020:"LLDP"},it={1:"ICMP",2:"IGMP",6:"TCP",17:"UDP",41:"IPv6",47:"GRE",50:"ESP",51:"AH",58:"ICMPv6",89:"OSPF",132:"SCTP"},ot={1:"A",2:"NS",5:"CNAME",6:"SOA",12:"PTR",15:"MX",16:"TXT",28:"AAAA",33:"SRV",41:"OPT",43:"DS",46:"RRSIG",48:"DNSKEY",64:"SVCB",65:"HTTPS",255:"ANY",257:"CAA"},Lt=["No error","Format error","Server failure","No such name","Not implemented","Refused"],qt={0:"Echo reply",3:"Destination unreachable",5:"Redirect",8:"Echo request",11:"Time exceeded",13:"Timestamp",14:"Timestamp reply"},zt={1:"Destination unreachable",2:"Packet too big",3:"Time exceeded",128:"Echo request",129:"Echo reply",133:"Router solicitation",134:"Router advertisement",135:"Neighbor solicitation",136:"Neighbor advertisement",143:"MLDv2 report"},Ot={1:"Client Hello",2:"Server Hello",4:"New Session Ticket",8:"Encrypted Extensions",11:"Certificate",12:"Server Key Exchange",13:"Certificate Request",14:"Server Hello Done",15:"Certificate Verify",16:"Client Key Exchange",20:"Finished"},X={20:"Change Cipher Spec",21:"Alert",22:"Handshake",23:"Application Data",24:"Heartbeat"},Z={768:"SSL 3.0",769:"TLS 1.0",770:"TLS 1.1",771:"TLS 1.2",772:"TLS 1.3"},J={20:"FTP-DATA",21:"FTP",22:"SSH",23:"Telnet",25:"SMTP",67:"DHCP",68:"DHCP",69:"TFTP",110:"POP3",123:"NTP",137:"NetBIOS",138:"NetBIOS",139:"NetBIOS",143:"IMAP",161:"SNMP",162:"SNMP",389:"LDAP",445:"SMB",465:"SMTPS",514:"Syslog",587:"SMTP",636:"LDAPS",993:"IMAPS",995:"POP3S",1900:"SSDP",3306:"MySQL",3389:"RDP",5060:"SIP",5432:"PostgreSQL",6379:"Redis"},Bt=/^(GET|POST|PUT|DELETE|HEAD|OPTIONS|PATCH|CONNECT|TRACE) \S+ HTTP\/1\.[01]\r?\n|^HTTP\/1\.[01] \d{3}/,C=(u,a)=>u[a]??String(a);function dt(u){if(!u.length)return{ok:!1,error:"empty"};if(u.length<24)return{ok:!1,error:"truncated"};let a=new DataView(u.buffer,u.byteOffset,u.byteLength),t=a.getUint32(0,!1);if(t===168627466)return jt(u,a);let e=t===3569595041||t===1295823521;if(!e&&!(t===2712847316||t===2712812621))return{ok:!1,error:"format"};let s=t===1295823521||t===2712812621,o=a.getUint32(20,e)&268435455,l=[],p=24,y=!1,n=!1,f=ut();for(;p+16<=u.length;){if(l.length>=2e4){n=!0;break}let b=a.getUint32(p,e),g=a.getUint32(p+4,e),w=a.getUint32(p+8,e),F=a.getUint32(p+12,e);if(p+16+w>u.length){y=!0;break}let M=u.subarray(p+16,p+16+w),E=b*1e6+(s?g/1e3:g);l.push(Ut(l.length+1,E,F,M,o,f)),p+=16+w}return p<u.length&&!n&&(y=!0),{ok:!0,capture:{format:"pcap",linkType:o,interfaces:[],packets:l,capped:n,truncated:y,state:f}}}function jt(u,a){let t=[],e=[],r=[],s=!0,o=0,l=!1,p=!1,y=-1,n=ut();for(;o+12<=u.length;){let f=a.getUint32(o,s);if(f===168627466){let F=a.getUint32(o+8,!0);if(F===439041101)s=!0;else if(F===1295788826)s=!1;else return{ok:!1,error:"format"};t=[]}let b=a.getUint32(o+4,s);if(b<12||b%4||o+b>u.length){l=!0;break}let g=o+8,w=o+b-4;if(f===1&&w-g>=8){let F=a.getUint16(g,s),M=a.getUint32(g+4,s),E=1,U="";for(let $ of Qt(a,g+8,w,s))if($.code===9&&$.length>=1){let c=u[$.start];E=1e6/(c&128?2**(c&127):10**c)}else $.code===2&&(U=Q(u.subarray($.start,$.start+$.length)));t.push({linkType:F,scale:E,name:U,snap:M}),e.push(U),y<0&&(y=F)}else if(f===6||f===2||f===3){if(r.length>=2e4){p=!0;break}let F=0,M=0,E=0,U,$,c;f===6?(F=a.getUint32(g,s),M=a.getUint32(g+4,s),E=a.getUint32(g+8,s),U=a.getUint32(g+12,s),$=a.getUint32(g+16,s),c=g+20):f===2?(F=a.getUint16(g,s),M=a.getUint32(g+4,s),E=a.getUint32(g+8,s),U=a.getUint32(g+12,s),$=a.getUint32(g+16,s),c=g+20):($=a.getUint32(g,s),c=g+4,U=Math.min($,w-c,t[0]?.snap||1/0));let d=t[F];if(d&&c+U<=w){let h=f===3?0:(M*4294967296+E)*d.scale;r.push(Ut(r.length+1,h,$,u.subarray(c,c+U),d.linkType,n))}}o+=b}return o<u.length&&!p&&(l=!0),y<0&&!r.length?{ok:!1,error:l?"truncated":"format"}:{ok:!0,capture:{format:"pcapng",linkType:y,interfaces:e,packets:r,capped:p,truncated:l,state:n}}}function Qt(u,a,t,e){let r=[],s=a;for(;s+4<=t;){let o=u.getUint16(s,e),l=u.getUint16(s+2,e);if(o===0||s+4+l>t)break;r.push({code:o,start:s+4,length:l}),s+=4+Math.ceil(l/4)*4}return r}var Kt=/[\u0000-\u0008\u000b-\u001f\u007f-\u009f\u200b-\u200f\u202a-\u202e\u2066-\u2069]/g;function Q(u){return new TextDecoder("utf-8",{fatal:!1}).decode(u).replace(Kt,t=>`\\x${t.charCodeAt(0).toString(16).padStart(2,"0")}`)}var Nt=u=>Q(u).replace(/[\t\n]/g,a=>`\\x0${a.charCodeAt(0).toString(16)}`),It=u=>String.fromCharCode(...u),ut=()=>({streams:new Map});function Ut(u,a,t,e,r,s){let o={index:u,time:a,length:t,data:e,linkType:r,summary:Dt()};try{o.summary=ht(o,s).summary}catch{}return o}var Dt=()=>({src:"",dst:"",srcPort:-1,dstPort:-1,protocol:"",info:"",names:[],answers:[],transport:""}),q=(u,a)=>[...u.subarray(a,a+6)].map(t=>t.toString(16).padStart(2,"0")).join(":"),O=(u,a)=>`${u[a]}.${u[a+1]}.${u[a+2]}.${u[a+3]}`;function ct(u,a){let t=[];for(let s=0;s<8;s+=1)t.push((u[a+s*2]<<8|u[a+s*2+1]).toString(16));let e=-1,r=1;for(let s=0;s<8;){if(t[s]!=="0"){s+=1;continue}let o=s;for(;o<8&&t[o]==="0";)o+=1;o-s>r&&(e=s,r=o-s),s=o}return e<0?t.join(":"):`${t.slice(0,e).join(":")}::${t.slice(e+r).join(":")}`}var N=(u,a)=>`0x${u.toString(16).padStart(a,"0")}`;function ht(u,a=ut()){let t=u.data,e=new DataView(t.buffer,t.byteOffset,t.byteLength),r=[],s=Dt(),o=null,l=(c,d,h,m)=>(o={id:c,name:d,start:h,end:Math.min(m,t.length),fields:[]},r.push(o),s.protocol=d,o),p=(c,d,h,m)=>o.fields.push({key:c,value:String(d),start:h,end:Math.min(t.length,h+m)}),y=c=>{if(c>t.length)throw new RangeError("short")},n=0,f,b=u.linkType;if(b===1){for(y(14),l("eth","Ethernet",0,14),p("ethDst",q(t,0),0,6),p("ethSrc",q(t,6),6,6),f=e.getUint16(12),n=14;f===33024||f===34984;)y(n+4),l("vlan","802.1Q",n-2,n+4),p("vlanId",e.getUint16(n)&4095,n,2),f=e.getUint16(n+2),n+=4;p("etherType",`${C(W,f)} (${N(f,4)})`,n-2,2),s.src=q(t,6),s.dst=q(t,0)}else if(b===113)y(16),l("sll","Linux cooked",0,16),e.getUint16(4)===6&&p("ethSrc",q(t,6),6,6),f=e.getUint16(14),p("etherType",`${C(W,f)} (${N(f,4)})`,14,2),n=16;else if(b===276)y(20),l("sll","Linux cooked v2",0,20),f=e.getUint16(0),p("etherType",`${C(W,f)} (${N(f,4)})`,0,2),p("ifIndex",e.getUint32(4),4,4),t[11]===6&&p("ethSrc",q(t,12),12,6),n=20;else if(b===0){y(4),l("null","Loopback",0,4);let c=e.getUint32(0,t[0]!==0)||e.getUint32(0,!1);f=c===2?2048:[10,24,28,30].includes(c)?34525:-1,p("family",c,0,4),n=4}else if([12,14,101,228,229].includes(b))y(1),f=t[0]>>4===6?34525:2048;else return s.protocol=lt[b]??`Link ${b}`,{layers:r,summary:s};if(f===2054){y(n+28),l("arp","ARP",n,n+28);let c=e.getUint16(n+6);return p("arpOp",c===1?"request":c===2?"reply":c,n+6,2),p("arpSenderMac",q(t,n+8),n+8,6),p("arpSenderIp",O(t,n+14),n+14,4),p("arpTargetMac",q(t,n+18),n+18,6),p("arpTargetIp",O(t,n+24),n+24,4),s.info=c===1?`Who has ${O(t,n+24)}? Tell ${O(t,n+14)}`:`${O(t,n+14)} is at ${q(t,n+8)}`,{layers:r,summary:s}}let g,w=t.length;if(f===2048){y(n+20);let c=(t[n]&15)*4,d=e.getUint16(n+2);y(n+c),l("ip","IPv4",n,n+c),p("ipVersion",4,n,1),p("ipHeaderLength",`${c} bytes`,n,1),p("ipTotalLength",d,n+2,2),p("ipId",N(e.getUint16(n+4),4),n+4,2);let h=e.getUint16(n+6),m=(h&8191)*8;if(p("ipFlags",[h&16384?"DF":"",h&8192?"MF":""].filter(Boolean).join(", ")||"\u2014",n+6,2),m&&p("ipFragment",m,n+6,2),p("ipTtl",t[n+8],n+8,1),g=t[n+9],p("ipProtocol",`${C(it,g)} (${g})`,n+9,1),p("ipChecksum",N(e.getUint16(n+10),4),n+10,2),s.src=O(t,n+12),s.dst=O(t,n+16),p("ipSrc",s.src,n+12,4),p("ipDst",s.dst,n+16,4),d>=c&&(w=Math.min(t.length,n+d)),n+=c,m)return s.info=`Fragment at ${m}`,{layers:r,summary:s}}else if(f===34525){y(n+40),l("ip","IPv6",n,n+40),p("ipVersion",6,n,1),p("ipFlow",N(e.getUint32(n)&1048575,5),n,4);let c=e.getUint16(n+4);for(p("ipPayloadLength",c,n+4,2),g=t[n+6],p("ipNextHeader",`${C(it,g)} (${g})`,n+6,1),p("ipHopLimit",t[n+7],n+7,1),s.src=ct(t,n+8),s.dst=ct(t,n+24),p("ipSrc",s.src,n+8,16),p("ipDst",s.dst,n+24,16),w=Math.min(t.length,n+40+c),n+=40;[0,43,44,60].includes(g)&&n+8<=w;){let d=t[n],h=g===44?8:(t[n+1]+1)*8;if(g===44&&e.getUint16(n+2)&65528)return s.info="Fragment",{layers:r,summary:s};g=d,n+=h}}else return s.protocol=C(W,f),{layers:r,summary:s};if(s.protocol=C(it,g),g===1||g===58){y(n+4);let c=g===1?qt:zt;l("icmp",g===1?"ICMP":"ICMPv6",n,w);let d=t[n];p("icmpType",`${C(c,d)} (${d})`,n,1),p("icmpCode",t[n+1],n+1,1);let h=C(c,d);return(g===1&&(d===0||d===8)||g===58&&(d===128||d===129))&&(y(n+8),p("icmpId",e.getUint16(n+4),n+4,2),p("icmpSeq",e.getUint16(n+6),n+6,2),h+=` id=${e.getUint16(n+4)} seq=${e.getUint16(n+6)}`),s.info=h,{layers:r,summary:s}}if(g===6){y(n+20);let c=(t[n+12]>>4)*4;l("tcp","TCP",n,n+c);let d=e.getUint16(n),h=e.getUint16(n+2);s.srcPort=d,s.dstPort=h,s.transport="TCP";let m=e.getUint32(n+4),x=e.getUint32(n+8),A=e.getUint16(n+12)&511,S=["FIN","SYN","RST","PSH","ACK","URG","ECE","CWR","AE"].filter((gt,V)=>A&1<<V),k=`${s.src}:${d}>${s.dst}:${h}`,_=`${s.dst}:${h}>${s.src}:${d}`;a.streams.has(k)||a.streams.set(k,S.includes("SYN")?m:m-1);let v=a.streams.get(k),P=m-v>>>0,I=a.streams.has(_)?x-a.streams.get(_)>>>0:x;p("srcPort",d,n,2),p("dstPort",h,n+2,2),p("tcpSeq",`${P} (${m})`,n+4,4),S.includes("ACK")&&p("tcpAck",`${I} (${x})`,n+8,4),p("tcpHeaderLength",`${c} bytes`,n+12,1),p("tcpFlags",S.join(", ")||"\u2014",n+12,2);let z=e.getUint16(n+14);p("tcpWindow",z,n+14,2),p("tcpChecksum",N(e.getUint16(n+16),4),n+16,2);let T=n+c,L=t.subarray(Math.min(T,w),w);return s.info=`${d} \u2192 ${h} [${S.join(", ")}] Seq=${P}${S.includes("ACK")?` Ack=${I}`:""} Win=${z} Len=${L.length}`,s.protocol="TCP",L.length&&F(L,T,d,h,"TCP"),{layers:r,summary:s}}if(g===17){y(n+8),l("udp","UDP",n,n+8);let c=e.getUint16(n),d=e.getUint16(n+2);s.srcPort=c,s.dstPort=d,s.transport="UDP",p("srcPort",c,n,2),p("dstPort",d,n+2,2),p("udpLength",e.getUint16(n+4),n+4,2),p("udpChecksum",N(e.getUint16(n+6),4),n+6,2);let h=t.subarray(Math.min(n+8,w),w);return s.info=`${c} \u2192 ${d} Len=${h.length}`,s.protocol="UDP",h.length&&F(h,n+8,c,d,"UDP"),{layers:r,summary:s}}return{layers:r,summary:s};function F(c,d,h,m,x){if([h,m].some(k=>k===53||k===5353||k===5355)){let k=x==="TCP"?2:0;c.length>=k+12&&M(d+k,d+c.length,h===5353||m===5353?"mDNS":h===5355||m===5355?"LLMNR":"DNS");return}if(x==="TCP"&&Bt.test(It(c.subarray(0,120)))){E(c,d);return}if(x==="TCP"&&c.length>=5&&X[c[0]]&&c[1]===3&&c[2]<=4){U(d,d+c.length);return}let S=Math.min(h,m)in J?Math.min(h,m):m in J?m:h in J?h:-1;S>=0&&(s.protocol=J[S])}function M(c,d,h){l("dns",h,c,d);let m=e.getUint16(c),x=e.getUint16(c+2),A=!!(x&32768),S=x&15,k=e.getUint16(c+4),_=e.getUint16(c+6);p("dnsId",N(m,4),c,2),p("dnsKind",A?"response":"query",c+2,2),A&&p("dnsRcode",Lt[S]??S,c+2,2),p("dnsQuestions",k,c+4,2),p("dnsAnswers",_,c+6,2);let v=c+12,P=[];for(let z=0;z<Math.min(k,20)&&v<d;z+=1){let T=tt(t,v,c,d);if(!T)break;y(T.end+4);let L=e.getUint16(T.end);p("dnsQuestion",`${T.name} ${C(ot,L)}`,v,T.end+4-v),P.push(`${C(ot,L)} ${T.name}`),s.names.push(T.name),v=T.end+4}let I=[];for(let z=0;z<Math.min(_,50)&&v<d;z+=1){let T=tt(t,v,c,d);if(!T||T.end+10>d)break;let L=e.getUint16(T.end),gt=e.getUint32(T.end+4),V=e.getUint16(T.end+8),D=T.end+10;if(D+V>d)break;let R="";L===1&&V===4?R=O(t,D):L===28&&V===16?R=ct(t,D):L===5||L===2||L===12?R=tt(t,D,c,d)?.name??"":L===15?R=`${e.getUint16(D)} ${tt(t,D+2,c,d)?.name??""}`:L===16&&(R=Q(t.subarray(D+1,D+1+Math.min(t[D],V-1))));let at=C(ot,L);p("dnsAnswer",`${T.name} ${at} ${R||`(${V} bytes)`} TTL ${gt}`,v,D+V-v),s.answers.push({name:T.name,type:at,data:R}),R&&I.push(`${at} ${R}`),v=D+V}s.info=A?`Response ${N(m,4)} ${P.join(", ")}${S?` ${Lt[S]??`rcode ${S}`}`:""}${I.length?` \u2192 ${I.slice(0,4).join(", ")}${I.length>4?" \u2026":""}`:""}`:`Query ${N(m,4)} ${P.join(", ")}`}function E(c,d){let h=It(c.subarray(0,Math.min(c.length,8192))),m=h.search(/\r?\n\r?\n/),x=(m<0?h:h.slice(0,m)).split(/\r?\n/);l("http","HTTP",d,d+(m<0?c.length:m+4));let A=d,S=k=>Q(Uint8Array.from(k,_=>_.charCodeAt(0)));for(let[k,_]of x.slice(0,60).entries()){p(k===0?"httpLine":"httpHeader",S(_),A,_.length);let v=_.indexOf(":");k>0&&v>0&&_.slice(0,v).toLowerCase()==="host"&&s.names.push(S(_.slice(v+1)).trim().replace(/:\d+$/,"").toLowerCase()),A+=_.length+(h[A-d+_.length]==="\r"?2:1)}s.info=S(x[0])}function U(c,d){l("tls","TLS",c,d);let h=[],m=c;for(;m+5<=d&&h.length<8;){let x=t[m],A=e.getUint16(m+1),S=e.getUint16(m+3),k=Math.min(d,m+5+S);if(!X[x])break;if(p("tlsRecord",`${C(X,x)}, ${C(Z,A)}, ${S} bytes`,m,5),x===22&&m+9<=k){let _=t[m+5],v=Ot[_];v?(h.push(v),p("tlsHandshake",v,m+5,4),(_===1||_===2)&&$(m+9,k,_===1,h)):h.push("Encrypted Handshake Message")}else x===21?h.push(S===2&&m+7<=k?`Alert (${t[m+5]===2?"fatal":"warning"}, ${t[m+6]})`:"Encrypted Alert"):h.push(C(X,x));m+=5+S}s.protocol="TLS",s.info=[...new Set(h)].join(", ")}function $(c,d,h,m){if(c+38>d)return;p("tlsVersion",C(Z,e.getUint16(c)),c,2);let x=c+34;if(x+=1+t[x],h){if(x+2>d)return;let S=e.getUint16(x);if(p("tlsCipherSuites",S/2,x,2+S),x+=2+S,x+1>d)return;x+=1+t[x]}else{if(x+3>d)return;p("tlsCipherSuite",N(e.getUint16(x),4),x,2),x+=3}if(x+2>d)return;let A=Math.min(d,x+2+e.getUint16(x));for(x+=2;x+4<=A;){let S=e.getUint16(x),k=e.getUint16(x+2),_=x+4;if(_+k>A)break;if(S===0&&h&&k>=5){let v=e.getUint16(_+3),P=Nt(t.subarray(_+5,Math.min(_+5+v,_+k))).toLowerCase();p("tlsSni",P,_+5,v),s.names.push(P),m[m.length-1]+=` (${P})`}else if(S===16&&k>=2){let v=[],P=_+2;for(;P<_+k;){let I=t[P];v.push(Q(t.subarray(P+1,P+1+I))),P+=1+I}p("tlsAlpn",v.join(", "),_,k)}else if(S===43){let v=h?Array.from({length:Math.floor(t[_]/2)},(P,I)=>C(Z,e.getUint16(_+1+I*2))).filter(P=>!/^\d+$/.test(P)):[C(Z,e.getUint16(_))];p("tlsSupportedVersions",v.join(", "),_,k)}x=_+k}}}function tt(u,a,t,e){let r=[],s=a,o=-1;for(let l=0;l<20&&s<e;){let p=u[s];if(p===0)return o<0&&(o=s+1),{name:r.join(".").toLowerCase()||".",end:o};if((p&192)===192){if(s+1>=e)return null;o<0&&(o=s+2),s=t+((p&63)<<8|u[s+1]),l+=1;continue}if(p>63||s+1+p>e||(r.push(Nt(u.subarray(s+1,s+1+p))),s+=1+p,r.length>127))return null}return null}function Et(u){let a=new Map;for(let t of u){let e=t.summary;if(!e.src)continue;let r=(f,b)=>b>=0?f.includes(":")?`[${f}]:${b}`:`${f}:${b}`:f,s=r(e.src,e.srcPort),o=r(e.dst,e.dstPort),[l,p]=s<o?[s,o]:[o,s],y=`${e.transport}|${l}|${p}`,n=a.get(y);n||(n={a:l,b:p,transport:e.transport||e.protocol,protocol:"",packets:0,bytes:0,first:t.time,last:t.time,protocols:new Map},a.set(y,n)),n.packets+=1,n.bytes+=t.length,n.first=Math.min(n.first,t.time),n.last=Math.max(n.last,t.time),n.protocols.set(e.protocol,(n.protocols.get(e.protocol)??0)+1)}return[...a.values()].map(({protocols:t,...e})=>{let r=[...t].filter(([s])=>s!==e.transport).sort((s,o)=>o[1]-s[1])[0];return{...e,protocol:r?r[0]:e.transport}}).sort((t,e)=>e.packets-t.packets||e.bytes-t.bytes)}function ft(u){let a=new Map,t=e=>{let r=a.get(e);return r||(r={sources:new Set,addresses:new Set,packets:[]},a.set(e,r)),r};for(let e of u){let r=e.summary,s=r.protocol==="TLS"?"sni":r.protocol==="HTTP"?"http":"dns";for(let o of new Set(r.names)){if(!o||o===".")continue;let l=t(o);l.sources.add(s),l.packets.length<50&&l.packets.push(e.index)}for(let o of r.answers){if(!o.data)continue;let l=t(o.name);l.sources.add("dns"),(o.type==="A"||o.type==="AAAA"||o.type==="CNAME")&&l.addresses.add(o.data),l.packets.length<50&&!l.packets.includes(e.index)&&l.packets.push(e.index)}}return[...a].map(([e,r])=>({name:e,sources:[...r.sources].sort(),addresses:[...r.addresses],packets:r.packets})).sort((e,r)=>e.name.localeCompare(r.name))}function mt(u){let a=new Map;for(let t of u)a.set(t.summary.protocol||"?",(a.get(t.summary.protocol||"?")??0)+1);return[...a].sort((t,e)=>e[1]-t[1]||t[0].localeCompare(e[0]))}function Mt(u,a){let t=r=>{let s=String(r);return/^[=+\-@\t\r]/.test(s)&&(s=`'${s}`),/[",\n\r]/.test(s)||s!==String(r)?`"${s.replace(/"/g,'""')}"`:s},e=[["No.","Time","Source","Destination","Protocol","Length","Info"]];for(let r of u){let s=r.summary;e.push([String(r.index),((r.time-a)/1e6).toFixed(6),s.src,s.dst,s.protocol,String(r.length),s.info])}return e.map(r=>r.map(t).join(",")).join(`
`)}St({en:pt,fr:At});var Vt=64*1024*1024,K=500,Yt=Object.freeze(["packets","conversations","names"]),Rt=class extends wt{static type="pcap";static componentAttributes=Object.freeze(["view","filters","file","defang","tabs"]);static presets={simple:{tabs:!0},full:{header:!0,dot:!0,copy:!0,fullscreen:!0,tabs:!0}};static styles=[$t];static allowEmpty=!0;static fromData=Tt;static upgradeProperties=["content","bytes","file"];constructor(){super(),this.panelId=nt("panel"),this.ids={query:nt("query")},this._bytes=void 0,this.fetched=null,this._file=null,this.fileBytes=null,this.fileError="",this.parsed=null,this.viewState=null,this.shown=new Set,this.query="",this.limit=K,this.selected=0,this.mark=null,this.dragging=0,this.cells=[]}get bytes(){return(this.source()??new Uint8Array(0)).slice()}set bytes(a){this._bytes=a==null?void 0:new Uint8Array(a),this.resetView(),this._connected&&this.reload()}get file(){return this._file}set file(a){this.setFile(a instanceof Blob?a:null)}get capture(){let a=this.read();return a&&a.ok?a.capture:null}get view(){return this.viewState??yt(this.getAttribute("view"),Yt,"packets")}flag(a,t){return st(this.getAttribute(a))??t}resetView(){this.selected=0,this.mark=null,this.limit=K,this.shown.clear()}cancelFetch(){this._abort?.abort()}reload(){let a=this.getAttribute("src");if(this.fetched=null,this._bytes||this._file||this._content!==void 0||!a?.trim()){this._bytes||this._file?(this._loadToken+=1,this.cancelFetch(),this.setText("")):super.reload();return}let t=++this._loadToken;this.cancelFetch();let e=new AbortController;this._abort=e,this.loading=!0,this.error=null,this.requestRender();let r=xt();Ct(a,{allowRemote:st(this.getAttribute("allow-remote"))===!0,maxSize:r.maxSize,timeout:r.fetchTimeout,signal:e.signal}).then(s=>{t===this._loadToken&&(this.fetched=s,this.resetView(),this.setText(""))},s=>t===this._loadToken&&!bt(s)&&this.setError(s))}async setFile(a){if(this._file=a,this.fileBytes=null,this.fileError="",this.resetView(),a&&a.size>Vt&&(this.fileError=this.t("pcapTooLarge",{size:j(a.size,this.locale),limit:j(Vt,this.locale)}),this._file=null),this.requestRender(),!this._file)return;let t=this._file;try{let e=new Uint8Array(await t.arrayBuffer());if(this._file!==t)return;this.fileBytes=e}catch{if(this._file!==t)return;this.fileError=this.t("pcapReadFailed"),this._file=null}this.requestRender()}source(){return this._bytes?this._bytes:this._file?this.fileBytes:this.fetched?this.fetched:null}read(){let a=this.source(),t=a?null:this.text??"",e=a??t;if(this.parsed?.key===e)return this.parsed.result;if(a)this.parsed={key:e,result:dt(a)};else if(t?.trim())try{this.parsed={key:e,result:dt(Ft(t))}}catch(r){this.parsed={key:e,result:{ok:!1,error:"text",message:r instanceof Error?r.message:String(r)}}}else return null;return this.parsed.result}seconds(a){return(a/1e6).toFixed(6)}duration(a){let t=a/1e3;return t<1e3?`${new Intl.NumberFormat(this.locale,{maximumFractionDigits:1}).format(t)} ms`:`${new Intl.NumberFormat(this.locale,{maximumFractionDigits:2}).format(t/1e3)} s`}dots(a){return this.flag("defang",!1)?a.replace(/\./g,"[.]"):a}filtered(a){let t=this.query.trim().toLowerCase();return a.filter(e=>{let r=e.summary;return this.shown.size&&!this.shown.has(r.protocol||"?")?!1:!t||/^\d+$/.test(t)&&(String(r.srcPort)===t||String(r.dstPort)===t)?!0:`${r.src} ${r.dst} ${r.protocol} ${r.info} ${r.names.join(" ")}`.toLowerCase().includes(t)})}renderContent(a){let t=this.t,e=this.read(),r=e&&e.ok?e.capture:null,s=i("div",{class:`body pcap-body${this.dragging?" dragging":""}`,part:"body",on:this.flag("file",!0)?this.dropHandlers():{}}),o=null;if(this.fileError&&s.append(i("p",{class:"pcap-error",attrs:{role:"alert"},text:this.fileError})),!e)this.flag("file",!0)?s.append(this.zoneView()):this._file||s.append(B(t("pcapEmpty")));else if(!e.ok)s.append(B(e.error==="text"?t("pcapInvalidText",{message:e.message}):t(`pcapInvalid${e.error[0].toUpperCase()}${e.error.slice(1)}`))),this.flag("file",!0)&&s.append(this.zoneView());else if(r){let b=Et(r.packets),g=ft(r.packets);o=this.feature("tabs")?vt({tabs:[{id:"packets",label:t("pcapTabPackets",{count:H(r.packets.length,this.locale)})},{id:"conversations",label:t("pcapTabConversations",{count:b.length})},{id:"names",label:t("pcapTabNames",{count:g.length})}],selected:this.view,label:t("pcapTabs"),panelId:this.panelId,onSelect:F=>this.selectView(F)}):null,s.append(this.summaryView(r)),r.truncated&&s.append(B(t("pcapTruncated"))),r.capped&&s.append(B(t("pcapCapped",{count:H(r.packets.length,this.locale)})));let w=o?this.view:"packets";if(w==="conversations")s.append(this.conversationsView(b,r));else if(w==="names")s.append(this.namesView(g));else{this.flag("filters",!0)&&s.append(this.filtersView(r.packets)),s.append(this.packetsView(r));let F=r.packets[this.selected-1];F&&s.append(this.packetView(F,r))}}let l=i("div",{class:"panel",attrs:{id:this.panelId,role:o?"tabpanel":null}},s),p=r?this.filtered(r.packets):[],y=this.feature("copy")&&r,n=[this.fullscreenButton(),y&&p.length?this.copyTextButton(()=>Mt(p,r.packets[0]?.time??0),t("pcapCopyCsv"),"copy-csv"):null,y?this.copyButton(()=>ft(r.packets).map(b=>this.dots(b.name)).join(`
`),t("pcapCopyNames")):null],f=r?`${r.format==="pcapng"?"PCAPNG":"PCAP"} \xB7 ${t("pcapPackets",{count:H(r.packets.length,this.locale)})}`:"PCAP";a.append(...this.chrome({badge:f,tabs:o,actions:n}),l)}selectView(a){a!==this.view&&(this.viewState=a,this.render(),this.root.querySelector(`[data-tab="${a}"]`)?.focus(),G(this,Y.TAB_CHANGE,{tab:a}))}dropHandlers(){let a=t=>[...t.dataTransfer?.types??[]].includes("Files");return{dragenter:t=>{a(t)&&(this.dragging+=1,this.dragging===1&&this.render())},dragover:t=>{a(t)&&t.preventDefault()},dragleave:()=>{this.dragging&&(this.dragging-=1,this.dragging||this.render())},drop:t=>{t.preventDefault(),this.dragging=0;let e=t.dataTransfer?.files?.[0];e?this.setFile(e):this.render()}}}fileInput(){let a=i("input",{class:"sr-only",attrs:{type:"file",accept:".pcap,.pcapng,.cap,application/vnd.tcpdump.pcap",tabindex:"-1","aria-hidden":"true"},on:{change:()=>{let t=a.files?.[0];t&&this.setFile(t),a.value=""}}});return a}zoneView(){let a=this.t,t=this.fileInput();return i("div",{class:"pcap-zone",part:"zone"},t,kt("upload"),i("span",{text:this.dragging?a("pcapDropNow"):`${a("pcapDrop")} `}),this.dragging?null:i("button",{class:"text-btn",text:a("pcapChoose"),attrs:{type:"button","data-focus-key":"choose"},on:{click:()=>t.click()}}),i("span",{class:"pcap-muted pcap-note",text:a("pcapFileNote")}))}summaryView(a){let t=this.t,e=a.packets,r=e[0]?.time??0,s=e.at(-1)?.time??0,o=e.reduce((f,b)=>f+b.length,0),l=lt[a.linkType]??String(a.linkType),p=r?new Date(r/1e3):null,y=this.flag("file",!0)?this.fileInput():null,n=mt(e).slice(0,6);return i("div",{class:"pcap-summary",part:"summary"},i("p",{class:"pcap-facts"},this._file?i("strong",{class:"pcap-file",text:this._file.name}):null,i("strong",{text:t("pcapPackets",{count:H(e.length,this.locale)})}),e.length>1?i("span",{text:t("pcapDuration",{time:this.duration(s-r)})}):null,p&&!Number.isNaN(p.getTime())?i("span",{class:"pcap-muted",text:t("pcapStarted",{date:p.toISOString().replace("T"," ").replace(/\.\d+Z$/," UTC")})}):null,i("span",{text:t("pcapBytes",{size:j(o,this.locale)})}),i("span",{class:"pcap-muted",text:t("pcapLink",{link:l})}),a.interfaces.filter(Boolean).length?i("span",{class:"pcap-muted",text:t("pcapInterfaces",{names:a.interfaces.filter(Boolean).join(", ")})}):null,y,y?i("button",{class:"text-btn",text:t("pcapOpenOther"),attrs:{type:"button","data-focus-key":"open-other"},on:{click:()=>y.click()}}):null),n.length?i("ul",{class:"pcap-protocols",attrs:{"aria-label":t("pcapProtocol")}},...n.map(([f,b])=>i("li",{},i("span",{class:`pcap-proto p-${et(f)}`,text:f}),i("span",{class:"pcap-muted",text:` ${H(b,this.locale)}`})))):null)}filtersView(a){let t=this.t,e=mt(a),r=(o,l,p,y)=>i("button",{class:`pcap-chip${p?" on":""}`,text:l,attrs:{type:"button","aria-pressed":String(p),"data-focus-key":`filter-${o}`},on:{click:y}}),s=i("input",{class:"pcap-query",attrs:{id:this.ids.query,type:"search",value:this.query,placeholder:t("pcapFilterText"),"aria-label":t("pcapFilterText"),"data-focus-key":"query",spellcheck:"false"},on:{input:()=>{this.query=s.value.slice(0,200),this.filtersChanged(a)}}});return i("div",{class:"pcap-filters",part:"filters",attrs:{role:"group","aria-label":t("pcapFilters")}},r("all",t("pcapAll"),!this.shown.size,()=>{this.shown.clear(),this.filtersChanged(a)}),...e.slice(0,12).map(([o,l])=>r(o,`${o} ${H(l,this.locale)}`,this.shown.has(o),()=>{this.shown.has(o)?this.shown.delete(o):this.shown.add(o),this.shown.size===e.length&&this.shown.clear(),this.filtersChanged(a)})),s)}filtersChanged(a){this.limit=K,this.render(),G(this,Y.FILTER_CHANGE,{protocols:[...this.shown],query:this.query,shown:this.filtered(a).length})}packetsView(a){let t=this.t,e=this.filtered(a.packets);if(!e.length)return B(t("pcapNone"));let r=a.packets[0]?.time??0,s=[t("pcapNo"),t("pcapTime"),t("pcapSource"),t("pcapDestination"),t("pcapProtocol"),t("pcapLength"),t("pcapInfo")],o=e.length>this.limit?i("button",{class:"text-btn pcap-more",text:t("pcapShowMore",{count:H(Math.min(K,e.length-this.limit),this.locale)}),attrs:{type:"button","data-focus-key":"more"},on:{click:()=>{this.limit+=K,this.render()}}}):null;return i("div",{class:"pcap-packets"},i("div",{class:"pcap-scroll"},i("table",{class:"pcap-table",part:"packets"},i("thead",{},i("tr",{},...s.map(l=>i("th",{attrs:{scope:"col"},text:l})))),i("tbody",{},...e.slice(0,this.limit).map(l=>{let p=l.summary,y=l.index===this.selected,n=(f,b)=>b>=0?`${f}:${b}`:f;return i("tr",{class:`pcap-row p-${et(p.protocol)}${y?" open":""}`,attrs:{"data-index":l.index}},i("th",{attrs:{scope:"row"}},i("button",{class:"pcap-open",text:String(l.index),attrs:{type:"button","aria-pressed":String(y),"aria-label":t("pcapPacket",{index:l.index}),"data-focus-key":`packet-${l.index}`},on:{click:()=>this.open(l)}})),i("td",{class:"pcap-num",text:this.seconds(l.time-r)}),i("td",{},i("code",{text:n(p.src,p.srcPort)})),i("td",{},i("code",{text:n(p.dst,p.dstPort)})),i("td",{},i("span",{class:`pcap-proto p-${et(p.protocol)}`,text:p.protocol||"?"})),i("td",{class:"pcap-num",text:String(l.length)}),i("td",{class:"pcap-info",text:this.flag("defang",!1)?p.info.replace(/([a-z0-9-])\.([a-z])/gi,"$1[.]$2"):p.info}))})))),o)}open(a){this.selected===a.index?this.selected=0:(this.selected=a.index,G(this,Y.SELECT,{index:a.index,protocol:a.summary.protocol,info:a.summary.info})),this.mark=null,this.render(),this.selected&&this.root.querySelector(".pcap-packet")?.scrollIntoView?.({block:"nearest"})}packetView(a,t){let e=this.t,{layers:r}=ht(a,t.state),s=t.packets[0]?.time??0,o=this.dumpView(a.data);return i("section",{class:"pcap-packet",part:"packet",attrs:{"aria-label":e("pcapPacket",{index:a.index})}},i("header",{class:"pcap-packet-head"},i("h3",{text:e("pcapPacket",{index:a.index})}),i("span",{class:"pcap-muted",text:e("pcapPacketSummary",{length:a.length,captured:a.data.length,time:`${this.seconds(a.time-s)} s`})}),i("button",{class:"text-btn",text:e("pcapClose"),attrs:{type:"button","data-focus-key":"close-packet"},on:{click:()=>this.open(a)}})),i("div",{class:"pcap-split"},i("div",{class:"pcap-layers",part:"layers",attrs:{"aria-label":e("pcapLayers"),role:"group"}},...r.map(l=>this.layerView(l))),i("div",{class:"pcap-dump-box"},i("p",{class:"pcap-label",text:e("pcapBytesView")}),o)))}layerView(a){let t=this.t;return i("details",{class:`pcap-layer l-${a.id}`,attrs:{open:!0}},i("summary",{},i("span",{class:"pcap-layer-name",text:a.name}),i("span",{class:"pcap-muted",text:` ${t("pcapFieldBytes",{from:a.start,to:Math.max(a.start,a.end-1)})}`})),i("dl",{},...a.fields.flatMap((e,r)=>{let s=`pcapF_${e.key}`,o=Object.hasOwn(pt,s)?t(s):e.key,l=this.mark?.start===e.start&&this.mark?.end===e.end;return[i("dt",{},i("button",{class:`pcap-field${l?" on":""}`,text:o,attrs:{type:"button","aria-pressed":String(l),title:t("pcapFieldBytes",{from:e.start,to:Math.max(e.start,e.end-1)}),"data-start":e.start,"data-end":e.end,"data-focus-key":`field-${a.id}-${r}`},on:{click:()=>this.markBytes(e.start,e.end)}})),i("dd",{},i("code",{text:e.key==="tlsSni"||e.key==="dnsQuestion"||e.key==="dnsAnswer"?this.dots(e.value):e.value}))]})))}markBytes(a,t){let e=this.mark?.start===a&&this.mark?.end===t;this.mark=e?null:{start:a,end:t};for(let r of this.cells){let s=Number(r.dataset.byte);r.classList.toggle("mark",!e&&s>=a&&s<t)}for(let r of this.root.querySelectorAll(".pcap-field")){let s=!e&&r.dataset.start===String(a)&&r.dataset.end===String(t);r.classList.toggle("on",s),r.setAttribute("aria-pressed",String(s))}this.cells.find(r=>r.classList.contains("mark"))?.scrollIntoView?.({block:"nearest"})}dumpView(a){let t=a.subarray(0,65536);this.cells=[];let e=i("div",{class:"pcap-dump",part:"dump",attrs:{"aria-label":this.t("pcapBytesView"),role:"group"}});for(let r=0;r<t.length;r+=16){let s=i("div",{class:"pcap-dump-row"}),o=i("span",{class:"pcap-hex"}),l=i("span",{class:"pcap-ascii"});for(let p=r;p<Math.min(r+16,t.length);p+=1){let y=this.mark&&p>=this.mark.start&&p<this.mark.end,n=i("span",{class:`b${y?" mark":""}`,text:rt(t[p]),attrs:{"data-byte":p}}),f=i("span",{class:`b${y?" mark":""}`,text:Pt(t[p]),attrs:{"data-byte":p}});this.cells.push(n,f),o.append(n),l.append(f)}_t(s,[i("span",{class:"pcap-offset",text:rt(r,4)}),o,l]),e.append(s)}return e}conversationsView(a,t){let e=this.t,r=t.packets[0]?.time??0,s=[e("pcapEndpointA"),e("pcapEndpointB"),e("pcapTransport"),e("pcapProtocol"),e("pcapPacketsCol"),e("pcapBytesCol"),e("pcapStart"),e("pcapDurationCol")];return i("div",{class:"pcap-scroll"},i("table",{class:"pcap-table pcap-convs",part:"conversations"},i("thead",{},i("tr",{},...s.map(o=>i("th",{attrs:{scope:"col"},text:o})))),i("tbody",{},...a.slice(0,2e3).map(o=>i("tr",{},i("th",{attrs:{scope:"row"}},i("code",{text:o.a})),i("td",{},i("code",{text:o.b})),i("td",{text:o.transport}),i("td",{},i("span",{class:`pcap-proto p-${et(o.protocol)}`,text:o.protocol})),i("td",{class:"pcap-num",text:H(o.packets,this.locale)}),i("td",{class:"pcap-num",text:j(o.bytes,this.locale)}),i("td",{class:"pcap-num",text:this.seconds(o.first-r)}),i("td",{class:"pcap-num",text:this.duration(o.last-o.first)}))))))}namesView(a){let t=this.t;return a.length?i("div",{class:"pcap-scroll"},i("table",{class:"pcap-table pcap-names",part:"names"},i("thead",{},i("tr",{},...[t("pcapName"),t("pcapSeenIn"),t("pcapResolves"),t("pcapInPackets")].map(e=>i("th",{attrs:{scope:"col"},text:e})))),i("tbody",{},...a.map(e=>i("tr",{},i("th",{attrs:{scope:"row"}},i("code",{text:this.dots(e.name)})),i("td",{text:e.sources.map(r=>t(`pcapSeen_${r}`)).join(", ")}),i("td",{},i("code",{text:e.addresses.map(r=>/[a-z]/i.test(r)&&!r.includes(":")?this.dots(r):r).join(", ")})),i("td",{class:"pcap-num",text:e.packets.slice(0,12).join(", ")+(e.packets.length>12?" \u2026":"")})))))):B(t("pcapNoNames"))}};function et(u){let a=u.toLowerCase();return a==="dns"||a==="mdns"||a==="llmnr"?"dns":a==="tls"?"tls":a==="http"?"http":a==="tcp"?"tcp":a==="udp"?"udp":a.startsWith("icmp")?"icmp":a==="arp"?"arp":"other"}export{Rt as a};
