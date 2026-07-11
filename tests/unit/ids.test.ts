import { describe, expect, it } from "vitest";

import { createObservationId, createRunId } from "../../src/domain/ids.js";

describe("evidence identifiers", () => {
  it("creates a sortable run ID", () => {
    expect(createRunId(new Date("2026-07-11T08:30:00.000Z"))).toMatch(
      /^20260711T083000Z-[0-9a-f]{8}$/,
    );
  });

  it("creates an observation ID scoped to a run", () => {
    expect(createObservationId("20260711T083000Z-a1b2c3d4", 7)).toBe(
      "20260711T083000Z-a1b2c3d4-007",
    );
  });

  it("rejects invalid sequences", () => {
    expect(() => createObservationId("20260711T083000Z-a1b2c3d4", 0)).toThrow();
  });
});
