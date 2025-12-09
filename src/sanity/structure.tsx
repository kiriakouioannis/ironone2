import React from "react";
import type { StructureResolver } from "sanity/structure";

const PREVIEW_URL = "/api/draft";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Hero Section")
        .child(
          S.document()
            .schemaType("heroSection")
            .documentId("heroSection")
            .views([
              S.view.form(),
              S.view
                .component(() => (
                  <iframe
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                    src={`${PREVIEW_URL}?to=/`}
                  />
                ))
                .title("Preview"),
            ])
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !["heroSection"].includes(listItem.getId() ?? "")
      ),
    ]);
