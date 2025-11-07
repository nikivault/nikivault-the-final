/**
 * routes-shim.ts
 * Re-exports client-safe routing helpers.
 * This avoids bundling @react-router/dev into the client.
 * If you later want dev-only helpers, import them dynamically inside dev-only code.
 */
export * from "@react-router/fs-routes";
