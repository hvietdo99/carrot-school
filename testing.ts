import { TransactionBlock } from '@mysten/sui.js';
import { useWallet } from '@suiet/wallet-kit';

const { signAndExecuteTransactionBlock } = useWallet();

const result = [
  '2',
  '4',
  '1',
  '2',
  '4',
  '1',
  '2',
  '4',
  '1',
  '2',
  '2',
  '4',
  '1',
  '2',
  '4',
  '1',
  '2',
  '4',
  '1',
  '2',
  '2',
  '4',
  '1',
  '2',
  '4',
  '1',
  '2',
  '4',
  '1',
  '2',
  '2',
  '4',
  '1',
  '2',
  '4',
  '1',
  '2',
  '4',
  '1',
  '2',
  '2',
  '4',
  '1',
  '2',
  '4',
  '1',
  '2',
  '4',
  '1',
  '2',
];

// Add Questions (for Owner)
const tx = new TransactionBlock();
tx.moveCall({
  target: `0x03c539c984630ad10d6bf6e048a3131791a7a2cd6780d9b4b977c02ad9a99303::carrot_school::add_questions`,
  typeArguments: [],
  arguments: [
    tx.object(
      '0xa6421850b37480218af33a6e8ce31d1d1279c96d916d4f9e54b342fbff747443'
    ),
    tx.object(
      '0x33c9c3ae73a06c031dbdac6964f29ad132dd115f9087bcf1dec24133b98460d3'
    ),
    tx.pure('1'),
    tx.pure('50'),
    tx.pure(
      [
        '1 + 1 = ?',
        '2 + 2 = ?',
        '3 + 3 = ?',
        '1 + 1 = ?',
        '2 + 2 = ?',
        '3 + 3 = ?',
        '1 + 1 = ?',
        '2 + 2 = ?',
        '3 + 3 = ?',
        '1 + 1 = ?',
        '1 + 1 = ?',
        '2 + 2 = ?',
        '3 + 3 = ?',
        '1 + 1 = ?',
        '2 + 2 = ?',
        '3 + 3 = ?',
        '1 + 1 = ?',
        '2 + 2 = ?',
        '3 + 3 = ?',
        '1 + 1 = ?',
        '1 + 1 = ?',
        '2 + 2 = ?',
        '3 + 3 = ?',
        '1 + 1 = ?',
        '2 + 2 = ?',
        '3 + 3 = ?',
        '1 + 1 = ?',
        '2 + 2 = ?',
        '3 + 3 = ?',
        '1 + 1 = ?',
        '1 + 1 = ?',
        '2 + 2 = ?',
        '3 + 3 = ?',
        '1 + 1 = ?',
        '2 + 2 = ?',
        '3 + 3 = ?',
        '1 + 1 = ?',
        '2 + 2 = ?',
        '3 + 3 = ?',
        '1 + 1 = ?',
        '1 + 1 = ?',
        '2 + 2 = ?',
        '3 + 3 = ?',
        '1 + 1 = ?',
        '2 + 2 = ?',
        '3 + 3 = ?',
        '1 + 1 = ?',
        '2 + 2 = ?',
        '3 + 3 = ?',
        '1 + 1 = ?',
      ].reverse()
    ),
    tx.pure(
      [
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['6', '7', '8', '9'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['6', '7', '8', '9'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['6', '7', '8', '9'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['6', '7', '8', '9'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['6', '7', '8', '9'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['6', '7', '8', '9'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['6', '7', '8', '9'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['6', '7', '8', '9'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['6', '7', '8', '9'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['6', '7', '8', '9'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['6', '7', '8', '9'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['6', '7', '8', '9'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['6', '7', '8', '9'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['6', '7', '8', '9'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['6', '7', '8', '9'],
        ['1', '2', '3', '4'],
      ].reverse()
    ),
    tx.pure(
      [
        '2',
        '4',
        '1',
        '2',
        '4',
        '1',
        '2',
        '4',
        '1',
        '2',
        '2',
        '4',
        '1',
        '2',
        '4',
        '1',
        '2',
        '4',
        '1',
        '2',
        '2',
        '4',
        '1',
        '2',
        '4',
        '1',
        '2',
        '4',
        '1',
        '2',
        '2',
        '4',
        '1',
        '2',
        '4',
        '1',
        '2',
        '4',
        '1',
        '2',
        '2',
        '4',
        '1',
        '2',
        '4',
        '1',
        '2',
        '4',
        '1',
        '2',
      ].reverse()
    ),
  ],
});
await signAndExecuteTransactionBlock({
  transactionBlock: tx,
});

// Delete Chapter (for Owner)
const tx = new TransactionBlock();
tx.moveCall({
  target: `0x03c539c984630ad10d6bf6e048a3131791a7a2cd6780d9b4b977c02ad9a99303::carrot_school::delete_chapter`,
  typeArguments: [],
  arguments: [
    tx.object(
      '0xa6421850b37480218af33a6e8ce31d1d1279c96d916d4f9e54b342fbff747443'
    ),
    tx.object(
      '0x33c9c3ae73a06c031dbdac6964f29ad132dd115f9087bcf1dec24133b98460d3'
    ),
    tx.pure('1'),
  ],
});
await signAndExecuteTransactionBlock({
  transactionBlock: tx,
});

// Delete Questions (for Owner)
const tx = new TransactionBlock();
tx.moveCall({
  target: `0x03c539c984630ad10d6bf6e048a3131791a7a2cd6780d9b4b977c02ad9a99303::carrot_school::delete_questions`,
  typeArguments: [],
  arguments: [
    tx.object(
      '0xa6421850b37480218af33a6e8ce31d1d1279c96d916d4f9e54b342fbff747443'
    ),
    tx.object(
      '0x33c9c3ae73a06c031dbdac6964f29ad132dd115f9087bcf1dec24133b98460d3'
    ),
    tx.pure('1'),
    tx.pure(['4', '40', '17', '18', '28']),
  ],
});
await signAndExecuteTransactionBlock({
  transactionBlock: tx,
});

// Participate in a quiz (for User)
const tx = new TransactionBlock();
tx.moveCall({
  target: `0x03c539c984630ad10d6bf6e048a3131791a7a2cd6780d9b4b977c02ad9a99303::carrot_school::quiz_participate`,
  typeArguments: [],
  arguments: [
    tx.object('Your StudentInfo object ID'),
    tx.object('Your Attempt object ID'),
    tx.object(
      '0x33c9c3ae73a06c031dbdac6964f29ad132dd115f9087bcf1dec24133b98460d3'
    ),
    tx.pure(
      '0x0000000000000000000000000000000000000000000000000000000000000006'
    ),
    tx.pure('1'),
    tx.pure(['34', '9', '8', '2', '4', '11', '37', '17', '7', '7']),
    tx.pure(
      ['34', '9', '8', '2', '4', '11', '37', '17', '7', '7'].map(
        (a) => result[parseInt(a) - 1]
      )
    ),
  ],
});

// Generate Random Questions for an attempt (for User)
const tx = new TransactionBlock();
tx.moveCall({
  target: `0x03c539c984630ad10d6bf6e048a3131791a7a2cd6780d9b4b977c02ad9a99303::carrot_school::generate_random_numbers_for_an_attempt`,
  typeArguments: [],
  arguments: [
    tx.object('Your StudentInfo object ID'),
    tx.object(
      '0x33c9c3ae73a06c031dbdac6964f29ad132dd115f9087bcf1dec24133b98460d3'
    ),
    tx.pure('1'),
  ],
});
const devInspect = await provider.devInspectTransactionBlock({
  transactionBlock: tx,
  sender: account?.address!,
});
let totalGas = 0;
Object.values(devInspect.effects.gasUsed).forEach(
  (gas) => (totalGas = totalGas + parseInt(gas))
);
tx.setGasBudget(Math.ceil(totalGas * 10));
await signAndExecuteTransactionBlock({
  transactionBlock: tx,
  options: {
    showEffects: true,
  },
});
