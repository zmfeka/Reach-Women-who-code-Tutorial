// Automatically generated with Reach 0.1.10 (9f925e05)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (9f925e05)';
export const _backendVersion = 14;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc3, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0, ctc0]);
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Address;
  
  
  const v278 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v279 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v279, v278],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:62:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v279, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v283, v284], secs: v286, time: v285, didSend: v33, from: v282 } = txn1;
      
      sim_r.txns.push({
        amt: v283,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v295 = stdlib.add(v285, v284);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v283, v284], secs: v286, time: v285, didSend: v33, from: v282 } = txn1;
  ;
  const v295 = stdlib.add(v285, v284);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v295],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v282, v283, v284, v295],
      evt_cnt: 0,
      funcNum: 2,
      lct: v285,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v463, time: v462, didSend: v244, from: v461 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v283,
          kind: 'from',
          to: v282,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v463, time: v462, didSend: v244, from: v461 } = txn3;
    ;
    ;
    stdlib.protect(ctc4, await interact.informTimeout(), {
      at: './index.rsh:54:33:application',
      fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:29:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:52:28:function exp)', 'at ./index.rsh:70:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v301, time: v300, didSend: v42, from: v299 } = txn2;
    const v303 = stdlib.add(v283, v283);
    ;
    let v304 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v305 = v300;
    let v312 = v303;
    
    while (await (async () => {
      const v320 = stdlib.eq(v304, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v320;})()) {
      const v327 = stdlib.add(v305, v284);
      const v331 = stdlib.protect(ctc1, await interact.getHand(), {
        at: './index.rsh:78:44:application',
        fs: ['at ./index.rsh:77:15:application call to [unknown function] (defined at: ./index.rsh:77:19:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      const v335 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:53:31:application',
        fs: ['at ./index.rsh:79:58:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:77:15:application call to [unknown function] (defined at: ./index.rsh:77:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v336 = stdlib.digest(ctc2, [v335, v331]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v282, v283, v284, v299, v312, v327, v336],
        evt_cnt: 1,
        funcNum: 4,
        lct: v305,
        onlyIf: true,
        out_tys: [ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:82:13:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v339], secs: v341, time: v340, didSend: v71, from: v338 } = txn3;
          
          ;
          const v342 = stdlib.addressEq(v282, v338);
          ;
          const v349 = stdlib.add(v340, v284);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v327],
        tys: [ctc5, ctc0, ctc0, ctc5, ctc0, ctc0, ctc3],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v282, v283, v284, v299, v312, v327],
          evt_cnt: 0,
          funcNum: 5,
          lct: v305,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v429, time: v428, didSend: v197, from: v427 } = txn4;
            
            ;
            const v430 = stdlib.addressEq(v282, v427);
            const v431 = stdlib.addressEq(v299, v427);
            const v432 = v430 ? true : v431;
            ;
            sim_r.txns.push({
              amt: v312,
              kind: 'from',
              to: v299,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc0, ctc0, ctc5, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v429, time: v428, didSend: v197, from: v427 } = txn4;
        ;
        const v430 = stdlib.addressEq(v282, v427);
        const v431 = stdlib.addressEq(v299, v427);
        const v432 = v430 ? true : v431;
        stdlib.assert(v432, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:83:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc4, await interact.informTimeout(), {
          at: './index.rsh:54:33:application',
          fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:29:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:52:28:function exp)', 'at ./index.rsh:83:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v339], secs: v341, time: v340, didSend: v71, from: v338 } = txn3;
        ;
        const v342 = stdlib.addressEq(v282, v338);
        stdlib.assert(v342, {
          at: './index.rsh:82:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v349 = stdlib.add(v340, v284);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc1],
          timeoutAt: ['time', v349],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v282, v283, v284, v299, v312, v339, v349],
            evt_cnt: 0,
            funcNum: 7,
            lct: v340,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v411, time: v410, didSend: v163, from: v409 } = txn5;
              
              ;
              const v412 = stdlib.addressEq(v282, v409);
              const v413 = stdlib.addressEq(v299, v409);
              const v414 = v412 ? true : v413;
              ;
              sim_r.txns.push({
                amt: v312,
                kind: 'from',
                to: v282,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc5, ctc0, ctc0, ctc5, ctc0, ctc3, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v411, time: v410, didSend: v163, from: v409 } = txn5;
          ;
          const v412 = stdlib.addressEq(v282, v409);
          const v413 = stdlib.addressEq(v299, v409);
          const v414 = v412 ? true : v413;
          stdlib.assert(v414, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:91:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc4, await interact.informTimeout(), {
            at: './index.rsh:54:33:application',
            fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:29:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:52:28:function exp)', 'at ./index.rsh:91:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v358], secs: v360, time: v359, didSend: v84, from: v357 } = txn4;
          ;
          const v361 = stdlib.addressEq(v299, v357);
          stdlib.assert(v361, {
            at: './index.rsh:90:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v368 = stdlib.add(v359, v284);
          const txn5 = await (ctc.sendrecv({
            args: [v282, v283, v284, v299, v312, v339, v358, v368, v335, v331],
            evt_cnt: 2,
            funcNum: 8,
            lct: v359,
            onlyIf: true,
            out_tys: [ctc0, ctc1],
            pay: [stdlib.checkedBigNumberify('./index.rsh:98:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v373, v374], secs: v376, time: v375, didSend: v94, from: v372 } = txn5;
              
              ;
              const v377 = stdlib.addressEq(v282, v372);
              ;
              const v378 = stdlib.digest(ctc2, [v373, v374]);
              const v379 = stdlib.digestEq(v339, v378);
              ;
              let v380;
              const v381 = v374[stdlib.checkedBigNumberify('./index.rsh:9:16:array ref', stdlib.UInt_max, '0')];
              const v382 = v358[stdlib.checkedBigNumberify('./index.rsh:9:30:array ref', stdlib.UInt_max, '1')];
              const v383 = stdlib.eq(v381, v382);
              const v386 = stdlib.eq(v382, v381);
              const v387 = v383 ? v386 : false;
              if (v387) {
                const v388 = v374[stdlib.checkedBigNumberify('./index.rsh:10:18:array ref', stdlib.UInt_max, '2')];
                const v389 = v358[stdlib.checkedBigNumberify('./index.rsh:10:31:array ref', stdlib.UInt_max, '2')];
                const v390 = stdlib.lt(v388, v389);
                if (v390) {
                  v380 = stdlib.checkedBigNumberify('./index.rsh:11:14:decimal', stdlib.UInt_max, '2');
                  }
                else {
                  v380 = stdlib.checkedBigNumberify('./index.rsh:13:14:decimal', stdlib.UInt_max, '0');
                  }
                }
              else {
                v380 = stdlib.checkedBigNumberify('./index.rsh:16:12:decimal', stdlib.UInt_max, '1');
                }
              const cv304 = v380;
              const cv305 = v375;
              const cv312 = v312;
              
              await (async () => {
                const v304 = cv304;
                const v305 = cv305;
                const v312 = cv312;
                
                if (await (async () => {
                  const v320 = stdlib.eq(v304, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  return v320;})()) {
                  const v327 = stdlib.add(v305, v284);
                  sim_r.isHalt = false;
                  }
                else {
                  const v445 = stdlib.eq(v304, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                  const v448 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:107:12:decimal', stdlib.UInt_max, '2'), v283);
                  const v450 = v445 ? v282 : v299;
                  sim_r.txns.push({
                    amt: v448,
                    kind: 'from',
                    to: v450,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v368],
            tys: [ctc5, ctc0, ctc0, ctc5, ctc0, ctc3, ctc1, ctc0, ctc0, ctc1],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v282, v283, v284, v299, v312, v339, v358, v368],
              evt_cnt: 0,
              funcNum: 9,
              lct: v359,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v393, time: v392, didSend: v129, from: v391 } = txn6;
                
                ;
                const v394 = stdlib.addressEq(v282, v391);
                const v395 = stdlib.addressEq(v299, v391);
                const v396 = v394 ? true : v395;
                ;
                sim_r.txns.push({
                  amt: v312,
                  kind: 'from',
                  to: v299,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc5, ctc0, ctc0, ctc5, ctc0, ctc3, ctc1, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v393, time: v392, didSend: v129, from: v391 } = txn6;
            ;
            const v394 = stdlib.addressEq(v282, v391);
            const v395 = stdlib.addressEq(v299, v391);
            const v396 = v394 ? true : v395;
            stdlib.assert(v396, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:99:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc4, await interact.informTimeout(), {
              at: './index.rsh:54:33:application',
              fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:29:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:52:28:function exp)', 'at ./index.rsh:99:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v373, v374], secs: v376, time: v375, didSend: v94, from: v372 } = txn5;
            ;
            const v377 = stdlib.addressEq(v282, v372);
            stdlib.assert(v377, {
              at: './index.rsh:98:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v378 = stdlib.digest(ctc2, [v373, v374]);
            const v379 = stdlib.digestEq(v339, v378);
            stdlib.assert(v379, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:100:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            let v380;
            const v381 = v374[stdlib.checkedBigNumberify('./index.rsh:9:16:array ref', stdlib.UInt_max, '0')];
            const v382 = v358[stdlib.checkedBigNumberify('./index.rsh:9:30:array ref', stdlib.UInt_max, '1')];
            const v383 = stdlib.eq(v381, v382);
            const v386 = stdlib.eq(v382, v381);
            const v387 = v383 ? v386 : false;
            if (v387) {
              const v388 = v374[stdlib.checkedBigNumberify('./index.rsh:10:18:array ref', stdlib.UInt_max, '2')];
              const v389 = v358[stdlib.checkedBigNumberify('./index.rsh:10:31:array ref', stdlib.UInt_max, '2')];
              const v390 = stdlib.lt(v388, v389);
              if (v390) {
                v380 = stdlib.checkedBigNumberify('./index.rsh:11:14:decimal', stdlib.UInt_max, '2');
                }
              else {
                v380 = stdlib.checkedBigNumberify('./index.rsh:13:14:decimal', stdlib.UInt_max, '0');
                }
              }
            else {
              v380 = stdlib.checkedBigNumberify('./index.rsh:16:12:decimal', stdlib.UInt_max, '1');
              }
            const cv304 = v380;
            const cv305 = v375;
            const cv312 = v312;
            
            v304 = cv304;
            v305 = cv305;
            v312 = cv312;
            
            continue;}
          
          }
        
        }
      
      }
    const v445 = stdlib.eq(v304, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v448 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:107:12:decimal', stdlib.UInt_max, '2'), v283);
    const v450 = v445 ? v282 : v299;
    ;
    stdlib.protect(ctc4, await interact.seeOutcome(v304), {
      at: './index.rsh:111:24:application',
      fs: ['at ./index.rsh:110:7:application call to [unknown function] (defined at: ./index.rsh:110:25:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0, ctc0]);
  const ctc4 = stdlib.T_Tuple([ctc0, ctc3]);
  const ctc5 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v283, v284], secs: v286, time: v285, didSend: v33, from: v282 } = txn1;
  ;
  const v295 = stdlib.add(v285, v284);
  stdlib.protect(ctc1, await interact.acceptWager(v283), {
    at: './index.rsh:67:25:application',
    fs: ['at ./index.rsh:66:11:application call to [unknown function] (defined at: ./index.rsh:66:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v282, v283, v284, v295],
    evt_cnt: 0,
    funcNum: 1,
    lct: v285,
    onlyIf: true,
    out_tys: [],
    pay: [v283, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v301, time: v300, didSend: v42, from: v299 } = txn2;
      
      const v303 = stdlib.add(v283, v283);
      sim_r.txns.push({
        amt: v283,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v304 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v305 = v300;
      const v312 = v303;
      
      if (await (async () => {
        const v320 = stdlib.eq(v304, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v320;})()) {
        const v327 = stdlib.add(v305, v284);
        sim_r.isHalt = false;
        }
      else {
        const v445 = stdlib.eq(v304, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v448 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:107:12:decimal', stdlib.UInt_max, '2'), v283);
        const v450 = v445 ? v282 : v299;
        sim_r.txns.push({
          amt: v448,
          kind: 'from',
          to: v450,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v295],
    tys: [ctc5, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v282, v283, v284, v295],
      evt_cnt: 0,
      funcNum: 2,
      lct: v285,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v463, time: v462, didSend: v244, from: v461 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v283,
          kind: 'from',
          to: v282,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v463, time: v462, didSend: v244, from: v461 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:54:33:application',
      fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:29:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:52:28:function exp)', 'at ./index.rsh:70:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v301, time: v300, didSend: v42, from: v299 } = txn2;
    const v303 = stdlib.add(v283, v283);
    ;
    let v304 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v305 = v300;
    let v312 = v303;
    
    while (await (async () => {
      const v320 = stdlib.eq(v304, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v320;})()) {
      const v327 = stdlib.add(v305, v284);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v327],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v282, v283, v284, v299, v312, v327],
          evt_cnt: 0,
          funcNum: 5,
          lct: v305,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v429, time: v428, didSend: v197, from: v427 } = txn4;
            
            ;
            const v430 = stdlib.addressEq(v282, v427);
            const v431 = stdlib.addressEq(v299, v427);
            const v432 = v430 ? true : v431;
            ;
            sim_r.txns.push({
              amt: v312,
              kind: 'from',
              to: v299,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc0, ctc0, ctc5, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v429, time: v428, didSend: v197, from: v427 } = txn4;
        ;
        const v430 = stdlib.addressEq(v282, v427);
        const v431 = stdlib.addressEq(v299, v427);
        const v432 = v430 ? true : v431;
        stdlib.assert(v432, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:83:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:54:33:application',
          fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:29:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:52:28:function exp)', 'at ./index.rsh:83:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v339], secs: v341, time: v340, didSend: v71, from: v338 } = txn3;
        ;
        const v342 = stdlib.addressEq(v282, v338);
        stdlib.assert(v342, {
          at: './index.rsh:82:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v349 = stdlib.add(v340, v284);
        const v353 = stdlib.protect(ctc3, await interact.getHand(), {
          at: './index.rsh:88:52:application',
          fs: ['at ./index.rsh:87:13:application call to [unknown function] (defined at: ./index.rsh:87:17:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v282, v283, v284, v299, v312, v339, v349, v353],
          evt_cnt: 1,
          funcNum: 6,
          lct: v340,
          onlyIf: true,
          out_tys: [ctc3],
          pay: [stdlib.checkedBigNumberify('./index.rsh:90:9:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v358], secs: v360, time: v359, didSend: v84, from: v357 } = txn4;
            
            ;
            const v361 = stdlib.addressEq(v299, v357);
            ;
            const v368 = stdlib.add(v359, v284);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v349],
          tys: [ctc5, ctc0, ctc0, ctc5, ctc0, ctc2, ctc0, ctc3],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v282, v283, v284, v299, v312, v339, v349],
            evt_cnt: 0,
            funcNum: 7,
            lct: v340,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v411, time: v410, didSend: v163, from: v409 } = txn5;
              
              ;
              const v412 = stdlib.addressEq(v282, v409);
              const v413 = stdlib.addressEq(v299, v409);
              const v414 = v412 ? true : v413;
              ;
              sim_r.txns.push({
                amt: v312,
                kind: 'from',
                to: v282,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc5, ctc0, ctc0, ctc5, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v411, time: v410, didSend: v163, from: v409 } = txn5;
          ;
          const v412 = stdlib.addressEq(v282, v409);
          const v413 = stdlib.addressEq(v299, v409);
          const v414 = v412 ? true : v413;
          stdlib.assert(v414, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:91:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:54:33:application',
            fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:29:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:52:28:function exp)', 'at ./index.rsh:91:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v358], secs: v360, time: v359, didSend: v84, from: v357 } = txn4;
          ;
          const v361 = stdlib.addressEq(v299, v357);
          stdlib.assert(v361, {
            at: './index.rsh:90:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v368 = stdlib.add(v359, v284);
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 8,
            out_tys: [ctc0, ctc3],
            timeoutAt: ['time', v368],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v282, v283, v284, v299, v312, v339, v358, v368],
              evt_cnt: 0,
              funcNum: 9,
              lct: v359,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v393, time: v392, didSend: v129, from: v391 } = txn6;
                
                ;
                const v394 = stdlib.addressEq(v282, v391);
                const v395 = stdlib.addressEq(v299, v391);
                const v396 = v394 ? true : v395;
                ;
                sim_r.txns.push({
                  amt: v312,
                  kind: 'from',
                  to: v299,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc5, ctc0, ctc0, ctc5, ctc0, ctc2, ctc3, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v393, time: v392, didSend: v129, from: v391 } = txn6;
            ;
            const v394 = stdlib.addressEq(v282, v391);
            const v395 = stdlib.addressEq(v299, v391);
            const v396 = v394 ? true : v395;
            stdlib.assert(v396, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:99:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:54:33:application',
              fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:29:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:52:28:function exp)', 'at ./index.rsh:99:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v373, v374], secs: v376, time: v375, didSend: v94, from: v372 } = txn5;
            ;
            const v377 = stdlib.addressEq(v282, v372);
            stdlib.assert(v377, {
              at: './index.rsh:98:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v378 = stdlib.digest(ctc4, [v373, v374]);
            const v379 = stdlib.digestEq(v339, v378);
            stdlib.assert(v379, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:100:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            let v380;
            const v381 = v374[stdlib.checkedBigNumberify('./index.rsh:9:16:array ref', stdlib.UInt_max, '0')];
            const v382 = v358[stdlib.checkedBigNumberify('./index.rsh:9:30:array ref', stdlib.UInt_max, '1')];
            const v383 = stdlib.eq(v381, v382);
            const v386 = stdlib.eq(v382, v381);
            const v387 = v383 ? v386 : false;
            if (v387) {
              const v388 = v374[stdlib.checkedBigNumberify('./index.rsh:10:18:array ref', stdlib.UInt_max, '2')];
              const v389 = v358[stdlib.checkedBigNumberify('./index.rsh:10:31:array ref', stdlib.UInt_max, '2')];
              const v390 = stdlib.lt(v388, v389);
              if (v390) {
                v380 = stdlib.checkedBigNumberify('./index.rsh:11:14:decimal', stdlib.UInt_max, '2');
                }
              else {
                v380 = stdlib.checkedBigNumberify('./index.rsh:13:14:decimal', stdlib.UInt_max, '0');
                }
              }
            else {
              v380 = stdlib.checkedBigNumberify('./index.rsh:16:12:decimal', stdlib.UInt_max, '1');
              }
            const cv304 = v380;
            const cv305 = v375;
            const cv312 = v312;
            
            v304 = cv304;
            v305 = cv305;
            v312 = cv312;
            
            continue;}
          
          }
        
        }
      
      }
    const v445 = stdlib.eq(v304, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v448 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:107:12:decimal', stdlib.UInt_max, '2'), v283);
    const v450 = v445 ? v282 : v299;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v304), {
      at: './index.rsh:111:24:application',
      fs: ['at ./index.rsh:110:7:application call to [unknown function] (defined at: ./index.rsh:110:25:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAPAAFQBQkCIAgHKJABEHhYMCYDAQABAQAiNQAxGEEEvSpkSSJbNQEhB1s1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJJQxAAlpJIQgMQAFpSSEHDEABD0khBAxAAFYhBBJEIQQ0ARJENARJIhJMNAISEUQoZClkUEk1A1cwIDX/gASiBWaOsDIGNAMhClsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0ID1UghBDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSVcAIDX/V3gYNf5JNQVJIls1/VcIGDX8gARvaL5lNP0WUDT8ULAyBjQDIQpbDEQ0/zEAEkQ0A1dYIDT9FjT8UAESRDT8Ils1+jT+IQdbNfk0+jT5EjT5NPoSEEEAGzT8IQtbNP4hC1sMQQAHIQU1+0IAAyI1+0IAAyM1+zT/NAMhBls0AyEJWzQDVzAgNPsyBjQDJFtCAsJIIQg0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATiG7OpsDIGNAMhDFsPRDT/MQASNANXMCAxABIRRLEisgE0AyRbsggjshA0/7IHs0IC0EmBBgxAAJRIIQg0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSlcAIDX/IQZbNf4hCVs1/VcwIDX8JFs1+1dYIDX6STUFNfmABI9iKrA0+VCwMgY0AyEMWwxENPwxABJEMgY0/Qg1+DT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPgWUChLAVcAf2cpSwFXfxlnSCEENQEyBjUCQgJQSCU0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/gATMmZJcsDIGNAMhDVsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IB5kkhBQxAANBJgQQMQACISCU0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQZbNf4hCVs1/VcwIDX8JFs1+0k1BTX6gAQ4sCMtNPpQsDIGNAMhDVsMRDT/MQASRDIGNP0INfk0/zT+FlA0/RZQNPxQNPsWUDT6UDT5FlAoSwFXAH9nKUsBV38BZ0ghCDUBMgY1AkIBayEFEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ5bD0SxIrIBNAMhBluyCCOyEDQDVwAgsgezQgEPSSMMQABISCM0ARJENARJIhJMNAISEUQoZEk1AyEGWzX/gASai5F0sDIGNAMhDlsMRDT/iAExNANXACA0/zQDIQlbMQAjMgY0/0kIQgBgSCI0ARJENARJIhJMNAISEURJNQVJIls1/yEHWzX+gASs0R/DNP8WUDT+FlCwgaCNBogA5TT/iADgMgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgB8Nf81/jX9Nfw1+zX6Nfk0/SMSQQAuNP40+wg1+DT5NPoWUDT7FlA0/FA0/xZQNPgWUChLAVcAYGdIJTUBMgY1AkIAObEisgEhBTT6C7III7IQNPw0+TT9IQUSTbIHs0IAADEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 152,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v283",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v284",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v283",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v284",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v339",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem2",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T12",
                "name": "v358",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v373",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem2",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T12",
                "name": "v374",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v339",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem2",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T12",
                "name": "v358",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v373",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem2",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T12",
                "name": "v374",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001d2f38038062001d2f83398101604081905262000026916200024b565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f903414600762000144565b6020808301510151620000b39043620002ab565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013a92600292909101906200016e565b505050506200030f565b816200016a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017c90620002d2565b90600052602060002090601f016020900481019282620001a05760008555620001eb565b82601f10620001bb57805160ff1916838001178555620001eb565b82800160010185558215620001eb579182015b82811115620001eb578251825591602001919060010190620001ce565b50620001f9929150620001fd565b5090565b5b80821115620001f95760008155600101620001fe565b604080519081016001600160401b03811182821017156200024557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025f57600080fd5b6200026962000214565b835181526040601f19830112156200028057600080fd5b6200028a62000214565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002cd57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e757607f821691505b602082108114156200030957634e487b7160e01b600052602260045260246000fd5b50919050565b611a10806200031f6000396000f3fe60806040526004361061009a5760003560e01c8063832307571161006157806383230757146101135780638e31476914610128578063a209ad4e1461013b578063ab53f2c61461014e578063bf2c5b2414610171578063de7369981461018457005b80631e93b0f1146100a35780632c10a159146100c7578063649c12b4146100da5780637eea518c146100ed5780637fdd1a491461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d536600461147b565b610197565b6100a16100e836600461149e565b61032e565b6100a16100fb36600461147b565b6105c0565b6100a161010e3660046114b0565b61073e565b34801561011f57600080fd5b506001546100b4565b6100a161013636600461147b565b61099a565b6100a161014936600461147b565b610b35565b34801561015a57600080fd5b50610163610d85565b6040516100be9291906114c2565b6100a161017f36600461147b565b610e22565b6100a161019236600461147b565b610fb9565b6101a7600160005414600961110f565b6101c1813515806101ba57506001548235145b600a61110f565b6000808055600280546101d39061151f565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff9061151f565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b50505050508060200190518101906102649190611570565b905061027781606001514310600b61110f565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516102a89291906115e9565b60405180910390a16102c181602001513414600861110f565b6102c96112bb565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152825133606090910152818301805160019052514392019190915251610317908061163c565b60208201516040015261032981611134565b505050565b61033e600760005414601c61110f565b6103588135158061035157506001548235145b601d61110f565b60008080556002805461036a9061151f565b80601f01602080910402602001604051908101604052809291908181526020018280546103969061151f565b80156103e35780601f106103b8576101008083540402835291602001916103e3565b820191906000526020600020905b8154815290600101906020018083116103c657829003601f168201915b50505050508060200190518101906103fb9190611654565b90506104136040518060200160405280600081525090565b6104248260c001514310601e61110f565b7f7986a8c3c0cdee0f1823d008f7cdd241c81b1d8ca461a8b6cf45682caade303833846040516104559291906116f2565b60405180910390a16104693415601a61110f565b6060820151610484906001600160a01b03163314601b61110f565b6040820151610493904361163c565b815261049d611314565b82516001600160a01b0390811682526020808501518184015260408086015190840152606080860151909216918301919091526080808501519083015260a080850151908301526104f690368690038601908601611732565b60c0820152815160e082015260096000554360015560405161059590829060200160006101408201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c0830151805160c0840152602081015160e084015260408101516101008401525060e083015161012083015292915050565b604051602081830303815290604052600290805190602001906105b992919061138d565b5050505050565b6105d0600160005414600d61110f565b6105ea813515806105e357506001548235145b600e61110f565b6000808055600280546105fc9061151f565b80601f01602080910402602001604051908101604052809291908181526020018280546106289061151f565b80156106755780601f1061064a57610100808354040283529160200191610675565b820191906000526020600020905b81548152906001019060200180831161065857829003601f168201915b505050505080602001905181019061068d9190611570565b90506106a18160600151431015600f61110f565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516106d29291906115e9565b60405180910390a16106e63415600c61110f565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610723573d6000803e3d6000fd5b506000808055600181905561073a90600290611411565b5050565b61074e600960005414602761110f565b6107688135158061076157506001548235145b602861110f565b60008080556002805461077a9061151f565b80601f01602080910402602001604051908101604052809291908181526020018280546107a69061151f565b80156107f35780601f106107c8576101008083540402835291602001916107f3565b820191906000526020600020905b8154815290600101906020018083116107d657829003601f168201915b505050505080602001905181019061080b9190611806565b90506108236040518060200160405280600081525090565b6108348260e001514310602961110f565b7f8f66eec576be86b36e896a3ac55e4a93f921c5b347009674fba1b5a75072f45c33846040516108659291906118b7565b60405180910390a16108793415602461110f565b8151610891906001600160a01b03163314602561110f565b604080516108d3916108ad9160208088013592880191016118ff565b6040516020818303038152906040528051906020012060001c8360a0015114602661110f565b60c0820151602001516040840135146108ed5760006108fd565b60c0820151602001516040840135145b156109285760c0820151604001516080840135101561091f576002815261092d565b6000815261092d565b600181525b6109356112bb565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855194169301929092528351818401805191909152805143920191909152608085015190519091015261099481611134565b50505050565b6109aa600560005414601761110f565b6109c4813515806109bd57506001548235145b601861110f565b6000808055600280546109d69061151f565b80601f0160208091040260200160405190810160405280929190818152602001828054610a029061151f565b8015610a4f5780601f10610a2457610100808354040283529160200191610a4f565b820191906000526020600020905b815481529060010190602001808311610a3257829003601f168201915b5050505050806020019051810190610a679190611927565b9050610a7b8160a00151431015601961110f565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3383604051610aac9291906115e9565b60405180910390a1610ac03415601561110f565b8051610af4906001600160a01b03163314610aea5760608201516001600160a01b03163314610aed565b60015b601661110f565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610723573d6000803e3d6000fd5b610b45600560005414601261110f565b610b5f81351580610b5857506001548235145b601361110f565b600080805560028054610b719061151f565b80601f0160208091040260200160405190810160405280929190818152602001828054610b9d9061151f565b8015610bea5780601f10610bbf57610100808354040283529160200191610bea565b820191906000526020600020905b815481529060010190602001808311610bcd57829003601f168201915b5050505050806020019051810190610c029190611927565b9050610c1a6040518060200160405280600081525090565b610c2b8260a001514310601461110f565b6040805133815284356020808301919091528501358183015290517f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc09181900360600190a1610c7c3415601061110f565b8151610c94906001600160a01b03163314601161110f565b6040820151610ca3904361163c565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260076000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e082015261010001610595565b600060606000546002808054610d9a9061151f565b80601f0160208091040260200160405190810160405280929190818152602001828054610dc69061151f565b8015610e135780601f10610de857610100808354040283529160200191610e13565b820191906000526020600020905b815481529060010190602001808311610df657829003601f168201915b50505050509050915091509091565b610e32600760005414602161110f565b610e4c81351580610e4557506001548235145b602261110f565b600080805560028054610e5e9061151f565b80601f0160208091040260200160405190810160405280929190818152602001828054610e8a9061151f565b8015610ed75780601f10610eac57610100808354040283529160200191610ed7565b820191906000526020600020905b815481529060010190602001808311610eba57829003601f168201915b5050505050806020019051810190610eef9190611654565b9050610f038160c00151431015602361110f565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610f349291906115e9565b60405180910390a1610f483415601f61110f565b8051610f7c906001600160a01b03163314610f725760608201516001600160a01b03163314610f75565b60015b602061110f565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610723573d6000803e3d6000fd5b610fc9600960005414602c61110f565b610fe381351580610fdc57506001548235145b602d61110f565b600080805560028054610ff59061151f565b80601f01602080910402602001604051908101604052809291908181526020018280546110219061151f565b801561106e5780601f106110435761010080835404028352916020019161106e565b820191906000526020600020905b81548152906001019060200180831161105157829003601f168201915b50505050508060200190518101906110869190611806565b905061109a8160e00151431015602e61110f565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd33836040516110cb9291906115e9565b60405180910390a16110df3415602a61110f565b8051610af4906001600160a01b031633146111095760608201516001600160a01b0316331461110c565b60015b602b5b8161073a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b60408051602081019091526000815260208201515160011415611256578151604001516020808401510151611169919061163c565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e0016040516020818303038152906040526002908051906020019061099492919061138d565b60208201515160021461126e57815160600151611272565b8151515b6001600160a01b03166108fc836000015160200151600261129391906119bb565b6040518115909202916000818181858888f19350505050158015610723573d6000803e3d6000fd5b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161130f60405180606001604052806000815260200160008152602001600081525090565b905290565b60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200161138060405180606001604052806000815260200160008152602001600081525090565b8152602001600081525090565b8280546113999061151f565b90600052602060002090601f0160209004810192826113bb5760008555611401565b82601f106113d457805160ff1916838001178555611401565b82800160010185558215611401579182015b828111156114015782518255916020019190600101906113e6565b5061140d92915061144e565b5090565b50805461141d9061151f565b6000825580601f1061142d575050565b601f01602090049060005260206000209081019061144b919061144e565b50565b5b8082111561140d576000815560010161144f565b60006040828403121561147557600080fd5b50919050565b60006040828403121561148d57600080fd5b6114978383611463565b9392505050565b60006080828403121561147557600080fd5b600060a0828403121561147557600080fd5b82815260006020604081840152835180604085015260005b818110156114f6578581018301518582016060015282016114da565b81811115611508576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061153357607f821691505b6020821081141561147557634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461156b57600080fd5b919050565b60006080828403121561158257600080fd5b6040516080810181811067ffffffffffffffff821117156115b357634e487b7160e01b600052604160045260246000fd5b6040526115bf83611554565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461161757600080fd5b80604085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561164f5761164f611626565b500190565b600060e0828403121561166657600080fd5b60405160e0810181811067ffffffffffffffff8211171561169757634e487b7160e01b600052604160045260246000fd5b6040526116a383611554565b815260208301516020820152604083015160408201526116c560608401611554565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b0383168152813560208083019190915260a082019061149790604084019085018035825260208082013590830152604090810135910152565b60006060828403121561174457600080fd5b6040516060810181811067ffffffffffffffff8211171561177557634e487b7160e01b600052604160045260246000fd5b80604052508235815260208301356020820152604083013560408201528091505092915050565b6000606082840312156117ae57600080fd5b6040516060810181811067ffffffffffffffff821117156117df57634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b6000610140828403121561181957600080fd5b604051610100810181811067ffffffffffffffff8211171561184b57634e487b7160e01b600052604160045260246000fd5b60405261185783611554565b8152602083015160208201526040830151604082015261187960608401611554565b60608201526080830151608082015260a083015160a082015261189f8460c0850161179c565b60c0820152610120929092015160e083015250919050565b600060c08201905060018060a01b0384168252823560208301526020830135604083015261149760608301604085018035825260208082013590830152604090810135910152565b8281526080810161149760208301848035825260208082013590830152604090810135910152565b600060c0828403121561193957600080fd5b60405160c0810181811067ffffffffffffffff8211171561196a57634e487b7160e01b600052604160045260246000fd5b60405261197683611554565b8152602083015160208201526040830151604082015261199860608401611554565b60608201526080830151608082015260a083015160a08201528091505092915050565b60008160001904831182151516156119d5576119d5611626565b50029056fea264697066735822122018cd0bad171ace84bd34b3639aab95b5c4f496bbea6a0903023107f343bab71764736f6c634300080c0033`,
  BytecodeLen: 7471,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:64:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:70:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:108:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:75:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:83:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:84:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:91:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:92:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:99:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
