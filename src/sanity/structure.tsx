import React from "react";
import type { StructureResolver } from "sanity/structure";

const PREVIEW_URL = "/api/draft";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      // Site Content Section
      S.listItem()
        .title("🏠 Site Content")
        .child(
          S.list()
            .title("Site Content")
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
              S.listItem()
                .title("Navigation Bar")
                .child(S.document().schemaType("navbar").documentId("navbar")),
              S.listItem()
                .title("Footer")
                .child(S.document().schemaType("footer").documentId("footer")),
              S.listItem()
                .title("Site Settings")
                .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            ])
        ),

      S.divider(),

      // Pages Section
      S.listItem()
        .title("📄 Pages")
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("Booking Page")
                .child(S.document().schemaType("bookingPage").documentId("bookingPage")),
              S.listItem()
                .title("Services Page")
                .child(S.document().schemaType("servicesPage").documentId("servicesPage")),
              S.listItem()
                .title("About Page")
                .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
              S.listItem()
                .title("Contact Page")
                .child(S.document().schemaType("contactPage").documentId("contactPage")),
            ])
        ),

      S.divider(),

      // Booking Management Section
      S.listItem()
        .title("📅 Booking Management")
        .child(
          S.list()
            .title("Booking Management")
            .items([
              S.listItem()
                .title("📋 All Bookings")
                .icon(() => "📋")
                .child(S.documentTypeList("booking").title("All Bookings")),

              S.divider(),

              S.listItem()
                .title("⏰ Appointment Time Slots")
                .icon(() => "⏰")
                .child(
                  S.documentTypeList("appointmentSlots")
                    .title("Appointment Time Slots")
                    .child((documentId) =>
                      S.document()
                        .documentId(documentId)
                        .schemaType("appointmentSlots")
                    )
                ),

              S.listItem()
                .title("🕐 Business Hours (Weekly)")
                .icon(() => "🕐")
                .child(
                  S.documentTypeList("businessHours")
                    .title("Business Hours")
                    .child((documentId) =>
                      S.document()
                        .documentId(documentId)
                        .schemaType("businessHours")
                    )
                ),

              S.listItem()
                .title("🗓️ Calendar Availability")
                .icon(() => "🗓️")
                .child(
                  S.documentTypeList("availability")
                    .title("Calendar Availability (Block/Allow Dates)")
                    .child((documentId) =>
                      S.document()
                        .documentId(documentId)
                        .schemaType("availability")
                    )
                ),
            ])
        ),
    ]);
