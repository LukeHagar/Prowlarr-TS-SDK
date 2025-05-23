/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";

export const BookSearchParam = {
  Q: "q",
  Title: "title",
  Author: "author",
  Publisher: "publisher",
  Genre: "genre",
  Year: "year",
} as const;
export type BookSearchParam = ClosedEnum<typeof BookSearchParam>;

/** @internal */
export const BookSearchParam$inboundSchema: z.ZodNativeEnum<
  typeof BookSearchParam
> = z.nativeEnum(BookSearchParam);

/** @internal */
export const BookSearchParam$outboundSchema: z.ZodNativeEnum<
  typeof BookSearchParam
> = BookSearchParam$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BookSearchParam$ {
  /** @deprecated use `BookSearchParam$inboundSchema` instead. */
  export const inboundSchema = BookSearchParam$inboundSchema;
  /** @deprecated use `BookSearchParam$outboundSchema` instead. */
  export const outboundSchema = BookSearchParam$outboundSchema;
}
