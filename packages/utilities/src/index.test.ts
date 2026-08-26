import { formatDate } from "./format-date";
import { slugify } from "./slugify";
import { truncate } from "./truncate";
import { validateEmail } from "./validate-email";

describe("utility function tests", () => {
  describe("formatDate tests", () => {
    it("formats date correctly", () => {
      const date = new Date("2024-01-15");
      expect(formatDate(date)).toBe("Jan 15, 2024");
    });
  });

  describe("slugify tests", () => {
    it("converts text to slug", () => {
      expect(slugify("Hello World!")).toBe("hello-world");
    });

    it("removes special characters", () => {
      expect(slugify("Test@#$%")).toBe("test");
    });
  });

  describe("truncate", () => {
    it("truncates long text", () => {
      expect(truncate("Hello World", 5)).toBe("Hello...");
    });

    it("does not truncate short text", () => {
      expect(truncate("Hi", 5)).toBe("Hi");
    });
  });

  describe("validate email", () => {
    it("validates correct email", () => {
      expect(validateEmail("test@example.com")).toBe(true);
    });

    it("rejects invalid email", () => {
      expect(validateEmail("invalid")).toBe(false);
    });
  });
});
