// NOTE: Original test file was lost due to APFS dataless file eviction.
// TODO: Restore tests based on IDL at frontend/lib/solana/fractio-idl.json

import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";

describe("fractio", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  it("TODO: restore tests", async () => {
    console.log("Tests need to be restored");
  });
});
