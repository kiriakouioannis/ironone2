"use client";

import { defineLive } from "next-sanity/live";
import { client } from "./client";

const { SanityLive } = defineLive({
  client,
});

export default function SanityLiveClient() {
  return <SanityLive />;
}

