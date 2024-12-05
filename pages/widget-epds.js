import React from "react";
import { ContentLayout } from "../src/components/Layout";

export default function WidgetEPDS() {
  return (
    <ContentLayout title="Widget EPDS">
      Intégration du widget EPDS (Préprod)
      <iframe
        src="https://nos1000jours-blues-epds-widget-preprod.dev.fabrique.social.gouv.fr?source=LandingPage1000j"
        width="100%"
        height="430px"
      ></iframe>
    </ContentLayout>
  );
}
