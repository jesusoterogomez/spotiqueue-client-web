// import React from 'react';
// import expect from 'expect.js';
// import {describe, beforeEach, it} from 'mocha';
// import {shallowRender} from '../testHelper';

// import ArchiveStore from '../../src/js/stores/ArchiveStore';
// import Casefile from '../../src/js/components/Casefile/Casefile';

// // Add a casefile to casefile store.
// ArchiveStore.addCasefile({
//     id: 1,
//     name: "test"
// });

// describe('components/Casefile/CasefileItem', () => {
//     let params;
//     let casefile;

//     beforeEach(() => {
//         params = {
//             id: 1
//         };

//         casefile = shallowRender(<Casefile params={params} />);
//     });

//     it('renders correct values in h2 tags', () => {
//         const h2s = casefile.props.children.filter((c) => c.type === 'h2');
//         const h2content = h2s.map((h2) => h2.props.children);

//         expect(h2content).to.eql([
//             1,
//             "test"
//         ]);
//     });
// });
