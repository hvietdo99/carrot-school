// This is a psuedo-random number generator; outputs will always be the same number
// given the same ctx (transaction context). Note that the ctx is mutated every time a
// number is generated, so it can be used consecutively in the same transaction, however
// the sequence of random numbers is deterministic.

module headmaster::random {
    use std::vector;
    use sui::object;
    use sui::math;
    use sui::tx_context::TxContext;

    const EBAD_RANGE: u64 = 0;
    const ETOO_FEW_BYTES: u64 = 1;
    const EDIVISOR_MUST_BE_NON_ZERO: u64 = 2;

    // Generates an integer from the range [min, max), not inclusive of max
    // bytes = vector<u8> with length of 20. However we only use the first 8 bytes
    public fun rng(min: u64, max: u64, ctx: &mut TxContext): u64 {
        abort 0
    }

    public fun from_bytes(bytes: vector<u8>): u64 {
        abort 0
    }
}