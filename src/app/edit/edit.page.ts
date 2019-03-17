import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Storage } from '@ionic/storage';
import * as convert from 'xml-js';
import { ReadVarExpr } from '@angular/compiler';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss']
})
export class EditPage implements OnInit {
  public elements: SafeHtml[];
  private reader = new FileReader();
  constructor(private storage: Storage, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    console.log('ssw', ssw);
    let strs = 'AS10011S10019S2e704S2e748M525x535S2e748483x510S10011501x466S2e704510x500S10019476x475 AS15a21S15a07S21100S2df04S2df14M521x538S15a07494x488S15a21498x489S2df04498x517S2df14497x461S21100479x486 AS1f010S10018S20600M519x524S10018485x494S1f010490x494S20600481x476 S38800464x496 AS10e00M507x515S10e00492x485 AS15d41S15a36S21100S26505M535x521S15d41464x479S15a36474x503S21100507x491S26505522x508 S38700463x496 AS10020M508x515S10020493x485 AS10011S28108S30a00M540x519S30a00482x482S10011519x489S28108519x461 AS10e00S10e08S20500S27100S2711cS20500S2fc00S30006S30002M544x527S10e08470x497S10e00516x497S30006482x482S20500519x484S20500471x484S27100504x464S2711c451x463S30002482x482S2fc00491x453 S38700463x496 AS10e20M508x515S10e20493x485 AS10011S28108S30a00M540x519S30a00482x482S10011519x489S28108519x461 AS10120S15a3aS26a02S20e00M529x518S15a3a502x506S20e00487x495S10120507x483S26a02471x491 AS10020S2df04S10000M527x516S10000512x486S10020473x486S2df04489x485 AS10012S19205S22a04S20e00M529x525S10012499x477S20e00499x491S19205472x476S22a04499x510 S38800464x496 AS15a21S2a20cS15a01S15a07M538x518S15a21515x483S15a07463x482S15a01466x483S2a20c493x490 AS10011S10019S2eb04S2eb48M523x536S2eb48485x504S10011502x463S2eb04507x497S10019477x472 AS19a00S19a08S22a04S22a14S2fb04M534x521S22a14475x503S19a00506x479S19a08467x479S22a04514x504S2fb04493x515 S38800464x496 AS1eb20S15a37S26507S26507S15a10S15a18S22b04S22b14M530x550S15a37470x456S15a10515x523S15a18481x523S1eb20490x468S22b14479x488S26507504x450S22b04514x489S26507516x460 AS1d117S26505S1d417M539x531S1d117460x468S1d417514x506S26505491x492 M517x522S1000a487x507S10041483x479 S38700463x496 AS20320S22e04M509x519S20320493x481S22e04492x501 S38800464x496 M532x516S1ce20469x485S20320495x500S18620514x486 S38700463x496 M533x538S1f110504x523S34d00482x482 M554x518S1920a481x484S19202501x484S26606524x483S26612446x483S20500496x507 S38700463x496 AS15d02S15d0aS20e00S22f00M522x524S22f00487x477S15d02495x500S15d0a479x505S20e00493x493 AS11500S20308S20e00S26a02S34600M525x562S20308503x547S11500510x515S20e00495x531S26a02478x525S34600482x482 S38700463x496 M551x542S1dc2f448x465S1dc01482x459S26605502x488S26615467x490S1e101526x509S1e12f488x510 AS18040S18048S2eb08S2eb4cS2fb00M532x538S18040501x523S18048467x511S2eb4c477x470S2eb08506x483S2fb00494x462 S38800464x496 M532x516S1ce20469x485S20320495x500S18620514x486 AS19a00S19a08S22a04S22a14S2fb04M534x521S22a14475x503S19a00506x479S19a08467x479S22a04514x504S2fb04493x515 S38700463x496 AS10011S10019S2eb04S2eb48M523x536S2eb48485x504S10011502x463S2eb04507x497S10019477x472 AS1eb20S15a06S29b0bM516x531S15a06484x468S1eb20492x483S29b0b484x496 AS20350S20358S22f04S22f14S30114M528x565S20350508x530S20358477x530S22f04503x551S22f14471x551S30114482x477 S38800464x496'.split(
      ' '
    );
    this.elements = [];

    strs.forEach(element => {
      this.elements.push(
        this.sanitize(
          '<div style="min-width:100px;">' + ssw.svg(element) + '</div>'
        )
      );
    });

    this.reader.onload = () => {
      const xml: string | ArrayBuffer = this.reader.result as string;
      this.readwrite(xml);
    };
  }

  sanitize(content: string) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  readwrite(xml: string) {
    // const xml = `<?xml version="1.0" encoding="UTF-8"?>
    // < !DOCTYPE spml SYSTEM "http://www.signpuddle.net/spml_1.6.dtd" >
    //   <spml root="SignWriter Studio™" uuid="4e2a11e8-72f2-42d8-ba69-6d8b1cd04007" type="sgn" puddle="2000" cdt="1552856591" mdt="1552856591">
    //     <term><![CDATA[Exported from SignWriter Studio™, puddle 2000]]></term>
    //     <entry id="4" uuid="9e6dabff-2b0a-47c1-9c00-eb8719b175c6" cdt="1493135576" mdt="1493135576">
    //       <term>M512x583S16d10495x418S1f720491x442S1dc20488x461S10120496x495S14a20496x529S17610496x548S20320496x568</term>
    //       <term><![CDATA[caldeos]]></term>
    //     </entry>
    //     <entry id="5" uuid="36f28b1f-6e67-41db-8efe-8115be16ee5e" cdt="1489670972" mdt="1489670992">
    //       <term>M552x540S14c57486x513S14c59449x509S1f757522x480S1f759480x466S26507512x499S26517475x492S22103472x459S22103543x499</term>
    //       <term><![CDATA[mantener]]></term>
    //     </entry></spml>`;

    const result = this.convertspml(xml);

    // set a key/value
    this.storage.set('name1', result).then(val1 =>
      // Or to get a key/value pair
      this.storage.get('name1').then(val => {
        console.log('Your name is', val);
      })
    );
  }

  convertspml(xml: string) {
    const result2: any = convert.xml2js(xml, { compact: false });
    const result: any = { entries: [] };

    result.puddleInfo = result2.elements[1].attributes;
    const elements: [any] = result2.elements[1].elements;

    elements.forEach(element => {
      if (element && element.name === 'entry') {
        const newEntry: any = {
          attributes: element.attributes,
          glosses: []
        };
        if (element && element.elements) {
          element.elements.forEach(entryelement => {
            if (entryelement && entryelement.elements) {
              entryelement.elements.forEach(node => {
                if (node.type === 'text') {
                  newEntry.fsw = node.text;
                } else if ((node.type = 'cdata')) {
                  newEntry.glosses.push(node.cdata);
                }
              });
            }
          });
        }
        result.entries.push(newEntry);
      }
    });

    console.log(result2);
    console.log(result);
    return result;
  }

  openFile(event) {
    const input = event.target;
    for (let index = 0; index < input.files.length; index++) {
      this.reader.readAsText(input.files[index]);
    }
    return this.reader;
  }
}
