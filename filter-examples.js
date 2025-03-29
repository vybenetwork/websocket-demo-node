/**
 * Retrieve all trades by a specific feePayer.
 * feePayer = public key of the account paying the transaction fees.
 */
const TRADES_BY_FEE_PAYER = {
    feePayer: "MfDuWeqSHEqTFVYZ7LoexgAK9dxk7cy4DFJWjWMGVWa",
};

/**
 * Retrieve all trades authorized by a specific authority.
 * authorityAddress = public key representing the authority that signed the trade.
 */
const TRADES_BY_AUTHORITY = {
    authorityAddress: "MfDuWeqSHEqTFVYZ7LoexgAK9dxk7cy4DFJWjWMGVWa",
};

/**
 * Retrieve all trades within a specific market pair.
 * marketId = public key of the market (e.g., SOL/$WIF).
 */
const TRADES_BY_MARKET = {
    marketId: "EP2ib6dYdEeqD8MfE2ezHCxX3kP3K2eLKkirfPm5eyMx",
};

/**
 * Retrieve all trades executed by a specific DEX program.
 * programId = public key of the Solana program that processed the trades.
 */
const TRADES_BY_PROGRAM = {
    programId: "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8",
};

/**
 * Retrieve all trades where a specific token mint was used (e.g., for
 * native SOL, use '11111111111111111111111111111111').
 */
const TRADES_BY_TOKEN_MINT = {
    tokenMintAddress: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
};

/**
 * You can combine multiple fields to get more specific results.
 * This example retrieves trades by a specific feepayer on a specific dex
 * AND filtered by a mint as well.
 */
const TRADES_BY_FEE_PAYER_DEX_TOKEN = {
    feePayer: "MfDuWeqSHEqTFVYZ7LoexgAK9dxk7cy4DFJWjWMGVWa",
    programId: "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8",
    tokenMintAddress: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
};

// https://docs.vybenetwork.com/docs/real-time-trades
export const TRADES_FILTERS = {
    TRADES_BY_FEE_PAYER,
    TRADES_BY_AUTHORITY,
    TRADES_BY_MARKET,
    TRADES_BY_PROGRAM,
    TRADES_BY_TOKEN_MINT,
    TRADES_BY_FEE_PAYER_DEX_TOKEN,
};

/**
 * Retrieve all transfers executed by a specific feePayer.
 * feePayer = public key of the account paying transaction fees.
 */
const TRANSFERS_BY_FEE_PAYER = {
    feePayer: "6nD6d8gG17wakW6Wu5URktBZQp3uxp5orgPa576QXigJ",
};

/**
 * Retrieve all transfers with an amount >= some value.
 * minAmount = inclusive minimum of transferred amount.
 */
const TRANSFERS_BY_MIN_AMOUNT = {
    minAmount: 1000, // example integer value
};

/**
 * Retrieve all transfers with an amount <= some value.
 * maxAmount = inclusive maximum of transferred amount.
 */
const TRANSFERS_BY_MAX_AMOUNT = {
    maxAmount: 5000, // example integer value
};

/**
 * Combine minAmount and maxAmount to define a range.
 * This returns all transfers whose amount is between
 * 1000 and 5000 (inclusive).
 */
const TRANSFERS_BY_AMOUNT_RANGE = {
    minAmount: 1000,
    maxAmount: 5000,
};

/**
 * Retrieve all transfers executed by a specific program (programId).
 * programId = the public key of the Solana program that processed the transfer.
 */
const TRANSFERS_BY_PROGRAM_ID = {
    programId: "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8",
};

/**
 * Retrieve all transfers received by a specific recipient’s wallet address.
 * receiverAddress = public key of the wallet that received the tokens.
 */
const TRANSFERS_BY_RECEIVER = {
    receiverAddress: "CvPQ9evZfK3GbR1eK1SEJooNDHvDfYRHXth6ZGMVx3bb",
};

/**
 * Retrieve all transfers sent from a specific sender's wallet address.
 * senderAddress = public key of the wallet that sent the tokens.
 */
const TRANSFERS_BY_SENDER = {
    senderAddress: "CvPQ9evZfK3GbR1eK1SEJooNDHvDfYRHXth6ZGMVx3bb",
};

/**
 * Retrieve all transfers associated with a specific token mint.
 * tokenMintAddress = public key of the token's mint (e.g., for native SOL,
 * you might use '11111111111111111111111111111111').
 */
const TRANSFERS_BY_TOKEN_MINT = {
    tokenMintAddress: "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN",
};

/**
 * You can also combine multiple fields to narrow down results.
 * For instance, transfers received by a specific wallet address
 * AND within an amount range, AND for a specific mint.
 */
const TRANSFERS_COMBINED_EXAMPLE = {
    receiverAddress: "6nD6d8gG17wakW6Wu5URktBZQp3uxp5orgPa576QXigJ",
    minAmount: 500,
    maxAmount: 2000000000,
    tokenMintAddress: "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN",
};

// https://docs.vybenetwork.com/docs/token-transfers
export const TRANSFERS_FILTERS = {
    TRANSFERS_BY_FEE_PAYER,
    TRANSFERS_BY_MIN_AMOUNT,
    TRANSFERS_BY_MAX_AMOUNT,
    TRANSFERS_BY_AMOUNT_RANGE,
    TRANSFERS_BY_PROGRAM_ID,
    TRANSFERS_BY_RECEIVER,
    TRANSFERS_BY_SENDER,
    TRANSFERS_BY_TOKEN_MINT,
    TRANSFERS_COMBINED_EXAMPLE,
};

/**
 * Retrieve a specific Pyth price feed by its public key. You can find the list here https://www.pyth.network/price-feeds, click into desired feed and scroll down to find the key
 * priceFeedAccount = the public key of the Pyth Price Feed.
 */
const SINGLE_PRICE_FEED = {
    priceFeedAccount: "A8G6XyA6fSrsavG63ssAGU3Hnt2oDZARxefREzAY5axH",
};

/**
 * Retrieve all price feeds associated with a specific Pyth Product. You can find the list here https://www.pyth.network/price-feeds, click into desired feed and scroll down to find the key
 * productAccount = the public key of the Pyth Product.
 */
const SINGLE_PRODUCT_FEED = {
    productAccount: "6TZHVFzEmF1rCLAJv3gkTFk9QGniqsrSJmNnVm7mMRPK",
};

/**
 * Retrieve a specific feed under a specific product (combine fields).
 * If both `priceFeedAccount` and `productAccount` match,
 * you’ll get an extremely narrow (and possibly redundant) filter.
 */
const PRICE_FEED_AND_PRODUCT = {
    priceFeedAccount: "A8G6XyA6fSrsavG63ssAGU3Hnt2oDZARxefREzAY5axH",
    productAccount: "6TZHVFzEmF1rCLAJv3gkTFk9QGniqsrSJmNnVm7mMRPK",
};

// https://docs.vybenetwork.com/docs/pyth-oracle-prices
export const PYTH_ORACLE_FILTERS = {
    SINGLE_PRICE_FEED,
    SINGLE_PRODUCT_FEED,
    PRICE_FEED_AND_PRODUCT,
};
