// Copyright 2017-2025 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type {EndpointOption} from './types.js';

import {
    nodesXorionPNG
} from '../ui/logos/nodes/index.js';

export * from './productionRelayKusama.js';
export * from './productionRelayPolkadot.js';

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const prodChains: Omit<EndpointOption, 'teleport'>[] = [
    {
        info: 'xorion',
        providers: {
            'Xorion Main': 'wss://node01.xorion.network',
            'Xorion One': 'wss://node02.xorion.network',
            'Xorion Two': 'wss://node09.xorion.network'
        },
        text: 'Xorion',
        ui: {
            color: '#5236a3',
            logo: nodesXorionPNG
        }
    }
];
